import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Functions() {

    const dynamicTyping = `speed = 7
speed = "seven"`

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
    return (
        <>
            <h1>Functions</h1>

            <h2 id="dynamic-typing">Dynamic Typing</h2>

            <p>Python is <em>dynamically typed</em> which means a variable can store any type, and that type can <em>change</em>.</p>
            <p>For example, if we make a number a variable, we can later change that variable to a string:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {dynamicTyping}
                </SyntaxHighlighter>
            </div>

            <p>In most circumstances, it is bad to change the type of a variable. The proper thing to do is to just create a new variable with the different data type.</p>

            <h2 id="what-is-non-dynamic-typing">What is non-dynamic typing?</h2>

            <p>Languages that aren't dynamically typed are <strong>statically typed</strong>. In a statically typed language, if you try to assign a value to a variable of the wrong type, an error would crash the program.</p>

            <h2 id="order-of-functions">Order of functions</h2>

            <p>All functions <em>must</em> be defined before they are used.</p>

            <p>Most Python developers solve the issue of ordering their functions correctly by defining <em>all</em> the functions in their program first, then they call an <strong>entry point</strong> function <em>last</em>. That way all of the functions have been read by the Python interpreter before the first one is called.</p>

            <p><em>Note</em> conventionally this <em>entry point</em> function is usually called <code>main</code> to keep things simple and consistent.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {orderOfFunctions}
                </SyntaxHighlighter>
            </div>

            <h2 id="none-return">None Return</h2>

            <p>When no return value is specified in a function, it will automatically return <code>None</code>.</p>

            <h2 id="parameters-vs-arguments">Parameters vs Arguments</h2>

            <p><strong>Parameters</strong> are the names used for inputs when <em>defining</em> a function. <strong>Arguments</strong> are the <em>values</em> of inputs supplied when a function is called.</p>

            <p>So this means that arguments are the <em>actual values</em> that go into the function, like <code>69.0</code>, <code>True</code>, or <code>&quot;asian assassins&quot;</code>. Parameters are the names we use in the funtion definition to refer to those values (think of it as the placeholder).</p>


            {/* accordion question */}
            <div className="container accordion" id="this-question">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionOne" aria-expanded="false" aria-controls="questionOne">
                            _____ are the inputs specified by the function definition.
                        </button>
                    </h2>
                    <div id="questionOne" className="accordion-collapse collapse" data-bs-parent="#this-question">
                        <div className="accordion-body">
                            parameters
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}