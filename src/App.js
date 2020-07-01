import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";


//user guidlines. follow the numbered comments 1-10) between app & component files in the correct order, prior to reading flow#) comments.

class App extends Component {
  //  1) maintining 'todos' state within our app.js file
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Walk Charlie",
        completed: false,
      },
      {
        id: 3,
        title: "Make Dinner",
        completed: false,
      },
    ],
  };

  // 10a) toggle complete method 
  markComplete = (id) => {
    //10b) method to alter this state object
    this.setState({
      //10c) if the id passed up to the method is equal to the todo(id) contained within the todos: array that is mapped through, then mark it completed and return todo the object to the todos array
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  };

  render() {
    // 2) pass down todos from state as a prop 'todos={this.state.todos}' for use in class 'Todos'
    // 9) creating prop markComplete (for use of component 'Todos' - down the chain) so that the markComplete method in this 'App' class can alter state 
    // flow3) change event has taken place. The id has been pushed up to "this" markComplete & will be excecuted in the markComplete method
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
