import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import ChooseClub from './pages/myClubPicker.jsx'
import MyClubHome from './pages/myClubHome.jsx'
import ScorePage from './pages/scorePage.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/club-choose" element={<ChooseClub />} />

      <Route path="/myClub" element={<MyClubHome />} />

      <Route path="/scorePage" element={<ScorePage />} />
    </Routes>

      
    
    </>
  )
}

export default App
