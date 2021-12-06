import React from "react";
import { useState } from "react";

const ToDoControls = (props) => {
    const [Task, SetTask] = useState("");

    const handleChange = (event) =>{
        SetTask(event.target.value);
    }

    const handleSubmit = () =>{
        props.AddToDo(Task);
        SetTask("");
    }

    return(
        <div>
            <input placeholder="Type Task" value={Task} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    )
}

export default ToDoControls;