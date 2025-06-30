'use client'
import { useRouter } from "next/navigation"
export default function DashBoard(){
    const router = useRouter();
    return (
        <div>
        <h2>This is Assignment-1</h2>
         <button onClick={()=>{router.push('/assignment-2');}}>Question1</button>
       <button onClick={()=>{router.push('assignment-1/Question2');}}>Question2</button>
        <button onClick={()=>{router.push('assignment-1/Question2');}}>Question2</button>
        <button onClick={()=>{router.push('assignment-1/Question3');}}>Question3</button>
        <button onClick={()=>{router.push('assignment-1/Question4');}}>Question4</button>
        <button onClick={()=>{router.push('assignment-1/Question5');}}>Question5</button>
        <button onClick={()=>{router.push('assignment-1/Question6');}}>Question6</button>
        <button onClick={()=>{router.push('assignment-2/Question2');}}>Questiona2</button>
        <button onClick={()=>{router.push('assignment-2/Question3');}}>Questiona3</button>
        <button onClick={()=>{router.push('assignment-2/Question4');}}>Questiona4</button>
        <button onClick={()=>{router.push('assignment-2/Question5');}}>Questiona4</button>
         <button onClick={()=>{router.push('assignment-2/Question6');}}>Questiona6</button>
         <button onClick={()=>{router.push('assignment-2/Question7');}}>Questiona7</button>
         <button onClick={()=>{router.push('assignment-2/Question8');}}>Questiona8</button>
         <button onClick={()=>{router.push('assignment-2/Question9');}}>Questiona9</button>
        <button onClick={()=>{router.push('assignment-2/Question10');}}>Questiona10</button>
        <button onClick={()=>{router.push('assignment-2/Question11');}}>Questiona11</button>
        <button onClick={()=>{router.push('assignment-2/Question12');}}>Questiona12</button>
      <button onClick={()=>{router.push('assignment-2/Question13');}}>Questiona13</button>
            <button onClick={()=>{router.push('assignment-2/Question14');}}>Questiona14</button>
            <button onClick={()=>{router.push('assignment-2/Question15');}}>Questiona15</button>
            <button onClick={()=>{router.push('assignment-2/Question16');}}>Questiona16</button>
                        <button onClick={()=>{router.push('assignment-2/Question17');}}>Questiona17</button>
            <button onClick={()=>{router.push('assignment-2/Question18');}}>Questiona18</button>
            <button onClick={()=>{router.push('assignment-2/Question19');}}>Questiona19</button>



        </div>
    );
}
