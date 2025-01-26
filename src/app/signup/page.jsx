'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.password2) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          login: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/login');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="form">
      <div className="inner">
        <h2 className="major">Sign up</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form method="post" onSubmit={handleSubmit}>
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
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
            <div className="field">
              <label htmlFor="password2">Repeat password</label>
              <input
                type="password"
                name="password2"
                id="password2"
                value={formData.password2}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Sign up" />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}

export default SignupPage;
