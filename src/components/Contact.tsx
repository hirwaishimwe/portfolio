import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const hasErrors = {
      name: name === '',
      email: email === '' || !isValidEmail(email),
      message: message === '',
    };

    setErrors(hasErrors);

    if (!hasErrors.name && !hasErrors.email && !hasErrors.message) {
      console.log({ name, email, message });
      // Uncomment and integrate EmailJS here
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box component="form" noValidate autoComplete="off" className="contact-form">
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                helperText={errors.name ? 'Please enter your name' : ''}
              />
              <TextField
                required
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                helperText={errors.email ? 'Please enter a valid email' : ''}
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
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
