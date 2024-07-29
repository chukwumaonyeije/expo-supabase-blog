import React from 'react';

export default function Posts() {
  const posts = [
    { id: 1, title: 'My First Blog Post', content: 'This is the content of my first blog post.' },
    { id: 2, title: 'My Second Blog Post', content: 'This is the content of my second blog post.' },
  ];

  return (
    <div>
      <h1>My Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}