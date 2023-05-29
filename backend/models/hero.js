const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
  },
  realName: {
    type: String,
    required: true,
  },
  originDescr: {
    type: String,
    required: true,
  },
  superPowers: {
    type: String,
    required: true,
  },
  catchPhrases: {
    type: String,
    required: true,
  },
  imageFiles: [{
    type: String,
    required: true,
  }],
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
