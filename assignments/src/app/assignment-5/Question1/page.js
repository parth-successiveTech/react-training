// app/posts/page.jsx

// ✅ This function runs on the server automatically in Next.js App Router
export default async function PostsPage() {
  // Server-side fetch (SSR)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await res.json();

  return (
    <div>
      <h1>Posts (SSR)</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
