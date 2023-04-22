const mongoose = require("mongoose");

// Booking Schema
const bookingHistorySchema = new mongoose.Schema({
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    dateStart: {
      type: Date,
      required: true
    },
    dateEnd: {
      type: Date,
      required: true
    }
  });

  module.exports = mongoose.model('Booking', bookingHistorySchema);