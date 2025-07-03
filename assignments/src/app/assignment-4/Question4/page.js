'use client'
import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Update both password fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setSuccess(false);
      return;
    }

    // Success case
    setError('');
    setSuccess(true);
    console.log('Registered with password:', formData.password);
    // You could reset the form here if desired
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', padding: '1rem' }}>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter password"
          />
        </label>
      </div>

      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Re-enter password"
          />
        </label>
      </div>

      <button type="submit">Register</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>✅ Registration successful!</p>}
    </form>
  );
}

export default RegistrationForm;
