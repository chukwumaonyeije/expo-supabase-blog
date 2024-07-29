import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <Link href="/posts">
        <a>View Blog Posts</a>
      </Link>
    </div>
  );
}
