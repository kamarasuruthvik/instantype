import React from 'react';
import './Landing.css';
import logo from './../../assets/typewriter.svg';
import Typewriter from 'typewriter-effect';
const Landing=()=>{
    return(
        <div className="landing-container">
            <div data-aos="zoom-out-right" className="landing-left">
                    <h1 className="landing-header">Can you type...</h1>


                    <div className="typewriter-container">
                    <Typewriter
  options={{
    strings: ['Fast?', 'Correct?', 'Quick?'],
    autoStart: true,
    loop: true,
  }}
/>
                    </div>
            </div>
            <div data-aos="zoom-out-left" className="landing-right">
                <img className="typewriter-logo" src={logo} alt="typewriter-img"/>
            </div>
        </div>
    );

}

export default Landing;