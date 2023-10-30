import React from 'react';
import { Link } from 'react-router-dom';
import jahanara from './assets/Jahanara-Imam_Photo_03.jpg';
import p1971 from './assets/1547577603_6.jpg';
import jadugor from './assets/Liberation_War_Museum,new_building.jpg';
import "./home.css"

const Home = () => {
    return (
        <div>
            <header className="w-75 mx-auto mt-5 py-5 border border-primary rounded-4">
                <div className="  p-5 text-center">
                    <div className="px-5 text-white">
                        <h2>ষষ্ঠ শ্রেণীর <span className="text-primary">ডিজিটাল পাঠ্য সহায়িকা</span> প্লাটফর্ম এ প্রবেশের জন্য <br></br> সাইন
                            ইন করুন</h2>

                        <button type="button" className="btn btn-warning btn-lg"><Link className="text-white text-decoration-none"
                            to="/login">শিক্ষক</Link></button>
                        <button type="button" className="btn btn-primary btn-lg ms-2"><Link
                            className="text-white text-decoration-none" to="/login">শিক্ষার্থী</Link></button>
                    </div>
                </div>

            </header>



            {/* <!-- Content section 1--> */}
            <section id="scroll">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-5"><img className="img-fluid rounded-circle" src={jahanara}
                                alt="..." /></div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h3 className="display-6">জাহানারা ইমাম</h3>
                                <p>জাহানারা ইমাম একজন কথাসাহিত্যিক, শিক্ষাবিদ এবং 'একাত্তরের ঘাতক দালাল নির্মূল কমিটি'র প্রথম
                                    আহ্বায়ক। তিনি 'শহীদ জননী' হিসেবে বিশেষভাবে খ্যাত। ১৯২৯ সালের ৩ মে জাহানারা ইমাম অবিভক্ত
                                    বাংলার মুর্শিদাবাদ জেলার সুন্দরপুর গ্রামের এক রক্ষণশীল পরিবারে জন্মগ্রহণ করেন। তাঁর বাবা
                                    সৈয়দ আবদুল আলী ছিলেন ডেপুটি ম্যাজিস্ট্রেট।</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Content section 2--> */}
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="p-5"><img className="img-fluid rounded-circle" src={p1971} alt="..." />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h6 className="display-6">বাংলাদেশের স্বাধীনতা যুদ্ধ</h6>
                                <p>বাংলাদেশের স্বাধীনতা যুদ্ধ ছিল ১৯৭১ সালে সংঘটিত তৎকালীন পশ্চিম পাকিস্তানের বিরুদ্ধে পূর্ব
                                    পাকিস্তানের সশস্ত্র সংগ্রাম, যার মাধ্যমে বাংলাদেশ একটি স্বাধীন দেশ হিসাবে পৃথিবীর বুকে
                                    আত্মপ্রকাশ করে। ১৯৭১ সালের ২৬শে মার্চ এই যুদ্ধের সূচনা ঘটে, যখন পাকিস্তানি সামরিক বাহিনী
                                    রাতের অন্ধকারে নিরস্ত্র বাঙালির ওপর ঝাঁপিয়ে পড়ে।</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Content section 3--> */}
            <section>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <div className="p-2"><img className="img-fluid rounded-circle"
                                src={jadugor} alt="..." /></div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                                <h6 className="display-6">মুক্তিযুদ্ধ জাদুঘর</h6>
                                <p>মুক্তিযুদ্ধ জাদুঘর মুক্তিযুদ্ধ-ভিত্তিক একটি জাদুঘর। এটি বাংলাদেশের একমাত্র মুক্তিযুদ্ধ
                                    জাদুঘর। এটি ঢাকার এফ-১১/এ-বি, সিভিক সেক্টর, আগারগাঁওয়ে অবস্থিত। বেসরকারি উদ্যোগে প্রতিষ্ঠিত
                                    এই জাদুঘরের উদ্বোধন হয় ১৯৯৬ সালের ২২ শে মার্চ। মুক্তিযুদ্ধের অনেক দুর্লভ বস্তু আছে এই
                                    জাদুঘরে ।</p>
                                <a href="https://www.liberationwarmuseumbd.org/" target="_blank"
                                    className="text-decoration-none">জাদুঘর ভিজিট এর জন্যে ক্লিক করুন...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="mt-5">
                <div className="d-flex justify-content-center">
                    <p className="text-primary">Bangla | <span className="text-dark">English</span></p>
                </div>
            </section>

        </div>
    );
};

export default Home;