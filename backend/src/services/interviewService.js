import { getDB } from "../config/db.js";
import { generateQuestion } from "./aiService.js";
import { evaluateAnswer } from "./aiService.js";
import { ObjectId } from "mongodb";
export async function createInterview(
    userId,
    interviewData
){

    const db = getDB();

    const interviews =
        db.collection("interviews");

    const {
        role,
        difficulty,
        interviewType
    } = interviewData;

    if(
        !role ||
        !difficulty ||
        !interviewType
    ){

        throw new Error(
            "All fields are required"
        );

    }

    const result = await interviews.insertOne({

    userId,

    role,

    difficulty,

    interviewType,

    currentQuestion: 1,

    totalQuestions: 5,

    status: "In Progress",

    overallScore: null,

    createdAt: new Date()

    });

    const question = await generateQuestion(
        role,
        difficulty,
        interviewType
    );
    
    const questionsCollection = db.collection("questions");

    await questionsCollection.insertOne({

    interviewId: result.insertedId,

    questionNumber: 1,

    question,

    createdAt: new Date()

    });

    return {

    success: true,

    interviewId: result.insertedId,

    questionNumber: 1,

    totalQuestions: 5,

    question

};

}
export async function submitInterviewAnswer(data){

    const {
    interviewId,
    answer
    } = data;

    if (!interviewId || !answer) {
    throw new Error("Interview ID and Answer are required");
    }
    const db = getDB();

    const interviews = db.collection("interviews");
    const questions = db.collection("questions");
    const responses = db.collection("responses");
    const interview = await interviews.findOne({
    _id: new ObjectId(interviewId)
    });

    if (!interview) {
        throw new Error("Interview not found");
    }
    const currentQuestion = await questions.findOne({
    interviewId: new ObjectId(interviewId),
    questionNumber: interview.currentQuestion
    });

    if (!currentQuestion) {
        throw new Error("Question not found");
    }
    const feedback = await evaluateAnswer(
    currentQuestion.question,
    answer
    );
    
   await responses.insertOne({

    interviewId: new ObjectId(interviewId),

    questionNumber: interview.currentQuestion,

    answer,

    score: feedback.score,

    strengths: feedback.strengths,

    weaknesses: feedback.weaknesses,

    suggestions: feedback.suggestions,

    createdAt: new Date()

    });

   const nextQuestionNumber =interview.currentQuestion + 1;

    if (nextQuestionNumber >interview.totalQuestions) {
        const allResponses =
            await responses.find({

                interviewId:
                    new ObjectId(interviewId)

            }).toArray();

        const totalScore =
        allResponses.reduce(

        (sum,response)=>

            sum + response.score,

        0
        );
        const averageScore =Number(

        (
            totalScore /

            allResponses.length

        ).toFixed(1)

    );
    await interviews.updateOne(

    {
        _id:
            new ObjectId(interviewId)
    },

    {
        $set:{

            status:"Completed",

            overallScore:
                averageScore

        }

    }

    );
    return{

    success:true,

    completed:true,

    overallScore:
        averageScore,

    message:
        "Interview Completed"

    };

    };
    

    await interviews.updateOne(

        {
            _id:new ObjectId(interviewId)
        },

        {
            $set:{

                currentQuestion:
                    nextQuestionNumber

            }

        }

    );
    const nextQuestion =
    await generateQuestion(

        interview.role,

        interview.difficulty,

        interview.interviewType

    );
    await questions.insertOne({

    interviewId:
        new ObjectId(interviewId),

    questionNumber:
        nextQuestionNumber,

    topic:null,

    question:nextQuestion,

    createdAt:new Date()

    });
    return{

    success:true,

    completed:false,

    questionNumber:
        nextQuestionNumber,

    totalQuestions:
        interview.totalQuestions,

    question:
        nextQuestion,

    feedback

};
}