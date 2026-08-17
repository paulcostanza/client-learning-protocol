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

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro"
            />
        </div>
    )
}