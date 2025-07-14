'use client'
import React, { useState } from 'react';
function SearchFilter() {
  const [query, setQuery] = useState('');

  // Example list of items (could be fetched or passed as props)
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Watermelon',
    'Mango',
    'Strawberry',
    'Blueberry',
  ];

  // Filter items based on the search query (case-insensitive)
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div style={{ maxWidth: '400px', padding: '1rem' }}>
      <h2>🔍 Search Filter</h2>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search fruits..."
        style={{ width: '100%', padding: '0.5rem' }}
      />

      <ul style={{ marginTop: '1rem' }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No matching items</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
