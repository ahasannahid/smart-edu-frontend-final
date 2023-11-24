import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import TeacherAside from '../../components/TeacherAside';
import ChatBot from '../../Shared/Popup';

const UpdateQA = () => {


    const notify = () => toast("উত্তর আপডেট হয়েছে");
    const storedAnswer = useLoaderData();

    const {question} = storedAnswer;


    console.log(storedAnswer);

    const [answer, setAnswer] = useState(storedAnswer);




    const updateReview = event => {
        event.preventDefault();
        // console.log(review);
        fetch(`http://localhost:5000/repository/${storedAnswer._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(answer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        notify();
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newAnswer = { ...answer };
        newAnswer[field] = value;
        setAnswer(newAnswer);
    }
    return (


        <section className="container mt-5">
            <div className="row ">
                <div className="col-sm-6 col-md-4 border rounded">
                    <TeacherAside></TeacherAside>
                </div>


                <div className="col-sm-6 col-md-8">


                    <div className='mt-4 text-center'>
                        <h1 className='mb-3 text-primary'>উত্তর আপডেট করুন</h1>

                        <h6>প্রশ্ন : {question}</h6>

                        <form className='mt-3' onSubmit={updateReview}>
                            <textarea onChange={handleInputChange} name='answer' rows="4" cols="70" className="textarea textarea-bordered h-24 w-full" placeholder="Update Answer" required></textarea>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="আপডেট" />
                            </div>
                        </form>

                    </div>



                </div>
            </div>
            <ChatBot></ChatBot>
        </section>













    );
};

export default UpdateQA;