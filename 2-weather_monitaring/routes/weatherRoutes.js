const express = require('express');
const { fetchWeatherHandler } = require('../controllers/weatherController');

const router = express.Router();

// Route to fetch weather data
router.post('/fetch', fetchWeatherHandler);

module.exports = router;
