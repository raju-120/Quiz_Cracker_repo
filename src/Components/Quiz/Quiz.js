import React from 'react';
import Questions from '../Questions/Questions';

const Quiz = ({quiz}) => {
  const questionData = quiz;
  return (
    <div>
      <h1>Bal chal 
        {
          questionData.map(question => <Questions
          key={question.id}
          question={question}>
            
          </Questions>)
        }</h1>
    </div>
  );
};

export default Quiz;