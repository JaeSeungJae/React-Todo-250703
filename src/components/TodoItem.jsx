import React from 'react'
import { useTodos } from '../context/TodoContext'

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodos()
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
        checked={todo.checked}
      />
      {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  )
}

export default TodoItem
