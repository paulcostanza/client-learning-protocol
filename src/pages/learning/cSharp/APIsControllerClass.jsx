import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function APIsControllerClass() {
    const quizImports = {
        cSharp: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    return (
        <div className="container">
            <h1>APIs: Controller Class</h1>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="control-flow"
            />
        </div>
    )
}