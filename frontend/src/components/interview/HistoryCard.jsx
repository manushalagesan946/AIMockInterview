import { CalendarDays, ArrowRight } from "lucide-react";

function HistoryCard({ interview, onView }) {

    const date = new Date(interview.createdAt).toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

    return (

        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition">

            <div className="flex justify-between items-start">

                <div>

                    <h2 className="text-2xl font-bold">

                        {interview.role}

                    </h2>

                    <p className="text-gray-500 mt-1">

                        {interview.interviewType}

                    </p>

                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                    {interview.status}

                </span>

            </div>

            <div className="flex gap-8 mt-6">

                <div>

                    <p className="text-gray-500 text-sm">

                        Score

                    </p>

                    <p className="text-2xl font-bold text-blue-600">

                        ⭐ {interview.overallScore}/10

                    </p>

                </div>

                <div>

                    <p className="text-gray-500 text-sm">

                        Difficulty

                    </p>

                    <p className="font-semibold">

                        {interview.difficulty}

                    </p>

                </div>

            </div>

            <div className="flex justify-between items-center mt-6">

                <div className="flex items-center gap-2 text-gray-500">

                    <CalendarDays size={18} />

                    {date}

                </div>

                <button

                    onClick={onView}

                    className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition"

                >

                    View Report

                    <ArrowRight size={18} />

                </button>

            </div>

        </div>

    );

}

export default HistoryCard;