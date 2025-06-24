'use client'
import React,{useState} from "react";
export default function Counter()
{
    const[count,setCounter]=useState(0);
    function increaseCounter()
    {
        setCounter(count+1);
    }
    function decreaseCounter()
    {
        setCounter(count-1);
    }
    return(
        <div>
            <h1>count:{count}</h1>
            <button  style={{backgroundColor:"green"}} onClick={increaseCounter}>Increase</button>
            <button style={{backgroundColor:"red"}}onClick={decreaseCounter}>Decrease</button>
        </div>
    );

};