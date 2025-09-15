


// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: false }, // optional if your frontend doesn't collect name
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // optional
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
