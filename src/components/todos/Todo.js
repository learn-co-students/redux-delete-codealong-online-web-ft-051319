import React from 'react'

const Todo = props => {
  return (
      <div>
         <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
      </div>
  )
}

export default Todo;


// before change
//   <span>{props.text}</span><button onClick={() => props.delete(props.text)}>DELETE</button>

// Now, when props.delete is called, an action is dispatched that contains an id only as its payload.
