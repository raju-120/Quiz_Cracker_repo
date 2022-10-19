import React from 'react';

const Questions = ({question}) => {
    const {correctAnswer } = question;
    return (
        <div>
            <h1>Question {correctAnswer}</h1>
        </div>
    );
};

export default Questions;