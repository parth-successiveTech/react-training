'use client';
import { useAuth } from "@/app/Context/AuthContext";
const LoginPage=()=>
{
    const{user,setUser,login,username,password,setUsername,setPassword}=useAuth();
    return(
        <div>
            <h1>login page</h1>
            <input 
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <br/>
            <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button onClick={login}>login</button>
        </div>
    );
};
export default LoginPage;