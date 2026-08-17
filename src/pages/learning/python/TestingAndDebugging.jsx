import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function TestingAndDebugging() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const error101 = `PythonError: Traceback (most recent call last):
  File "<exec>", line 6, in <module>
  File "<string>", line 1, in <module>
  File "/home/pyodide/main.py", line 3
    msg = f"You have {strength} strength, {wisdom} wisdom, and {dexterity} dexterity for a total of {total} stats.
                                                                                                                  ^
IndentationError: unindent does not match any outer indentation level`
    return (
        <>
            <h1>Testing & Debugging</h1>

            <h2 id="unit-tests">Unit Tests</h2>

            <p>A <strong>unit test</strong> is just an automated program that tests a small <em>unit</em> of code. Usually just a function or two. For example, the editor may have tabs with the file <code>main.py</code> containing your code and <code>main_test.py</code> containing the unit tests.</p>

            <p>These will test your code's <em>functionality</em> rather than its output. They can call functions in your code with different arguments, and expect certain return values. If your code returns the correct values, you pass. If not, you fail.</p>

            <p>The main reasons for unit test:</p>

            <ul>
                <li>they are a way to check if your code will run as expected</li>
                <li>you do not need to print to console every time you try something, keeping your code clean.</li>
            </ul>

            <h2 id="stack-trace">Stack Trace</h2>

            <p>A <strong>stack trace</strong> is a scary-looking error message that the Python interpreter prints to the console when it encounters certain problems. Stack traces are most common (at least rn) when you are trying to run invalid Python code.</p>

            <p>Here is an example of an error you may encounter:</p>

            {/* Code */}
            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow} className="code-snippet">
                    {error101}
                </SyntaxHighlighter>
            </div>

            <ol>
                <li><code>PythonError: Traceback (most recent call last):</code> this is a standard header that is just letting us know that a python traceback is what we are looking at.</li>
                <li><code>File "&lt;exec&gt;", line 6 in &lt;module&gt;</code> and <code>File "&lt;string&gt;", line 1 in &lt;module&gt;</code>: this is the start of the <em>trace</em>. These strange <code>"&lt;exec&gt;"</code> and <code>"&lt;string&gt;"</code> files do not really exist. The python interpreter is letting us know about them because they have to do with how your code is executed in a virtual browser-based environment.</li>
                <li><code>File "/home/pyodide/main.py", line 3</code>: here we are starting to actually get somewhere! The purpose of a <em>trace</em> is to show us the path that the python interpreter took through our code before it encountered the error, which can help us figure out what went wrong. In this case, the interpreter was executing the code in the <code>main.py</code> file, and it got to line 3 before it encountered an error.</li>
                <li><code>msg = f"You have &#123;strenght&#125; strenght, &#123;wisdom&#125; wisdom, and &#123;dexterity&#125; dexterity for a total of &#123;total&#125; stats.</code>: this is the line of code that caused the error.</li>
                <li><code>IndentationError: unindent does not match any outer indentation level</code>: this is the type of error that was raised! In this case, it is an <code>IndentationError</code>, which means that the python interpreter was expecting a certain amount of indentation (whitespace at the beginning of the line) but it did not get what it was expecting.</li>
            </ol>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="testing-and-debugging"
            />
        </>
    )
}