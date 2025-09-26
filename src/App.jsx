import Home from './pages/home/Home'
import Intro from './pages/intro/Intro'
import Python from './pages/python/Python'
import Java from './pages/java/Java'
import React from './pages/react/React'
import Quiz from './pages/quiz/Quiz'
import QuizList from './pages/quiz/QuizList'
import AboutCLP from './pages/about/clp/AboutCLP'
import AboutMe from './pages/about/me/AboutMe'
import NoPage from './pages/NoPage'
import C from './pages/C/C'
import CSharp from './pages/cSharp/CSharp'
import Layout from './components/Layout'
import Redis from './pages/redis/Redis'
import CyberSecurity from './pages/cybersecurity/CyberSecurity'
import LowLevel from './pages/low-level/LowLevel'
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
            <Route path='/cybersecurity' element={<CyberSecurity />} />
            <Route path='/python' element={<Python />} />
            <Route path='/java' element={<Java />} />
            <Route path='/c' element={<C />} />
            <Route path='/csharp' element={<CSharp />} />
            <Route path='/react' element={<React />} />
            <Route path='/redis' element={<Redis />} />
            <Route path='/quiz' element={<QuizList />} />
            <Route path='/quiz/:quizId' element={<Quiz />} />
            <Route path='/about/clp' element={<AboutCLP />} />
            <Route path='/about/me' element={<AboutMe />} />
            <Route path='/lowlevel' element={<LowLevel />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
