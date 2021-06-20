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
        wpm:0,
        testInfo:[],

    };
    
    componentDidMount(){

            // fetch(serviceUrl).then(response=>response.text()).then(
            //     (data)=>{
            //         this.setState( {selectedParagraph: data}); 
            //     }
            // );

          const selectedParagraphArray= this.state.selectedParagraph.split("");
          const testInfo = selectedParagraphArray.map(selectedLetter=>{
              return {
                testLetter: selectedLetter,
                status: "notAttempted",
              }
              
          }) 
          this.setState({testInfo});
        }

        

        startTimer= ()=>{
            this.setState({timeStarted: true});
            const timer= setInterval(()=>{
                if(this.state.timeRemaining>0){
                    const timeSpent= TotalTime-this.state.timeRemaining;
                    const wpm= timeSpent>0 ? (this.state.words/timeSpent)*TotalTime
                    : 0;
                    
                    this.setState({
                        timeRemaining: this.state.timeRemaining-1,
                        wpm: parseInt(wpm),
                    })
                }else{
                    clearInterval(timer);
                }
                
            },1000)
        }

        handleUserInput= (inputValue) =>{
            if(!this.state.timeStarted)
                this.startTimer();
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
                testInfo={this.state.testInfo}
                onInputChange={this.handleUserInput}
                />
                <Footer/>
        
            </div>
        );
    }
        
}

export default App;