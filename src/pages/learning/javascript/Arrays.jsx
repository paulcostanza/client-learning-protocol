import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Arrays() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    return (
        <div className="container">
            <h1>Arrays</h1>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="arrays"
            />
        </div>
    )
}