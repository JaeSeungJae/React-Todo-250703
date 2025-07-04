import { useRef, useState } from 'react'

export default function useTodos(
  initialTodos = [
    { id: 3, text: '공부하기', checked: true },
    { id: 2, text: '코딩하기', checked: false },
    { id: 1, text: '운동하기', checked: true },
  ]
) {
  const lastId = useRef(
    initialTodos.length > 0 ? Math.max(...initialTodos.map((t) => t.id)) + 1 : 1
  )
  const [todos, setTodos] = useState(initialTodos)

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
    setTodos(todos.filter((todo) => todo.id !== seletedId))
  }

  const toggleTodo = (seletedId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === seletedId ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }

  return { todos, handleOnSubmit, removeTodo, toggleTodo }
}
