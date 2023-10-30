import React from 'react';
import { Link } from 'react-router-dom';

const SingleteacherActivity = ({ activity, isLoading }) => {

    const { question, img, number, answer, comments, _id } = activity;

    return (
        <div className='my-2'>
            <img src={img} alt='' className='img-fluid my-3' />
            <h5>প্রশ্ন : {question}</h5>
            <div className="form-floating my-4">
                <textarea className="form-control" placeholder="প্রশ্নের উত্তর এখানে লিখো-" id="floatingTextarea2"
                >{answer}</textarea>
                <label for="floatingTextarea2">উত্তর :</label>
            </div>


            <div className="row mb-3" >
                <div className="form-floating mt-2 col-3">
                    <textarea className="form-control" id="floatingTextarea2"
                    >{number}</textarea>
                    <label for="floatingTextarea2">প্রাপ্ত নাম্বার :</label>
                </div>

                <div className="form-floating mt-2 col-9">
                    
                        <textarea className="form-control" id="floatingTextarea2" >{comments}</textarea>
                        <label for="floatingTextarea2">মন্তব্য</label>
                    
                </div>

            </div>

            <Link to={`/updateNumber/${_id}`}>
                <button className="btn btn-info mt-2 me-2">নাম্বার আপডেট এবং মন্তব্য করুন</button>
            </Link>

            {/* <Link to={`/updateNumber/${_id}`}>
                <button className="btn btn-info mt-2">Update Comments</button>
            </Link> */}
        </div>
    );
};

export default SingleteacherActivity;
