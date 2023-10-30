import React from 'react';
import lrdimg from './assets/lrd.jpeg'
import StudentAside from '../components/studentAside';
import ChatBot from './Popup';

const LeaderBoard = () => {
    return (

        <section className="container mt-5">
            <div className="row ">
               <StudentAside></StudentAside>

                <div className="col-sm-6 col-md-8">
                    <h4 className="mb-3">শিক্ষার্থী লিডারবোর্ড</h4>
                    <select name="অধ্যায়" id="অধ্যায়" className="mb-3 ms-3 p-2">
                        <option value="অধ্যায়">অধ্যায়</option>
                        <option value="দিনগুলি">একাত্তরের দিনগুলি</option>
                        <option value="bangla">জাহানারা ইমাম</option>
                        <option value="english">শহীদ শাফী ইমাম রুমী</option>
                        <option value="math">বাংলাদেশের স্বাধীনতা যুদ্ধ</option>
                    </select>
                    <img src={lrdimg} className="img-fluid" alt="" />
                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default LeaderBoard;