import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';
const ChallengeSection=({selectedParagraph,
                        words,
                        wpm,
                        characters,
                        timeStarted, 
                        timeRemaining,
                        testInfo})=>{
    return (
         <div className="challenge-section-container">
            <h1 className="challenge-section-header"  data-aos="fade-down">
                    Take a speed test now!
            </h1>
            <TestContainer
            selectedParagraph={selectedParagraph}  
            words={words} 
            characters={characters} 
            wpm={wpm} 
            timeStarted={timeStarted}
            timeRemaining={timeRemaining}
            testInfo={testInfo}
            />
         </div>
    );
}

export default ChallengeSection;