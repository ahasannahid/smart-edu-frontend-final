import React from 'react';
import jahanara from './img/jahanaraImam.jpg';
import video from './img/manipulate text background.mp4'
import ClassContentAside from '../../components/ClassContentAside';
import ChatBot from '../../Shared/Popup';

const ClassContent = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-4 ">
                    <div className=" mb-3">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <ClassContentAside></ClassContentAside>

                                <div className="col-md-6">
                                    <img src={jahanara}
                                        className="img-fluid mt-5 img-jahanaraImam w-100 rounded-4" alt="..."/>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="">
                        <div className="">
                            <video width="700px" height="240" controls>
                                <source src={video} type="video/mp4"/>
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
                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default ClassContent;