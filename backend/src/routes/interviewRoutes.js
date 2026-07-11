import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";

import { startInterview,submitAnswer,interviewHistory,interviewDetails,profileStatistics,recentInterview } from "../controllers/interviewController.js";
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
    "/statistics",
    authenticate,
    profileStatistics
);

router.get(
    "/recent",
    authenticate,
    recentInterview
);
router.get(

    "/:id",

    authenticate,

    interviewDetails

);

export default router;