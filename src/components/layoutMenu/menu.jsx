"use client"
import { React, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Menu(props) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const handleRouter = (par) => {
    router.push(`${par}`)
    props.close()
  }

  const handleLogout = async () => {
    try {
      // Wywołaj endpoint API do wylogowania użytkownika
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Umożliwia przesyłanie ciasteczek
      });
  
      // Przenieś użytkownika na stronę główną
      setIsUser(false);
      setIsAdmin(false);
      router.push('/');
      
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('/api/auth/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Umożliwia przesyłanie ciasteczek
        });

        if (response.ok) {
          const data = await response.json();
          if (data.user && data.user.isAdmin) {
            setIsAdmin(true);
          }
          if (data.user) {setIsUser(true);}
        } else {
          
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUser();
  }, []);

  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li><a onClick={() => handleRouter("/")}>Home</a></li>
          <li><a onClick={() => handleRouter("/search")}>Search</a></li>
          {!isUser && (
            <li><a onClick={() => handleRouter("/login")}>Log In</a></li>
          )}
          {!isUser && (
            <li><a onClick={() => handleRouter("/signup")}>Sign Up</a></li>
          )}
          {isUser && (
            <li><a onClick={() => (handleRouter("/"), handleLogout())}>Log out</a></li>
          )}
          {isAdmin && (
            <li><a onClick={() => handleRouter("/dashboard")}>Dashboard</a></li>
          )}
        </ul>
        <a href="#" onClick={(event) => { event.preventDefault(); props.close(); }} className="close">Close</a>
      </div>
    </nav>
  );
}

export default Menu;
