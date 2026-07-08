import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "AI Mock Interview API is running 🚀"
    });
});

export default app;