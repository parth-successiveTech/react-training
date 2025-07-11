'use client'
import React from "react";
import { useAuth } from "@/app/Context/AuthContext";
import PrivatePage from "./PrivatePage";
import LoginPage from "./LoginPage";
export default function App()
{
    const {isAuthenticated}=useAuth
    return(
            <div className="App">
                {isAuthenticated?<PrivatePage/>:<LoginPage/>}
            </div>
    );
}