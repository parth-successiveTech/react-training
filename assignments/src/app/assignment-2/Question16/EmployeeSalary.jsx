'use client'
import React, { useState, useMemo } from 'react';
const EmployeeSalary = () => {
  // Step 1: Initial employee data
  const [employees, setEmployees] = useState([
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 70000 },
  ]);

  // Step 2: Memoized average salary calculation
  const averageSalary = useMemo(() => {
    console.log('Recalculating average salary...');
    if (employees.length === 0) return 0;
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return total / employees.length;
  }, [employees]);

  // Step 3: Update salaries
  const updateSalaries = () => {
    const updated = employees.map(emp => ({
      ...emp,
      salary: emp.salary + Math.floor(Math.random() * 10000), // add random raise
    }));
    setEmployees(updated);
  };

  return (
    <div style={styles.container}>
      <h2>Employee Average Salary</h2>
      <ul>
        {employees.map((emp, idx) => (
          <li key={idx}>
            {emp.name}: ${emp.salary.toLocaleString()}
          </li>
        ))}
      </ul>
      <h3>Average Salary: ${averageSalary.toFixed(2)}</h3>
      <button onClick={updateSalaries} style={styles.button}>Update Salaries</button>
    </div>
  );
};

// Inline styles for basic layout
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '500px',
    margin: '2rem auto',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
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

export default EmployeeSalary;
