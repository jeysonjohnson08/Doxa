const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Home Page
router.get('/', serviceController.getHomePage);

// About Page
router.get('/about', serviceController.getAboutPage);

// Pricing Page
router.get('/pricing', serviceController.getPricingPage);

// Contact Page
router.get('/contact', serviceController.getContactPage);

// Submit Contact Form
router.post('/contact', serviceController.submitContactForm);

module.exports = router;