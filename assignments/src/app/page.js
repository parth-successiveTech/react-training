'use client'
import { useRouter } from "next/navigation"
export default function DashBoard(){
    const router = useRouter();
    return (
        <div>
        <h2>This is Assignment-1</h2>
        <button onClick={()=>{router.push('Question1');}}>Question1</button>
        <button onClick={()=>{router.push('Question2');}}>Question2</button>
        <button onClick={()=>{router.push('Question3');}}>Question3</button>
        <button onClick={()=>{router.push('Question4');}}>Question4</button>
        <button onClick={()=>{router.push('Question5');}}>Question5</button>
        <button onClick={()=>{router.push('Question6');}}>Question6</button>
        </div>
    );
}
