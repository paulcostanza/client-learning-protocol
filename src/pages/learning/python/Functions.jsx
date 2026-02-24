import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Functions() {
    const returnStatement = `def do_something():
    return 6 + 9

print(do_something())`

    const answerToReturnStatement = `15`

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

            <h2>The <code>return</code> statement</h2>
            <p>
                The <code>return</code> statement allows a function to send a value back to the caller. When a function is executed, it may perform various operations or calculations. We use the <code>return</code> statement to specify the result of those operations.
            </p>
            <p>
                You must <i>call</i> a function in order to execute it. Declaring the function does not do anything by itself.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {returnStatement}
                </SyntaxHighlighter>
            </div>

            <pre>
                <code>{ }</code>
            </pre>
            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {answerToReturnStatement}
                </SyntaxHighlighter>
            </div>

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
        </>
    )
}