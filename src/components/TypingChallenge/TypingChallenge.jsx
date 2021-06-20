import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';

const TypingChallenge =(
    {selectedParagraph,
    words,
    wpm,
    characters,
    timeStarted, 
    timeRemaining,
    testInfo,
    onInputChange}
    )=>{
    console.log(testInfo);
    return(
        <div className="typing-challenge">
            <div className="timer-container">
    <p className="timer">00:
                        {timeRemaining>9 ? timeRemaining: `0${timeRemaining}`}</p>
                <p className="timer-info">{
                    !timeStarted&&"Start typing to start the test"
                }
                </p>
                
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                    {testInfo.map((individualLetterInfo,index) => (
                            <TestLetter 
                            index={index}
                            testLetter={individualLetterInfo.testLetter}
                            status={individualLetterInfo.status}
                            />
                        ))}
                    </div>
                </div>
                <div className="textarea-right">
                <textarea  
                onChange={(e)=>onInputChange(e.target.value)}
                className="textarea" placeholder="textarea">

                </textarea>
                </div>
            </div>
        </div>

    );
}

export default TypingChallenge;