import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Basics() {
    const trickory = `for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}`

    const trickoryAnswer = `3
3
3`

    const assignedByReference = `const obj = { a: 1};
const copy = obj;

copy.a = 5;
console.log(obj.a); // 5`

    const assignedByValue = `let x = 5;
let y = x;
y = 10;

console.log(x); // 5`

    return (
        <div className='container'>
            <h1>JavaScript Basics</h1>

            <h2><code>var</code>, <code>let</code>, and <code>const</code></h2>

            <p>There are a few important differences between the three variable declaration keywords in JavaScript.</p>

            <ul>
                <li><code>var</code>: is function scoped. If declared outside a function it becomes global.</li>
                <li><code>let</code> and <code>const</code> are block scoped</li>
                <li><code>const</code> is not reasignable, the other two are. However, <code>const</code> objects and arrays can still be mutated.</li>
                <li><code>const</code> prevents the reassignment of variables, and not mutation of the value it references. </li>
            </ul>

            <p>what will this code output?</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {trickory}
                </SyntaxHighlighter>
            </div>

            <p>Answer: 5</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {trickoryAnswer}
                </SyntaxHighlighter>
            </div>

            <h2>Reference vs Value assignment</h2>

            <p>Objects and arrays are assigned by reference and primitives are assigned by value</p>

            <h3>Assigned by reference example:</h3>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {assignedByReference}
                </SyntaxHighlighter>
            </div>

            <p>How is the answer 5?</p>

            <ul>
                <li><code>const obj = &#123; a: 1 &#125;</code> means that <code>obj</code> will hold a reference to this object in memory.</li>
                <li><code>const copy = obj;</code> does not create a new object. It creates a second variable that is still pointing to the same object.</li>
                <li>the result is that modifying <code>copy</code> changes <code>obj</code> and vice versa.</li>
            </ul>

            <h3>Assigned by value example:</h3>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {assignedByValue}
                </SyntaxHighlighter>
            </div>



        </div>
    )
}