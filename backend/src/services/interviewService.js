import { getDB } from "../config/db.js";
import { generateQuestion } from "./aiService.js";
import { evaluateAnswer } from "./aiService.js";
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
    status: "Started",
    createdAt: new Date()
    });

    const question = await generateQuestion(
        role,
        difficulty,
        interviewType
    );

    return {
        success: true,
        interviewId: result.insertedId,
        question
    };

}
export async function submitInterviewAnswer(data){

    const {

        interviewId,

        question,

        answer

    } = data;

    if(

        !interviewId ||

        !question ||

        !answer

    ){

        throw new Error(
            "All fields are required"
        );

    }

    const feedback = await evaluateAnswer(
    question,
    answer
    );
    const db = getDB();

    const responses =db.collection("responses");

    await responses.insertOne({

    interviewId,

    question,

    answer,

    score: feedback.score,

    strengths: feedback.strengths,

    weaknesses: feedback.weaknesses,

    suggestions: feedback.suggestions,

    createdAt: new Date()

    });
    
    return {

        success:true,

        feedback

    };

}