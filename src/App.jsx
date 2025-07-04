import { useRef, useState } from 'react'

function App() {
  const lastId = useRef(4)

  const [todos, setTodos] = useState([
    { id: 3, text: '공부하기', checked: true },
    { id: 2, text: '코딩하기', checked: false },
    { id: 1, text: '운동하기', checked: true },
  ])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setTodos([
      { id: lastId.current, text: form.todo.value, checked: false },
      ...todos,
    ])
    lastId.current++
  }

  const removeTodo = (seletedId) => {
    const filterTodos = todos.filter((todo) => todo.id != seletedId)
    setTodos(filterTodos)
  }

  const toggleTodo = (seletedId) => {
    const updateTodos = todos.map((todo) =>
      todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo
    )
    setTodos(updateTodos)
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => {
                toggleTodo(todo.id)
              }}
              checked={todo.checked}
            />
            {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

// import React, { useEffect, useState } from 'react'

// function App() {
//   useEffect(() => {
//     fetch('https://dummyjson.com/todos')
//       .then((res) => res.json())
//       .then((res) => setTodos(res.todos))
//   }, []) // 초기 렌더링 시 더미 JSON API에서 todos를 가져와서 상태에 저장

//   const [todos, setTodos] = useState([])
//   // useState를 사용하여 todos 상태를 관리

//   const handleOnSubmit = (e) => {
//     e.preventDefault()
//     const newTodo = e.target[0].value.trim()
//     if (newTodo) {
//       setTodos((prevTodos) => [
//         { todo: newTodo, completed: false },
//         ...prevTodos,
//       ]) // setTodos는 실제 api가 작동할 시 필요없는 부분이지만, 예시로 남겨둠
//       fetch('https://dummyjson.com/todos/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           todo: newTodo,
//           completed: false,
//           userId: 5,
//         }),
//       })
//         .then((res) => res.json())
//         .then((res) => console.log(res))
//     }
//     e.target[0].value = ''
//   }

//   const deleteTodo = (index) => {
//     setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index))
//   }

//   const handleCheck = (index) => {
//     setTodos((prevTodos) =>
//       prevTodos.map(
//         (todo, i) =>
//           i === index ? { ...todo, completed: !todo.completed } : todo // 이 함수로 체크박스 토글 관리
//         // i가 index와 같으면 completed 값을 반전시키고, 아니면 그대로 반환
//       )
//     )
//   }

//   return (
//     <>
//       <form onSubmit={handleOnSubmit}>
//         <input type="text" name="todo" placeholder="" />
//         <button type="submit">등록</button>
//       </form>

//       <ul>
//         {todos.map((todo, index) => (
//           <li
//             style={{
//               padding: '10px',
//               textDecoration: todo.completed ? 'line-through' : 'none',
//             }}
//             key={index}
//           >
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               style={{ marginRight: '10px' }}
//               onChange={() => handleCheck(index)}
//             />
//             {/* {JSON.stringify(todo.completed)} / {index} / */}
//             {todo.todo}
//             <button
//               style={{ marginLeft: '10px' }}
//               onClick={() => deleteTodo(index)}
//             >
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default App
