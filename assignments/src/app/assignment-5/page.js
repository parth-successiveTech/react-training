 'use client'
 import { useRouter } from "next/navigation"
 export default function DashBoard()
 {
    const router = useRouter();
    return (
         <div>
         <h2>This is Assignment5 questions</h2>
        <button onClick={()=>{router.push('assignment-5/Question1');}}>Question1</button>
        <button onClick={()=>{router.push('assignment-5/Question2');}}>Question2</button>
        <button onClick={()=>{router.push('assignment-5/Question3');}}>Question3</button>
        <button onClick={()=>{router.push('assignment-5/Question4');}}>Question4</button>
        <button onClick={()=>{router.push('assignment-5/Question5');}}>Question5</button>
        <button onClick={()=>{router.push('assignment-5/Question6');}}>Question6</button>
        <button onClick={()=>{router.push('assignment-5/Question7');}}>Question7</button>
        <button onClick={()=>{router.push('assignment-5/Question8');}}>Question8</button>
        <button onClick={()=>{router.push('assignment-5/Question9');}}>Question9</button>
        <button onClick={()=>{router.push('assignment-5/Question10');}}>Question10</button>
        <button onClick={()=>{router.push('assignment-5/Question11');}}>Question11</button>
        <button onClick={()=>{router.push('assignment-5/Question12');}}>Question12</button>
        <button onClick={()=>{router.push('assignment-5/Question13');}}>Question13</button>
        <button onClick={()=>{router.push('assignment-5/Question14');}}>Question14</button>
        
        <button onClick={()=>{router.push('assignment-5/Question15');}}>Question15</button>
        <button onClick={()=>{router.push('assignment-5/Question16');}}>Question16</button>
                      

        
        </div>
        );
        }