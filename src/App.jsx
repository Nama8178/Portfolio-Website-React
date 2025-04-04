import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import './App.css'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero />
     <Projects />
     <Skills />
    </>
  )
}

export default App
