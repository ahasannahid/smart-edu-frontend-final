import React from 'react';
import { Link } from 'react-router-dom';

const TeacherSingleQA = ({ repository, isLoading }) => {
    const { question, answer, _id } = repository;
    return (
        <div className="rounded-3 p-3">
            <h6>প্রশ্ন : {question}</h6>
            <textarea rows="4" cols="80">{answer}
            </textarea> <br />
            {/* <button className='btn btn-info mt-2'>আপডেট</button> */}

            <Link to={`/update/${_id}`}>
                <button className="btn btn-info mt-2">আপডেট</button>
            </Link>
        </div>





    );
};

export default TeacherSingleQA;