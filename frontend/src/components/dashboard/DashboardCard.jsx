import { ArrowRight } from "lucide-react";

function DashboardCard({
    icon,
    title,
    description,
    buttonText,
    onClick
}) {

    return (

        <div
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
        >

            <div className="text-blue-600 mb-5">

                {icon}

            </div>

            <h2 className="text-2xl font-bold mb-3">

                {title}

            </h2>

            <p className="text-gray-500 mb-8">

                {description}

            </p>

            <button

                onClick={onClick}

                className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"

            >

                {buttonText}

                <ArrowRight size={18}/>

            </button>

        </div>

    );

}

export default DashboardCard;