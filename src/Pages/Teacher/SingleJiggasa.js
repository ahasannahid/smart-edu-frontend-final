import React from 'react';
import { Link } from 'react-router-dom';

const SingleJiggasa = ({ jiggasa, isLoading }) => {
    const { question, mark, answer,_id } = jiggasa;
    return (
        <div>
            <p className='mt-5'>প্রশ্ন : {question} <span class="ms-5">{mark}</span></p>
            <textarea id="" name="" rows="3" cols="80">{answer}</textarea>
            <h6>* কৃত্রিম বুদ্ধিমত্তা ইঞ্জিন দ্বারা প্রস্তাবিত উত্তর, প্রয়োজনে পরিবর্তন করুন।</h6>

            <Link to={`/updateamarjiggasa/${_id}`}>
                <button className="btn btn-info mt-2">আপডেট</button>
            </Link>
        </div>
    );
};

export default SingleJiggasa;