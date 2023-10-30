import React from 'react';
import TeacherAside from '../../components/TeacherAside';

import ChatBot from '../../Shared/Popup';
import { useQuery } from '@tanstack/react-query';
import TeacherSingleQA from './teacherSingleQA';

const TeacherQA = () => {

    const { data: repositories = [], refetch, isLoading } = useQuery({
        queryKey: ['repository'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/repository`)
            const data = await res.json();
            return data;
        }
    });

    return (
        <section className="container mt-5">
            <div className="row ">
                <div className="col-sm-6 col-md-4 border rounded">
                    <TeacherAside></TeacherAside>
                </div>


                <div className="col-sm-6 col-md-8">


                    <section className="container mt-2">
                        <h2 className="text-center text-info mb-3">প্রশ্ন ও উত্তর</h2>

                        <div>
                            {
                                repositories.map(repository => <TeacherSingleQA
                                    key={repository._id}
                                    repository={repository}
                                    refetch={refetch}
                                    isLoading={isLoading}
                                ></TeacherSingleQA>)
                            }
                        </div>
                    </section>



                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default TeacherQA;