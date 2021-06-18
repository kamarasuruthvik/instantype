import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css'
const TestContainer = ({words,
characters, wpm})=>{
    const timeRemaining= 30;

    return(
        <div className="test-container">
            {
                timeRemaining>0? (
                    <TypingChallengeContainer words={words} characters={characters} wpm={wpm} />
                ):
                (
                   <TryAgain words={words} characters={characters} wpm={wpm} />
                )
            }
            
        </div>
    );
}

export default TestContainer;