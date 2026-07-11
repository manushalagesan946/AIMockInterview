function ProgressBar({ current, total }) {

    const percentage = (current / total) * 100;

    return (

        <div className="mb-8">

            <div className="flex justify-between mb-2">

                <span className="font-semibold">

                    Question {current} of {total}

                </span>

                <span>

                    {Math.round(percentage)}%

                </span>

            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">

                <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{
                        width: `${percentage}%`
                    }}
                />

            </div>

        </div>

    );

}

export default ProgressBar;