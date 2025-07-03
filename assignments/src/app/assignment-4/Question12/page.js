'use client'
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  TablePagination,
  Typography,
} from '@mui/material';

// Sample data
const sampleData = [
  { id: 1, name: 'Alice', age: 28, country: 'USA' },
  { id: 2, name: 'Bob', age: 35, country: 'Canada' },
  { id: 3, name: 'Charlie', age: 22, country: 'UK' },
  { id: 4, name: 'Diana', age: 30, country: 'Germany' },
  { id: 5, name: 'Ethan', age: 27, country: 'France' },
  { id: 6, name: 'Fiona', age: 33, country: 'Australia' },
  { id: 7, name: 'George', age: 24, country: 'USA' },
  { id: 8, name: 'Hannah', age: 29, country: 'Canada' },
  { id: 9, name: 'Ivan', age: 31, country: 'Russia' },
  { id: 10, name: 'Julia', age: 26, country: 'Brazil' },
];

// Sort helper
const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
};

function DataTable() {
  const [order, setOrder] = useState('asc'); // asc | desc
  const [orderBy, setOrderBy] = useState('name'); // column
  const [page, setPage] = useState(0); // current page
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedData = [...sampleData].sort(getComparator(order, orderBy));
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        📊 User Table with Sorting & Pagination
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {['name', 'age', 'country'].map((column) => (
                <TableCell key={column}>
                  <TableSortLabel
                    active={orderBy === column}
                    direction={orderBy === column ? order : 'asc'}
                    onClick={() => handleSort(column)}
                  >
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Controls */}
      <TablePagination
        component="div"
        count={sampleData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </Paper>
  );
}

export default DataTable;
