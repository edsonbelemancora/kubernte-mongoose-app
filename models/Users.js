const mongoose = require("mongoose");

 
let userSchema = mongoose.Schema({
  userId: {type: String, unique: true},
  name: String,
  email: String,
  age : Number
})

module.exports = mongoose.model("User", userSchema);