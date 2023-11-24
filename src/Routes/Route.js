import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Main from "../Pages/Layout/Main";
import Login from "../Shared/Login";
import Contact from "../Shared/Contact";
import TeacherDashBoard from './../Pages/Teacher/TeacherDashBoard';
import StudentDashBoard from "../Pages/Student/StudentDashBoard";
// import Repository from './../Pages/Student/Repository';
import Resource from './../Pages/Student/Resource';
import Chapter from "../Pages/Student/Chapter";
import LeaderBoard from "../Shared/LeaderBoard";
import ClassContent from "../Pages/Student/ClassContent";
import QA from "../Pages/Student/QA";
import Question from "../Pages/Student/Question";
import StudentActivities from "../Pages/Student/StudentActivities";
import AddResources from "../Pages/Teacher/AddResources";
import TeacherChapter from "../Pages/Teacher/TeacherChapter";
import TeacherResources from "../Pages/Teacher/TeacherResources";
import TeacherQA from "../Pages/Teacher/TeacherQA";
import TeacherTrainning from "../Pages/Teacher/TeacherTrainning";
import UpdateQA from "../Pages/Teacher/UpdateQA";
import TeacherClassContent from "../Pages/Teacher/TeacherClassContent";
import TeacherActivities from "../Pages/Teacher/TeacherActivities";
import UpdateNumber from "../Pages/Teacher/UpdateNumber";
import PostActivity from "../Pages/Teacher/PostActivity";
import Amarjiggasa from "../Pages/Teacher/Amarjiggasa";
import UpdateAmarJiggasa from "../Pages/Teacher/UpdateAmarJiggasa";
import SubmitAnswer from "../Pages/Teacher/SubmitAnswer";
import RelatedContent from "../Shared/RelatedContent";
import RelatedContentNews from "../Shared/RelatedContentNes";
import StudentRelatedContent from "../Shared/StudentRelatedContent";
import StudentRelatedContentNews from "../Shared/StudentRelatedContentNews";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            
            {
                path: '/studentsDashboard',
                element: <StudentDashBoard></StudentDashBoard>
            },
            {
                path: '/chapter',
                element: <Chapter></Chapter>
            },
            // {
            //     path: '/question',
            //     element: <Repository></Repository>
            // },
            {
                path: '/resources',
                element: <Resource></Resource>
            },
            {
                path: '/leaderBoard',
                element: <LeaderBoard></LeaderBoard>
            },
            {
                path: '/classContent',
                element: <ClassContent></ClassContent>
            },
        
            {
                path: '/qa',
                element: <QA></QA>
            },
            {
                path: '/dashBoard',
                element: <StudentDashBoard></StudentDashBoard>
            },
            {
                path: '/classContent',
                element: <ClassContent></ClassContent>
            },
            {
                path: '/question',
                element: <Question></Question>
            },
            {
                path: '/studentActivity',
                element: <StudentActivities></StudentActivities>
            },
        
            {
                path: '/addresource',
                element: <AddResources></AddResources>
            },
            {
                path: '/teacherDashboard',
                element: <TeacherDashBoard></TeacherDashBoard>
            },

            {
                path: '/teacherChapter',
                element: <TeacherChapter></TeacherChapter>
            },
        
            {
                path: '/teacherResources',
                element: <TeacherResources></TeacherResources>
            },
        
            {
                path: '/teacherQA',
                element: <TeacherQA></TeacherQA>
            },
            {
                path: '/teacherTraining',
                element: <TeacherTrainning></TeacherTrainning>
            },

            {
                path: '/update/:id',
                element: <UpdateQA></UpdateQA>,
                loader: ({params}) => fetch(`http://localhost:5000/repository/${params.id}`)
            },

            {
                path: '/teacherclassContent',
                element: <TeacherClassContent></TeacherClassContent>,
                
            },
            {
                path: '/addactivity',
                element: <PostActivity></PostActivity>,
                
            },
            {
                path: '/teacheractivities',
                element: <TeacherActivities></TeacherActivities>,
                
            },


            {
                path: '/updateNumber/:id',
                element: <UpdateNumber></UpdateNumber>,
                loader: ({params}) => fetch(`http://localhost:5000/activities/${params.id}`)
            },
            {
                path: '/amarjiggasa',
                element: <Amarjiggasa></Amarjiggasa>
                
            },

            {
                path: '/updateamarjiggasa/:id',
                element: <UpdateAmarJiggasa></UpdateAmarJiggasa>,
                loader: ({params}) => fetch(`http://localhost:5000/amarjiggasa/${params.id}`)
                
            },

            {
                path: '/submitAnswer/:id',
                element: <SubmitAnswer></SubmitAnswer>,
                loader: ({params}) => fetch(`http://localhost:5000/activities/${params.id}`)
            },
            {
                path: '/relatedContact',
                element: <RelatedContent></RelatedContent>,
                
            },
            {
                path: '/relatedContactnews',
                element: <RelatedContentNews></RelatedContentNews>,
                
            },

            {
                path: '/studentrelatedContact',
                element: <StudentRelatedContent></StudentRelatedContent>,
                
            },
            {
                path: '/studentrelatedContactnews',
                element: <StudentRelatedContentNews></StudentRelatedContentNews>,
                
            },
           
        
        ]
    },
    
])

export default router;