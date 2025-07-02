import PostClient from './PostClient';

import axios from 'axios';

export default async function PostsPage() {
  try {
    // Initial fetch on the server
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = res.data;

    // Pass initial data to client
    return <PostClient initialPosts={posts} />;
  } catch (error) {
    // Pass null to indicate error (or could pass error.message)
    return <PostClient initialPosts={null} initialError="Failed to load posts on server" />;
  }
}
