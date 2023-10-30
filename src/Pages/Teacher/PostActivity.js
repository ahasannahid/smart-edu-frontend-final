import React from 'react';
import toast from 'react-hot-toast';

import ChatBot from '../../Shared/Popup';
import TeacherClassContentAside from '../../components/TeacherClassContentAside';

const PostActivity = () => {


    const handleAddResources = (event) => {

        event.preventDefault();
        const form = event.target;

        const chapterName = form.chapterName.value;
        const question = form.question.value;
        // const answer = form.answer.value;
        // const comments = form.comments.value;
        // const number = form.number.value;

        const activity = {
            chapterName,
            question,
            // answer,
            // comments,
            // number
        }

        fetch('http://localhost:5000/activities', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(activity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`একটিভিটি যোগ হয়েছে`);
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }


    return (


        <section className="container mt-5">
            <div className="row ">
                <div className="col-sm-6 col-md-4">

                <TeacherClassContentAside></TeacherClassContentAside>
                </div>


                <div className="col-sm-6 col-md-8">
                    <h1 className='text-center'>একটিভিটি যোগ করুন</h1>
                    <div className='text-center'>
                        <form onSubmit={handleAddResources}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
                                <textarea rows="4" cols="70" name='chapterName' type="text" placeholder="অধ্যায়" className="input input-bordered input-ghost w-full " required /> <br />

                                <textarea rows="4" cols="70" name='question' type="text" placeholder="প্রশ্ন" className="input input-bordered input-ghost w-full " required /><br />

                                {/* <textarea rows="4" cols="70" name='answer' type="text" placeholder="উত্তর" className="input input-bordered w-full input-ghost "  /><br />

                                <textarea rows="4" cols="70" name='comments' type="text" placeholder="মন্তব্য" className="input input-bordered w-full input-ghost " />

                                <textarea rows="4" cols="70" name='number' type="number" placeholder="নাম্বার" className="input input-bordered w-full input-ghost "  /> */}
                            </div>

                            <div className='text-center mt-2'>
                                <input className='btn btn-success' type="submit" value="একটিভিটি যোগ করুন" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <ChatBot></ChatBot>
        </section>
    );
};

export default PostActivity;