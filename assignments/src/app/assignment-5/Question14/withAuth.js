'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Fake auth check (replace with your real auth logic)
const isAuthenticated = () => {
  // For demo: check if "auth" item exists in localStorage
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('auth');
};

export function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace('/login'); // redirect if not authenticated
      }
    }, [router]);

    // Optionally, render nothing or a loading indicator while redirecting
    if (!isAuthenticated()) {
      return null; // or a spinner/loading message
    }

    return <WrappedComponent {...props} />;
  };
}
