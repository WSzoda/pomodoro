import React from "react";
import { useState } from "react";

const TimerControls = (props) => {
    const [time, setTime] = useState(0);

    const handleClick = () =>{
        var timeAmount = time;
        if(isNaN(timeAmount[timeAmount.length-1])){
            timeAmount = timeAmount.substring(0, timeAmount-2);
        }
        props.setTime(timeAmount*60);
    }
    
    return(
        <div>
            <input onChange={(event) => {setTime(event.target.value)}} value={time} placeholder="Time in minutes"/>
            <button onClick={handleClick}>Start Timer</button>
        </div>
    )
}

export default TimerControls;