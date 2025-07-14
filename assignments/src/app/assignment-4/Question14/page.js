'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  List,
  ListItem,
} from '@mui/material';

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(4, 'Minimum 4 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

function FormWithErrorSummary() {
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      setSubmitAttempted(true);
      if (Object.keys(formik.errors).length === 0) {
        console.log('✅ Form submitted:', values);
        alert('Form submitted successfully!');
        resetForm();
        setSubmitAttempted(false);
      }
    },
  });

  // Extract errors for summary display
  const errorList = Object.entries(formik.errors)
    .filter(([key, value]) => formik.touched[key])
    .map(([key, value]) => value);

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h5" align="center">
          🧾 Form with Error Summary
        </Typography>

        {/* Error Summary */}
        {submitAttempted && errorList.length > 0 && (
          <Alert severity="error">
            <Typography variant="subtitle1">Please fix the following errors:</Typography>
            <List dense>
              {errorList.map((err, idx) => (
                <ListItem key={idx} sx={{ pl: 0 }}>
                  - {err}
                </ListItem>
              ))}
            </List>
          </Alert>
        )}

        {/* Username */}
        <TextField
          label="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          fullWidth
        />

        {/* Email */}
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

        {/* Phone */}
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

export default FormWithErrorSummary;
