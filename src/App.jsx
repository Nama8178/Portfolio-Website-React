import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import './App.css'
import Projects from './sections/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero />
     <Projects />
    </>
  )
}

export default App
