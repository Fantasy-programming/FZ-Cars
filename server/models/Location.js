const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    city: {
        type: String,
        required: 'This field is required.'
    },
      state: {
        type: String,
        required: 'This field is required.'
    },
      country: {
        type: String,
        required: 'This field is required.'
    },
});

module.exports = mongoose.model('Location', locationSchema);