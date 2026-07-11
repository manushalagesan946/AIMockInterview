import { useForm } from "react-hook-form";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";

function Login() {

    const { register, handleSubmit } = useForm();

    const { login } = useAuth();

    const navigate = useNavigate();

    async function onSubmit(data) {

        try {

            const response = await loginUser(data);

            login(
                response.data.token,
                response.data.user
            );

            toast.success("Login Successful");

            navigate("/dashboard");

        }

        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Login Failed"
            );

        }

    }

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <Card>

                <h1 className="text-3xl font-bold text-center mb-8">

                    AI Mock Interview

                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Input

                        label="Email"

                        name="email"

                        type="email"

                        placeholder="Enter email"

                        register={register}

                    />

                    <Input

                        label="Password"

                        name="password"

                        type="password"

                        placeholder="Enter password"

                        register={register}

                    />

                    <Button type="submit">

                        Login

                    </Button>

                </form>

                <p className="mt-5 text-center">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-blue-600 ml-2"
                    >
                        Register
                    </Link>

                </p>

            </Card>

        </div>

    );

}

export default Login;