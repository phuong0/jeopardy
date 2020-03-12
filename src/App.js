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
            <Question />
            </div>
            {/* Column - 2 (SPORTS) */}
            <div className="column">

            </div>
            {/* Column - 3 (TECH) */}
            <div className="column">

            </div>
        </div>
    </div>
  );
}

export default App;
