import React from 'react';
import { Link } from 'react-router-dom';

const StudentAside = () => {
    return (
        <div className="col-sm-6 col-md-4 border rounded">
            <h6 className="mt-3 text-primary"> <i className="fa fa-dashcube text-primary" aria-hidden="true"></i> 
            <Link
                className="text-decoration-none text-dark" to="/studentsDashboard">ড্যাশবোর্ড</Link>
            </h6>

            <h6 className=" mt-4"><i className="fa fa-clone me-2 text-primary" aria-hidden="true"></i><Link
                className="text-decoration-none text-dark" to="/chapter">অধ্যায়</Link></h6>



            <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><Link
                className="text-decoration-none text-dark" to="/repo">আমার জিজ্ঞাসা</Link></h6>

            <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><Link
                className="text-decoration-none text-dark" to="/resources">রিসোর্স</Link></h6>
                
            <h6 className="text-primary mt-4"><i className="fa fa-clone me-2" aria-hidden="true"></i><Link
                className="text-decoration-none text-dark" to="/leaderBoard">লিডারবোর্ড</Link></h6>

        </div>
    );
};

export default StudentAside;