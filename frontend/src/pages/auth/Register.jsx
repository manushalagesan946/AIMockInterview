import { useForm } from "react-hook-form";
import { registerUser } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";

function Register() {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    async function onSubmit(data) {

        try {

            await registerUser(data);

            toast.success("Registration Successful");

            navigate("/login");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }

    }

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <Card>

                <h1 className="text-3xl font-bold text-center mb-8">

                    Create Account

                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Input
                        label="Name"
                        name="name"
                        placeholder="Enter your name"
                        register={register}
                    />

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        register={register}
                    />

                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        register={register}
                    />

                    <Button type="submit">

                        Register

                    </Button>

                </form>

                <p className="text-center mt-5">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-blue-600 ml-2"
                    >
                        Login
                    </Link>

                </p>

            </Card>

        </div>

    );

}

export default Register;