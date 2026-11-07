import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Loops() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const forLoop = `for _ in range(6):
    print("Hello World")`

    const forLoopConsole = `Hello World
Hello World
Hello World
Hello World
Hello World
Hello World`

    const continueExample = `for number in range(-5, 5):
    if number < 0:
        continue  # skip negatives

    print(f"The square root of {number} is {number**0.5}")`

    const continueExampleConsole = `The square root of 0 is 0.0
The square root of 1 is 1.0
The square root of 2 is 1.4142135623730951
The square root of 3 is 1.7320508075688772
The square root of 4 is 2.0`

    const whileLoop = `start = 7

while start > 0:
    print(start)
    start -= 1`

    const whileLoopConsole = `5
4
3
2
1`

    return (
        <div className="container">
            <h1>Loops</h1>

            <h2>The <code>for</code> loop</h2>

            <p>
                The <code>for</code> loop is a construct that allows you to iterate over a sequence of elements, such as a <code>list</code> or a <code>range</code> of numbers. It simplifies the process of perfroming a set of operations for each item in the sequence.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopConsole}
                </SyntaxHighlighter>
            </div>

            <h3><code>continue</code></h3>

            <p><code>continue</code> allows you to skip items that you do not want to use in a loop... <em>Go directly to the next iteration of this loop.</em></p>

            <p>Since <code>continue</code> immediately halts the current iteration and jumps to the next one, it saves the program from doing unnecessary work.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {continueExample}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {continueExampleConsole}
                </SyntaxHighlighter>
            </div>

            <h2>The <code>while</code> loop</h2>

            <p>
                The <code>while</code> loop provides a way to repeatedly execute a block of code as long as a specified condition is <code>True</code>. It is a versatile construct for situations where the number of iterations is <i>not</i> known beforehand.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {whileLoop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {whileLoopConsole}
                </SyntaxHighlighter>
            </div>

            <p>
                If the while loop's condition is not properly defined or contains a logical error that causes it to always evaluate to true, the loop will continue to execute indefinitely, resulting in an <strong>infinite loop</strong>. This means that the code inside the loop will keep running repeatedly without ever exiting, which can lead to performance issues and may even cause the program to become unresponsive.
            </p>

            <p>Notice in the example how the variable <code>start</code> iterates down by one each loop. This means the conditional statement <code>start &gt; 0</code> ends when <code>start</code> is equal to <code>0</code>.</p>

            <p><code>0</code> is not less than <code>0</code>, thus ending the loop.</p>

            <hr />

            <h2>Review</h2>

            {/* <div className="">
                            <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                                {recursiveRecipe}
                            </SyntaxHighlighter>
                        </div> */}

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="loops"
            />
        </div>
    )
}

// explain range() and stepping
// explain break