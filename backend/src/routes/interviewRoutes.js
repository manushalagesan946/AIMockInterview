import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";

import { startInterview } from "../controllers/interviewController.js";

import { submitAnswer } from "../controllers/interviewController.js";
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
export default router;