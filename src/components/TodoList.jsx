import TodoItem from './TodoItem'
import { useTodos } from '../context/TodoContext.jsx'

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodos()
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => toggleTodo(todo.id)}
          onRemove={() => removeTodo(todo.id)}
        />
      ))}
    </ul>
  )
}

export default TodoList
