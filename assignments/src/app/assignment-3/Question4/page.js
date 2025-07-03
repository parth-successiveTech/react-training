'use client';
import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push('/assignment-3/Question4/Homepage')}>Home</button>
      <button onClick={() => router.push('/assignment-3/Question4/Aboutpage')}>About</button>
      <button onClick={() => router.push('/assignment-3/Question4/Login')}>Login</button>
    </div>
  );
}
