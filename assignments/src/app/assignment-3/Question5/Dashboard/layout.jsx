// app/assignment-3/Question3/Dashboard/layout.jsx
'use client';

import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <Link href="/assignment-3/Question5/Dashboard" style={{ marginRight: '1rem' }}>Main</Link>
        <Link href="/assignment-3/Question5/Dashboard/Profile" style={{ marginRight: '1rem' }}>Profile</Link>
        <Link href="/assignment-3/Question5/Dashboard/Settings">Settings</Link>
      </nav>
      <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
        {children}
      </div>
    </div>
  );
}
