'use client'
import React from 'react';

const Child = ({ count, onIncrement, onReset }) => {
  return (
    <div style={styles.container}>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
      <button style={styles.button} onClick={onIncrement}>Increment</button>
      <button style={{ ...styles.button, backgroundColor: '#e74c3c' }} onClick={onReset}>Reset</button>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    margin: '0.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#3498db',
    color: '#fff',
  },
};

export default Child;