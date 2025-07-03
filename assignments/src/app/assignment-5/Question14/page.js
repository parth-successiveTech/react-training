'use client'
import { useRouter } from 'next/router';
export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true'); // simulate login by setting localStorage
    router.push('/dashboard'); // redirect to protected page
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin} style={{ padding: '0.5rem 1rem' }}>
        Log in
      </button>
    </div>
  );
}
