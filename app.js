const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const serviceRoutes = require('./routes/serviceRoutes');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// MongoDB Connection
connectDB();

// Routes
app.use('/', serviceRoutes);

// Contact Form Submission Route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required!' });
  }

  console.log(`New message from ${name} (${email}): ${message}`);

  // Respond with a success message
  res.json({ success: true, message: 'Message received successfully!' });
});

// Thank-You Page Route (Fixed)
app.get('/thank-you', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'thank-you.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
