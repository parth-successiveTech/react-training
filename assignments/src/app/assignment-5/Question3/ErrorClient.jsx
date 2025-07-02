'use client';
import { useState } from 'react';

export default function ErrorClient() {
  const [users, setUsers] = useState(null);        // Fetched user data
  const [error, setError] = useState(true);        // Error state
  const [loading, setLoading] = useState(false);   // Loading state

  const retryFetch = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error();

      const data = await res.json();
      setUsers(data);      // ✅ Success: save users to state
    } catch {
      setError(true);      // ❌ Failure: show error
    } finally {
      setLoading(false);   // ✅ Always turn off loading
    }
  };

  // ✅ Show spinner while loading
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <div className="spinner"></div>
        <p>Loading...</p>

        <style jsx>{`
          .spinner {
            margin: auto;
            border: 4px solid #ccc;
            border-top: 4px solid #333;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // ✅ Show data if loaded successfully
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
      {error && <p>Please check your internet connection and try again.</p>}
      <button onClick={retryFetch}>
        Retry
      </button>
    </div>
  );
}
