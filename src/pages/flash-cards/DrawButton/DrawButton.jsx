import React from 'react';

const DrawButton = ({ updateCard }) => {


    return (
        <div className="flex justify-center">
            <button
                onClick={updateCard}
                className="btn"
            >
                Draw Card
            </button>
            <button className='btn'>Wrong Answer</button>
        </div>
    );
};

export default DrawButton;
