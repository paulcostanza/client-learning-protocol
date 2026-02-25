import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ControlFlow() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const ifCase = `# example for if case
num = 10

if num % 2 == 0:
    print("is even")
else: 
    print("is odd")`

    const ifCaseConsole = `is even`

    const elseCase = `# example for else case
num = 11

if num % 2 == 0:
    print("is even")
else: 
    print("is odd")`

    const elseCaseConsole = `is odd`

    const multipleIfStatements = `number = 12

if number % 3 == 0:
   print("number is divisible by 3")

if number % 4 == 0:
    print("number is divisible by 4")`

    const multipleIfStatementsConsole = `number is divisible by 3
number is divisible by 4`

    const andConditional = `age = 20

if age >= 18 and is_married:
    print("This person is an adult and married.")
else:
    print("This person is not an adult and married.")`

    const andConditionalConsole = `This person is an adult and married.`

    const orConditionalTrue = `number = -5

if number < 0 or number % 2 != 0:
    print(True)
else:
    print(False)`

    const orConditionalTrueConsole = `True`

    const orConditionalFalse = `number = 8

if number < 0 or number % 2 != 0:
    print(True)
else:
    print(False)`

    const orConditionalFalseConsole = `False`

    const forLoop = `for _ in range(6):
    print("Hello World")`

    const forLoopConsole = `Hello World
Hello World
Hello World
Hello World
Hello World
Hello World`

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
        <div>
            <h1>Control Flow</h1>

            <h2>The <code>if-else</code> statement</h2>

            <p>
                The <code>if-else</code> statement provides a way to execute different blocks of code based on a specified condition. It allows a program to make decisions and choose between alternative actions.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {ifCase}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {ifCaseConsole}
                </SyntaxHighlighter>
            </div>

            <br />

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {elseCase}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {elseCaseConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Multiple <code>if</code> statements</h2>

            <p>
                You can use a series of <code>if</code> statements without <code>elif</code> or <code>else</code> when you want to <em>independently</em> check multiple conditions. Each <code>if</code> statement is evaluated separately, and the corresponding block of code is executed if the condition is <code>True</code>.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {multipleIfStatements}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {multipleIfStatementsConsole}
                </SyntaxHighlighter>
            </div>

            <h2>The <code>and</code> statement</h2>

            <p>
                The <code>and</code> statement is an operator used to check if all of two or more conditions are <code>True</code>. It returns <code>True</code> only if all conditions are true. Otherwise, it returns <code>False</code>.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {andConditional}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {andConditionalConsole}
                </SyntaxHighlighter>
            </div>

            <h2>The <code>or</code> statement</h2>

            <p>
                The <code>or</code> statement is a logical operator used to check if at least one of two or more conditions is <code>True</code>. If returns <code>True</code> if at least one condition is true. Otherwise, it returns <code>False</code>.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {orConditionalTrue}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {orConditionalTrueConsole}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {orConditionalFalse}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {orConditionalFalseConsole}
                </SyntaxHighlighter>
            </div>

            <h2>The <code>for</code> loop</h2>

            <p>
                The <code>for</code> loop is a construct that allows you to iterate over a sequence of elements, such as a <code>list</code> or a <code>range</code> of numbers. It simplifies the process of perfroming a set of operations for each item in the sequence.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
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

            <h2>The <code>while</code> loop</h2>

            <p>
                The <code>while</code> loop provides a way to repeatedly execute a block of code as long as a specified condition is <code>True</code>. It is a versatile construct for situations where the number of iterations is <i>not</i> known beforehand.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
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

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="control-flow"
            />
        </div>
    )
}