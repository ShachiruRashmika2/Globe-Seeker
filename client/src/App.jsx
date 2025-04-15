import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorldMap from './components/worldMap'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WorldMap />
  
    </>
  )
}

export default App
