// CountdownTimer.jsx
'use client'
import React from 'react';
import useTimer from './useTimer';

function CountdownTimer() {
  const { timeLeft, isRunning, start, pause, reset } = useTimer(30); // 30 seconds countdown

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h2>Countdown Timer</h2>
      <div style={{ fontSize: '2rem', margin: '1rem 0' }}>
        {formatTime(timeLeft)}
      </div>
      <div>
        <button onClick={start} disabled={isRunning || timeLeft === 0}>
          Start
        </button>
        <button onClick={pause} disabled={!isRunning} style={{ marginLeft: '1rem' }}>
          Pause
        </button>
        <button onClick={reset} style={{ marginLeft: '1rem' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CountdownTimer;
