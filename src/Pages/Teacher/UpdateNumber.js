import React, { useState } from 'react';
// import TeacherAside from '../../components/TeacherAside';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import ChatBot from '../../Shared/Popup';
import TeacherClassContentAside from '../../components/TeacherClassContentAside';


const UpdateNumber = () => {


    const notify = () => toast("তথ্য আপডেট হয়েছে");
    const storedData = useLoaderData();

    const { question } = storedData;


    // console.log(storedNumber);

    const [number, setNumber] = useState(storedData.number);
    const [comments, setComments] = useState(storedData.comments);



    const updateActivity = event => {
        event.preventDefault();
        // console.log(review);
        fetch(`http://localhost:5000/activities/${storedData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ number, comments })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        notify();
    }

  



    return (
        <section className="container mt-5">
            <div className="row ">
                <div className="col-sm-6 col-md-4 border rounded">
                    <TeacherClassContentAside></TeacherClassContentAside>
                    {/* <Link to='./teacheractivities'>একটিভিটিস</Link> */}
                </div>


                <div className="col-sm-6 col-md-8">


                    <div className='mt-4 '>
                        <h1 className='mb-3 text-primary'> নাম্বার আপডেট ও মন্তব্য করুন</h1>

                        <h6>প্রশ্ন : {question}</h6>

                        <form onSubmit={updateActivity}>
                            <label htmlFor="numberInput">Number:</label>
                            <input className='form-control' placeholder='Number'
                                type="text"
                                id="numberInput"
                                value={number}
                                onChange={e => setNumber(e.target.value)}
                            />
                            <br/>
                            <br/>

                            <label htmlFor="commentsInput">Comments:</label>
                            <textarea  className='form-control'
                                id="commentsInput"
                                value={comments}
                                onChange={e => setComments(e.target.value)}
                            />
                            
                            <br/>

                            <button className='btn btn-info' type="submit">আপডেট</button>
                        </form>

                    </div>



                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default UpdateNumber;