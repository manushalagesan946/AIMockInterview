import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HistoryCard from "../../components/interview/HistoryCard";
import MainLayout from "../../layouts/MainLayout";
import { getHistory } from "../../services/interviewService";

function InterviewHistory() {

    const [history, setHistory] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        async function loadHistory() {

            try {

                const response = await getHistory();

                setHistory(response.data.history);

            }

            catch (error) {

                console.log(error);

            }

        }

        loadHistory();

    }, []);
    if (history.length === 0) {

            return (

                <MainLayout>

                    <div className="flex flex-col items-center justify-center py-20">

                        <h2 className="text-3xl font-bold">

                            No Interviews Yet

                        </h2>

                        <p className="text-gray-500 mt-3">

                            Start your first AI interview to see your history.

                        </p>

                    </div>

                </MainLayout>

            );

        }

    return (

        <MainLayout>

            <h1 className="text-4xl font-bold mb-8">

                Interview History

            </h1>

            <div className="grid gap-6">

                {

                    history.map(interview => (

                        <HistoryCard

                            key={interview._id}

                            interview={interview}

                            onView={() =>

                                navigate(`/history/${interview._id}`)

                            }

                        />

                    ))

                }

            </div>
        </MainLayout>

    );

}

export default InterviewHistory;