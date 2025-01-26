"use client";
import React, { useState, useEffect } from 'react';
import Menu from '../components/layoutMenu/menu';
import '../ui/main.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isMenuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(prevState => !prevState)
  }

  useEffect(() => {
    if (isMenuVisible) {
      document.body.classList.add('is-menu-visible');
    } else {
      document.body.classList.remove('is-menu-visible');
    }

    return () => {
      document.body.classList.remove('is-menu-visible');
    };
  }, [isMenuVisible]);

  return (
    <html lang="en">
      <head>
        <title>Beyond Borders</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>
      <body>
        <div id="page-wrapper">
          <header id="header">
            <h1><a href="/">Beyond Borders</a></h1>
            <nav>
              <a href="#menu" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>Menu</a>
            </nav>
          </header>
          <section id="wrapper">
            {children}
          </section>
        </div>
        <Menu close={toggleMenu}></Menu>
      </body>
    </html>
  );
}
