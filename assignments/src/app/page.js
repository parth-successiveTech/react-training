'use client'
import { useRouter } from "next/navigation"
export default function DashBoard(){
    const router = useRouter();
    return (
        <div>
        <h2>This is Assignment-1 and Assignment-2</h2>
        <button style={{backgroundColor:"grey"}} onClick={()=>{router.push('/assignment-1');}}>Assignment1</button>
        <button style={{backgroundColor:"grey"}} onClick={()=>{router.push('/assignment-2');}}>Assignment2</button>
        </div>
    );
}
