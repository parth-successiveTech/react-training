'use client'
import { withAuth } from './withAuth';

function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Only authenticated users can see this page.</p>
    </div>
  );
}

export default withAuth(Dashboard);
