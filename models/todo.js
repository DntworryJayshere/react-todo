const mongoose = require('mongoose');
const { Todo } = require('.');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  userId: { type: String, required: true },
  id: { type: String },
  title: { type: String, required: true },
  completed: { type: String, required: true },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
