function FeedbackCard({ feedback }) {

    return (

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

            <h2 className="text-2xl font-bold mb-5">

                🤖 AI Feedback

            </h2>

            <div className="mb-5">

                <span className="text-4xl font-bold text-blue-600">

                    {feedback.score}/10

                </span>

            </div>

            <div className="mb-5">

                <h3 className="font-bold text-green-600 mb-2">

                    ✅ Strengths

                </h3>

                <ul className="list-disc ml-6">

                    {feedback.strengths.map((item, index) => (

                        <li key={index}>{item}</li>

                    ))}

                </ul>

            </div>

            <div className="mb-5">

                <h3 className="font-bold text-red-600 mb-2">

                    ⚠ Weaknesses

                </h3>

                <ul className="list-disc ml-6">

                    {feedback.weaknesses.map((item, index) => (

                        <li key={index}>{item}</li>

                    ))}

                </ul>

            </div>

            <div>

                <h3 className="font-bold text-blue-600 mb-2">

                    💡 Suggestions

                </h3>

                <ul className="list-disc ml-6">

                    {feedback.suggestions.map((item, index) => (

                        <li key={index}>{item}</li>

                    ))}

                </ul>

            </div>

        </div>

    );

}

export default FeedbackCard;