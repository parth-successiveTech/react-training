'use client'
import React, { useState } from 'react';
export default function PersonForm() 
{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <h2>Person Form</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          First Name:{' '}
          <input type="text" onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Last Name:{' '}
          <input type="text" onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Age:{' '}
          <input type="text" onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </div>

      <h3>Entered Information</h3>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

