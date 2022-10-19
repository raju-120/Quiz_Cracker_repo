import React from 'react';
import Questions from '../Questions/Questions';

const Quiz = ({quiz}) => {
  const questionData = quiz;
  return (
    <div>
      
        {
          questionData.map(question => <Questions
          key={question.id}
          question={question}>
            
          </Questions>)
        }
    </div>
  );
};

export default Quiz;