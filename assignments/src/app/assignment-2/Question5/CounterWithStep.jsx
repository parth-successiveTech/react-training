'use client'
import React ,{useState} from "react"
export default function CounterWithStep()
{
    const[count,setCount]=useState(0);
    const[step,setStep]=useState(1);
    function increment()
    {
        setCount(step+count);
    }
    function decrement()
    {
        setCount(count-step);

    }
    const handleStep=(e)=>
        {
            const value=parseInt(e.target.value,10);
            setStep(value);

        }
    return (
        <div>
            <p>count:{count} </p>
            <input type="number" value={step} onChange={handleStep} placeholder="step"/>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>

    )
}