import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function LocalStorage() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const localStorageOperations = `let names = []
names[0] = prompt("New member name?")
localStorage.setItem("names", JSON.stringify(names))
// ...
let storedNames = JSON.parse(localStorage.getItems("names"))`

    return (
        <div className="container">
            <h1>Local Storage</h1>

            <p>Accessible in the global scope, <strong>local storage</strong> is used for persiting data across page refresh.</p>

            <p>Local storage exists on the <code>Window</code> object. However, you can omit the object and use it's variable directly.</p>

            <blockquote>
                <p><code>Window.localStorage</code> is the same as <code>localStorage</code>.</p>
            </blockquote>

            <p>Our methods for local storage:</p>

            <ul>
                <li><code>localStorage.clear()</code></li>
                <li><code>localStorage.setItem(key, value)</code></li>
                <li><code>localStorage.getItem(key)</code></li>
            </ul>

            <p>An important factor about storing and accessing from local storage is that <em>both</em> keys and values need to be strings.</p>

            <blockquote>
                <p>So then how can we store arrays?</p>
            </blockquote>

            <ul>
                <li>To store as an array: <code>JSON.stringify()</code></li>
                <li>To turn back into an array: <code>JSON.parse()</code></li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {localStorageOperations}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="local-storage"
            />
        </div>
    )
}