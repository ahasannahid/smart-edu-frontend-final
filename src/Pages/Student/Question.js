import React from 'react';
import ClassContentAside from '../../components/ClassContentAside';
import jahanara from './img/jahanaraImam.jpg'
import ChatBot from '../../Shared/Popup';
import Repository from './Repository';

const Question = () => {
    return (
        <section className="container mt-5">
            <h1 className='text-primary text-center mb-3'>আমার জিজ্ঞাসা</h1>
            <div className="row">
                <div className="col-sm-12 col-md-4 ">
                    <div className=" mb-3">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <ClassContentAside></ClassContentAside>
                                <div className="col-md-6">
                                    <img src={jahanara}
                                        className="img-fluid mt-52img-jahanaraImam w-100 rounded-4" alt="..."/>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="col-sm-12 col-md-8 border rounded-2">

                    <div>
                        <p>এটি কোন বিষয় নিয়ে লেখা হয়েছে? <span className="ms-5">৮</span></p>
                        <p>লেখাটি কোন সময়ের ও কয়দিনের ঘটনা? <span className="ms-5">৭</span></p>
                        <p>লেখক কী কী কাজের উল্লেখ করেছেন? <span className="ms-5">৬</span></p>
                    </div>


                    <input type="text" className="w-75 mb-2 form-control" placeholder="প্রশ্নটি এখানে লিখুন...."/>
                        <button className="btn btn-outline-primary">সাবমিট</button>
                </div>
            </div>
            <Repository></Repository>
            <ChatBot></ChatBot>
        </section>
    );
};

export default Question;