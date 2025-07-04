// import { useRef, useState } from 'react'
import TodoWriteForm from './components/TodoWriteForm'
import TodoList from './components/TodoList'
// import useTodos from './hooks/useTodos'

function App() {
  //const { todos, handleOnSubmit, removeTodo, toggleTodo } = useTodos()

  return (
    <>
      <TodoWriteForm />
      <TodoList />
    </>
  )
}

export default App
