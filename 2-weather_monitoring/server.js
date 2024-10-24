const express = require('express');
const bodyParser = require('body-parser');
const weatherRoutes = require('./routes/weatherRoutes');
const connectDB = require('./config/db');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to the database
connectDB();


// Setup routes
app.use('/api/weather', weatherRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
