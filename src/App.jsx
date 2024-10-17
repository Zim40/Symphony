import { useState } from 'react'
import Button from "./Components/button/button.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Symphony Rails</h1>
      <Button />
    </>
  )
}

export default App
