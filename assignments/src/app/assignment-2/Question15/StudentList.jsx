'use client'
import React, { useState, useMemo } from 'react';
const StudentList = () => {
  // Initial students
  const [students, setStudents] = useState([
    'Alice',
    'Bob',
    'Charlie',
  ]);

  // Memoize the rendered list
  const renderedStudentList = useMemo(() => {
    console.log('Rendering student list...');
    return students.map((student, index) => (
      <li key={index}>{student}</li>
    ));
  }, [students]);

  // Function to add a new student
  const addStudent = () => {
    const newStudent = `Student ${students.length + 1}`;
    setStudents(prev => [...prev, newStudent]);
  };

  return (
    <div style={styles.container}>
      <h2>Student List</h2>
      <ul>{renderedStudentList}</ul>
      <button onClick={addStudent} style={styles.button}>Add Student</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '1.5rem',
    maxWidth: '400px',
    margin: '2rem auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginTop: '1rem',
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default StudentList;