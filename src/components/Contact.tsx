// Contact.tsx
import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  // Simple email validation
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check for empty fields or invalid email
    const hasErrors = {
      name: name === '',
      email: email === '' || !isValidEmail(email),
      message: message === '',
    };

    setErrors(hasErrors);

    if (!hasErrors.name && !hasErrors.email && !hasErrors.message) {
      try {
        // Load  EmailJS config from environment variables
        // Make sure these are defined in .env file, prefixed by REACT_APP_
        const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
        const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
        const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

        // Send the email
        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: name,
            reply_to: email,
            message: message,
          },
          PUBLIC_KEY
        );

        console.log('Email successfully sent!', response.status, response.text);

        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                helperText={errors.name ? 'Please enter your name' : ''}
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                helperText={errors.email ? 'Please enter a valid email' : ''}
                variant="outlined"
                fullWidth
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={errors.message}
              helperText={errors.message ? 'Please enter a message' : ''}
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
