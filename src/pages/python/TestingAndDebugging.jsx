import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function TestingAndDebugging() {

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
            <div className="center">
                <SyntaxHighlighter language="bash" style={tomorrow} className="center code-snippet">
                    {error101}
                </SyntaxHighlighter>
            </div>
        </>
    )
}