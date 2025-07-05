import Home from './pages/Home'
import Intro from './pages/Intro'
import Python from './pages/Python'
import Java from './pages/Java'
import React from './pages/React'
import FlashCards from './pages/FlashCards'
import Quiz from './pages/quiz/Quiz'
import QuizList from './pages/quiz/QuizList'
import About from './pages/About'
import NoPage from './pages/NoPage'
import C from './pages/C/C'
import CSharp from './pages/CSharp'
import Layout from './components/Layout'
import Redis from './pages/redis/Redis'
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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/intro' element={<Intro />} />
            <Route path='/python' element={<Python />} />
            <Route path='/java' element={<Java />} />
            <Route path='/c' element={<C />} />
            <Route path='/csharp' element={<CSharp />} />
            <Route path='/react' element={<React />} />
            <Route path='/redis' element={<Redis />} />
            <Route path='/flashcards' element={<FlashCards />} />
            <Route path='/quiz' element={<QuizList />} />
            <Route path='/quiz/:quizId' element={<Quiz />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
