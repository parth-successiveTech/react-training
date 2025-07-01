'use client'
import React, { useReducer } from 'react';

// Step 1: Initial vote state
const initialState = {
  React: 0,
  Vue: 0,
  Angular: 0,
};

// Step 2: Reducer function
const voteReducer = (state, action) => {
  switch (action.type) {
    case 'VOTE':
      return {
        ...state,
        [action.option]: state[action.option] + 1,
      };
    default:
      return state;
  }
};

const App = () => {
  // Step 3: useReducer hook
  const [votes, dispatch] = useReducer(voteReducer, initialState);

  // Step 4: UI
  return (
    <div style={styles.container}>
      <h1>Vote for Your Favorite Framework</h1>

      {Object.keys(votes).map((option) => (
        <div key={option} style={styles.voteItem}>
          <button
            style={styles.button}
            onClick={() => dispatch({ type: 'VOTE', option })}
          >
            Vote for {option}
          </button>
          <span style={styles.voteCount}>
            {votes[option]} vote{votes[option] !== 1 ? 's' : ''}
          </span>
        </div>
      ))}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial',
  },
  voteItem: {
    margin: '1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    cursor: 'pointer',
    marginRight: '1rem',
  },
  voteCount: {
    fontSize: '1.2rem',
  },
};

export default App;