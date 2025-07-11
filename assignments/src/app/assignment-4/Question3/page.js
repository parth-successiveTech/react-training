'use client'
import React, { useState } from 'react';
// Component to show when input is "show"
function Message() {
  return <p style={{ color: 'green' }}>🎉 You entered "show"!</p>;
}

function ShowComponentTrigger() {
  const [inputValue, setInputValue] = useState('');
  const [shouldShow, setShouldShow] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setShouldShow(inputValue.trim().toLowerCase() === 'show');
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '400px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Type "show" and click the button'
      />
      <button onClick={handleClick} style={{ marginLeft: '0.5rem' }}>
        Check
      </button>

      {/* Conditionally render the Message component */}
      {shouldShow && <Message />}
    </div>
  );
}

export default ShowComponentTrigger;
