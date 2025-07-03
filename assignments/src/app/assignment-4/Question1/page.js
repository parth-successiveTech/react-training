'use client'
import React, { useState } from 'react';
function ControlledInput() {
  const [inputValue, setInputValue] = useState(''); // initial state is empty string

  // Handler to update state on every input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Enter text:
        <input
          type="text"
          value={inputValue}        // controlled value
          onChange={handleChange}   // update state on input change
          placeholder="Type something..."
        />
      </label>
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;
