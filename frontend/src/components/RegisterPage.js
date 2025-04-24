import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);

      if (response.data.user) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location.href = '/';
      }
    } catch (err) {
      console.error(err.response);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <style>
        {`
          .register-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(to right, #f4f7fc, #e2eafc);
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          .register-container h2 {
            font-size: 2rem;
            margin-bottom: 25px;
            color: #333;
          }

          .register-form {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            width: 100%;
            max-width: 450px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .input-group {
            margin-bottom: 18px;
          }

          .input-group label {
            display: block;
            margin-bottom: 6px;
            font-size: 1rem;
            color: #444;
          }

          .input-group input {
            width: 100%;
            padding: 12px;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 6px;
            transition: border-color 0.3s;
          }

          .input-group input:focus {
            border-color: #4CAF50;
            outline: none;
          }

          .input-group input::placeholder {
            color: #aaa;
            font-style: italic;
          }

          .error-message {
            color: red;
            font-size: 0.9rem;
            margin-bottom: 10px;
          }

          .register-button {
            width: 100%;
            padding: 14px;
            font-size: 1rem;
            font-weight: bold;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .register-button:hover {
            background-color: #45a049;
          }

          .redirect-link {
            margin-top: 20px;
            text-align: center;
            font-size: 0.95rem;
          }

          .redirect-link a {
            color: #007BFF;
            text-decoration: none;
          }

          .redirect-link a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="input-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="register-button">Register</button>
      </form>

      <div className="redirect-link">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default RegisterPage;
