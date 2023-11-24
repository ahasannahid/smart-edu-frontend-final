import React from 'react';
import jahanara from './img/jahanaraImam.jpg';
import video from './img/bangla.webp'
import ClassContentAside from '../../components/ClassContentAside';
import ChatBot from '../../Shared/Popup';
import { Link } from 'react-router-dom';
import letter from "./img/letter.jpg"
import lwm from "./img/lwm.jpg"
import news from "./img/newspaper.jpg"

const ClassContent = () => {
    return (
        <section className="container mt-5">
            <h1 className='text-primary text-center mb-3'>ক্লাস উপকরণ</h1>
            <div className="row">
                <div className="col-sm-12 col-md-4 ">
                    <div className=" mb-3">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <ClassContentAside></ClassContentAside>

                                <div className="col-md-6">
                                    <img src={jahanara}
                                        className="img-fluid mt-5 img-jahanaraImam w-100 rounded-4" alt="..." />
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
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                        <div class="col">
                            <div class="card">
                                <img src={letter} class="card-img-top related-img" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">জাহানারা ইমাম এর চিঠি
                                    </p>
                                    <Link to="/studentrelatedContact" className="btn btn-info ms-2">বিস্তারিত</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={news} class="card-img-top related-img" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">৩টি শত্রু ব্যাটেলিয়ান নিশ্চিহ্ন
                                    </p>
                                    <Link to="/studentrelatedContactnews" className="btn btn-info ms-2">বিস্তারিত</Link>
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

export default ClassContent;