import React from 'react';
import TeacherClassContentAside from '../components/TeacherClassContentAside';
import ChatBot from './Popup';
import news from './assets/newspaper.jpg'
import { Link } from 'react-router-dom';
import letter from './assets/letter.jpg'
import lwm from './assets/lwm.jpg'

const RelatedContentNews = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <div className=" mb-3">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <TeacherClassContentAside></TeacherClassContentAside>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-sm-12 col-md-8'>
                    <div className="row row-cols-1 g-4">
                        <div className="col">
                            <div>
                                <p className='text-center mt-3 font-size'>৩টি শত্রু ব্যাটেলিয়ান নিশ্চিহ্ন
                                   
                                </p>
                            </div>
                            <div>
                                <img src={news} className='news' alt="..." />

                            </div>
                        </div>
                    </div>


                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">


                        <div className="col">
                            <div className="card">
                                <img src={letter} className="card-img-top related-img" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"> জাহানারা ইমাম এর চিঠি
                                    </p>

                                    <Link
                                        to="/relatedContact" className="btn btn-info ms-2">বিস্তারিত</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={lwm} className="card-img-top related-img" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Virtual Liberation War Museum </p>
                                    <a href="https://www.liberationwarmuseumbd.org/#Virtual-Tour" target='blank' className="btn btn-info ms-2">VISIT</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>






            <ChatBot></ChatBot>
        </section>
    );
};


export default RelatedContentNews;