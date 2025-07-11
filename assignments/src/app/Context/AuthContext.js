// src/app/Context/AuthContext.js
'use client';

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (username && password) {
      setUser(username);
    }
  };

  const logout = () => {
    setUser(null);
    setUsername('');
    setPassword('');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        username,
        password,
        setUsername,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
