import { useState } from "react";
import useTask from "../hooks/useTask";
import { Link } from "react-router-dom";

export default function AddTask(){
    const {task,setTask} = useTask();
    const add = (e) =>{
        e.preventDefault();
        console.log(e);
        const newTask = e.target.task.value;
        const date = e.target.date.value;
        //JS Approach to add tasks
        // const ul = document.getElementsByName("Tasks")[0];
        // const li = document.createElement("li");
        // li.textContent = `${newTask} - ${date}`;
        // ul.appendChild(li);
        setTask([
        ...task,
        {task : newTask ,date}
        ]);
    };
    return (
        <div>
            <h1>To-Do App</h1>
            <Link to={"/today"}><button>View Today's Tasks</button></Link>
            <h2>Add a Task</h2>
            <hr />
            <form onSubmit={add}>
                <label htmlFor="Task">Task</label>
                <br />
                <input type="text" name="task" />
                <br />
                <label htmlFor="date">Date</label>
                <br />
                <input type="date" name="date" />
                <br />
                <input type="submit" />
            </form>
            <div>
                <h2>Tasks Added</h2>
                <hr />
                <ul name="Tasks">
                    {task.map((task,index)=>(
                        <li key={index}>{task.task} - {task.date}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};