import { ArrowRight } from "lucide-react";

function QuickActionCard({

    icon,

    title,

    description,

    buttonText,

    onClick

}) {

    return (

        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition">

            <div className="flex justify-between items-start">

                <div>

                    <div className="text-blue-600 mb-4">

                        {icon}

                    </div>

                    <h2 className="text-xl font-bold">

                        {title}

                    </h2>

                    <p className="text-gray-500 mt-2">

                        {description}

                    </p>

                </div>

            </div>

            <button

                onClick={onClick}

                className="mt-6 flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"

            >

                {buttonText}

                <ArrowRight size={18}/>

            </button>

        </div>

    );

}

export default QuickActionCard;