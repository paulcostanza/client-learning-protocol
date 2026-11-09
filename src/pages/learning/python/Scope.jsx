import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Dropdown from '../../../Helpers/Dropdown.jsx'

export default function Scope() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const scope = `label = "Main"
 
def show_label():
    label = "Inside"
    print(label)
 
show_label()
print(label)`

    const scopeOutput = `Inside
Main`

    const weirdPythonIssue = `def get_names():
    names = ["paul", "sally", "jimmy"]
    for name in names:
        x = name
    print(x)`
    return (
        <>
            <h1 id="scope">Scope</h1>

            <p><strong>Scope</strong> refers to <em>where</em> a variable or function name is available to be used.</p>

            <p>A variable created inside a function is <em>local</em> to it. It exists only while that function runs like so:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {scope}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {scopeOutput}
                </SyntaxHighlighter>
            </div>

            <p>Even though we already had a variable named <code>label</code>, assigning the same named variable inside of a function creates a new variable in memory. It has nothing to do with the outer one.</p>

            <p>A function is able to read a variable from outside itself, but assigning to that name inside will create a local copy instead. Parameters are local in the same way.</p>

            <h2 id="weird-python-scope-issue">Weird python scope issue</h2>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {weirdPythonIssue}
                </SyntaxHighlighter>
            </div>

            <Dropdown
                questions={['What does python print to the console in the example above?']}
                answers={['jimmy\n\n... yup. Believe it or not, it does not produce an error or even return None.']}
            />

            <br />

            <p>Even though <code>x</code> is outside of the <code>for</code> loop scope, python knows what it is. This is because in python, variables are scoped to their function.</p>

            <p>It's a little weird and not common among other programming languages. Try not to take advantage of this little quirk, you may form some bad habits and have other programmers not care too much for your coding style.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="scope"
            />
        </>
    )
}

// To do
// show what scoped variables are doing in memory

// questions:

// title = "Home"

// def show_title():
//     title = "About"
//     print(title)

// show_title()
// print(title)

// remove show_title for some trickory!