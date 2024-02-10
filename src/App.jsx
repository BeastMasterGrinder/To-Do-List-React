import { useState } from 'react'
import { CssBaseline } from '@mui/material'
import ToDoList from './ToDoList'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <ToDoList/>
    </>
  )
}

export default App
