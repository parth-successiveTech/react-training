'use client';
import { useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/assignment-3/Question3/Login');
    }
  }, [user, router]);

  if (!user) return null;

  return children;
}
