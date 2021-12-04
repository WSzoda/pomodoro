import React from "react";
import { useState } from "react";

function ToDoControls(props){
    const [Task, SetTask] = useState("");

    function handleChange(event){
        SetTask(event.target.value);
    }

    function handleSubmit(){
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