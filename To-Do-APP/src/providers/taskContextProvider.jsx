import { useState } from "react";
import TaskContext from "../context/taskContext";

export default function TaskProvider({children}){
    const[task,setTask] = useState([
        {task:"Brush Teeth",date: "2026-06-08"}
    ]);

    return(
        <TaskContext.Provider value={{task,setTask}}>
            {children}
        </TaskContext.Provider>
    );
}