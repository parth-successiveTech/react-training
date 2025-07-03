'use client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import withLogger from './withLogger';

const CounterWithLogger = withLogger(Counter);

//const root = ReactDOM.createRoot(document.getElementById('root'));
export default function Page() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Counter with Logger</h1>
      <CounterWithLogger />
    </div>
  );
}
