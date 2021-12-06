import React from "react";
import { useState } from "react";

import TimerControls from "./TimerControls";

const Timer = () => {

    const [time, setTime] = useState(0);
    const [intervenalId, setIntervenalId] = useState(0);

    const toogleTimer = () => {
        const newIntervenalId = setInterval(() => {
            console.log(time);
            setTime(time => time - 1);
        }, 1000);
        setIntervenalId(newIntervenalId);
    }

    return(
        <div>
            <p>{Math.floor(time/60)}:{Math.floor(time%60)}</p>
            <TimerControls setTime={setTime} time={time} toogleTimer={toogleTimer}/>
            <button onClick={toogleTimer}>fes</button>
        </div>
    )
    }

export default Timer;