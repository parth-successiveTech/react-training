'use client'
import React, { useState, useEffect } from 'react';
export default function Notification()
{
    const[message,setMessage]=useState("");
   useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [message]);

  const showNotification = () => {
    setMessage('This is a notification message!');
  };

  return (
    <div>
      <button onClick={showNotification}>Show Notification</button>
      {message && (
        <div style={{ padding: '10px', backgroundColor: '#f0ad4e', color: '#fff' }}>
          {message}
        </div>
      )}
    </div>
  )
}