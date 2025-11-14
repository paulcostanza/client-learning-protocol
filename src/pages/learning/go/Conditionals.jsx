import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Conditionals() {
    const quizImports = {
        go: () => import('../../../pages/quiz/database/GoQuestions.js')
    }

    const ifStatement = `if height > 4 {
    fmt.Println("You are tall enough!")
}`

    const elseIf = `if height > 6 {
    fmt.Println("You are super tall!")
} else if height > 4 {
    fmt.Println("You are tall enough!")
} else {
    fmt.Println("You are not tall enough!")
}`

    const ifWithInitialStatement = `if INITIAL_STATEMENT; CONDITIONAL {}`

    const beforeInitialStatement = `length := getLength(email)
if length < 1 {
    fmt.Println("Email is invalid")
}`

    const afterInitialStatement = `if length := getLength(email); length < 1 {
    fmt.Println("Email is invalid")
}
// length is no longer part of the parent scope`

    const switchStatment = `func getCreator(os string) string {
    var creator string
    switch os {
        case "linux":
            creator =  "Linus Torvalds"
        case "windows":
            creator =  "Bill Gates"
        case "mac":
            creator = "A Steve"
        default:
            creator = "Unknown"
    }
    return creator
}`

    const switchWithFallthrough = `func getCreator(os string) string {
    var creator string
    switch os {
        case "linux":
            creator = "Linus Torvalds"
        case "windows":
            creator = "Bill Gates"
        case "macOS":
            fallthrough
        case "Mac OS X":
            fallthrough
        case "mac":
            creator = "A Steve"
        default:
            creator = "Unknown"
    }
}`

    return (
        <div>
            <h1>Conditionals</h1>

            <p><code>if</code> statements in Go do not use parentheses around the condition.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {ifStatement}
                </SyntaxHighlighter>
            </div>

            <p><code>else if</code> and <code>else</code> are supported as you might expect:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {elseIf}
                </SyntaxHighlighter>
            </div>

            <h2>The Initial Statement of an <code>if</code> block</h2>

            <p>An <code>if</code> conditional can have an <em>initial</em> statement. The variable(s) created in the initial statement are <em>only</em> defined within the scope of the <code>if</code>.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {ifWithInitialStatement}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                Why would I use this?
            </blockquote>

            <ul>
                <li>it is a bit shorter</li>
                <li>it limits the scope of the initialized variable(s) to the <code>if</code> block</li>
            </ul>

            <p>So instead of writing this:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {beforeInitialStatement}
                </SyntaxHighlighter>
            </div>

            <p>We can do:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {afterInitialStatement}
                </SyntaxHighlighter>
            </div>

            <p><code>length</code> is not needed outside of the <code>if</code> statement. We can't accidentally use it anywhere else in the function.</p>

            <h2>Switch</h2>

            <p>Switch statements are a way to compare a value against multiple options. They are similar to if-else statements but are more concise and readable when the number of options is more than 2.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {switchStatment}
                </SyntaxHighlighter>
            </div>

            <p>Notice how the <code>break</code> statement is not required at the end of a <code>case</code> to stop it from falling through to the next <code>case</code>. The <code>break</code> statement is implicit in Go.</p>

            <p>If you <em>do</em> want a <code>case</code> to fall through to the next <code>case</code>, you can use the <code>fallthrough</code> keyword.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {switchWithFallthrough}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="conditionals"
            />
        </div>
    )
}