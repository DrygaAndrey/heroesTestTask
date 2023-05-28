const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;