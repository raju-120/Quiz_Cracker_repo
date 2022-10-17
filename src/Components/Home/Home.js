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
        <div>
            <h3 className=' mt-10 text-2xl font-semibold'>Welcome to the educational web-site. {topics.data.length} </h3>
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