import React from 'react';
import { Link } from 'react-router-dom';

const TeacherClassContentAside = () => {
    return (
        <div className="">
            <h4 className="card-title text-primary ms-3">জাহানারা ইমাম <i className="fa fa-caret-down"
                aria-hidden="true"></i></h4>
            <ul>
                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    to="/teacherDashboard"
                    className="text-decoration-none text-dark">ড্যাশবোর্ড</Link>
                </li>

                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    to="/teacherclassContent"
                    className="text-decoration-none text-dark">ক্লাস উপকরণ</Link>
                </li>

                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    className="text-decoration-none text-dark" to="/teacheractivities">
                    একটিভিটিস</Link>
                </li>


                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    className="text-decoration-none text-dark"
                    to="/amarjiggasa" >আমার জিজ্ঞাসা</Link>
                </li>

                <li className="py-2"><i className="fa fa-caret-right" aria-hidden="true"></i> <Link
                    className="text-decoration-none text-dark"
                    to="/teacherChapter" >অধ্যায়</Link>
                </li>


            </ul>
        </div>
    );
};


export default TeacherClassContentAside;