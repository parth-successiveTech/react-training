'use client';
import React ,{useState} from "react"
export default function RandomNumberGenerator()
{
   const [randomNumber,setRandomNumber]=useState(
    Math.floor(Math.random()*100)+1
   );
   const GenerateNewNumber=()=>
   {
    const newNumber=Math.floor(Math.random()*100)+1;
    setRandomNumber(newNumber);
   };
   return(
    <div>
        <h1>Random Number:{randomNumber}</h1>
        <button onClick={GenerateNewNumber}>Generate New Number</button>
    </div>
   )
}
