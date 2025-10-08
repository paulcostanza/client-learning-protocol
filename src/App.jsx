import Home from './pages/home/Home'
import Intro from './pages/intro/Intro'
import Python from './pages/python/Python'
// import Java from './pages/java/Java' <- delete this page

import JavaLanding from './pages/java/JavaLanding'
import JavaSectionLayout from './pages/java/JavaSectionLayout'
import JavaIntro from './pages/java/JavaIntro'
import JavaFundamentals from './pages/java/JavaFundamentals'
import JavaMethods from './pages/java/Methods'
import JavaArrays from './pages/java/Arrays'
import JavaHashMaps from './pages/java/HashMaps'

import React from './pages/react/React'
import Quiz from './pages/quiz/Quiz'
import QuizList from './pages/quiz/QuizList'
import AboutCLP from './pages/about/clp/AboutCLP'
import AboutMe from './pages/about/me/AboutMe'
import NoPage from './pages/NoPage'
import C from './pages/C/C'

// import CSharp from './pages/cSharp/CSharp'
import CSharpLanding from './pages/cSharp/CSharpLanding'
import CSharpSectionLayout from './pages/cSharp/CSharpSectionLayout'
import ControlFlow from './pages/cSharp/ControlFlow'
import CSharpBasics from './pages/cSharp/CSharpBasics'
import ExceptionHandling from './pages/cSharp/ExceptionHandling'
import Introduction from './pages/cSharp/Introduction'
import MethodsAndFunctions from './pages/cSharp/MethodsAndFunctions'
import ObjectOrientedProgramming from './pages/cSharp/ObjectOrientedProgramming'


import Layout from './components/Layout'
import Redis from './pages/redis/Redis'

// import CyberSecurity from './pages/cybersecurity/CyberSecurity'
import CyberSecurityLanding from './pages/cybersecurity/CyberSecurityLanding'
import CyberSecurityLayout from './pages/cybersecurity/CyberSecurityLayout'
import Cybersecurity101 from './pages/cybersecurity/CyberSecurity101'
import TerminalIntro from './pages/cybersecurity/TerminalIntro'
import FileSystem from './pages/cybersecurity/FileSystem'


// import LowLevel from './pages/low-level/LowLevel' <- delete this page
import LowLevelLanding from './pages/low-level/LowLevelLanding'
import LowLevelSectionLayout from './pages/low-level/LowLevelSectionLayout'
import VariableSize from './pages/low-level/VariableSize'

import ScrollToTop from './components/ScrollToTop'

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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/intro' element={<Intro />} />

            <Route path='/cybersecurity' element={<CyberSecurityLanding />} />
            <Route path='/cybersecurity' element={<CyberSecurityLayout />} >
              <Route path='cybersecurity101' element={<Cybersecurity101 />} />
              <Route path='terminal-intro' element={<TerminalIntro />} />
              <Route path='file-system' element={<FileSystem />} />
            </Route>

            <Route path='/python' element={<Python />} />

            <Route path='/java' element={<JavaLanding />} />
            <Route path='/java' element={<JavaSectionLayout />}>
              <Route path='intro' element={<JavaIntro />} />
              <Route path='fundamentals' element={<JavaFundamentals />} />
              <Route path='methods' element={<JavaMethods />} />
              <Route path='arrays' element={<JavaArrays />} />
              <Route path='hashmaps' element={<JavaHashMaps />} />
            </Route>

            <Route path='/c' element={<C />} />

            <Route path='/csharp' element={<CSharpLanding />} />
            <Route path='/csharp' element={<CSharpSectionLayout />} >
              <Route path='control-flow' element={<ControlFlow />} />
              <Route path='basics' element={<CSharpBasics />} />
              <Route path='exception-handling' element={<ExceptionHandling />} />
              <Route path='intro' element={<Introduction />} />
              <Route path='methods-and-functions' element={<MethodsAndFunctions />} />
              <Route path='oop' element={<ObjectOrientedProgramming />} />

            </Route>


            <Route path='/react' element={<React />} />
            <Route path='/redis' element={<Redis />} />
            <Route path='/quiz' element={<QuizList />} />
            <Route path='/quiz/:quizId' element={<Quiz />} />
            <Route path='/about/clp' element={<AboutCLP />} />
            <Route path='/about/me' element={<AboutMe />} />

            <Route path='/lowlevel' element={<LowLevelLanding />} />
            <Route path='/lowlevel' element={<LowLevelSectionLayout />}>
              <Route path='variable-size' element={<VariableSize />} />
            </Route>

            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
