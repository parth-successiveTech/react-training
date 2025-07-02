

import axios from 'axios';
import React from 'react';
export default async function PostsPage() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = res.data;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">JSONPlaceholder Posts</h1>
      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => ( // Show only the first 10
          <li key={post.id} className="border rounded p-4 shadow">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
