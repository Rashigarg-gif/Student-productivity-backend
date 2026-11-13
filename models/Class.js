const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Class subject is required'],
    trim: true
  },
  date: {
    type: String, // "YYYY-MM-DD"
    required: true
  },
  time: {
    type: String, // "HH:MM"
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Class', classSchema);