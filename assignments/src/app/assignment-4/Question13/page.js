'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

// Yup validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Must contain at least one number')
    .required('Password is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

function ComplexForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phone: '',
    },
    validationSchema: validationSchema,
    validateOnChange: true, // Real-time validation
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log('✅ Form Submitted:', values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h5" align="center">📝 Registration Form</Typography>

        {/* Email Field */}
        <TextField
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />

        {/* Password Field */}
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          fullWidth
        />

        {/* Phone Number Field */}
        <TextField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          fullWidth
        />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default ComplexForm;
