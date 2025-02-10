import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Scope() {

    const weirdPythonIssue = `def get_names():
    names = ["paul", "sally", "jimmy"]
    for name in names:
        x = name
    print(x)`
    return (
        <>
            <h1 id="scope">Scope</h1>

            <p><strong>Scope</strong> refers to <em>where</em> a variable or function name is available to be used.</p>

            <h2 id="weird-python-scope-issue">Weird python scope issue</h2>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {weirdPythonIssue}
                </SyntaxHighlighter>
            </div>

            <p>What does Python print to the console in the example above?</p>

            <p>Believe it or not, it does not produce <code>None</code>, but it will print out <code>jimmy</code>! Even though <code>x</code> is outside of the <code>for</code> loop scope, python knows what it is. This is because in python, variables are scoped to their function.</p>

            <p>It's a little weird and not common among other programming languages. Try not to take advantage of this little quirk, you may form some bad habits and have other programmers not care too much for your coding style.</p>



        </>
    )
}