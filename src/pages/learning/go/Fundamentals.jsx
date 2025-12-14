import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Fundamentals() {
    const quizImports = {
        go: () => import('../../../pages/quiz/database/GoQuestions.js')
    }

    const defaultValues = `const name = "Kim"
const age = 22
s := fmt.Sprintf("%v is %v years old.", name, age)
// s = "Kim is 22 years old."`

    const roundingFloats = `s := fmt.Sprintf("I am %f years old", 10.523)
// s = "I am 10.523000 years old"

s := fmt.Sprintf("I am %.2f years old", 10.523)
// s = "I am 10.52 years old"`

    return (
        <div>
            <h1>Go Fundamentals</h1>

            <h2>Formatting String</h2>

            <p>A convenient way to format strings in Go is by using the standard library's <strong>fmt.Sprintf()</strong> function. It is a string interpolation function, similar to Python's <em>f-strings</em>. The <code>%v</code> substring uses the type's default formatting, which is often what you want.</p>

            <h3>Default Values</h3>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {defaultValues}
                </SyntaxHighlighter>
            </div>

            <h3>Rounding Floats</h3>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {roundingFloats}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="fundamentals"
            />

        </div>
    )
}