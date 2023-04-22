const mongoose = require("mongoose");
const locationSchema = require('./Location').schema;


// Define schema for cars
const carsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    description: {
        type: String,
        required: 'This field is required.'
    },
    location: {
        type: locationSchema, // Use locationSchema
        required: 'This field is required.'
    },
    brand: {
        type: String,
        required: 'This field is required.'
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    }],
    image: {
        type: String,
        required: 'This field is required.'
    },    
});

module.exports = mongoose.model('Cars', carsSchema);

