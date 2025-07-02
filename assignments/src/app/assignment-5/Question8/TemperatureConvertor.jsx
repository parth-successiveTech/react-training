'use client';

import React, { useState } from 'react';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Handle Celsius input change
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);

    const num = parseFloat(value);
    if (!isNaN(num)) {
      setFahrenheit(((num * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  // Handle Fahrenheit input change
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    const num = parseFloat(value);
    if (!isNaN(num)) {
      setCelsius((((num - 32) * 5) / 9).toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Temperature Converter</h2>

      <div className="mb-4">
        <label htmlFor="celsius" className="block font-medium mb-1">
          Celsius (°C)
        </label>
        <input
          type="number"
          id="celsius"
          value={celsius}
          onChange={handleCelsiusChange}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter Celsius"
        />
      </div>

      <div>
        <label htmlFor="fahrenheit" className="block font-medium mb-1">
          Fahrenheit (°F)
        </label>
        <input
          type="number"
          id="fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          className="w-full border px-3 py-2 rounded"
          placeholder="Enter Fahrenheit"
        />
      </div>
    </div>
  );
}
