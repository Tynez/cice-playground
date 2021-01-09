import { FC, useEffect, useState } from 'react'

export const App: FC = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [todoList, setTodoList] = useState<string[]>([])

  const addTask = () => {
    setTodoList([...todoList, taskTitle])
    setTaskTitle('')
  }
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
      <button onClick={addTask}>Add task</button>
      <ul>
        {todoList.map((task, key) => (
          <li key={key}>{task}</li>
        ))}
      </ul>
    </>
  )
}
