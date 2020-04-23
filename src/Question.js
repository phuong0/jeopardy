import React, {useState} from 'react';
import "./Question.css";
export default function Question(props) {

    let [counter, setCounter] = useState(0);
    let [message, setMessage] = useState(props.point)

    function changeDisplay() {
        let increase = counter + 1;
        setCounter(increase);
        if(increase === 3){
            setMessage("");
        } else if (increase === 2) {
            setMessage(props.answer);
        } else if (increase === 1) {
            setMessage(props.question);
        }
    }

    return (
        <div onClick={changeDisplay} class="boxes">
            <p>{message}</p>
        </div>
    );

  }