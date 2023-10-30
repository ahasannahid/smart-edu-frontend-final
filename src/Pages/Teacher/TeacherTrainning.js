import React from 'react';
import TeacherAside from '../../components/TeacherAside';
import ChatBot from '../../Shared/Popup';

const TeacherTrainning = () => {
    return (
        <div className='row container'>
            <TeacherAside></TeacherAside>
            <h1>Teacher Training</h1>
            <ChatBot></ChatBot>
        </div>
    );
};

export default TeacherTrainning;