import {
    createInterview
} from "../services/interviewService.js";
import {
    submitInterviewAnswer
} from "../services/interviewService.js";
export async function startInterview(req, res){

    try{

        const result = await createInterview(
            req.user.userId,
            req.body
        );

        return res.status(201).json(result);

    }

    catch(error){

        return res.status(400).json({

            success:false,

            message:error.message

        });

    }

}
export async function submitAnswer(req, res) {

    try {

        const result =
            await submitInterviewAnswer(
                req.body
            );

        return res.status(200).json(result);

    }

    catch(error){

        return res.status(400).json({

            success:false,

            message:error.message

        });

    }

}