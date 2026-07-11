function StatsCard({
    title,
    value,
    icon,
    iconBg = "bg-blue-100",
    iconColor = "text-blue-600"
}) {

    return (

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition">

            <div className="flex justify-between items-center">

                <div>

                    <p className="text-sm text-gray-500">

                        {title}

                    </p>

                    <h2 className="text-4xl font-bold mt-3">

                        {value}

                    </h2>

                </div>

                <div className={`${iconBg} p-4 rounded-xl`}>

                    <div className={iconColor}>

                        {icon}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default StatsCard;