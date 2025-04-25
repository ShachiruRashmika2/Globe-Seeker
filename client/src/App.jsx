import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WorldMap from './components/worldMap'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<WorldMap/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
