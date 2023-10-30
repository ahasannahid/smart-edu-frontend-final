import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import ChatBot from '../../Shared/Popup';
import ClassContentAside from '../../components/ClassContentAside';


const SubmitAnswer = () => {


    const notify = () => toast("উত্তর সাবমিট হয়েছে");
    const storedData = useLoaderData();

    const { question } = storedData;


    
    const [answer, setAnswer] = useState(storedData.answer);



    const submitAnswer = event => {
        event.preventDefault();
        // console.log(review);
        fetch(`http://localhost:5000/activitiesStudent/${storedData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({  answer })
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
                    <ClassContentAside></ClassContentAside>
                    {/* <Link to='./teacheractivities'>একটিভিটিস</Link> */}
                </div>


                <div className="col-sm-6 col-md-8">


                    <div className='mt-4 '>
                        <h1 className='mb-3'> Submit Answer</h1>

                        <h6>প্রশ্ন : {question}</h6>

                        <form onSubmit={submitAnswer}>
                            
                           

                            <label htmlFor="commentsInput">Answer:</label>
                            <textarea  className='form-control'
                                id="commentsInput"
                                value={answer}
                                onChange={e => setAnswer(e.target.value)}
                            />
                            
                            <br/>

                            <button className='btn btn-info' type="submit">সাবমিট</button>
                        </form>

                    </div>



                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default SubmitAnswer;