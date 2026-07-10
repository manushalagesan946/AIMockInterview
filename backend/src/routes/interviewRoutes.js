import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";

import { startInterview,submitAnswer,interviewHistory,interviewDetails } from "../controllers/interviewController.js";
const router = express.Router();

router.post(
    "/start",
    authenticate,
    startInterview
);

router.post(
    "/answer",
    authenticate,
    submitAnswer
);

router.get(
    "/history",
    authenticate,
    interviewHistory
);
router.get(

    "/:id",

    authenticate,

    interviewDetails

);
export default router;