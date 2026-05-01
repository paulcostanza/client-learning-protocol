import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Loops() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const forLoop = `//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {  
    console.log(count)
}`

    const forLoopConsole = `1
2
3
4
5
6
7
8
9
10`

    return (
        <div className="container">
            <h1>Loops</h1>

            <h2><code>for</code> loop</h2>

            <p>When dealing with for loops, there are a few things we need to specify and keep track of...</p>

            <ul>
                <li>Where should we <strong>START</strong> counting?</li>
                <li>Where is the <strong>FINISH</strong> line?</li>
                <li>What's the <strong>STEP SIZE</strong> we should use?</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {forLoop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {forLoopConsole}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="loops"
            />
        </div>
    )
}