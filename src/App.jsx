// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Intro from './pages/Intro'
import Java from './pages/Java'
import Quiz from './pages/Quiz'
import About from './pages/About'
import NoPage from './pages/NoPage'


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/java' element={<Java />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
