import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css'
const TestContainer = (
    {selectedParagraph,
    words,
    wpm,
    characters,
    timeStarted, 
    timeRemaining,
    testInfo,
    onInputChange}
    )=>{

    return(
        <div className="test-container">
            {
                timeRemaining>0? (
                    <TypingChallengeContainer 
                    selectedParagraph={selectedParagraph}  
                    words={words} 
                    characters={characters} 
                    wpm={wpm} 
                    timeStarted={timeStarted}
                    timeRemaining={timeRemaining} 
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                    />
                ):
                (
                   <TryAgain words={words} characters={characters} wpm={wpm} />
                )
            }
            
        </div>
    );
}

export default TestContainer;