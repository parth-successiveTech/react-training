 'use client'
 import { useRouter } from "next/navigation"
 export default function DashBoard()
 {
    const router = useRouter();
    return (
         <div>
         <h2>This is Assignment4 questions</h2>
        <button onClick={()=>{router.push('assignment-4/Question1');}}>Question1</button>
        <button onClick={()=>{router.push('assignment-4/Question2');}}>Question2</button>
        <button onClick={()=>{router.push('assignment-4/Question3');}}>Question3</button>
        <button onClick={()=>{router.push('assignment-4/Question4');}}>Question4</button>
        <button onClick={()=>{router.push('assignment-4/Question5');}}>Question5</button>
        <button onClick={()=>{router.push('assignment-4/Question6');}}>Question6</button>
        <button onClick={()=>{router.push('assignment-4/Question7');}}>Question7</button>
        <button onClick={()=>{router.push('assignment-4/Question8');}}>Question8</button>
        <button onClick={()=>{router.push('assignment-4/Question9');}}>Question9</button>
        <button onClick={()=>{router.push('assignment-4/Question10');}}>Question10</button>
        <button onClick={()=>{router.push('assignment-4/Question11');}}>Question11</button>
        <button onClick={()=>{router.push('assignment-4/Question12');}}>Question12</button>
        <button onClick={()=>{router.push('assignment-4/Question13');}}>Question13</button>
        <button onClick={()=>{router.push('assignment-4/Question14');}}>Question14</button>
        
      
                      

        
        </div>
        );
        }