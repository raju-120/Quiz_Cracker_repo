import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
  const quizData = useLoaderData();
  return (
    <div>
      {
        quizData.map( quiz => <Questions
        key={quiz.id}
        quiz={quiz}></Questions> )
      }
        
    </div>
  );
};

export default Quiz;