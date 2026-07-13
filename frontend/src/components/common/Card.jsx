import { motion } from "framer-motion";

function Card({

    children,

    className = ""

}) {

    return (

        <motion.div

            initial={{
                opacity:0,
                y:20
            }}

            animate={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:.4
            }}

            className={`
                bg-white
                rounded-2xl
                border
                border-border
                shadow-card
                p-8
                ${className}
            `}

        >

            {children}

        </motion.div>

    );

}

export default Card;