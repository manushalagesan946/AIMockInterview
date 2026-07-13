function Input({

    label,

    register,

    name,

    ...props

}) {

    return (

        <div className="mb-5">

            <label className="block mb-2 font-medium">

                {label}

            </label>

            <input

                {...register(name)}

                {...props}

                className="
                    w-full
                    rounded-xl
                    border
                    border-border
                    px-4
                    py-3
                    focus:border-primary
                    focus:ring-4
                    focus:ring-blue-100
                    transition
                "

            />

        </div>

    );

}

export default Input;