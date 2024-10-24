// api/server.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./data/database.js');
const ruleRoutes = require('./backend/routes/RuleRoutes.js');
const cors = require('cors')
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors)
// Routes
app.use('/rules', ruleRoutes);

// Connect to Database
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
