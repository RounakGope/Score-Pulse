import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import ChooseClub from './pages/myClubPicker.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/club-choose" element={<ChooseClub />} />
    </Routes>

      
    
    </>
  )
}

export default App
