'use client';
import ProtectedRoute from '../ProtectedRoute';

export default function AboutPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>About Page</h1>
        <p>This page is protected and requires login.</p>
      </div>
    </ProtectedRoute>
  );
}
