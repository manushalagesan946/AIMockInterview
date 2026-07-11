import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecentInterviewCard from "../../components/dashboard/RecentInterviewCard";
import { getRecentInterview } from "../../services/interviewService";
import {
    PlayCircle,
    History,
    Trophy,
    ClipboardList,
    CheckCircle
} from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import { useAuth } from "../../context/AuthContext";
import { getStatistics } from "../../services/interviewService";

import StatsCard from "../../components/dashboard/StatsCard";
import QuickActionCard from "../../components/dashboard/QuickActionCard";

function Dashboard() {
    const [recentInterview, setRecentInterview] = useState(null);
    const { user } = useAuth();

    const navigate = useNavigate();

    const [stats, setStats] = useState(null);

    useEffect(() => {

        async function loadStats() {

            try {

                const [statsResponse, recentResponse] = await Promise.all([
                    getStatistics(),
                    getRecentInterview()
                ]);

                setStats(statsResponse.data.statistics);

                setRecentInterview(recentResponse.data.interview);

            } catch (error) {

                console.error(error);

            }

        }

        loadStats();

    }, []);

    if (!stats) {

        return (

            <MainLayout>

                Loading...

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="mb-10">

                <h1 className="text-5xl font-bold">

                    Welcome back,

                    <span className="text-blue-600">

                        {" "}
                        {user?.name}

                    </span>

                    👋

                </h1>

                <p className="text-gray-500 mt-3 text-lg">

                    Ready to improve your interview skills today?

                </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">

                <StatsCard

                    title="Average Score"

                    value={`${stats.averageScore}/10`}

                    icon={<Trophy size={32}/>}

                    iconBg="bg-yellow-100"

                    iconColor="text-yellow-600"

                />

                <StatsCard

                    title="Total Interviews"

                    value={stats.totalInterviews}

                    icon={<ClipboardList size={32}/>}

                    iconBg="bg-blue-100"

                    iconColor="text-blue-600"

                />

                <StatsCard

                    title="Completed"

                    value={stats.completedInterviews}

                    icon={<CheckCircle size={32}/>}

                    iconBg="bg-green-100"

                    iconColor="text-green-600"

                />

            </div>

            <h2 className="text-2xl font-bold mb-6">

                Quick Actions

            </h2>

            <div className="grid lg:grid-cols-2 gap-6">

                <QuickActionCard

                    icon={<PlayCircle size={40}/>}

                    title="Start Interview"

                    description="Practice with AI-generated interview questions."

                    buttonText="Start Interview"

                    onClick={() => navigate("/start")}

                />

                <QuickActionCard

                    icon={<History size={40}/>}

                    title="Interview History"

                    description="Review your previous interview attempts."

                    buttonText="View History"

                    onClick={() => navigate("/history")}

                />

            </div>
            <div className="mt-10">

            <RecentInterviewCard

                interview={recentInterview}

                onView={() => {

                    if (recentInterview) {

                        navigate(`/history/${recentInterview._id}`);

                    }

                }}

            />

        </div>

        </MainLayout>

    );

}

export default Dashboard;