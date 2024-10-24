const axios = require('axios');
const Weather = require('../models/weatherModel');
const nodemailer = require('nodemailer');

async function fetchWeatherData(city) {
  console.log(`Fetching weather data for ${city}`); // Log the city being fetched

  const apiKey = process.env.WEATHER_API_KEY;
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

  const { temp, feels_like } = response.data.main;

  const weatherData = new Weather({
    city,
    temperature: temp,
    feels_like,
    timestamp: Date.now(),
  });

  await weatherData.save();

  // Optionally, send an email if temperature exceeds threshold
  if (temp > 35) {
    sendAlert(city, temp);
  }

  return weatherData;
}

function sendAlert(city, temperature) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Weather Alert: ${city}`,
    text: `The temperature in ${city} is ${temperature}°C.`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log('Error sending email:', err);
    else console.log('Email sent:', info.response);
  });
}

module.exports = { fetchWeatherData };
