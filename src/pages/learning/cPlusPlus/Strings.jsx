import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Strings() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }

    const newline = `std::cout << "Hello
    world!";    // Error: not allowed!`

    const concat = `std::cout << "Hello "
    "world!"; // output is: Hello world! on one line`

    return (
        <div className="container">
            <h1>Strings</h1>

            <h2>Quoted text takes the amount of whitespace literally</h2>

            <p>This: <code>std::cout &lt;&lt; "Hello world!";</code></p>

            <p>Is different than: <code>std::cout &lt;&lt; "Hello        world!";</code></p>

            Newlines are not allowed in quoted text:

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {newline}
                </SyntaxHighlighter>
            </div>

            <p>Quoted text separated by nothing but whitespace such as spaces, tabs, or newlines will be concatenated:</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {concat}
                </SyntaxHighlighter>
            </div>

            <p>To enable a string to print on multiple lines, you must throw in our friend the <strong>newline character</strong> (<code>\n</code>).</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="strings"
            />
        </div>
    )
}