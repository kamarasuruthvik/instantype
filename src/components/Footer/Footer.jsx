import React from 'react';
import './Footer.css';
import Avatar from 'avataaars';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faLinkedin,faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer=()=>{
    return (
        <div className="Footer-container">
            <div className="frame">
            <div className="left-container">
            <Avatar
                avatarStyle='Circle'
                topType='ShortHairShortWaved'
                accessoriesType='Round'
                hairColor='Black'
                facialHairType='Blank'
                clotheType='ShirtCrewNeck'
                clotheColor='PastelYellow'
                eyeType='Happy'
                eyebrowType='DefaultNatural'
                mouthType='Default'
                skinColor='Brown'
            />
           <h2>I am Ruthvik</h2>
            <h3>A web Developer</h3>
        </div>
        <div className="right-container">
        <div className="info">
            <h3>Hey There!</h3>
        </div>
        <div className="social-contianer">
            <p>If you loved this project and would like to contribute:
            </p>
             <a href="https://github.com/kamarasuruthvik" className="link-container" rel="github-link"
            target="_blank">
                Checkout my github here!
            </a> 
            <p>You can follow me on:</p>
            <div className="icons-container">
            <a href="https://github.com/kamarasuruthvik" rel="github" className="icons Github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/ruthvik-kamarasu-984a23166/" rel="linkedIn" className="icons LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/blazingruthvik" rel="Twitter" className="icons Twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            </div>
        </div>
        </div>
            
            </div>
        </div>
    );
}

export default Footer;