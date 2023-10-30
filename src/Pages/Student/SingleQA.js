import React from 'react';

const SingleQA = ({ repository, isLoading }) => {
    const { question, answer } = repository;
    return (
        <div className="shadow-lg rounded-3 p-3">
            <h6>প্রশ্ন : {question}</h6>
            <textarea rows="4" cols="80">{answer}
            </textarea>
        </div>
    );
};

export default SingleQA;