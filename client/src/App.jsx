import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import WorldMap from './components/worldMap';
import Navbar from './components/Navbar';
import { createTheme,ThemeProvider } from '@mui/material';
import { amber, teal } from '@mui/material/colors';
const theme=createTheme({
  palette:{
    
      primary: {
        main: '#00e676',
        dark: '#00a152',
        light: '#33eb91'
      },
      secondary: {
  
    main: '##ffc400',
        dark: '#b28900',
        light: '#ffcf33'
  },
  

  
    
  },
  typography:{
    fontFamily:'cabin'
  },
 
});




function App() {
  

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
