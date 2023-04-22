const mongoose = require("mongoose");

// Define schema for comments
const commentSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comment: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });


module.exports = mongoose.model('Comment', commentSchema);