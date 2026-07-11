import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { startInterview } from "../../services/interviewService";

function StartInterview() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit
    } = useForm({

        defaultValues: {

            role: "Backend Developer",

            difficulty: "Medium",

            interviewType: "Technical"

        }

    });

    async function onSubmit(data) {

        try {

            const response = await startInterview(data);

            navigate("/interview", {

                state: response.data

            });

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Unable to start interview"

            );

        }

    }

    return (

        <MainLayout>

            <div className="flex justify-center">

                <Card>

                    <h1 className="text-3xl font-bold text-center mb-8">

                        🚀 Start AI Interview

                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-5">

                            <label className="block mb-2">

                                Role

                            </label>

                            <select
                                {...register("role")}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>Backend Developer</option>

                                <option>Frontend Developer</option>

                                <option>Full Stack Developer</option>

                                <option>Java Developer</option>

                                <option>Python Developer</option>

                            </select>

                        </div>

                        <div className="mb-5">

                            <label className="block mb-2">

                                Difficulty

                            </label>

                            <select
                                {...register("difficulty")}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>Easy</option>

                                <option>Medium</option>

                                <option>Hard</option>

                            </select>

                        </div>

                        <div className="mb-6">

                            <label className="block mb-2">

                                Interview Type

                            </label>

                            <select
                                {...register("interviewType")}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>Technical</option>

                                <option>HR</option>

                                <option>Behavioral</option>

                            </select>

                        </div>

                        <div className="bg-gray-100 rounded-lg p-4 mb-6">

                            <p>

                                <strong>Questions:</strong> 5

                            </p>

                            <p>

                                <strong>Estimated Time:</strong> 15-20 minutes

                            </p>

                        </div>

                        <Button type="submit">

                            Start Interview

                        </Button>

                    </form>

                </Card>

            </div>

        </MainLayout>

    );

}

export default StartInterview;