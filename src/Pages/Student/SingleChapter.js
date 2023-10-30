import React from 'react';
import './student.css'
import { Link } from 'react-router-dom';

const SingleChapter = ({ chapter, isLoading }) => {
    const { chaptername, description, img } = chapter;

    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div className="card chapter-height">
            <img src={img} className="card-img-top text-book-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{chaptername}</h5>
                <p className="card-text">{description.slice(0, 200)}</p>
            </div>
            <Link className='btn btn-primary' to="/classContent">বিস্তারিত দেখুন</Link>
        </div>
    );
};

export default SingleChapter;
