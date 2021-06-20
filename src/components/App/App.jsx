import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const TotalTime=60;
const serviceUrl="http://metaphorpsum.com/paragraphs/1/9";
class App extends React.Component{
    state={
        selectedParagraph: "Hello world!",
        timeStarted: false,
        timeRemaining:60,
        words: 0,
        characters: 0,
        wpm:0

    }
    render(){
        return(
            <div className="app">
                <Nav/>
                <Landing/>
                <ChallengeSection
                selectedParagraph={this.state.selectedParagraph}
                words={this.state.words}
                characters={this.state.characters}
                wpm={this.state.wpm}
                timeRemaining={this.state.timeRemaining}
                timeStarted={this.state.timeStarted}
                />
                <Footer/>
        
            </div>
        );
    }
}

export default App;