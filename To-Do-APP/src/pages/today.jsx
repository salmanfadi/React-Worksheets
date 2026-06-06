import { Link } from "react-router-dom";
import useTask from "../hooks/useTask";

export default function TodaysTask(){
    const {task,setTask} = useTask();
    const today = new Date().toISOString().split("T")[0];
    console.log(task);
    console.log(today);
    return(
        <div>
        <h1>Today's Tasks</h1>
        <Link to={"/"}><button>Back to Home</button></Link>
        <ul>
        {
            task
            .filter(task => task.date === today)
            .map((task)=>(
                <li>{task.task} - {task.date}</li>
            ))
        }
        </ul>
        </div>
    );
};