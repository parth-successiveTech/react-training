'use client'
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
} from '@mui/material';

function ValidatedForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  // Basic validation rules
  const validate = () => {
    let valid = true;
    let newErrors = { name: '', email: '' };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('✅ Form submitted:', formData);
      alert('Form submitted successfully!');
      // Optionally reset form here
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h5" align="center">🚀 Registration Form</Typography>

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
        />

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />

        <Button variant="contained" type="submit" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default ValidatedForm;
