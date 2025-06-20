 'use client'
import React,{useState} from "react";
export default function Counter()
{
    const[counter,setCounter]=useState(0);
    function increaseCounter()
    {
        setCounter(counter+1);
    }
    return(
        <div>
            <h1>counter:{counter}</h1>
            <button onClick={increaseCounter}>Increase</button>
        </div>

    );

};
