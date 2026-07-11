import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import MainLayout from "../../layouts/MainLayout";
import { getStatistics } from "../../services/interviewService";

function Profile() {

    const { user, logout } = useAuth();

    const [stats, setStats] = useState(null);

    useEffect(() => {

    async function loadStats() {

        try {

            const response = await getStatistics();

            console.log(response.data);

            setStats(response.data.statistics);

        } catch (error) {

            console.error(error);

            setStats({
                totalInterviews: 0,
                completedInterviews: 0,
                averageScore: 0
            });

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

            <div className="max-w-3xl mx-auto">

                <div className="bg-white rounded-2xl shadow-lg p-10">

                    <h1 className="text-4xl font-bold mb-8">

                        👤 My Profile

                    </h1>

                    <div className="space-y-5">

                        <div>

                            <p className="text-gray-500">

                                Name

                            </p>

                            <h2 className="text-2xl font-semibold">

                                {user?.name}

                            </h2>

                        </div>

                        <div>

                            <p className="text-gray-500">

                                Email

                            </p>

                            <h2 className="text-xl">

                                {user?.email}

                            </h2>

                        </div>

                    </div>

                    <hr className="my-8"/>

                    <div className="grid grid-cols-3 gap-6">

                        <div>

                            <p className="text-gray-500">

                                Total Interviews

                            </p>

                            <h2 className="text-3xl font-bold">

                                {stats.totalInterviews}

                            </h2>

                        </div>

                        <div>

                            <p className="text-gray-500">

                                Completed

                            </p>

                            <h2 className="text-3xl font-bold">

                                {stats.completedInterviews}

                            </h2>

                        </div>

                        <div>

                            <p className="text-gray-500">

                                Average Score

                            </p>

                            <h2 className="text-3xl font-bold text-blue-600">

                                {stats.averageScore}/10

                            </h2>

                        </div>

                    </div>

                    <button

                        onClick={logout}

                        className="mt-10 bg-red-500 text-white px-6 py-3 rounded-xl"

                    >

                        Logout

                    </button>

                </div>

            </div>

        </MainLayout>

    );

}

export default Profile;