import React from 'react';
import "./Question.css";
export default function Question(props) {

  return (
    <div class="boxes">
        <p>pointValue: {props.point}</p>
        <p>questionText: {props.question}</p>
        <p>answer: {props.answer}</p>
    </div>

  );
  }