import React from 'react';
import './TryAgain.css';

const TryAgain =({words,characters,wpm, startAgain})=>{
    const url = "https://github.com/kamarasuruthvik";
    return(
        <div className="try-again-container">
            <h1>
                Test-Results
            </h1>
            <div className="result-container">
                <p>
                    <b>
                        Characters:
                    </b>
                    {characters}
                </p>
                <p>
                    <b>
                        words:
                    </b>
                    {words}
                </p>
                <p>
                    <b>
                        wpm:
                    </b>
                    {wpm}
                </p>

               
            </div>
            <div>
                    <button className="end-button start-again-btn" onClick={()=>startAgain()}>
                        Re-Try
                    </button>
                    <button className="end-button share-btn" onClick={()=>{

                        window.open(
                        "https://www.facebook.com/share.php?u=github.com",
                         "facebook-share-dialogue",
                         "width-800,height-600")
                    }
                        
                    }>
                        Share
                    </button>
                    <button className="end-button tweet-btn"
                    onClick={() =>
                        window.open(
                            "https://twitter.com/intent/tweet?text=Check%20this%20out%20" +
                                url,
                            "Twitter",
                            "width=800,height=600"
                        )
                    }>
                       Tweet
                    </button>
                </div>
        </div>
    );
}
export default TryAgain;