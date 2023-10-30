import React from 'react';
import './shared.css';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start  mt-5">
            {/* <!-- Section: Links  --> */}
            <section className="nav-bg">
                <div className="container text-center text-md-start mt-5">
                    {/* <!-- Grid row --> */}


                    {/* <!-- Grid column --> */}
                    <div className="d-flex justify-content-around mx-auto mb-md-0 pt-3 mt-4">
                        {/* <!-- Links --> */}
                        <p><i className="fa fa-location-arrow" aria-hidden="true"></i> সিএসই ডিপার্টমেন্ট, ঢাবি, বাংলাদেশ</p>
                        <p>
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            info@example.com
                        </p>
                        <p><i className="fa fa-phone" aria-hidden="true"></i> +8801927349274</p>

                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grd row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            
            <div className="text-center footer-bg-dark text-dark p-3 copywright">
                © 2023 Copyright:
                <a className="text-decoration-none text-dark" href="https://D&D LAB/">DnD Lab</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    );
};

export default Footer;