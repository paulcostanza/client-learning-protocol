import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function BuiltInObjects() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    return (
        <div className="container">
            <h1>Built In Objects</h1>

            <h2><code>Math</code> Object</h2>

            <p>The <code>Math</code> object is a built-in object in JS that gives us access to predefined methods to use in regards to math</p>

            <ul>
                <li><code>Math.random()</code>: generates a random number between 0 and 1, but is not inclusive of 1</li>
                <li><code>Math.floor()</code>: removes the decimal, rounds down to nearest integer</li>
            </ul>

            <blockquote>
                <p>Notice how <code>Math.random()</code>, <code>document.getElementById()</code>, and even <code>console.log()</code> all follow the same pattern?</p>
            </blockquote>





            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="built-in-objects"
            />
        </div>
    )
}