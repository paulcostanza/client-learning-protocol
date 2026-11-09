import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Functions() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const greet = `def greet():
    print("Hello nerd!")
    print("How are ya?")
 
greet()`

    const greetOutput = `Hello nerd!
How are ya?`

    const greetWithParameter = `def greet(name):
    print(f"Hello, {name}!")
 
greet("Paul")
greet("Ryan")`

    const greetWithParameterOutput = `Hello, Paul!
Hello, Ryan!`

    const returnStatement = `def do_something():
    return 6 + 9

print(do_something())`

    const answerToReturnStatement = `15`

    const functionPass = `def super_totally_awesome_function():
    pass`

    const orderOfFunctions = `def main():
    health = 10
    armor = 5
    add_armor(health, armor)

def add_armor(h, a):
    new_health = h + a
    print_health(new_health)

def print_health(new_health):
    print(f"The player now has {new_health} health")

# call entrypoint last
main()`

    const defaultValues = `def greet_user(name="there"):
    print(f"Hey {name}, welcome to CLP!")

greet_user("Paul")
greet_user()`

    const defaultValuesConsole = `Hey Paul, welcome to CLP!
Hey there, welcome to CLP!`

    return (
        <>
            <h1>Functions</h1>

            <p>A <strong>function</strong> is a named block of code we can run whenever and wherever we want within our program. In python we define it with <code>def</code>, then call it by writing its name followed by parentheses <code>()</code>.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {greet}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {greetOutput}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>You must <strong>call</strong> a function in order to execute it. Declaring the function does not do anything by itself.</p>
            </blockquote>

            <p>The indented lines under <code>def</code> are the function's body. Python runs them only when <code>greet()</code> is <em>called</em>. Without calling the function, the function's definition doesn't do anything.</p>

            <p>Calling the function <code>n</code> amount of times will run the function <code>n</code> times. This allows us to group steps we want to repeat, but without copying the same lines each time.</p>

            <blockquote>
                <p>Uh... just use a loop?</p>
            </blockquote>

            <p>A loop allows you to repeat the same lines, but they are executed exactly where the loop is written within the program. A function can be defined in one place and then called anywhere throughout the code, not just immediately back-to-back.</p>

            <h2>Parameters</h2>

            <p>A function can accept inputs. The names of the inputs are called <strong>parameters</strong>. We list the names of the parameters inside the parentheses after <code>def</code>. When we call the function, the values we pass in are the arguments that fill them:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {greetWithParameter}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {greetWithParameterOutput}
                </SyntaxHighlighter>
            </div>

            <p>Inside of <code>greet</code>, <code>name</code> holds whatever value the caller passed, so one definition produces many greetings.</p>

            <p>Parameters act like variables that live only while the function runs. You can list as many parameters as you want, separating each one with a comma. The caller must pass the <em>arguments</em> in the same order.</p>

            <h3 id="parameters-vs-arguments">Parameters vs Arguments</h3>

            <p><strong>Parameters</strong> are the names used for inputs when <em>defining</em> a function. <strong>Arguments</strong> are the <em>values</em> of inputs supplied when a function is called.</p>

            <p>So this means that arguments are the <em>actual values</em> that go into the function, like <code>69.0</code>, <code>True</code>, or <code>&quot;asian assassins&quot;</code>. Parameters are the names we use in the funtion definition to refer to those values such as <code>rating</code>, <code>is_cloudy</code> or <code>occupation</code> (think of it as the placeholder).</p>

            <p>To help remember which is which, I always imagine a fight at a bar and the bouncing coming over to tell the patrons to take the argument outside.</p>

            <h2 id="the-return-statement">The <code>return</code> statement</h2>

            <p>While <code>print</code> shows text in the terminal's output, the <code>return</code> statement allows a function to send a value back to the caller. When a function is executed, it may perform various operations or calculations. We use the <code>return</code> statement to specify the result of said operations.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {returnStatement}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {answerToReturnStatement}
                </SyntaxHighlighter>
            </div>

            <p>The caller catches whatever value is returned and can store it, print it, or even pass it into another function.</p>

            <h2 id="order-of-functions">Order of functions</h2>

            <p>All functions <em>must</em> be defined before they are used.</p>

            <p>Most Python developers solve the issue of ordering their functions correctly by defining <em>all</em> the functions in their program first, then they call an <strong>entry point</strong> function <em>last</em>. That way all of the functions have been read by the Python interpreter before the first one is called.</p>

            <p><em>Note</em> conventionally this <em>entry point</em> function is usually called <code>main</code> to keep things simple and consistent.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {orderOfFunctions}
                </SyntaxHighlighter>
            </div>

            <h2 id="none-return">There is always a return value</h2>

            <p>When no return value is specified in a function, it will automatically return <code>None</code>.</p>

            <h2>Default parameters</h2>

            <p>A <strong>default parameter</strong> is used in a function's parameter to provide a default value for an argument. This is ideal when an argument is optional.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {defaultValues}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {defaultValuesConsole}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>For defaults to work, you must place the optional parameter(s) <strong>after</strong> the required parameter(s).</p>
            </blockquote>

            <h2>Pass</h2>

            <p>If you ever come across the keyword <code>pass</code> it simply acts as a placeholder for an empty function body and doesn't do anything. Developers use it while writing code to prevent the program from crashing while working on their program. </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {functionPass}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="functions"
            />
        </>
    )
}