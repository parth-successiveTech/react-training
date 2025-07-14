'use client'
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from '@mui/material';

function InfoModal() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Toggle modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle input inside modal
  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('User Feedback:', feedback);
    handleClose(); // Close modal
    setFeedback(''); // Reset input
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h5" gutterBottom>
        Material-UI Modal Example
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        Open Feedback Modal
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>💬 Feedback</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Your feedback"
            fullWidth
            variant="outlined"
            value={feedback}
            onChange={handleChange}
            multiline
            rows={4}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InfoModal;
