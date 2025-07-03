'use client';
import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setUser({ username });
      router.push('/assignment-3/Question3/Homepage');
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    router.push('/assignment-3/Question3/Login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
