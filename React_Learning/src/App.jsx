import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicsComponent } from './components/basics-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>Learning For React JS</div>
    <BasicsComponent/>
    </>
  )
}

export default App
