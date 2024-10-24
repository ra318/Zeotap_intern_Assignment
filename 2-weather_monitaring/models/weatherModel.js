const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
    city: { type: String, required: true },
    temperature: { type: Number, required: true },
    feels_like: { type: Number, required: true },
    timestamp: { type: Number, required: true },
});

module.exports = mongoose.model("Weather", weatherSchema);
