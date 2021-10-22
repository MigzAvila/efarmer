const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Username: String,
  Question: String,
  Replies: [],
});

module.exports = mongoose.model("user_data", UserSchema);
