import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import './TypingChallengeContainer.css';
const TypingChallengeContainer = ({words,characters,wpm})=>{
    return(
        <div className="typing-challenge-container">
            <div className="details-container">
                  <ChallengeDetailsCard cardName="Words" cardValue={words} />
                  <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                  <ChallengeDetailsCard cardName="Wpm" cardValue={wpm} />
            </div> 
        </div>
    );
}

export default TypingChallengeContainer;