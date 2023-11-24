import React from 'react';
import { useQuery } from '@tanstack/react-query';
// import StudentAside from '../../components/studentAside';
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
            <h1 className='text-primary text-center mb-3'>প্রশ্ন ও উত্তর</h1>
            <div className="row ">
                {/* <StudentAside></StudentAside> */}


                <div className="col">
                    
                    <div className="text-center mb-5 row row-cols-1 row-cols-md-3">
                        <select name="topic" id="topic" className="p-3 ms-3">
                            <option value="">জাহানারা ইমাম</option>
                            <option value="Liberation">একাত্তরের দিনগুলি</option>
                            <option value="Jahanara_Imam">স্বাধীনতা যুদ্ধ</option>
                            <option value="Museum">মুক্তিযুদ্ধ জাদুঘর</option>
                        </select>
                    </div>

                    <div className=" rounded-3 p-3 mx-auto">
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