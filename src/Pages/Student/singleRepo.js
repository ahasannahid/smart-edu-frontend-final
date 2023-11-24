import React from 'react';

const SingleRepo = ({ repository, isLoading }) => {
    const { question, answer } = repository;
    return (
        
            <div className="shadow rounded-3 p-3 mx-auto">
                <h6>প্রশ্ন : {question}</h6>
                <textarea rows="4" cols="150">{answer}
                </textarea>
            </div>
        
    );
};

export default SingleRepo;