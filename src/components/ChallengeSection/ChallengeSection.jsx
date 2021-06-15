import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';
const ChallengeSection=()=>{
    return (
         <div className="challenge-section-container">
            <h1 className="challenge-section-header"  data-aos="fade-down">
                    Take a speed test now!
            </h1>
            <TestContainer words={4} characters={14} wpm={20} />
         </div>
    );
}

export default ChallengeSection;