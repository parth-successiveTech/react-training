'use client'
import { useRouter } from "next/navigation"
export default function DashBoard(){
    const router = useRouter();
    return (
        <div>
        <h2>This is Assignment-1 and Assignment-2</h2>
        <button style={{backgroundColor:"grey"}} onClick={()=>{router.push('/assignment-1');}}>Assignment1</button>
        <button style={{backgroundColor:"grey"}} onClick={()=>{router.push('/assignment-2');}}>Assignment2</button>
<<<<<<< HEAD
        <button style={{backgroundColor:"grey"}} onClick={()=>{router.push('/assignment-5');}}>Assignment5</button>
        <button style={{backgroundColor:"grey"}} onClick={()=>{router.push('/assignment-6');}}>Assignment6</button>


=======
      <button style={{backgroundColor:"grey"}} onClick={()=>{router.push('/assignment-4');}}>Assignment4</button>
       <button style={{backgroundColor:"grey"}} onClick={()=>{router.push('/assignment-5');}}>Assignment5</button>
        
>>>>>>> 90060ebc05bf4019d70f5b36ec3a28ee0ea278ff
        </div>
    );
}
