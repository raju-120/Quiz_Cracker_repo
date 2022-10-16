import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const quizTopics = useLoaderData([]);
    
    return (
        <div>
            <h3 className='home'>Welcome to the educational web-site. </h3>
        </div>
    );
};

export default Home;