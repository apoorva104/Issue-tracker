// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  author: String,
  labels: [String],
});

module.exports = mongoose.model('Project', projectSchema);
