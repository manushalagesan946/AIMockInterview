import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

export async function generateQuestion(role, difficulty, interviewType) {

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    });

    const prompt = `
    You are a Senior Software Engineer conducting a mock interview.

    Generate exactly ONE interview question.

    Candidate Role: ${role}
    Difficulty: ${difficulty}
    Interview Type: ${interviewType}

    Rules:

    - Ask only one question.
    - Do not provide hints.
    - Do not provide the answer.
    - Keep the question concise.
    - The question should be realistic for software engineering interviews.

    Return only the interview question.
    `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    return response.text;
}
export async function evaluateAnswer(
    question,
    answer
){

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    });

    const prompt = `
        You are an experienced software engineering interviewer.

        Evaluate the candidate's answer.

        Question:
        ${question}

        Answer:
        ${answer}

        Return ONLY valid JSON.

        Format:

        {
            "score":0,
            "strengths":[
                ""
            ],
            "weaknesses":[
                ""
            ],
            "suggestions":[
                ""
            ]
        }
        `;

    const response =
        await ai.models.generateContent({

            model:"gemini-2.5-flash",

            contents:prompt

        });

    const text = response.text;

    const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

    try {
    return JSON.parse(cleanedText);
    } catch (err) {
        throw new Error("AI returned an invalid response format");
    }

}