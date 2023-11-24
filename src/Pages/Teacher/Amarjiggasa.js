import React from 'react';
import { useQuery } from '@tanstack/react-query';


// import { Link } from 'react-router-dom';
import TeacherClassContentAside from '../../components/TeacherClassContentAside';
import ChatBot from '../../Shared/Popup';
import SingleJiggasa from './SingleJiggasa';
// import TeacherQA from './TeacherQA';


const Amarjiggasa = () => {

    const { data: amarjiggasa = [], refetch, isLoading } = useQuery({
        queryKey: ['amarjiggasa'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/amarjiggasa`)
            const data = await res.json();
            return data;
        }
    });


    return (
        <section className="container mt-5">
            <h1 className="text-center text-primary mb-3">আমার জিজ্ঞাসা</h1>
            <div className="row">
                <div class="mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <TeacherClassContentAside></TeacherClassContentAside>
                        </div>
                        <div class="col-md-8">
                            <div>                               
                                {
                                    amarjiggasa.map(jiggasa => <SingleJiggasa
                                        key={jiggasa._id}
                                        jiggasa={jiggasa}
                                        refetch={refetch}
                                        isLoading={isLoading}
                                    ></SingleJiggasa>)
                                }

                            </div>
                            
                        </div>
                    </div>
                </div>               
            </div>
            {/* <TeacherQA></TeacherQA> */}
            
            <ChatBot></ChatBot>
        </section>


    );
};

export default Amarjiggasa;

