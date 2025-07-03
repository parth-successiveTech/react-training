'use client';
import { useRouter } from 'next/navigation';

export default function NavButtons() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push('/assignment-3/Question5/Dashboard')}>Dashboard</button>
    </div>
  );
}
