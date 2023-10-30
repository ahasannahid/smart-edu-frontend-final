import React from 'react';
import toast from 'react-hot-toast';
import TeacherAside from '../../components/TeacherAside';
import ChatBot from '../../Shared/Popup';

const AddResources = () => {


    const handleAddResources = (event) => {

        event.preventDefault();
        const form = event.target;

        const resourceId = form.resourceId.value;
        const title = form.title.value;
        const description = form.description.value;
        const chapterName = form.chapterName.value;

        const resource = {
            resourceId,
            title,
            description,
            chapterName
        }

        fetch('http://localhost:5000/resources', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(resource)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`রিসোর্স এড হয়েছে`);
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }


    return (


        <section className="container mt-5">
            <div className="row ">
                <TeacherAside></TeacherAside>


                <div className="col-sm-6 col-md-8">
                    <h1 className='text-center'>Add Resources</h1>
                    <div className='text-center'>
                        <form onSubmit={handleAddResources}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
                                <textarea rows="4" cols="70" name='resourceId' type="number" placeholder="resourceId" className="input input-bordered input-ghost w-full " required /> <br />

                                <textarea rows="4" cols="70" name='title' type="text" placeholder="title" className="input input-bordered input-ghost w-full " required /><br />

                                <textarea rows="4" cols="70" name='description' type="text" placeholder="description" className="input input-bordered w-full input-ghost " required /><br />

                                <textarea rows="4" cols="70" name='chapterName' type="text" placeholder="chapterName" className="input input-bordered w-full input-ghost " required />
                            </div>

                            <div className='text-center mt-2'>
                                <input className='btn btn-success' type="submit" value="Add Your Resource" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <ChatBot></ChatBot>
        </section>



























    );
};

export default AddResources;