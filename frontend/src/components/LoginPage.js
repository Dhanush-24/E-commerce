import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';  // Import CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: email,
        password: password,
      });

      // Handle successful login (store token and user data)
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect user to the home page
      window.location.href = '/';  // Redirect to Home page after login
    } catch (err) {
      console.error(err.response);

      // Display error message if login fails
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'An error occurred. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="error-message">{error}</p>}  {/* Show error message */}
        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="redirect-link">
        <p>Don't have an account? <a href="/register">Go to Register</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
