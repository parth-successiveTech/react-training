'use react'
import React from 'react';
const TaskItem = React.memo(({ task, onComplete }) => {
  console.log(`Rendering Task: ${task.id}`); // For demonstration

  return (
    <div style={styles.task}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      {!task.completed && (
        <button onClick={onComplete} style={styles.button}>
          Complete
        </button>
      )}
    </div>
  );
});

const styles = {
  task: {
    margin: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '0.3rem 0.6rem',
    fontSize: '0.9rem',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
export default TaskItem;