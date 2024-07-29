import React from 'react';

export const metadata = {
  title: 'My Blog',
  description: 'Welcome to my blog built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* Add your header content here */}
          <h1>My Blog</h1>
          <nav>
            {/* Add navigation links here */}
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          {/* Add your footer content here */}
          <p>© 2024 My Blog</p>
        </footer>
      </body>
    </html>
  );
}
