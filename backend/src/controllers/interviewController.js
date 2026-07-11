import {
    createInterview,
    submitInterviewAnswer,
    getInterviewHistory,
    getInterviewDetails,
    getProfileStatistics,
    getRecentInterview
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
export async function interviewHistory(req, res) {

    try {

        const history = await getInterviewHistory(
            req.user.userId
        );

        return res.status(200).json({
            success: true,
            history
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        });

    }

}
export async function interviewDetails(req, res) {

    try {

        const result =
            await getInterviewDetails(

                req.params.id,

                req.user.userId

            );

        return res.status(200).json({

            success: true,

            data: result

        });

    }

    catch (error) {

        return res.status(400).json({

            success: false,

            message: error.message

        });

    }

}
export async function profileStatistics(req,res){

    try{

        const statistics =
            await getProfileStatistics(

                req.user.userId

            );

        return res.json({

            success:true,

            statistics

        });

    }

    catch(error){

        return res.status(500).json({

            success:false,

            message:error.message

        });

    }

}
export async function recentInterview(req, res) {

    try {

        const interview = await getRecentInterview(
            req.user.userId
        );

        return res.json({
            success: true,
            interview
        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

}