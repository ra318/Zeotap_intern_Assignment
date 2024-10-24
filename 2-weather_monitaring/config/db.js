const mongoose = require('mongoose');
require('dotenv').config();

function connectDB() {
  mongoose.connect(process.env.DATABASE_URL, {
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));
}

module.exports = connectDB;
