'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMsg('');

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body: content,
        userId: 1, // JSONPlaceholder requires userId
      });
      if (response.status === 201) {
        setStatus('success');
        setTitle('');
        setContent('');
      } else {
        setStatus('error');
        setErrorMsg(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      setStatus('error');
      setErrorMsg(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="content" className="block mb-1 font-medium">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={5}
            className="w-full border px-3 py-2 rounded"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-4 text-green-600">Post submitted successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600">Error submitting post: {errorMsg}</p>
      )}
    </div>
  );
}
