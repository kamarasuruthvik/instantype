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
           <h2 className="name">Ruthvik</h2>
            <h3 className="title">Web Developer</h3>
        </div>
        <div className="right-container">
        <div className="info">
            <h3>Hey There!</h3>
        </div>
        <div className="social-contianer">
            <p>If you loved this project and would like to contribute:
            </p>
             <a href="https://github.com/kamarasuruthvik" className="source"
            target="_blank">
                source code!
            </a> 
            <p>You can follow me on:</p>
            <div className="icons-container">
            <a href="https://github.com/kamarasuruthvik" target="_blank" rel="noreferrer" className="icons Github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/ruthvik-kamarasu-984a23166/" target="_blank" rel="noreferrer"  className="icons LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/blazingruthvik"  target="_blank" rel="noreferrer" className="icons Twitter">
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