import { motion } from "framer-motion";

function PageHeader({

    title,

    subtitle,

    children

}) {

    return (

        <motion.div

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.4 }}

            className="mb-10"

        >

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-5xl font-bold tracking-tight">

                        {title}

                    </h1>

                    {

                        subtitle && (

                            <p className="text-gray-500 mt-3 text-lg">

                                {subtitle}

                            </p>

                        )

                    }

                </div>

                {children}

            </div>

        </motion.div>

    );

}

export default PageHeader;