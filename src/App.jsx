import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(['할일1', '할일2', '할일3'])
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const newTodo = e.target[0].value.trim()
    if (newTodo) {
      setTodos((prevTodos) => [newTodo, ...prevTodos])
    }
    e.target[0].value = ''
  }
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" placeholder="" />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  )
}

export default App
