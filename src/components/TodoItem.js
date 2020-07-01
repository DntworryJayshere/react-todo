import React, { Component } from 'react'
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ?
            "line-through" : "none"
        }
    }


    render() {
        // 5) accessing & destructuring the props on 'this.props.todo' so we can use variables 'id title' directly
        const { id, title } = this.props.todo;
       
        // 6) Creating input checkbox so events can take place 
        // 6+) onChange of the checkbox -> binding "this" id (this.props.todo.id within component TodoItem) to the prop 'this.props.markComplete' passed from 'Todos' component
        // flow1) so event of onchange checkbox the id value will be pushed up/contained within markComplete prop of Todos
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {" "}
                    {title}
                </p>
            </div>
        )
    }
}

//setting proptypes to ensure that props on 'TodoItem' are in the form of an object
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
