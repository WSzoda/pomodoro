import React from "react";
import { useState } from "react";

import Button from "../Buttons/Button";

const TimerControls = (props) => {
    const [time, setTime] = useState(0);

    const handleClick = () =>{
        props.setTime(time*60);
    }

    const pressedKey = (event) => {
        if(event.keyCode === 13){
            handleClick();
        }
    }
    
    return(
        <div>
            <input onChange={(event) => {setTime(event.target.value)}} value={time} placeholder="Time in minutes" onKeyDown={(event) => pressedKey(event)}/>
            <Button function={handleClick} text="Set Timer"/>
            <Button function={props.toogleTimer} text={props.isRunning ? "Stop Timer" : "Start Timer"}/>
        </div>
    )
}

export default TimerControls;