import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css'
const TestContainer = ({words,
characters, wpm})=>{
    return(
        <div className="test-container">
            <TypingChallengeContainer words={words} characters={characters} wpm={wpm} />
        </div>
    );
}

export default TestContainer;