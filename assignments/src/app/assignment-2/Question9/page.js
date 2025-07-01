import React from 'react';
import { ThemeProvider } from '@/app/Context/ThemeContext';
import ThemeSwitcher from './ThemeSwticher';



export default function Home() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

