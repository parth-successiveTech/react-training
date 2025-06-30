'use client'
import React, { useState } from 'react';
import useClipboard from './useClipboard';

const ClipboardExample = () => {
  const [text, setText] = useState('Hello, copy me!');
  const { isCopied, copyToClipboard } = useClipboard(text);

  return (
    <div style={styles.container}>
      <h2>Clipboard Copy Example</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />
      <button onClick={copyToClipboard} style={styles.button}>
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    margin: '2rem auto',
    padding: '1rem',
    maxWidth: '400px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fefefe',
  },
  input: {
    padding: '0.5rem',
    width: '80%',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

export default ClipboardExample;
