import React from 'react';
import QsDetails from '../QsDetails/QsDetails';

const Questions = ({quiz}) => {
    const questions = quiz.questions;
    return (
        <div>
            {
                questions.map( qsDetail => <QsDetails
                key={qsDetail.id}
                qsDetails={qsDetail}>

                </QsDetails> )
            }
        </div>
    );
};

export default Questions;