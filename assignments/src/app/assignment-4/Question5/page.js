'use client'
import React, { useState } from 'react';

function DropdownSelector() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ maxWidth: '300px', padding: '1rem' }}>
      <label>
        Choose an option:
        <select value={selectedOption} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="apple">Apple 🍎</option>
          <option value="banana">Banana 🍌</option>
          <option value="cherry">Cherry 🍒</option>
          <option value="grape">Grape 🍇</option>
        </select>
      </label>

      {selectedOption && (
        <p style={{ marginTop: '1rem' }}>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
}

export default DropdownSelector;
