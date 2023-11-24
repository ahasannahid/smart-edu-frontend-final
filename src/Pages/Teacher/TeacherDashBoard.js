import React from 'react';
import TeacherAside from '../../components/TeacherAside';

import attendance from './img/attendence.png';
import chart from './img/chart.png';
import marksEnglish from './img/marksEnglish.png';
import marksMath from './img/marksMath.png';
import ChatBot from '../../Shared/Popup';

const TeacherDashBoard = () => {
    return (
        <section className="container mt-5">
             <h1 className='text-primary text-center mb-3'>শিক্ষক ড্যাশবোর্ড</h1>
            <div className="row ">
               <TeacherAside></TeacherAside>


                <div className="col-sm-6 col-md-8">

                    <select name="অধ্যায়" id="অধ্যায়" className="mb-3 ms-3 p-2">
                        <option value="অধ্যায়">অধ্যায়</option>
                        <option value="দিনগুলি">একাত্তরের দিনগুলি</option>
                        <option value="bangla">জাহানারা ইমাম</option>
                        <option value="english">শহীদ শাফী ইমাম রুমী</option>
                        <option value="math">বাংলাদেশের স্বাধীনতা যুদ্ধ</option>
                    </select>

                    <select name="প্রশ্ন" id="প্রশ্ন" className="mb-3 p-2">
                        <option value="প্রশ্ন">প্রশ্ন নির্বাচন করুন</option>
                        <option value="প্রশ্ন1">লেখাটি কোন সময়ের ও কয়দিনের ঘটনা?</option>
                        <option value="প্রশ্ন2">লেখক কী কী কাজের উল্লেখ করেছেন?</option>
                        <option value="প্রশ্ন3">এটি কোন বিষয় নিয়ে লেখা হয়েছে?</option>
                    </select>

                    <div className="row row-cols-1 row-cols-md-2 g-4 ">
                        <div className="col">
                            <div className="card">
                                <img src={attendance} className="card-img-top img-fluid chart" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={chart} className="card-img-top img-fluid chart" alt="..."/>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={marksEnglish} className="card-img-top img-fluid chart" alt="..."/>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={marksMath} className="card-img-top img-fluid chart" alt="..."/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default TeacherDashBoard;