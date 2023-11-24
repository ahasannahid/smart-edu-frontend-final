import React from 'react';
import ClassContentAside from './../../components/ClassContentAside';
import jahanara from './img/jahanaraImam.jpg'
// import m1971 from './img/1971.jpg'
import { useQuery } from '@tanstack/react-query';
import SingleActivity from './SingleActivity';
import ChatBot from '../../Shared/Popup';

const StudentActivities = () => {

    const { data: activities = [], refetch, isLoading } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/activities`)
            const data = await res.json();
            return data;
        }
    });

    return (
        <section className="container mt-5">
            <h1 className='text-primary text-center mb-3'>একটিভিটিস</h1>
            <div className="row ">
                <div className="col-sm-6 col-md-4 border rounded">
                    <div className=" mb-3" >
                        <div className="row g-0">
                            <div className="col-md-12">
                                <ClassContentAside></ClassContentAside>


                                <div className="col-md-6">
                                    <img src={jahanara}
                                        className="img-fluid mt-52img-jahanaraImam w-100 rounded-4" alt="..." />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                <div className="col-sm-6 col-md-8">


                    <section className="mt-0 container">
                        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample1" role="button"
                            aria-controls="offcanvasExample">একক কাজ</a>

                        <button className="btn btn-primary ms-2" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample">
                            দলীয় কাজ</button>

                        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample1"
                            aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header bg-primary" >
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">একক কাজ</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body bg-primary" >
                                <div>
                                    একা একা এই কাজগুলো সম্পন্ন করুন
                                </div>
                                <div className="dropdown mt-3">
                                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                        কাজগুলো দেখুন
                                    </button>
                                    {/* <ul className="dropdown-menu bg-primary">
                                        <li><a className="dropdown-item" href="#">প্রশ্ন ও উত্তর</a></li>
                                        <li><a className="dropdown-item" href="#">শব্দার্থ</a></li>
                                        <li><a className="dropdown-item" href="#">প্রবন্ধ/অনুচ্ছেদ</a></li>
                                        <li><a className="dropdown-item" href="#">সমার্থক শব্দ</a></li>
                                        <li><a className="dropdown-item" href="#">আরো দেখুন...</a></li>

                                    </ul> */}
                                </div>
                            </div>
                        </div>


                        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample2"
                            aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header bg-primary">
                                <h5 className="offcanvas-title " id="offcanvasExampleLabel">দলীয় কাজ</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body bg-primary">
                                <button className="btn btn-primary">গ্রুপ তৈরি করুন</button>
                                <div className="mt-2">
                                    দলীয়ভাবে এই কাজগুলো সম্পন্ন করুন
                                </div>
                                <div className="dropdown mt-3">
                                    <button className="btn  dropdown-toggle btn-primary" type="button"
                                        data-bs-toggle="dropdown">
                                        কাজগুলো দেখুন
                                    </button>
                                    {/* <ul className="dropdown-menu bg-primary">
                                        <li><a className="dropdown-item" href="#">প্রশ্ন প্রণয়ন</a></li>
                                        <li><a className="dropdown-item" href="#">ডায়াগ্রামিং</a></li>
                                        <li><a className="dropdown-item" href="#">উপস্থাপনা</a></li>
                                        <li><a className="dropdown-item" href="#">আরো দেখুন...</a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container mt-5">


                    {
                            activities.map(activity => <SingleActivity
                                key={activity._id}
                                activity={activity}
                                refetch={refetch}
                                isLoading={isLoading}
                            ></SingleActivity>)
                        }

                        

                    </section>



                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default StudentActivities;