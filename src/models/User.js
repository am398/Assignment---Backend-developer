const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  otp: { type: String },
  otpExpiry: { type: Date },
  location: { type: String },
  age: { type: Number },
  workDetails: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;