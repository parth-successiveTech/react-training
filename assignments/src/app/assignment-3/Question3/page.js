// src/App.jsx
'use client'

import { useRouter } from "next/navigation"
export default function App() {
  const router = useRouter();
  return (
    <div>
    <button onClick={()=>{router.push('/assignment-3/Question3/Homepage');}}>Home</button>
        <button onClick={()=>{router.push('/assignment-3/Question3/Aboutpage');}}>about</button>
        </div>   
  );
}
