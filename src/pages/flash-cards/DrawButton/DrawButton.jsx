import React from 'react';

const DrawButton = ({ updateCard, wrongAnswer }) => {


    return (
        <div className="flex justify-center">
            <button onClick={updateCard} className="btn">
                Draw Card
            </button>
            <button onClick={wrongAnswer} className='btn'>
                Needs Practice
            </button>
        </div>
    );
};

export default DrawButton;
