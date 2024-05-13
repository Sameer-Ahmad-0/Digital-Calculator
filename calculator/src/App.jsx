import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './Component/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' text-2xl'>Calculator</h1>
      <Calculator/>
    </>
  )
}

export default App
