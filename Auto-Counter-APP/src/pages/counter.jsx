import { useEffect, useState } from "react";

export default function Counter(){

    //SetInterval takes two parameters.one,function and, the time of the interval.
    //useeefct takes two parameters as well one is the function and the other one is dependency array
    const [number,setNumber] =useState(0);
    useEffect(()=>{
        const id = setInterval(() => {
            setNumber(number => number + 1);
        }, 1000);

        return()=> {
            clearInterval(id);
        }
    },[]);

    return(
        <div>
            <h1>Auto Counter</h1>
            <p>{number}</p>
        </div>
    );
}