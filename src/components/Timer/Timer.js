import React from "react";
import { useState } from "react";

import TimerControls from "./TimerControls";

const Timer = () => {

    const [time, setTime] = useState(0);
    const [intervenalId, setIntervenalId] = useState(0);
    const [isRunning, setIsRunning] = useState(0);

    const toogleTimer = () => {
        if(intervenalId){
            clearInterval(intervenalId);
            setIntervenalId(0);
            setIsRunning(0);
            return;
        }
        const newIntervenalId = setInterval(() => {
            console.log(time);
            setTime(time => time - 1);
        }, 1000);
        setIsRunning(1);
        setIntervenalId(newIntervenalId);
    }

    return(
        <div>
            <p>{Math.floor(time/60)}:{Math.floor(time%60)}</p>
            <TimerControls setTime={setTime} time={time} toogleTimer={toogleTimer} isRunning={isRunning}/>
        </div>
    )
    }

export default Timer;