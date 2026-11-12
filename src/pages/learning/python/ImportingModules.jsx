import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ImportingModules() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const importMath = `import math
    
print(math.pi)`

    const greeting = `def greet(name):
    return f"Hello, {name}!"`

    const callGreet = `from greetings import greet
 
message = greet("Ada")
print(message)   # Hello, Ada!`

    const importString = `import string
 
print(string.ascii_uppercase)
# ABCDEFGHIJKLMNOPQRSTUVWXYZ`

    const noModulePrefix = `from math import floor
 
rounded = floor(9.8)
print(rounded)   # 9`

    const importRandom = `import random
 
roll = random.randint(1, 6)
print(roll)`

    const randomChoice = `colors = ["red", "green", "blue"]
pick = random.choice(colors)
print(pick)`

    const squareRoot = `import math
 
number = 81
root = math.sqrt(number)
print(root)   # 9.0`

    const tooMuch = `def welcome(name):
    return f"Welcome, {name}!"
 
def signoff(name):
    return f"See you soon, {name}."
 
hello = welcome("Ada")
bye = signoff("Ada")
print(hello)
print(bye)`

    const greetingsPy = `# greetings.py
def welcome(name):
    return f"Welcome, {name}!"
 
def signoff(name):
    return f"See you soon, {name}."`

    const importWelcomeAndSignoff = `from greetings import welcome, signoff
 
hello = welcome("Ada")
bye = signoff("Ada")
print(hello)
print(bye)`

    return (
        <div className="container">
            <h1>Importing Modules</h1>

            <p>A <strong>module</strong> is a <code>.py</code> file, or a built-in library, that holds reusable code. Instead of copying values by hand, we import the module and use the names inside it:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {importMath}
                </SyntaxHighlighter>
            </div>

            <p><code>import math</code> loads the <em>standard math module</em>. <code>math.pi</code> is a qualified name: the module name, a dot, then the name inside that module.</p>

            <h2>Using the standard library</h2>

            <p>Python's <strong>standard library</strong> is a big set of tested modules that ship with the language and are ready to import: <code>math</code>, <code>random</code>, <code>datetime</code>, <code>statistics</code>, <code>os</code>, <code>http</code>, and more.</p>

            <p>The pattern is the same every time:</p>

            <ul>
                <li>Import the modules or a name from it</li>
                <li>Call a function or read a value using the module name</li>
                <li>Profit</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {importString}
                </SyntaxHighlighter>
            </div>

            <p>Here we did not need to type out the alphabet, the <code>string</code> module already had it. Reaching into a module for something that is already made instead of building it ourselves is the whole point of the library.</p>

            <blockquote>
                <p>Python's standard library provides over 200 read-to-use tools for common programming tasks. They're...</p>
                <ul>
                    <li>pre-installed</li>
                    <li>officially maintained</li>
                    <li>cross-platform portability</li>
                </ul>
            </blockquote>

            <h3><code>from ... import ...</code></h3>

            <p>Sometimes we only need one or two names from a module. <code>from ... import ...</code> pulls them straight into the current file, so we can call them without the module prefix like so:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {noModulePrefix}
                </SyntaxHighlighter>
            </div>

            <p>We wrote <code>floor(9.8)</code> and not <code>math.floor(9.8)</code> because <code>floor</code> is now a name in our own file. In real projects we import only what we need, and avoid <code>from module import *</code>, which dumps every name and makes code harder to read.</p>

            <ul>
                <li>To use the whole module: <code>import awesome</code></li>
                <li>To use specific functions from a module: <code>from awesome import cool, fantastic</code></li>
            </ul>

            <h3>Random numbers</h3>

            <p>Programs will sometimes need an unpredictable pick for a dice roll, shuffling cards, or a surprise reward. The <code>random</code> module is our go-to for handling this.</p>

            <p><code>random.randint(a, b)</code> picks a whole number from <code>a</code> through <code>b</code>, inclusive, so something like this will replicate a dice roll:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {importRandom}
                </SyntaxHighlighter>
            </div>

            <p><code>random.choice</code> pulls one item at random from a list like so:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {randomChoice}
                </SyntaxHighlighter>
            </div>

            <p>Each time the code runs, the value can come out different. That is the exact point!</p>

            <h3>Math operations</h3>

            <p>The <code>math</code> module has helpers beyond <code>pi</code>. A common one is <code>sqrt</code>, the <strong>square root</strong>: it answers what number, times itself, give the one we pass in.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {squareRoot}
                </SyntaxHighlighter>
            </div>

            <p>Nine times nine is 81, so the square root of 81 is <code>9.0</code>. <code>math.sqrt</code> always returns a float, which is why we get <code>9.0</code> and not <code>9</code>.</p>

            <h2>Create your own module</h2>

            <p>Built-in modules like <code>math</code> are one kind of module. But a module is really just a <code>.py</code> file with reusable code inside, so we can write our own and import from it too. Pulling helpers into one is how a growing script stays readable.</p>

            <p>Say we put a function in a file named <code>greeting.py</code>:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {greeting}
                </SyntaxHighlighter>
            </div>

            <p>That file is a module, named after the file without <code>.py</code>, so this is called <code>greetings</code>. From another file in the same folder, we import the function by that name and call it:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {callGreet}
                </SyntaxHighlighter>
            </div>

            <p><code>from greetings import greet</code> reaches into <code>greetings.py</code>, pulls out the <code>greet</code> function, and lets us use it here. We could also write <code>import greetings</code> and call <code>greetings.greet(...)</code> with the qualified name, just like a built-in module.</p>

            <blockquote>
                <p>A module does not have to come from python or another developer, any <code>.py</code> file of our own functions is a module too.</p>
            </blockquote>

            <p>When a script grows, helper functions pile up at the top, and the main file becomes a wall of definitions before the real work even startsSplitting code across files keeps each one focused. Helpers live in their own module, and the main file stays short. Here is another example before splitting up the file:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {tooMuch}
                </SyntaxHighlighter>
            </div>

            <p>Move those helpers into their own module, and each file gets a clear job. The module holds the reusable logic:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {greetingsPy}
                </SyntaxHighlighter>
            </div>

            <p>Then the main file imports only what is needed:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {importWelcomeAndSignoff}
                </SyntaxHighlighter>
            </div>

            <p>Same output, cleaner project. This is how real code stays organized: related functions grouped into modules with clear names, and a main file that reads like a summary of what the program does.</p>

            <h2>How it works under the hood</h2>

            <p>Python executes <code>import</code> statements dynamically at runtime as the interpreter reads your script line by line. When python ecounters an <code>import</code> line it...</p>

            <ol>
                <li>checks its internal dictionary called <code>sys.modules</code> to see if the module is already loaded in memory (cached). If it is python will use the cached version instead of loading it again.</li>
                <li>If the module is not cached, python searched a prioritized list of folders stored in <code>sys.path</code>. Starts with built-in modules, moves to your current script's directory, checks  the standard library, and finally scans external <code>site-packages</code>.</li>
                <li>Python creates a new module object and runs all the top-level code inside that imported file from top to bottom. This populates the module's functions, classes, and variables.</li>
                <li>Finally, python creates a variable name in your current script that points to that newly loaded module object.</li>
            </ol>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="importing-modules"
            />
        </div>
    )
}