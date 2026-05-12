import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Booleans() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const booleanFunction = `console.log(Boolean(""))   // false
console.log(Boolean("0"))  // true
console.log(Boolean(100))  // true
console.log(Boolean(null)) // false
console.log(Boolean([0]))  // true
console.log(Boolean(-0))   // false`

    return (
        <div className="container">
            <h1>Booleans</h1>

            <h2><code>Boolean()</code></h2>

            <p>You can use the <code>Boolean()</code> function to check the truthy or falsy value.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {booleanFunction}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="booleans"
            />
        </div>
    )
}