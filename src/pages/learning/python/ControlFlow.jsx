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

    const elif = `score = 85
 
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")`

    const elifOutput = `B`

    const badElif = `score = 85
 
if score >= 70:
    print("C")
elif score >= 80:
    print("B")
elif score >= 90:
    print("A")
else:
    print("F")`

    const badElifOutput = 'C'

    const nestedIfStatements = `has_key = True
door_locked = True
 
if has_key:
    if door_locked:
        print("You unlock the door and step inside.")
    else:
        print("The door is already open. You walk in.")
else:
    print("You need a key to get in.")`


    return (
        <div>
            <h1>Control Flow</h1>

            <h2>Comparison operators</h2>

            <p><strong>Conditions</strong> compare two values. Python has six comparison operators:</p>

            <ul>

                <li><code>==</code> equal to</li>
                <li><code>!=</code> not equal to</li>
                <li><code>&lt;</code> less than</li>
                <li><code>&gt;</code> greater than</li>
                <li><code>&lt;=</code> less than or equal to</li>
                <li><code>&gt;=</code> greater than or equal to</li>
            </ul>

            <p>Each comparison produces either <code>True</code> or <code>False</code>, which comes in handly when we talk about <code>if</code> statements!</p>

            <blockquote>
                <p>Wow, <code>=</code> and <code>==</code> look a lot a like.</p>
            </blockquote>

            <p>Yup! Be aware even though they look similar, they have two very different jobs. It is easy to get tripped up, espeically if you are just starting out.</p>

            <ul>
                <li><code>=</code> stores a value in a variable.</li>
                <li><code>==</code> check whether two values are equal and returns <code>True</code> or <code>False</code>.</li>
            </ul>

            <p>Something like <code>if feeling = "happy":</code> will result in a <code>SyntaxError</code>.</p>

            <h2>The <code>if-else</code> statement</h2>

            <p>
                The <code>if-else</code> statement provides a way to execute different blocks of code based on a specified condition. It allows a program to make decisions and choose between alternative actions.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
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

            <p>The indented lines are the <em>body</em> of each branch. Python uses that indentation to tell which lines belong to the <code>if</code> and which lines belong to the <code>else</code>.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
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

            <p>You can also have just the <code>if</code> statement, without the <code>else</code>.</p>

            <h2>Multiple <code>if</code> statements</h2>

            <p>
                You can use a series of <code>if</code> statements without <code>else</code> when you want to <em>independently</em> check multiple conditions. Each <code>if</code> statement is evaluated separately, and the corresponding block of code is executed if the condition is <code>True</code>.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
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

            <h2><code>elif</code></h2>

            <p>An <code>elif</code> adds branches between <code>if</code> and <code>else</code>. Short for <em>else if</em>, we can chain and add as many as we please. Here is one of the most common examples ever for <code>elif</code>:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {elif}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {elifOutput}
                </SyntaxHighlighter>
            </div>

            <p>Python checks from top to bottom and runs the first block whose condition is <code>True</code>, and will then skip the rest. <em>Order matters</em>, you must put the strictest checks first, or a less than ideal one will catch the value before the strict one gets a chance. Example:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {badElif}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {badElifOutput}
                </SyntaxHighlighter>
            </div>

            <p>The condition is correct, <code>85</code> is technically greater than or equal to <code>70</code>, but the logic is wrong, giving us the incorrect output!</p>

            <h2>Logical operators</h2>

            <p>Sometimes checking one condition just isn't enough! <strong>Logical operators</strong> combine conditions into one.</p>

            <ul>
                <li><code>and</code> checks if both sides are true.</li>
                <li><code>or</code> checks if either side is true.</li>
                <li><code>not</code> will flip the condition true if it is false, or it will flip the condition false if it is true.</li>
            </ul>


            <h3>The <code>and</code> statement</h3>

            <p>
                The <code>and</code> statement is an operator used to check if all of two or more conditions are <code>True</code>. It returns <code>True</code> only if all conditions are true. Otherwise, it returns <code>False</code>.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
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

            <h3>The <code>or</code> statement</h3>

            <p>
                The <code>or</code> statement is a logical operator used to check if at least one of two or more conditions is <code>True</code>. If returns <code>True</code> if at least one condition is true. Otherwise, it returns <code>False</code>.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
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
                <SyntaxHighlighter language="python" style={tomorrow}
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

            <h2>Nesting <code>if</code> statements</h2>

            <p>Sometimes a check only makes sense after another one has already passed. We handle that by <strong>nesting</strong> one <code>if</code> inside another:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {nestedIfStatements}
                </SyntaxHighlighter>
            </div>

            <p>We only check the lock after confirming there is a key. Each level gets its own response, which is why nesting fits better here than a single <code>and</code>.</p>

            <p>The inner <code>if</code> and <code>else</code> live inside the outer <code>if</code> block, and Python reads the indentation to know which level each branch belongs to.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="control-flow"
            />
        </div>
    )
}

// when does if age >= 18 and has_ticket: run its block?

// - age is 19
// - age is 18
// - age is 17
// - has_ticket = False
// - has_ticket = True
// - age is 19 and has_ticket is True
// - age is 18 and has_ticket is False
// - age is 22 and has_ticket is True