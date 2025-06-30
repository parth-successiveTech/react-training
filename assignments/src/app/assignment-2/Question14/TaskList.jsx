'use client'
import React, { useState, useCallback } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Write code', completed: false },
    { id: 2, name: 'Read docs', completed: false },
    { id: 3, name: 'Test features', completed: false },
  ]);

  // useCallback to memoize per-task completion handler
  const handleComplete = useCallback(
    (taskId) => () => {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, completed: true } : task
        )
      );
    },
    []
  );

  return (
    <div style={styles.container}>
      <h2>Task List</h2>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={handleComplete(task.id)}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '1.5rem',
    maxWidth: '400px',
    margin: '2rem auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '6px',
  },
};

export default TaskList;