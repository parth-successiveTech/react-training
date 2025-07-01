// useTimer.js
'use client'
import { useState, useEffect, useRef, useCallback } from 'react';

function useTimer(initialDuration = 60) {
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start the timer
  const start = useCallback(() => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
    }
  }, [isRunning, timeLeft]);

  // Pause the timer
  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  // Reset the timer
  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(initialDuration);
  }, [initialDuration]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  return {
    timeLeft,
    isRunning,
    start,
    pause,
    reset,
  };
}

export default useTimer;
