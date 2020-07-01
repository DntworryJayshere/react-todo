import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {

  render() {
    //   3) accessing todos prop from apps/state file as 'this.props.todos'
    //   4) passing down todo props fom '.map((todo)' into Todoitem as 'todo={todo}' with id as key 'key={todo.id}'
    //   7) creating a prop of markComplete (for use of component TodoItem - down the chain) & setting it equal to the prop 'this.props.markComplete' passed from "App" component (for use to alter state -- up the chain)
    //   flow2) change event has taken place. The id has been pushed up to "this" markComplete & will be pushed once again to App component
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

//setting proptypes to ensure that props on 'Todos' is an Array (consisting of todo objects)
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
