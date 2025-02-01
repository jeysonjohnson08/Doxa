const express = require("express")
const router = express.Router();
const serviceController = require("../controllers/serviceController")

router.get("/",serviceController.getHomePage);
router.get("/about",serviceController.getAboutPage);
router.get('/pricing',serviceController.getPricingPage);
router.get('/contact',serviceController.getContactPage);


module.exports = router;