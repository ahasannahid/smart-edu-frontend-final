import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ChatBot from '../../Shared/Popup';
import TeacherAside from '../../components/TeacherAside';
import TeacherSingleChapter from './TeacherSingleChapter';

const TeacherChapter = () => {

    const { data: chapters = [], refetch, isLoading } = useQuery({
        queryKey: ['chapters'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/chapter`)
            const data = await res.json();
            return data;
        }
    });

    return (
        <section className="container mt-5">
            <h1 className='text-primary text-center mb-3'>অধ্যায়</h1>
            <div className="row ">
                <TeacherAside></TeacherAside>


                <div className="col-sm-6 col-md-8">
                    <div className="row row-cols-md-2 g-2 mb-4 ">
                        {
                            chapters.map(chapter => <TeacherSingleChapter
                                key={chapter._id}
                                chapter={chapter}
                                refetch={refetch}
                                isLoading={isLoading}
                            ></TeacherSingleChapter>)
                        }
                        <div />

                    </div>
                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default TeacherChapter;