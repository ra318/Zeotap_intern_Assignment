
const { fetchWeatherData } = require('../services/weatherService');

async function fetchWeatherHandler(req, res) {
  const { city } = req.body;
  console.log(`Received request to fetch weather data for city: ${city}`); // Log the received city
  
  try {
    await fetchWeatherData(city);
    res.status(200).json({ message: 'Weather data fetched successfully' });
  } catch (err) {
    console.error(`Error fetching weather data for city: ${city}`, err);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
}

module.exports = { fetchWeatherHandler };
