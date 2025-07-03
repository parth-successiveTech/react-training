// ChildComponent.js
'use client'
import React from 'react';
import { useAuth } from '@/app/Context/Authcontext';
import { useTheme } from '@/app/Context/ThemeContext';

const ChildComponent = () => {
  const { isLoggedIn, username, login } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleLogin = () => {
    const name = prompt('Enter your username:');
    if (name) login(name);
  };

  const containerStyle = {
    padding: '1rem',
    marginTop: '1rem',
    borderRadius: '8px',
    backgroundColor: theme === 'dark' ? '#333' : '#f4f4f4',
    color: theme === 'dark' ? '#fff' : '#000',
  };

  return (
    <div style={containerStyle}>
      {isLoggedIn ? (
        <h3>Welcome, {username}!</h3>
      ) : (
        <h3>Please log in.</h3>
      )}
      {!isLoggedIn && <button onClick={handleLogin}>Login</button>}

      <div style={{ marginTop: '1rem' }}>
        <p>Current Theme: <strong>{theme}</strong></p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default ChildComponent;
