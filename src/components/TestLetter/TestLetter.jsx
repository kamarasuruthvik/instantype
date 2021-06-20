import React from 'react';
import './TestLetter.css';

const TestLetter = ({testLetter,status})=>{
    const statusClassName = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",
    }[status];

    return (
        <span className={`test-letter ${statusClassName}`}>
            {testLetter}
        </span>
    );
}

export default TestLetter;