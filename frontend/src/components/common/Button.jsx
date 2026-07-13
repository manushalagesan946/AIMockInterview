import { motion } from "framer-motion";

function Button({

    children,

    className = "",

    ...props

}) {

    return (

        <motion.button

            whileHover={{
                scale: 1.02
            }}

            whileTap={{
                scale: 0.98
            }}

            className={`
                w-full
                bg-primary
                text-white
                py-3
                rounded-xl
                font-semibold
                shadow-card
                hover:opacity-90
                disabled:opacity-50
                ${className}
            `}

            {...props}

        >

            {children}

        </motion.button>

    );

}

export default Button;