import axios from 'axios';

export default {
  // Gets todos from the jsonplaceholder API
  getTodos: function (q) {
    return Axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=15'
    ).then((res) => this.setState({ todos: res.data }));
  },
  // Gets all saved todos
  getSavedTodos: function () {
    return axios.get('/api/todos');
  },
  // Deletes the saved todo with the given id
  deleteTodo: function (id) {
    return axios.delete('/api/todos/' + id);
  },
  // Saves a todo to the database
  saveTodo: function (todoData) {
    return axios.post('/api/todos', todoData);
  },
};
