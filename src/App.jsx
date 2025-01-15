import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Quiz from './pages/Quiz'
import NoPage from './pages/NoPage'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      {/* <NavBar />
      <HomePage />
      <Footer /> */}
    </>
  )
}

export default App
