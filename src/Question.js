import React from 'react';
import "./Question.css";
export default function Question(props) {

    function question() {
        // return (
        //     <div onClick={answer} class="boxes">
        //         <p>questionText:{props.question}</p>
        //     </div>
        // );
        alert(props.question);
    }
    
    function answer() {
        return (
            <div class="boxes">
                <p>answer:{props.answer}</p>
            </div>
        );
    }

    return (
        <div onClick={question} class="boxes">
            <p>pointValue: {props.point}</p>
        </div>
    );

  }