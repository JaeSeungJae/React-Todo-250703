import React, { useEffect, useState } from 'react'

function App() {
  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((res) => setTodos(res.todos))
  }, []) // 초기 렌더링 시 더미 JSON API에서 todos를 가져와서 상태에 저장

  const [todos, setTodos] = useState([])
  // useState를 사용하여 todos 상태를 관리

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const newTodo = e.target[0].value.trim()
    if (newTodo) {
      setTodos((prevTodos) => [
        { todo: newTodo, completed: false },
        ...prevTodos,
      ])
      fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: newTodo,
          completed: false,
          userId: 5,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
    }
    e.target[0].value = ''
  }

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index))
  }

  const handleCheck = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map(
        (todo, i) =>
          i === index ? { ...todo, completed: !todo.completed } : todo // 이 함수로 체크박스 토글 관리
        // i가 index와 같으면 completed 값을 반전시키고, 아니면 그대로 반환
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
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            key={index}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              style={{ marginRight: '10px' }}
              onChange={() => handleCheck(index)}
            />
            {/* {JSON.stringify(todo.completed)} / {index} / */}
            {todo.todo}
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
