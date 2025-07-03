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
  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index))
  }
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" placeholder="" />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => deleteTodo(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
