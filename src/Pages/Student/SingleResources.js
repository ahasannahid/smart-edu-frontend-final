import React from 'react';

const SingleResources = ({ resource, isLoading }) => {

    const { title, description } = resource;

    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div class="mt-2 mb-4">
                <button class="btn btn-info">ডাউনলোড {title} </button>
                <button class="btn btn-info ms-3">পাঠ্য পুস্তক</button>
            </div>
        </>
    );
};

export default SingleResources;