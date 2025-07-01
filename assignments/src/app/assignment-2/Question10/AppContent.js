'use client'
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/Context/LanguageContext';

const translations = {
  en: {
    greeting: 'Hello!',
    message: 'Welcome to our application.',
  },
  es: {
    greeting: '¡Hola!',
    message: 'Bienvenido a nuestra aplicación.',
  },
};

const AppContent = () => {
  const { language } = useContext(LanguageContext);
  const { greeting, message } = translations[language];

  return (
    <div style={{ marginTop: '1rem' }}>
      <h1>{greeting}</h1>
      <p>{message}</p>
    </div>
  );
};

export default AppContent;