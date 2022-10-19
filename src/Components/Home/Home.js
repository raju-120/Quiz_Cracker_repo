import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';


const Home = () => {
    const topics = useLoaderData({});

    
    
    return (
        <div className='px-4 py-16 bg-teal-900 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <h3 className=' p-5 text-2xl font-semibold text-white'>Welcome to the educational web-site.  </h3>
            <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 quiz-topic mt-10 flex justify-between'>
                {
                    topics.data.map(topic => <QuizTopics
                    key={topic.id}
                    topic={topic}
                    
                    >

                    </QuizTopics>)
                }
            </div>
        </div>
    );
};

export default Home;