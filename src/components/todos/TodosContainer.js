import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => { return this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={todo.id} todo={todo} />) }

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};
 

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText})  //this.props.delete
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos  //naming the props here called todos so that it can be this.props.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
