'use client'
import React, { useState } from 'react';
function TemperatureConverter() {
  const [temperature, setTemperature] = useState({ celsius: '', fahrenheit: '' });

  // Convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (c) => ((c * 9) / 5 + 32).toFixed(2);

  // Convert Fahrenheit to Celsius
  const fahrenheitToCelsius = (f) => (((f - 32) * 5) / 9).toFixed(2);

  // Handle Celsius input change
  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setTemperature({
      celsius: c,
      fahrenheit: c === '' ? '' : celsiusToFahrenheit(parseFloat(c)),
    });
  };

  // Handle Fahrenheit input change
  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setTemperature({
      celsius: f === '' ? '' : fahrenheitToCelsius(parseFloat(f)),
      fahrenheit: f,
    });
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '400px' }}>
      <h2>🌡️ Temperature Converter</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Celsius:
          <input
            type="number"
            value={temperature.celsius}
            onChange={handleCelsiusChange}
            placeholder="°C"
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>

      <div>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={temperature.fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="°F"
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
    </div>
  );
}

export default TemperatureConverter;
