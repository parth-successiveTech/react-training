import PaginationControls from './PaginationControl';

const ITEMS_PER_PAGE = 10;

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

// Note: In JSX/JS, we destructure 'searchParams' from the props object without typing
export default async function PostsPage({ searchParams }) {
  const page = parseInt(searchParams?.page || '1', 10);
  const allPosts = await fetchPosts();

  const totalItems = allPosts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = allPosts.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts (Page {page})</h1>
      <ul className="space-y-2">
        {currentItems.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <PaginationControls currentPage={page} totalPages={totalPages} />
    </div>
  );
}
