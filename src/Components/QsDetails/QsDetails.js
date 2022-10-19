import React from 'react';

const QsDetails = ({qsDetails}) => {
    const qsList = qsDetails;
    return (
        <div>
            <h2>Question List: {qsList.length}</h2>
        </div>
    );
};

export default QsDetails;