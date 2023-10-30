import React from 'react';
import { useQuery } from '@tanstack/react-query';
import StudentAside from '../../components/studentAside';
import SingleRepo from './singleRepo';
import ChatBot from '../../Shared/Popup';

const Repository = () => {

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
                <StudentAside></StudentAside>


                <div className="col-sm-6 col-md-8">
                    <h3 className="text-center text-dark mb-2">রিপোজিটরি</h3>
                    <div className="text-center mb-5 row row-cols-1 row-cols-md-3">
                        <select name="topic" id="topic" className="p-3 ms-3">
                            <option value="">জাহানারা ইমাম</option>
                            <option value="Liberation">একাত্তরের দিনগুলি</option>
                            <option value="Jahanara_Imam">স্বাধীনতা যুদ্ধ</option>
                            <option value="Museum">মুক্তিযুদ্ধ জাদুঘর</option>
                        </select>
                    </div>

                    <div className=" shadow-lg rounded-3 p-3">
                        {
                            repositories.map(repository => <SingleRepo
                                key={repository._id}
                                repository={repository}
                                refetch={refetch}
                                isLoading={isLoading}
                            ></SingleRepo>)
                        }
                    </div>
                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default Repository;