import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={todo.id} text={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};
 
mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText})  //this.props.delete
  }
}
mapStateToProps = state => {
  return {
    todos: state.todos  //naming the props here called todos so that it can be this.props.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
