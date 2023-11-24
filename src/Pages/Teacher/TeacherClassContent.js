import React from 'react';
import jahanara from './img/jahanaraImam.jpg'
import TeacherClassContentAside from '../../components/TeacherClassContentAside';
import ChatBot from '../../Shared/Popup';
import video from './img/1971.jpg'
import letter from "./img/letter.jpg"
import lwm from "./img/lwm.jpg"
import news from "./img/newspaper.jpg"
import { Link } from 'react-router-dom';

const TeacherClassContent = () => {
    return (
        <section className="container mt-5">
            <h1 className="text-center text-primary mb-3">ক্লাস উপকরণ</h1>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <div className=" mb-3">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <TeacherClassContentAside></TeacherClassContentAside>




                                <div className="col-md-6">
                                    <img src={jahanara}
                                        className="img-fluid mt-52img-jahanaraImam w-100 rounded-4" alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>



                <div className="col-sm-12 col-md-8">
                    <div className="">
                        <div className="">
                            <video width="700px" height="240" controls>
                                <source src={video} type="video/mp4" />
                            </video>
                            <p className="mt-3">জাহানারা ইমাম একজন কথাসাহিত্যিক, শিক্ষাবিদ এবং 'একাত্তরের ঘাতক দালাল নির্মূল
                                কমিটি'র প্রথম আহ্বায়ক। তিনি 'শহীদ জননী' হিসেবে বিশেষভাবে খ্যাত। ১৯২৯ সালের ৩ মে জাহানারা
                                ইমাম অবিভক্ত বাংলার মুর্শিদাবাদ জেলার সুন্দরপুর গ্রামের এক রক্ষণশীল পরিবারে জন্মগ্রহণ করেন।
                                তাঁর বাবা সৈয়দ আবদুল আলী ছিলেন ডেপুটি ম্যাজিস্ট্রেট।</p>



                            <button className="btn btn-outline-info">পাঠ্যপুস্তক</button>
                            <button className="btn btn-outline-info mx-2">জাহানারা ইমাম এর অন্যান্য বই
                            </button>
                            <button className="btn btn-outline-info">একাত্তরের দিনগুলি </button>
                            <button className="btn btn-outline-info">ক্লাস উপকরণ যোগ করুন</button>


                            {/* <a href="#" className="btn btn-outline-info ms-2">ক্লাস উপকরণ যোগ করুন</a> */}
                        </div>
                    </div>


                    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                        <div class="col">
                            <div class="card">
                                <img src={letter} class="card-img-top related-img" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">জাহানারা ইমাম এর চিঠি
                                    </p>
                                    <Link to="/relatedContact" className="btn btn-info ms-2">বিস্তারিত</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={news} class="card-img-top related-img" alt="..." />
                                <div class="card-body">
                                <p class="card-text">৩টি শত্রু ব্যাটেলিয়ান নিশ্চিহ্ন
                                    </p>
                                    <Link to="/relatedContactnews" className="btn btn-info ms-2">বিস্তারিত</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card">
                                <img src={lwm} className="card-img-top related-img" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Virtual Liberation War Museum </p>
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

export default TeacherClassContent;