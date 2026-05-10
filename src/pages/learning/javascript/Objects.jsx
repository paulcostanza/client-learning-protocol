import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Objects() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const jim = `let person = {
    name: "Jim",
    age: 22,
    fart: function() {
        console.log("Oops!")
    }
}

person.sayHello()`

    const jimConsole = `Oops!`

    return (
        <div className="container">
            <h1>Objects</h1>

            <p><strong>Objects</strong> store data as <em>key-value pairs</em>.</p>

            <p>You can add functions as properties in an object. A function that is a value and does not need a name is known as an <strong>anonymous function</strong>.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {jim}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {jimConsole}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>When you have a function attached to an object as a value of a property, it is called a <strong>method</strong>. </p>
            </blockquote>







            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="objects"
            />
        </div>
    )
}