const path = require('path');
const Contact = require('../models/contact');

// Home Page
const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

// About Page
const getAboutPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'about.html'));
};

// Pricing Page
const getPricingPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'pricing.html'));
};

// Contact Page
const getContactPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'contact.html'));
};

// Submit Contact Form
const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

module.exports = {
  getHomePage,
  getAboutPage,
  getPricingPage,
  getContactPage,
  submitContactForm,
};