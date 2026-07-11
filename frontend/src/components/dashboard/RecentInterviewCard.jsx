import { ArrowRight } from "lucide-react";

function RecentInterviewCard({ interview, onView }) {

    if (!interview) {

        return (

            <div className="bg-white rounded-2xl border border-gray-200 p-8">

                <h2 className="text-xl font-bold mb-2">

                    Recent Interview

                </h2>

                <p className="text-gray-500">

                    No completed interviews yet.

                </p>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">

            <h2 className="text-2xl font-bold mb-6">

                Recent Interview

            </h2>

            <p className="text-xl font-semibold">

                {interview.role}

            </p>

            <p className="text-gray-500 mt-2">

                {interview.difficulty}

            </p>

            <p className="text-3xl font-bold text-blue-600 mt-5">

                ⭐ {interview.overallScore}/10

            </p>

            <button

                onClick={onView}

                className="mt-8 flex items-center gap-2 text-blue-600 font-semibold"

            >

                View Report

                <ArrowRight size={18}/>

            </button>

        </div>

    );

}

export default RecentInterviewCard;