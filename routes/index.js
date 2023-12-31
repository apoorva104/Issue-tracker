const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Define a route for the home page
router.get('/', homeController.showHomePage);

module.exports = router;