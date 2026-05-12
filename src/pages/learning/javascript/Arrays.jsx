import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Arrays() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const allTypes = `const allTypes = ["Apple", 62, false, null, undefined]`

    return (
        <div className="container">
            <h1>Arrays</h1>

            <p>Because JavaScript is a dynamically typed language, arrays are flexible containers that can hold a variety of different data types.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {allTypes}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="arrays"
            />
        </div>
    )
}