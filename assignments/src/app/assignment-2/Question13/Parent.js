'use client'
import React, { useState, useCallback } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);

  // Memoized increment function that depends on `count`
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Memoized reset function (no dependency needed here)
  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div style={styles.container}>
      <h1>Parent Component</h1>
      <Child count={count} onIncrement={increment} onReset={reset} />
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '2rem auto',
    fontFamily: 'Arial, sans-serif',
  },
};

export default Parent;