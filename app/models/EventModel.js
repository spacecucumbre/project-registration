const mongoose = require('mongoose');

const Event = new mongoose.Schema({
  name: String,
  event: String,
  city: String
  
}, {
  timestamps: true
}) 

module.exports = mongoose.model('Event', Event);