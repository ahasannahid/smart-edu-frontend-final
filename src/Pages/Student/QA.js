import React from 'react';
import ClassContentAside from '../../components/ClassContentAside';
import SingleQA from './SingleQA';
import { useQuery } from '@tanstack/react-query';
import ChatBot from '../../Shared/Popup';

const QA = () => {

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
            <h1 className='text-primary text-center mb-3'>প্রশ্ন ও উত্তর</h1>
            <div className="row ">
                <div className="col-sm-6 col-md-4 border rounded">
                    <ClassContentAside></ClassContentAside>
                </div>


                <div className="col-sm-6 col-md-8">


                    <section className="container mt-2">
                   

                        <div>
                            {
                                repositories.map(repository => <SingleQA
                                    key={repository._id}
                                    repository={repository}
                                    refetch={refetch}
                                    isLoading={isLoading}
                                ></SingleQA>)
                            }
                        </div>
                    </section>



                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default QA;