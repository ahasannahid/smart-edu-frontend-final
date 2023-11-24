import React from 'react';
import resources from './img/resources.jpg';
import question from './img/question.avif';
import repo from './img/repo.jpg';
import activities from './img/activities.avif';
import chart1 from './img/chart1.png';
import monthly from './img/monthly.png';
import course from './img/course progress.png';
import './student.css'
import StudentAside from '../../components/studentAside';
import ChatBot from '../../Shared/Popup';




const StudentDashBoard = () => {
    return (
        <section className="container mt-5">
            <h1 className='text-primary text-center mb-3'>শিক্ষার্থী ড্যাশবোর্ড</h1>
            <div className="row ">
                {/* <div className="col-sm-6 col-md-4 border rounded">
                    <h6 className="mt-3 text-primary"> <i className="fa fa-dashcube text-primary" aria-hidden="true"></i> ড্যাশবোর্ড
                    </h6>

                    <h6 className=" mt-4"><i className="fa fa-clone me-2 text-primary" aria-hidden="true"></i><a
                        className="text-decoration-none text-dark" href="./courses.html">অধ্যায়</a></h6>



                    <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><a
                        className="text-decoration-none text-dark" href="./repo.html">রিপোজিটরি</a></h6>

                    <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><a
                        className="text-decoration-none text-dark" href="./resources.html">রিসোর্স</a></h6>
                    <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><a
                        className="text-decoration-none text-dark" href="./leaderBoard.html">লিডারবোর্ড</a></h6>

                </div> */}
                <StudentAside></StudentAside>

                <div className="col-sm-6 col-md-8">

                    <div className="row row-cols-1  row-cols-md-4 g-2 mb-4">
                        <div className="col">
                            <div className="card shadow-lg">
                                <img src={resources} className="card-img-top avatar shadow-lg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center"><a className="text-decoration-none"
                                        href="/resources">রিসোর্স</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-lg">
                                <img src={question} className="card-img-top avatar" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center"><a className="text-decoration-none"
                                        href="/qa">প্রশ্ন ও উত্তর</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-lg">
                                <img src={repo} className="card-img-top avatar" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center"><a className="text-decoration-none"
                                        href="/repo">রিপোজিটরি</a></h5>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-lg">
                                <img src={activities} className="card-img-top avatar" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center"><a className="text-decoration-none"
                                        href="/chapter">অধ্যায়</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
           
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={chart1} className="card-img-top chart" alt="..."/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={monthly} className="card-img-top chart" alt="..."/>

                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={course} className="card-img-top chart" alt="..."/>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default StudentDashBoard;