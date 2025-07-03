'use client'
import { useAuth } from "@/app/Context/AuthContext";
const PrivatePage=()=>
{
    const {user,setUser,logout}=useAuth();
    return(
        <div>
            <h2>welcome page</h2>
            <h2>hello{user}</h2>
            <button onClick={logout}>logout</button>
        </div>
    );
};
export default PrivatePage