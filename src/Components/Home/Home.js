import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
//import './Home.css'

const Home = () => {
    const topics = useLoaderData({});

    const handleQuiz = topics =>{
        console.log(topics);
    }
    
    return (
        <div className='bg-slate-600 rounded-md'>
            <h3 className=' p-5 text-2xl font-semibold text-white'>Welcome to the educational web-site. {topics.data.length} </h3>
            <div className='quiz-topic mt-10 flex justify-between'>
                {
                    topics.data.map(topic => <QuizTopic
                    key={topic.id}
                    topic={topic}
                    handleQuiz={handleQuiz}>

                    </QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;