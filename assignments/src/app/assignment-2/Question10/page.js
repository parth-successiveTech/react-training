import React from 'react';
import { LanguageProvider } from '@/app/Context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import AppContent from './AppContent';

const App = () => {
  return (
    <LanguageProvider>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <LanguageSwitcher />
        <AppContent />
      </div>
    </LanguageProvider>
  );
};

export default App;