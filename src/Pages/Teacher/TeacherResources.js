import React from 'react';
import TeacherAside from '../../components/TeacherAside';
import { useQuery } from '@tanstack/react-query';
import SingleResources from '../Student/SingleResources';
import ChatBot from '../../Shared/Popup';
import { Link } from 'react-router-dom';


const TeacherResources = () => {

    const { data: resources = [], refetch, isLoading } = useQuery({
        queryKey: ['resources'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/resources`)
            const data = await res.json();
            return data;
        }
    });


    return (
        <section className="container mt-5">
            <h1 className="text-center text-primary mb-3">রিসোর্স</h1>
            <div className="row ">
                <TeacherAside></TeacherAside>


                <div className="col-sm-6 col-md-8">
                   
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
                            resources.map(resource => <SingleResources
                                key={resource._id}
                                resource={resource}
                                refetch={refetch}
                                isLoading={isLoading}
                            ></SingleResources>)
                        }
                    </div>
                </div>
            </div>
            <div className='text-center mt-3'>
                <Link to="/addresource" className='btn btn-primary text-center'>ADD RESOURCES</Link>
            </div>

            <ChatBot></ChatBot>
        </section>
    );
};

export default TeacherResources;