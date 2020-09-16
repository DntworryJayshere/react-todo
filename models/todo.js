const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  userId: { type: String, required: true },
  id: { type: String },
  title: { type: String, required: true },
  completed: { type: String, required: true },
});

module.exports = mongoose.model('Todo', todoSchema);
