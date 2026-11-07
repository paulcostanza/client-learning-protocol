import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Booleans() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const truthy = `result = bool(1)
print(result)`

    const truthyConsole = `True`

    const falsy = `result = bool(0)
print(result)`

    const falsyConsole = `False`

    const containerIsNotEmpty = `print(bool([False, None, 0]))`

    const containerIsNotEmptyOutput = `True`

    return (
        <div className="container">
            <h1>Booleans</h1>

            <h2>Boolean conversion</h2>

            <p>Since we've been talking about conversions, let's throw in some Boolean action.</p>

            <p>
                Converting values into boolean is the process of evaluating an expression or a value and representing it as either <code>True</code> or <code>False</code>. Every value has an inherent truthiness or falsiness.
            </p>

            <p>
                When converted to a boolean, a value is considered either <i>truthy</i>, evaluates to <code>True</code>, or <i>falsy</i>, evalutes to <code>False</code>. The determination is based on whether the value is logically considered true or false.
            </p>

            <b>Common Truthy Values</b>

            <ul>
                <li>Non-zero numbers: any non-zero numerical value is truthy</li>
                <li>Non-empty sequences: strings, lists, and other iterable structures are truthy if they contain elements</li>
                <li>Non-element dictionaries: a dictionary is truthy if it has at least one key-value pair</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {truthy}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {truthyConsole}
                </SyntaxHighlighter>
            </div>

            <b>Common Falsy Values</b>

            <ul>
                <li>Zero: the number zero (0) is falsy</li>
                <li>Empty sequences: empty strings, lists, and other iterable structures are falsy</li>
                <li>None: the special constant <code>None</code> is falsy</li>
                <li>False: the bollean value <code>False</code> is falsy</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {falsy}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {falsyConsole}
                </SyntaxHighlighter>
            </div>

            <p>For readers who know what lists are, one of the biggest gotchas in python is checking containers. For boolean values, python will check whether a container is empty rather than if its contents are falsy.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {containerIsNotEmpty}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {containerIsNotEmptyOutput}
                </SyntaxHighlighter>
            </div>

            <p>If the container has any element it is truthy.</p>

            <blockquote>
                <p>We will talk about lists, dictionaries, and other iterable structures later on!</p>
            </blockquote>

            <hr />

            <h2>Review</h2>

            {/* <div className="">
                            <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                                {recursiveRecipe}
                            </SyntaxHighlighter>
                        </div> */}

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="booleans"
            />
        </div>
    )
}


// Which value is a falsy condition?

// - True
// - 0
// - "0"
// - None
// - ""