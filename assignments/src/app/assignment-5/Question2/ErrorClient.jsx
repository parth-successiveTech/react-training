'use client'; 

import { useState } from 'react';

export default function ErrorClient() {
  const [users, setUsers] = useState(null);      
  const [error, setError] = useState(true);       
  const [loading, setLoading] = useState(false);  

  
  const retryFetch = async () => {
    setLoading(true);  
    setError(false);    

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error();  
      const data = await res.json();    
      setUsers(data);                   
    } catch {
      setError(true);                 
    } finally {
      setLoading(false);               
    }
  };
  if (users) {
    return (
      <div>
        <h1>Users (Client Retry)</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h2 style={{ color: 'red' }}>Failed to fetch user data.</h2>
      {error && <p>Please check your internet connection or try again.</p>}
      <button onClick={retryFetch} disabled={loading}>
        {loading ? 'Retrying...' : 'Retry'}
      </button>
    </div>
  );
}
