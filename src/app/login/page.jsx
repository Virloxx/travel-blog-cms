'use client'; // Ensure the component runs on the client in Next.js 15
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const router = useRouter(); // Initialize the router
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Send login data to the API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: formData.email, // Assuming login = email in your API
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        
        router.push('/');
      } else {
        setError(data.message || 'Invalid email or password. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="form">
      <div className="inner">
        <h2 className="major">Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form method="post" onSubmit={handleSubmit}>
          <div className="fields">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <a href="#">Forgot password?</a>
          <ul className="actions">
            <li>
              <input type="submit" value="Login" />
            </li>
          </ul>
        </form>
        <ul className="copyright">
          <li>&copy; Untitled Inc. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LoginPage;
