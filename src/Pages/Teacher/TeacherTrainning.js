import React from 'react';
import TeacherAside from '../../components/TeacherAside';
import ChatBot from '../../Shared/Popup';

const TeacherTrainning = () => {
    return (
        <div className='container'>
            <div className='row '>
                <h1 className="text-center text-primary mt-5">TEACHER TRAINING</h1>
                <TeacherAside></TeacherAside>

                <ChatBot></ChatBot>
            </div>
        </div>

    );
};

export default TeacherTrainning;