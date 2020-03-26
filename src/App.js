import React from 'react';
import './App.css';
import questionData from './question-data.json';
import Question from './Question.js';

function App() {

  return (
    <div className="App">
        <h1> Jeopardy </h1>
        <div className="board">
            {/* Column - 1 (HISTORY) */}
            <div className="column">
                <Question 
                    point={"Hello"}
                    question={"world"}
                    answer={"! :)"}/>
                <Question 
                    point={"Hello"}
                    question={"world"}
                    answer={"! :)"}/>
                <Question 
                    point={"Hello"}
                    question={"world"}
                    answer={"! :)"}/>
            </div>
            {/* Column - 2 (SPORTS) */}
            <div className="column">
                <Question 
                    point={"Hello"}
                    question={"world"}
                    answer={"! :)"}/>
                <Question 
                    point={"Hello"}
                    question={"world"}
                    answer={"! :)"}/>
                <Question 
                    point={"Hello"}
                    question={"world"}
                    answer={"! :)"}/>
            </div>
            {/* Column - 3 (TECH) */}
            <div className="column">
                <Question 
                    point={"Hello"}
                    question={"world"}
                    answer={"! :)"}/>
                <Question 
                    point={"Hello"}
                    question={"world"}
                    answer={"! :)"}/>
                <Question 
                    point={"Hello"}
                    question={"world"}
                    answer={"! :)"}/>
            </div>
        </div>
    </div>
  );
}

export default App;
