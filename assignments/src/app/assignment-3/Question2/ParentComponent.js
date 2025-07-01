// ParentComponent.js
'use client'
import React from 'react';
import { AuthProvider } from '@/app/Context/Authcontext';
import { ThemeProvider } from '@/app/Context/ThemeContext';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div>
          <h2>App Root</h2>
          <ChildComponent />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default ParentComponent;
