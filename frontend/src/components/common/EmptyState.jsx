import { Inbox } from "lucide-react";

function EmptyState({

    title,

    subtitle

}) {

    return (

        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">

            <Inbox

                size={60}

                className="mx-auto text-gray-300"

            />

            <h2 className="text-2xl font-bold mt-6">

                {title}

            </h2>

            <p className="text-gray-500 mt-3">

                {subtitle}

            </p>

        </div>

    );

}

export default EmptyState;