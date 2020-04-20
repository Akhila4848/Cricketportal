const mongoose = require("mongoose");

const Signschema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
 
  user_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  Phno: {
    type: String,
    required: true
  }


});

const Signin = (module.exports = mongoose.model("Signin", Signschema));
