const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// will show up as name of Posts in mongodb
module.exports = mongoose.model('Posts', PostSchema);
