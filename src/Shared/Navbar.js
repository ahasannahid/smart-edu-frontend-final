import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  nav-bg">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5 fs-2 " href="/">স্মার্ট শিক্ষা প্লাটফর্ম</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto me-5">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">সাইন ইন</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">যোগাযোগ</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;