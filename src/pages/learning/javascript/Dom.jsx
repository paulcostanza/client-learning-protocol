import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Dom() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const realHtml = `<h2 id="count">0</h2>`

    const realJs = `let count = document.getElementById("count")`

    const incrementHtml = `<button id="increment-btn" onclick="increment()">INCREMENT</button>`

    const incrementJs = `function increment() {
    console.log("The button was clicked")
}`

    const incrementConsole = `The button was clicked`

    const count = `document.getElementById("count").innerText = 5`

    const textContent = `saveEl.textContent = " - "`

    const error = `let errorParagraph = document.getElementById("error")
console.log(errorParagraph)`

    return (
        <div className="container">
            <h1>The DOM</h1>

            <p>The <strong>Document Object Model</strong> is <em>how you use JavaScript to modify a website</em>.</p>

            <blockquote>
                <p>We are finally going to do something with JS, yay!</p>
            </blockquote>

            <ul>
                <li><strong>Document:</strong> the HTML document you are interacting with.</li>
                <li><strong>Object:</strong> the <em>document</em> keyword in JS is of the data type <code>object</code>, meaning they have taken the HTML document and turned it into an object for JS to interact with.</li>
                <li><strong>Model:</strong> a representation. Example: here is a real car that Lambo built, and then there is a lego model version of it.</li>
            </ul>

            <p>We take a real element from our HTML</p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {realHtml}
                </SyntaxHighlighter>
            </div>

            <p>And model the representation inside of JavaScript:</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {realJs}
                </SyntaxHighlighter>
            </div>


            <h2>HTML</h2>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {incrementHtml}
                </SyntaxHighlighter>
            </div>

            <p>The <code>onclick</code> attribute is where you place the function that you want triggered when a button is clicked.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {incrementJs}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {incrementConsole}
                </SyntaxHighlighter>
            </div>

            <hr />

            <p><code>document</code> refers to the HTML document.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {count}
                </SyntaxHighlighter>
            </div>

            <p><code>"count"</code> is an argument.</p>

            <p><code>document.getElementById("count")</code> grabs the element from the HTML file, and then <code>innerText</code> is the part that actually modifies it.</p>

            <p>textContent</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {textContent}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {error}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>When reading documentation, you may find it is rather technical. It is good to just skim through and search what you are looking for, rather than reading it directly from top to bottom. You find you'll get bored and just kind of forget what you are doing (at least I do).</p>
            </blockquote>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="dom"
            />

        </div>
    )
}