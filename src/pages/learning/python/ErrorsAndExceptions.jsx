import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Dropdown from '../../../Helpers/Dropdown.jsx'

export default function ErrorsAndExceptions() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const tryExceptExample = `try:
  10 / 0
except Exception:
  print("can't divide by zero foo")`

    const catchingExceptionDont = `# don't do this
def craft_sword(metal_bar):
    try:
        if metal_bar == "bronze":
            return "bronze sword"
        if metal_bar == "iron":
            return "iron sword"
        if metal_bar == "steel":
            return "steel sword"
        raise Exception("invalid metal bar")
    except Exception as e:
        print(f"An error occurred: {e}")`

    const catchingExceptionDo = `# do this
def craft_sword(metal_bar):
    if metal_bar == "bronze":
        return "bronze sword"
    if metal_bar == "iron":
        return "iron sword"
    if metal_bar == "steel":
        return "steel sword"
    raise Exception("invalid metal bar")

try:
    craft_sword("gold bar")
except Exception as e:
    print(e)`

    const zeroDivisionError = `try:
    10/0
except ZeroDivisionError:
    print("0 division")
except Exception as e:
    print(e)

try:
    nums = [0, 1]
    print(nums[2])
except IndexError:
    print("index error")
except Exception as e:
    print(e)`

    const zeroDivisionErrorConsole = `0 division
index error`

    const specificOneFirst = `try:
    nums = [0, 1]
    print(nums[2])
except Exception:
    print("An error occurred")
except IndexError:
    print("Index error")`

    const aliasExample = `def process_player_record(player_id):
    try:
        return get_player_record(player_id)
    except IndexError:
        return "index is too high"
    except Exception as e:
        return e
        
def get_player_record(player_id):
    if player_id < 0:
        raise Exception("negative ids not allowed")
    players = [
        {"name": "Slayer", "level": 128},
        {"name": "Dorgoth", "level": 300},
        {"name": "Saruman", "level": 4000},
    ]
    return players[player_id]`

    const doesItCrash = `# Example #1:
try:
    raise Exception('zero division')
except ZeroDivisionError as e:
    print("zero")
    
# Example #2
try:
    raise Exception('zero division')
except Exception as e:
    print("Caught an exception:", e) `

    const catchingGold = `# this
class InsufficientFundsError(Exception):
    pass

def purchase_item(price, gold_available):
    if price > gold_available:
        raise InsufficientFundsError("not enough gold")
    return gold_available - price

# instead of this
def purchase_item(price, gold_available):
    if price > gold_available:
        raise Exception("not enough gold")
    return gold_available - price`

    return (
        <div className="container">
            <h1>Errors & Exceptions</h1>

            <p>We have two main kinds of errors...</p>

            <ul>
                <li>syntax errors</li>
                <li>exceptions</li>
            </ul>

            <h2>Syntax Errors</h2>

            <p>A <strong>syntax error</strong> is just the python interpreter telling you that your code is not adhearing to proper python syntax.</p>

            <h2>Exceptions</h2>

            <p>When your syntax is correct but there is still an error when executed, then you have what is known as an <strong>exception</strong>. Exceptions can be handled gracefully by your code, and you are even able to raise your own exceptions when bad things happen in your code. </p>

            <p>Their are different kinds of programming paradigms to handle exceptions. In python we use the <code>try/except</code> pattern.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {tryExceptExample}
                </SyntaxHighlighter>
            </div>

            <p>The <code>try</code> block is executed until an exception is raised or it completes, whichever happens first. The <code>except</code> block is only executed if an exception is raised in the <code>try</code> block. Wrapping potential errors in a <code>try/except</code> block allows the program to handle the exception gracefully without crashing your app.</p>

            <blockquote>
                <p>Try to keep the <code>try</code> block narrow and catch specific exceptions rather than every exeception.</p>
            </blockquote>

            <p>This also extends to the real-world too. In larger codebases, raising a generic <code>Exception</code> is often avoided in favor of more specific built-in errors (such as <code>ValueError</code>) or custom domain-specific exceptions (such as <code>insufficientFundsError</code>). That allows calling code to catch specific issues without catching unintended errors:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {catchingGold}
                </SyntaxHighlighter>
            </div>

            <h2>Raise an exception</h2>

            <p>Software applications are not perfect, and user input and network connectivity are far from predictable. Despite intensive debuging and unit testing, applications will still have failure cases.</p>

            <p>Loss of network connectivity, missing database rows, out of memory issues, and unexpected user inputs can all prevent an application from performing <em>normally</em>. It is your job to catch and handle any and all exceptions gracefully so that your app keeps working. When you are able to detect that something is weird, you should be raising the errors yourself, in addition to the <em>default</em> exceptions that the python interpreter will raise.</p>

            <p><code>raise Exception("oops... something bad happened")</code></p>

            <h2>Different types of exceptions</h2>

            <p>Remember classes and objects? Welp, that is basically what <strong>Exceptions</strong> are.</p>

            <p>We have different types of exceptions in python, and we can handle them differently depending on the situation. Some exceptions can be more specific, like <code>ZeroDivisionError</code> or <code>IndexError</code>, and some can be more general, like the base <code>Exception</code>. Here we have:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {zeroDivisionError}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {zeroDivisionErrorConsole}
                </SyntaxHighlighter>
            </div>

            <p>When handling exceptions, it is important to catch the <em>most specific ones first</em>, because python stops checking once it finds a matching exception handler. If you catch a more general <code>Exception</code> first, any specific errors will never get handled individually. Example:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {specificOneFirst}
                </SyntaxHighlighter>
            </div>

            <p>Here we have the general <code>Exception</code> that will catch the error <em>before</em> the <code>indexError</code> can be reached. The message <code>Index error</code> will never be printed!</p>

            <h2>Don't catch your own exceptions</h2>

            <p>As a general rule, you do not want to catch exceptions you raise within the same function block. Example:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {catchingExceptionDont}
                </SyntaxHighlighter>
            </div>

            <p>Instead, the caller should handle any potential error by wrapping the function call within a <code>try/except</code> block like so:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {catchingExceptionDo}
                </SyntaxHighlighter>
            </div>

            <p>By <em>raising</em> the exception instead of handling it inside <code>craft_sword</code>, we let the caller decide how to proceed. The caller might want to log the error, show a message to the player, or crash the program on purpose.</p>

            <blockquote>
                <p>This design separates <strong>detecting</strong> the problem (inside the function) from deciding how to <strong>handle</strong> the prblem (the caller).</p>
            </blockquote>

            <h2>Alias Exception Messages</h2>

            <p>As you may have noticed, you can also access the error using the <code>as</code> keyword. This acts as an alias to shorten other keywords. In this context, we are simply shortening <code>Exception</code> to <code>e</code>, both meaning the exact same thing.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {aliasExample}
                </SyntaxHighlighter>
            </div>

            <h2>Raising exceptions</h2>

            <p>What differentiates exceptions are their types and <em>not</em> their string descriptions. This is important to know when handling errors from imported modules.</p>

            <p>Here is how python behaves with a <code>raise</code>:</p>

            <ol>
                <li>Anything inside the <code>try</code> block runs.</li>
                <li>If <code>raise</code> is executed, jump out of the <code>try</code> block immediately.</li>
                <li>Python then checks each <code>except</code> block:</li>
                <ul>
                    <li><strong>Match is found:</strong> the code inside that specific <code>except</code> block is run.</li>
                    <li><strong>No match is found:</strong> the program will crash with an error.</li>
                </ul>
            </ol>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {doesItCrash}
                </SyntaxHighlighter>
            </div>

            <Dropdown
                questions={["What happens in Example #1?", "What happens in Example #2?"]}
                answers={["The program will crash because Exception is never caught!", "The Exception is catched and zero division is printed."]}
            />

            <p>It is important to note that <code>raise</code> does not mean execute, but rather <em>trigger this exception right the f**k now and interrupt the normal flow of the program.</em> Using <code>raise</code> is like pulling a fire alarm. It did not start the fire, but signals that something has gone wrong and immediately disrupts whatever was happening.</p>

            <p><code>raise Exception("zero division")</code></p>

            <ul>
                <li>python creates an exception object - an instance of the <code>Exception</code> class with <em>zero division</em> stored as its message.</li>
                <li>python immediately stops executing the current block of code line-by-line</li>
                <li>python starts searching upward/outward for a matching <code>except</code> block that can <em>catch</em> this exception.</li>
                <li>If it finds one that matches the type, execution jumps into that <code>except</code> block.</li>
                <li>If it finds no match anywhere (including up through function calls, all the way to the top of the program) the program crashes and prints a traceback.</li>
            </ul>

            <h2>Bugs vs Errors</h2>

            <p><em>You fix bugs, and you handle errors</em></p>

            <p><strong>Bugs:</strong> <em>a problem with the program's behavior.</em> The developer did something wrong, as the <em>actual</em> behavior of the program is not the same <em>expected</em> behavior of the program. Things like...</p>

            <ul>
                <li>What happens when you are not handling an error properly</li>
                <li>Crashing</li>
                <li>Unexpected behavior</li>
                <li>Always bad, and you need to fix your code</li>
            </ul>

            <p><strong>Errors:</strong> things that happen as a program runs, but are not necessarily unexpected. You cannot always stop errors from happening, but you can handle them gracefully. Examples include...</p>

            <ul>
                <li>Internet connection lost: you cannot prevent if a user loses their connection to the internet, but it is something you can handle</li>
                <li>Connecting APIs: what happens if you are trying to send/recieve data and a server is down</li>
                <li>And essentially, any expected behavior that you can handle</li>
            </ul>

            <blockquote>
                <p>What exactly does <strong>handle</strong> mean again?</p>
            </blockquote>

            <p><strong>Handle</strong> is the action we take when an exception occurs. Our examples above only involve printing to the console, but you can also do things like:</p>

            <ul>
                <li>Retry: user loses internet connection, so the application retries to connect every 5 seconds</li>
                <li>Alert user: password requires 8 characters, user enters 6, we alert them to please try again</li>
                <li>Anything to prevent our application from crashing</li>
            </ul>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="errors-and-exceptions"
            />

            {/* 
            Make sure to have:
Syntax errors
Runtime errors
Exceptions
try
except
else
finally
raise
Custom exceptions
Multiple except blocks
Exception types
Exception hierarchy */}
        </div>
    )
}