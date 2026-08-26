import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Intro() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    return (
        <div className="container">
            <h1>Introduction to Python</h1>

            <h2>What is code?</h2>

            <p>Code is just a series of instructions for a computer to follow, one after another.</p>

            <p><strong>Syntax</strong> is valid code that the computer can understand. These are the rules for how <em>expressions</em> and <em>statements</em> should be structured in a programming language.</p>

            <h2>Why python?</h2>

            <p>Here are some reasons we think Python is a future-proof choice for developers:</p>

            <ul>
                <li>Easy to read and write... python reads like plain English. Due to its simple syntax, it's a great choice for implementing advanced concepts like AI, and is arguably python's best feature.</li>
                <li>Popular. According to the Stack Overflow (soon to be R.I.P.) Developer Survey, python is the 3rd most popular coding language in 2024.</li>
                <li>Free. Python, like many languages nowadays, is developed under an open-source license. It's free to install, use, and distribute.</li>
                <li>Portable. Python written for one platform will work on any other platform.</li>
                <li>Interpreted. Code can be executed as soon as it is written. Because it does not need to take a long time to compile like Java, C++, or Rust, releasing code to production is typically faster.</li>
            </ul>

            <h2>Why not python</h2>

            <p>Python might not be the best choice for a project if...</p>

            <ul>
                <li>The code needs to run fast. Python code executes very slowly, which is why performance critical applications like PC games are not written in python.</li>
                <li>The codebase will become large and complex. Due to its dynamic type system, python code can be harder to keep clean of bugs.</li>
                <li>The application needs to be distributed directly to non-technical users. They would have to install python in order to run your code, which would be a huge inconvenience.</li>
            </ul>

            <h2>Python 2 vs. Python 3</h2>

            <p>One thing that's important to keep in mind as you continue your python journey is that the Python ecosystem is fragmented. Python 3 was released on December 3rd, 2008, but over a decade and a half later the web is still full of python 2 dependencies, scripts and tutorials.</p>

            <p>In this course, we used python 3. One of the most obvious breaking changes between python 2 and 3 is the syntax for printing text to the console.</p>

            <p>As you've probably guessed, you should always use python 3 going forward! Python 2 and 3 are similar, but python 3 contains significant changes that are not backward compatible with the 2.x versions.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro"
            />
        </div>
    )
}