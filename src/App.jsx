import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    { text: '할일1', checked: false },
    { text: '할일2', checked: false },
    { text: '할일3', checked: false },
  ])
  // useState에서 객체를 넣어야 checkbox 값을 관리할 수 있을 것 같다.
  // 따라서 기존의 todos 배열에서 checked 값을 묶어 객체로 변환.
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const newTodo = e.target[0].value.trim()
    if (newTodo) {
      setTodos((prevTodos) => [{ text: newTodo, checked: false }, ...prevTodos])
    }
    e.target[0].value = ''
  }
  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index))
  }
  const handleCheck = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map(
        (todo, i) => (i === index ? { ...todo, checked: !todo.checked } : todo) // 이 함수로 체크박스 토글 관리
        // i가 index와 같으면 checked 값을 반전시키고, 아니면 그대로 반환
      )
    )
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" placeholder="" />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            style={{
              padding: '10px',
              textDecoration: todo.checked ? 'line-through' : 'none',
            }}
            key={index}
          >
            <input
              type="checkbox"
              checked={todo.checked}
              style={{ marginRight: '10px' }}
              onChange={() => handleCheck(index)}
            />
            {todo.text}
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
