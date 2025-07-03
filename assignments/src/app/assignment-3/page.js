'use client'
 import { useRouter } from "next/navigation"
 export default function DashBoard()
 {
    const router = useRouter();
    return (
         <div>
         <h2>This is Assignment3 questions</h2>
        <button onClick={()=>{router.push('assignment-3/Question1');}}>Question1</button>
        <button onClick={()=>{router.push('assignment-3/Question2');}}>Question2</button>
        <button onClick={()=>{router.push('assignment-3/Question3');}}>Question3</button>
        <button onClick={()=>{router.push('assignment-3/Question4');}}>Question4</button>
        <button onClick={()=>{router.push('assignment-3/Question5');}}>Question5</button>
        <button onClick={()=>{router.push('assignment-3/Question6');}}>Question6</button>
        </div>
    )
}