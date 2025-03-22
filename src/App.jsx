import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Box1 from './Box1'

export default function App() {
  const [count, setCount] = useState(0)
  const [isLigt , setIsLight] = useState(false)

  const changeColor = ()=>{
    setIsLight(!isLigt)

  }
  
  return (
    <>
      <Hello />
      <Box1 />
    </>
  )
    }

