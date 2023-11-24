import React from 'react';
import StudentAside from '../../components/studentAside';
import { useQuery } from '@tanstack/react-query';
import SingleResources from './SingleResources';
import ChatBot from '../../Shared/Popup';
// import { Link } from 'react-router-dom';

const Resource = () => {

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
            <h1 className='text-primary text-center mb-3'>রিসোর্স</h1>
            <div className="row ">
                <StudentAside></StudentAside>


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
            {/* <Link to="/addresource" className='btn btn-primary'>add resources</Link> */}
           
            <ChatBot></ChatBot>
        </section>
    );
};

export default Resource;