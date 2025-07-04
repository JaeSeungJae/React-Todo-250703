const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <input type="checkbox" onChange={onToggle} checked={todo.checked} />
      {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
      <button onClick={onRemove}>X</button>
    </li>
  )
}

export default TodoItem
