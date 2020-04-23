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
                <h2>{questionData.topics[0]}</h2>
                <Question 
                    point={"100"}
                    question={questionData.questions[0].clue}
                    answer={questionData.questions[0].answer}/>
                <Question 
                    point={"200"}
                    question={questionData.questions[1].clue}
                    answer={questionData.questions[1].answer}/>
                <Question 
                    point={"300"}
                    question={questionData.questions[2].clue}
                    answer={questionData.questions[2].answer}/>
            </div>
            {/* Column - 2 (SPORTS) */}
            <div className="column">
                <h2>{questionData.topics[1]}</h2>
                <Question 
                    point={"100"}
                    question={questionData.questions[3].clue}
                    answer={questionData.questions[3].answer}/>
                <Question 
                    point={"200"}
                    question={questionData.questions[4].clue}
                    answer={questionData.questions[4].answer}/>
                <Question 
                    point={"300"}
                    question={questionData.questions[5].clue}
                    answer={questionData.questions[5].answer}/>
            </div>
            {/* Column - 3 (TECH) */}
            <div className="column">
                <h2>{questionData.topics[2]}</h2>
                <Question 
                    point={"100"}
                    question={questionData.questions[6].clue}
                    answer={questionData.questions[6].answer}/>
                <Question 
                    point={"200"}
                    question={questionData.questions[7].clue}
                    answer={questionData.questions[7].answer}/>
                <Question 
                    point={"300"}
                    question={questionData.questions[8].clue}
                    answer={questionData.questions[8].answer}/>
            </div>
        </div>
    </div>
  );
}

export default App;
