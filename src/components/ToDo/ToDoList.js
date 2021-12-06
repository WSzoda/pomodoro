import React from "react";
import { useState } from "react";

import ToDoControls from "./ToDoControls";

const ToDoList = () => {
    const [toDos, setToDos] = useState([]);
    const [key, SetKey] = useState(0);

    function AddToDo(ToDo) {
        setToDos(toDos.concat([ToDo]));
    }

    function GetKey(){
        SetKey(key + 1);
        return key;
    }

    return(
        <div>
            <ul>
                {
                    toDos.forEach((Task) => {
                        return <li key={GetKey}>{Task}</li>
                    })
                }
            </ul>
            <ToDoControls AddToDo={AddToDo}/>
        </div>
    )
}

export default ToDoList;