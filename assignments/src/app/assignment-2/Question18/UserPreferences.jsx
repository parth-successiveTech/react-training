// UserPreferences.jsx
'use client'
import React from 'react';
import useLocalStorage from './useLocalStorage';

function UserPreferences() {
  const [theme, setTheme, removeTheme] = useLocalStorage('user-theme', 'light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#eee', color: theme === 'dark' ? '#fff' : '#000', padding: '1rem' }}>
      <h2>User Preferences</h2>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button onClick={removeTheme} style={{ marginLeft: '1rem' }}>
        Reset Theme
      </button>
    </div>
  );
}

export default UserPreferences;
