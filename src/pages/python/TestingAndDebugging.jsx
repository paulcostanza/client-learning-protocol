export default function TestingAndDebugging() {
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
            <pre className="hljs"><code><div>PythonError: Traceback (most recent call last):<br />
                &nbsp;&nbsp;File <span className="hljs-string">"&lt;exec&gt;"</span>, line 6, <span className="hljs-keyword">in</span> &lt;module&gt;<br />
                &nbsp;&nbsp;File <span className="hljs-string">"&lt;string&gt;"</span>, line 1, <span className="hljs-keyword">in</span> &lt;module&gt;<br />
                &nbsp;&nbsp;File <span className="hljs-string">"/home/pyodide/main.py"</span>, line 3<br />
                &nbsp;&nbsp;&nbsp;&nbsp;msg = f<span className="hljs-string">"You have {"{ strength }"} strength, {"{ wisdom }"} wisdom, and {"{ dexterity }"} dexterity for a total of {"{ total }"} stats.
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^<br /><br />
                    IndentationError: unindent does not match any outer indentation level
                </span></div></code></pre>

            <ol>
                <li><code>PythonError: Traceback (most recent call last):</code> this is a standard header that's just letting us know that a Python traceback is what we are looking at</li>
                <li><code>File &quot;&lt;exec&gt;&quot;, line 6, in &lt;module&gt;</code> and <code>File &quot;&lt;string&gt;&quot;, line 1, in &lt;module&gt;</code> this is the start of the <em>trace</em>. These strange <code>&quot;&lt;exec&gt;&quot;</code> and <code>&quot;&lt;string&gt;&quot;</code> files do not really exist, the Python interpreter is letting us know about them because they have to do with how your code is executed in a virtual brower-based environment.</li>
                <li><code>File &quot;/home/pyodide/main.py&quot;, line 3</code> now we are getting to the real meat of the error message! The purpose of a <em>trace</em> is to show us the path that the Python interpreter took through our code before it encountered the error, which can help us figure out what went wrong. In this case, the interpreter was execcuting the code in the <code>main.py</code> file, and it got to line 3 before it encountered the error.</li>
                <li><code>msg = f&quot;You have {"{strength}"} strength, {"{wisdom}"} wisdom, and {"{dexterity}"} dexterity for a total of {"{total}"} stats.</code> this is the line of code that caused the error.</li>
                <li><code>IndentationError: unindent does not match any outer indentation level</code> this is the type of error that was raised! in this case, it is an <code>IndentationError</code>, which means that the Python interpreter was expecting a certain amount of indentation (whitespace at the beginning of the line) but it did not get what it was expecting.</li>
            </ol>
        </>
    )
}