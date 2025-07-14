'use client'
import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Add new task
  const handleAddTask = (e) => {
    e.preventDefault();

    if (task.trim() === '') return; // Prevent adding empty tasks

    setTasks((prevTasks) => [...prevTasks, task]);
    setTask(''); // Clear input
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '400px' }}>
      <h2>📝 Todo List</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={handleChange}
          style={{ marginRight: '0.5rem' }}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ marginTop: '1rem' }}>
        {tasks.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
