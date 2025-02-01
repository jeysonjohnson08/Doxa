const path = require("path");
const Service = require("../models/Service");

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
};

const getAboutPage = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "about.html"));
};

const getPricingPage = async (req, res) => {
  try {
    const services = await Service.find(); // Fetch all services from the database
    console.log("Services:", services); // Debugging: Ensure services are fetched correctly

    res.sendFile(path.join(__dirname, "..", "views", "pricing.html"));
  } catch (err) {
    console.error("Error fetching services:", err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
};

const getContactPage = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "contact.html"));
};

// Export all functions
module.exports = {
  getHomePage,
  getAboutPage,
  getPricingPage,
  getContactPage,
};
