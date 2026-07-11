import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import { getInterview } from "../../services/interviewService";

function InterviewDetails() {

    const { id } = useParams();

    const [data, setData] = useState(null);

    useEffect(() => {

        async function loadInterview() {

            const response =

                await getInterview(id);

            setData(response.data.data);

        }

        loadInterview();

    }, [id]);

    if (!data) {

        return <MainLayout>Loading...</MainLayout>;

    }

    return (

        <MainLayout>

            <h1 className="text-4xl font-bold mb-8">

                {data.interview.role}

            </h1>

            <h2 className="mb-8">

                Overall Score :

                {data.interview.overallScore}/10

            </h2>

            {

                data.responses.map(response => (

                    <div

                        key={response._id}

                        className="bg-white rounded-xl shadow-lg p-8 mb-6"

                    >

                        <h2 className="font-bold">

                            Question {response.questionNumber}

                        </h2>

                        <p className="mt-3">

                            {response.question}

                        </p>

                        <hr className="my-4"/>

                        <h3>Your Answer</h3>

                        <p>

                            {response.answer}

                        </p>

                        <hr className="my-4"/>

                        <p>

                            Score :

                            {response.score}/10

                        </p>

                        <h3 className="mt-4">

                            Strengths

                        </h3>

                        <ul className="list-disc ml-6">

                            {

                                response.strengths.map(

                                    (item,index)=>

                                    <li key={index}>{item}</li>

                                )

                            }

                        </ul>

                        <h3 className="mt-4">

                            Weaknesses

                        </h3>

                        <ul className="list-disc ml-6">

                            {

                                response.weaknesses.map(

                                    (item,index)=>

                                    <li key={index}>{item}</li>

                                )

                            }

                        </ul>

                    </div>

                ))

            }

        </MainLayout>

    );

}

export default InterviewDetails;