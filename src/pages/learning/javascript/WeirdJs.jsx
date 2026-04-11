import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function WeirdJs() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    return (
        <div className="container">
            <h1>Weird JS</h1>

            <p>JavaScript is weird, to say the least. Let's explore some random examples and edge cases that will help strengthen your understanding of this language.</p>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="weird-js"
            />
        </div>
    )
}