import React from 'react';
import { BeakerIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
//import './QuizTopic.css';

const QuizTopic = ({topic}) => {
    const {id, name, logo} = topic;
    return (
        <div className='m-5 p-2 border-2 border-sky-500 rounded-md'>
            
            <img className='border-2 border-emerald-500 rounded-md' src={logo} alt="" />
            <div className='mt-5 mb-3 text-xl'>
                
                <h3>{name} </h3>
                
            </div>

            <button className='flex bg-amber-400 w-full rounded-lg p-2'>
                <div className='text-xl  m-auto w-50'>

                    Quiz

                </div>
                { <div className='m-1 '>
                    <ArrowRightIcon className="h-6 w-6 text-blue-500"/>
                </div> }
            </button>
            
        </div>
        
    );
};

export default QuizTopic;