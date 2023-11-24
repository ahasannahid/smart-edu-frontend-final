import React from 'react';
import { Link } from 'react-router-dom';

const TeacherAside = () => {
    return (
        <div className="col-sm-6 col-md-4 border rounded">
            <h6 className="mt-3 text-primary"> <i className="fa fa-dashcube text-primary" aria-hidden="true"></i> 
            <Link
                className="text-decoration-none text-dark" to="/teacherDashboard">ড্যাশবোর্ড</Link>
            </h6>

            <h6 className=" mt-4"><i className="fa fa-clone me-2 text-primary" aria-hidden="true"></i><Link
                className="text-decoration-none text-dark" to="/teacherChapter">অধ্যায়</Link></h6>



            {/* <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><Link
                className="text-decoration-none text-dark" to="/teacherQA">প্রশ্ন ও উত্তর</Link></h6> */}

            <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><Link
                className="text-decoration-none text-dark" to="/teacherResources">রিসোর্স</Link></h6>

            <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><Link
                className="text-decoration-none text-dark" to="/leaderBoard">লিডারবোর্ড</Link></h6>

            <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><Link
                className="text-decoration-none text-dark" to="/teacherTraining">ট্রেনিং</Link></h6>

        </div>
    );
};

export default TeacherAside;