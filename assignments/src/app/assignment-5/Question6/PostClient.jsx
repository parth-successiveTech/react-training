'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function PostsClient({ initialPosts, initialError }) {
  const [posts, setPosts] = useState(initialPosts);
  const [error, setError] = useState(initialError);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
    } catch (err) {
      setError('Failed to fetch posts. Please try again.');
      setPosts(null);
    }
    setLoading(false);
  };

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return (
      <div>
        <p style={{ color: 'red' }}>{error}</p>
        <button onClick={fetchPosts}>Retry</button>
      </div>
    );
  }

  if (!posts) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border rounded p-4 shadow">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
