import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import About from './components/pages/aboutTodos';
// import { v4 as uuidv4 } from "uuid";
import Axios from 'axios';

import './App.css';
//user guidlines. follow the numbered comments 1-10) between app & component files in the correct order, prior to reading flow#) comments.

class App extends Component {
  //  1) maintining 'todos' state within our app.js file
  state = {
    todos: [],
  };

  componentDidMount() {
    Axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=15'
    ).then((res) => this.setState({ todos: res.data }));
  }

  // 10a) toggle complete method
  markComplete = (id) => {
    //10b) method to alter this state object
    this.setState({
      //10c) if the id passed up to the method is equal to the todo(id) contained within the todos: array that is mapped through, then mark it completed and return todo the object to the todos array
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    Axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').then(
      (res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
    );
  };

  // ... is a 'spread operator'
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    }).then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    // 2) pass down todos from state as a prop 'todos={this.state.todos}' for use in class 'Todos'
    // 9) creating prop markComplete (for use of component 'Todos' - down the chain) so that the markComplete method in this 'App' class can alter state
    // flow3) change event has taken place. The id has been pushed up to "this" markComplete & will be excecuted in the markComplete method
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
