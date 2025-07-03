'use client';
import { useAuth } from '../AuthProvider';

export default function Homepage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      {user ? <p>Welcome, {user.username}!</p> : <p>Please log in.</p>}
    </div>
  );
}