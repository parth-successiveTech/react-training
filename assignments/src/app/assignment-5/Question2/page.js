import ErrorClient from './ErrorClient';  // Import client-side fallback component

export default async function UsersPage() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users-', {
      cache: 'no-store',  // Disable caching so data is always fresh on each request
    });

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    const users = await res.json();
    return (
      <div>
        <h1>Users (SSR)</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    // If any error happens during fetch, render the fallback client component
    return <ErrorClient />;
  }
}
