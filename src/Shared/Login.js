import React from 'react';
import loginImage from './assets/login.jpg';
import './shared.css';
import { Link } from 'react-router-dom';
import ChatBot from './Popup';

const Login = () => {

   

    return (
        <div className="container row mx-auto mt-5 border border-primary rounded-2">
            <div className="col-md-6">
                <img src={loginImage} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
                <form className="row g-3  mx-auto mt-2 ">
                    <div className="col-md-8">
                        <label for="inputEmail4" className="form-label">ইমেইল</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-8">
                        <label for="inputPassword4" className="form-label">পাসওয়ার্ড</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>

                    <div className="col-12 mb-5">
                        <Link to="/teacherDashboard" type="submit" className="btn btn-primary">শিক্ষক সাইন ইন</Link>
                        <Link to="/studentsDashboard" type="submit" className="btn btn-primary ms-3">শিক্ষার্থী সাইন ইন</Link>
                    </div>
                </form>
            </div>

            <ChatBot></ChatBot>

        </div>
    );
};

export default Login;