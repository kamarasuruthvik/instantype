import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';
const TypingChallengeContainer = (
    {selectedParagraph,
        words,
        wpm,
        characters,
        timeStarted, 
        timeRemaining}
)=>{
    return(
        <div className="typing-challenge-container">
            <div className="details-container">
                  <ChallengeDetailsCard cardName="Words" cardValue={words} />
                  <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                  <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div> 
            <div className="typewriter-container">
                <TypingChallenge 
                selectedParagraph={selectedParagraph}  
                words={words} 
                characters={characters} 
                wpm={wpm} 
                timeStarted={timeStarted}
                timeRemaining={timeRemaining}
                />
            </div>
        </div>
    );
}

export default TypingChallengeContainer;
