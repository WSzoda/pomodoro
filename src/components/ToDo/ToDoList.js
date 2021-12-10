import React from "react";
import { useState } from "react";

import ToDoControls from "./ToDoControls";
import Button from "../Buttons/Button";

const ToDoList = () => {
    const [toDos, setToDos] = useState([]);
    const [key, SetKey] = useState(0);

    function AddToDo(toDo) {
        setToDos(toDos.concat([{key:GetKey(), task:toDo}]));
    }

    function GetKey(){
        SetKey(key + 1);
        return key;
    }

    const deleteTask = (taskKey) =>{
        setToDos(toDos.filter(toDo => toDo.key !== taskKey));
    }

    return(
        <div>
            <ul>
                {
                    toDos.map((Task) => {
                        return <li key={Task.key}>
                            <div>
                                <p>{Task.task}</p>
                                <Button function={deleteTask(Task.key)} text="Remove Task"/>
                            </div>
                        </li>
                    })
                }
            </ul>
            <ToDoControls AddToDo={AddToDo}/>
        </div>
    )
}

export default ToDoList;