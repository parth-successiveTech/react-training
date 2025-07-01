'use client'
import React, { useState, useEffect } from 'react';
const images = Array.from({ length: 10 }, (_, i) => `/images/img${i + 1}.jpg`);

export default function SlideShow()
{
const [currentSlide, setCurrentSlide] = useState(0);
const [isPlaying, setIsPlaying] = useState(true);
const [intervalTime, setIntervalTime] = useState(3000);

useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, intervalTime]);

   const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const handleIntervalChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setIntervalTime(value);
    }
  };
    return (
    <div style={{ textAlign: 'center' }}>
      <h2>React Image Slideshow</h2>
      <div>
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          style={{ width: '600px', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
        />
      </div>

      <div style={{ marginTop: '15px' }}>
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <label style={{ marginLeft: '15px' }}>
          Interval (ms):&nbsp;
          <input
            type="number"
            value={intervalTime}
            onChange={handleIntervalChange}
            min="1000"
            step="500"
          />
        </label>
      </div>
    </div>
  );
};

