import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Basics() {
    const declaringVariables = `name = "Jose"
myAge = 17
is_student = True

print("Name: ", name)
print("Age: ", age)
print("Is student: ", is_student)`

    const declaringVariablesResults = `Name: Jose
Age: 17
Is student: True`

    const simplePrint = `print("Hello world")`

    const simplePrintConsole = `Hello world`

    const simplePrintWithLineBreak = `print("Hello\\nWorld")`

    const simplePrintWithLineBreakConsole = `Hello
World`

    const descarte = `print("\\"I think, therefore I am\\" - Rene Descarte")`

    const descarteConsole = `"I think, therefore I am" - Rene Descarte`

    const dynamicTyping = `speed = 7
speed = "seven"`
    return (
        <div>
            <h1>Basics</h1>

            <h2>Declaring a variable</h2>

            <p>
                Declaring a variable is as simple as choosing a name for the variable and assigning a value to it using the equal sign (<code>=</code>). Variable names must start with a letter or an underscore (<code>_</code>), followed by letters, numbers, and/or underscores. Variable names are case-sensitive: <code>myvariable</code> and <code>myVariable</code> are two different variables.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {declaringVariables}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {declaringVariablesResults}
                </SyntaxHighlighter>
            </div>

            <h2>How to print</h2>

            <p>As you can see, we use the <code>print</code> command to print something to the console.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {simplePrint}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {simplePrintConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Printing a Line Break</h2>

            <p>
                When printing something out, you will need to learn a few tricks such as how to print a <em>new line</em>. Typically, combination of backslash <code>\</code> and the character <code>n</code> would allow you to do a <strong>line-break</strong>.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {simplePrintWithLineBreak}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {simplePrintWithLineBreakConsole}
                </SyntaxHighlighter>
            </div>

            <pre>
                <code>{ }</code>
            </pre>

            <h2>Escape characters in strings</h2>
            <p>
                When you try to print out characters to the console, they will show as is. However, there are a few instances where it will result messy and not behave exactlly like you want. Characters like <code>"</code> and <code>\</code> will cause issues. This is why we need to <b>escape</b> these special characters.
            </p>
            <p>
                You can escape special characters by using the backslash command before the character. Example: <code>\"</code> will print out <code>"</code>.
            </p>
            <pre>
                <code>{ }</code>
            </pre>
            <pre>
                <code>{ }</code>
            </pre>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {descarte}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {descarteConsole}
                </SyntaxHighlighter>
            </div>

            <h2 id="dynamic-typing">Dynamic Typing</h2>

            <p>Python is <em>dynamically typed</em> which means a variable can store any type, and that type can <em>change</em>.</p>
            <p>For example, if we make a number a variable, we can later change that variable to a string:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {dynamicTyping}
                </SyntaxHighlighter>
            </div>

            <p>In most circumstances, it is bad to change the type of a variable. The proper thing to do is to just create a new variable with the different data type.</p>

            <blockquote>
                <p id="what-is-non-dynamic-typing">What is non-dynamic typing?</p>
            </blockquote>

            <p>Languages that aren't dynamically typed are <strong>statically typed</strong>. In a statically typed language, if you try to assign a value to a variable of the wrong type, an error would crash the program. But hey, this is Python! You do not need to worry about that.</p>

        </div>
    )
}