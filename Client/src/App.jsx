import { useState, useEffect, createContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Navbar />
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
