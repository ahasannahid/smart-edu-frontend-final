import React from 'react';
import { Link } from 'react-router-dom';

const ClassContentAside = () => {
    return (
        <div className="">
            <h4 className="card-title text-primary ms-3">জাহানারা ইমাম <i className="fa fa-caret-down"
                aria-hidden="true"></i></h4>
            <ul>
                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    to="/studentsDashboard"
                    className="text-decoration-none text-dark">ড্যাশবোর্ড</Link>
                </li>

                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    to="/classContent"
                    className="text-decoration-none text-dark">ক্লাস উপকরণ</Link>
                </li>

                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    className="text-decoration-none text-dark" to="/studentActivity">
                    একটিভিটিস</Link>
                </li>

                {/* <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    className="text-decoration-none text-dark" to="/qa">
                    প্রশ্ন ও উত্তর</Link>
                </li> */}


                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    className="text-decoration-none text-dark"
                    to="/question" >আমার জিজ্ঞাসা</Link>
                </li>

                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    className="text-decoration-none text-dark"
                    to="/chapter" >অধ্যায়</Link>
                </li>


            </ul>
        </div>
    );
};

export default ClassContentAside;