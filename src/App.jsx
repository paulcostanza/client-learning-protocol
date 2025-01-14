import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
