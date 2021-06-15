import React from 'react';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <Nav/>
                <Landing/>
                <ChallengeSection/>
                <Footer/>
        
            </div>
        );
    }
}

export default App;