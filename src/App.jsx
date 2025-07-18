import Home from './pages/home/Home'
import Intro from './pages/intro/Intro'
import Python from './pages/python/Python'
import Java from './pages/java/Java'
import React from './pages/react/React'
// import FlashCards from './pages/flash-cards/FlashCards'
import Quiz from './pages/quiz/Quiz'
import QuizList from './pages/quiz/QuizList'
import About from './pages/about/About'
import NoPage from './pages/NoPage'
import C from './pages/C/C'
import CSharp from './pages/cSharp/CSharp'
import Layout from './components/Layout'
import Redis from './pages/redis/Redis'
import {
  // BrowserRouter, replace this for HashRouter after setting up a backend server
  HashRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (
    <>

      <HashRouter>
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
            {/* <Route path='/flashcards' element={<FlashCards />} /> */}
            <Route path='/quiz' element={<QuizList />} />
            <Route path='/quiz/:quizId' element={<Quiz />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
