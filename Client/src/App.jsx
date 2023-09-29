import { useState, useEffect, createContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Footer from './Footer/Footer'

function App() {
  const [showMenu, setShowMenu] = useState(false)


  return (
    <div className='App'>
      <div className={showMenu ? "NavbarMenu" : "Hidden"}>
      <img onClick={() => setShowMenu(!showMenu)} src="src/assets/homepage Navbar menu icon.jpg" alt="menu"/>
      <div className='NavbarMenuLinks'>
        <div>MUSIC</div>
        <div>originals | covers</div>
        <div>ABOUT</div>
        <div>CONCERTS</div>
        <div>BOOKING</div>
      </div>


        
      </div>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className='Content'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
