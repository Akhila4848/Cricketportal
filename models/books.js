const mongoose = require("mongoose");

const Bookschema = mongoose.Schema({
  p_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  repno: {
    type: String,
    required: true
  }
});

const Book = (module.exports = mongoose.model("Book", Bookschema));
