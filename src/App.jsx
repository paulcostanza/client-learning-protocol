import Home from './pages/Home'
import Intro from './pages/Intro'
import Python from './pages/Python'
import Java from './pages/Java'
import React from './pages/React'
import FlashCards from './pages/FlashCards'
import Quiz from './pages/Quiz'
import About from './pages/About'
import NoPage from './pages/NoPage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/python' element={<Python />} />
          <Route path='/java' element={<Java />} />
          <Route path='/react' element={<React />} />
          <Route path='/flashcards' element={<FlashCards />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
