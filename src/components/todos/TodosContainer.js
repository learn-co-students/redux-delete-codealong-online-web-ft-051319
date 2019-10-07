import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

// The change is minimal, but this set up is actually better. Previously, key was based off the index provided by map. Now its using our randomly generated ID, and is less prone to errors in the virtual DOM. We'll need both todo.id and todo.text to be passed into Todo so we pass both down as the object, todo.
    renderTodos = () => {
      return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
    }

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
