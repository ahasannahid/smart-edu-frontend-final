import React from 'react';
import './student.css'
import StudentAside from '../../components/studentAside';
import { useQuery } from '@tanstack/react-query';
// import Loader from '../../Shared/Loader';
import SingleChapter from './SingleChapter';
import ChatBot from '../../Shared/Popup';
// http://localhost:5000/chapter
const Chapter = () => {


    const { data: chapters = [], refetch, isLoading } = useQuery({
        queryKey: ['chapters'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/chapter`)
            const data = await res.json();
            return data;
        }
    });

    // if (isLoading) {
    //     return <Loader></Loader>
    // }

    return (
        <section className="container mt-5">
            <h1 className='text-primary text-center mb-3'>অধ্যায়</h1>
            <div className="row ">
                <StudentAside></StudentAside>


                <div className="col-sm-6 col-md-8">
                    <div className="row row-cols-md-2 g-2 mb-4 ">
                        {
                            chapters.map(chapter => <SingleChapter
                                key={chapter._id}
                                chapter={chapter}
                                refetch={refetch}
                                isLoading={isLoading}
                            ></SingleChapter>)
                        }
                        <div />

                    </div>
                </div>
                </div>
                <ChatBot></ChatBot>
        </section>
    );
};

export default Chapter;