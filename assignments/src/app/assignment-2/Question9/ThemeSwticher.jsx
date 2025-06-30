'use client'
import React, { useContext } from 'react';
import { ThemeContext } from '@/app/Context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#fff' : '#222',
      color: theme === 'light' ? '#000' : '#fff',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <h2>Current Theme: {theme}</h2>
      <button style={{backgroundColor:'red'}} onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} mode
      </button>
    </div>
  );
};
export default ThemeSwitcher
