import React from "react";
import { useState } from "react";

import Button from "../Buttons/Button";

const ToDoControls = (props) => {
    const [task, setTask] = useState("");

    const handleChange = (event) =>{
        setTask(event.target.value);
    }

    const handleSubmit = () =>{
        props.AddToDo(task);
        setTask("");
    }
    const pressedKey = (event) => {
        if(event.keyCode === 13){
            handleSubmit();
        }
    }
    return(
        <div>
            <input placeholder="Type Task" value={task} onChange={handleChange} onKeyDown={(event) => pressedKey(event)}/>
            <Button function={handleSubmit} text="Add Task"/>
        </div>
    )
}

export default ToDoControls;