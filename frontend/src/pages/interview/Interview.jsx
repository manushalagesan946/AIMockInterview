import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import ProgressBar from "../../components/interview/ProgressBar";
import FeedbackCard from "../../components/interview/FeedbackCard";
import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/common/Button";
import { submitAnswer } from "../../services/interviewService";

function Interview() {

    const { state } = useLocation();

    const navigate = useNavigate();

    const [answer, setAnswer] = useState("");

    const [loading, setLoading] = useState(false);

    const [feedback, setFeedback] = useState(null);

    const [questionData, setQuestionData] = useState(state);

    async function handleSubmit() {

        if (!answer.trim()) {

            toast.error("Please enter your answer.");

            return;

        }

        try {

            setLoading(true);

            const response = await submitAnswer({

                interviewId: questionData.interviewId,

                answer

            });

            setLoading(false);

            if (response.data.completed) {

                navigate("/history");

                return;

            }

            setFeedback(response.data.feedback);

            setAnswer("");

            setQuestionData({

                ...questionData,

                question: response.data.question,

                questionNumber: response.data.questionNumber

            });

        }

        catch (error) {

            setLoading(false);

            toast.error(

                error.response?.data?.message ||

                "Something went wrong"

            );

        }

    }

    return (

        <MainLayout>

            <ProgressBar

                current={questionData.questionNumber}

                total={questionData.totalQuestions}

            />

            <div className="bg-white rounded-xl shadow-lg p-8">

                <h3 className="text-xl font-medium mb-6">

                    {questionData.question}

                </h3>

                <textarea

                rows="10"

                value={answer}

                onChange={(e) => setAnswer(e.target.value)}

                className="w-full border border-gray-300 rounded-xl p-5 resize-none focus:ring-2 focus:ring-blue-500 outline-none"

                placeholder="Write your answer here..."

            />

            <p className="text-right mt-2 text-gray-500">

                Characters: {answer.length}

            </p>

                <div className="mt-6">

                    <Button

                        onClick={handleSubmit}

                        disabled={loading}

                    >

                        {

                            loading ?

                            "Evaluating..." :

                            "Submit Answer"

                        }

                    </Button>

                </div>

            </div>

            {

                feedback && (

                    <FeedbackCard

                        feedback={feedback}

                    />

                )

            }

        </MainLayout>

    );

}

export default Interview;