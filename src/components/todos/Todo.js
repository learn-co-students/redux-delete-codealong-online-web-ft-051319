import React from 'react'

const Todo = props => <li>{props.todo.text} <span><button onClick={() => props.delete(props.todo.id)}>Delete</button></span></li>
//props.text is passed from the dispatch to the reducer
export default Todo;
 