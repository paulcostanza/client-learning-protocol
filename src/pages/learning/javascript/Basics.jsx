import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Basics() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const score = `let score = 10;
console.log(score); // 10
score = 20;
console.log(score); // 20`

    const maxScore = `const maxScore = 100;
console.log(maxScore); // 100`

    const maxError = `maxScore = 200; // This will result in an error`

    const unassignedConst = `const age; // Error: Missing initializer in const declaration`

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

            <h2><code>let</code> and <code>const</code></h2>

            <p>When working with JS you will often declare variables to store data that you plan to use throughout your program.</p>

            <p>In modern JS, <code>let</code> and <code>const</code> are the preferred ways to declare variables, but they differ in how they handle value assignment and reassignment.</p>

            <p>The <code>let</code> keyword allows you to declare variables that can be updated or reassigned later. Think of <code>let</code> as a flexible container - once you have stored a value in it, you can change that value as needed throughtout your program.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {score}
                </SyntaxHighlighter>
            </div>

            <p>In this case, the variable <code>score</code> is declared and assigned the value <code>10</code>. If you want to update the value later, you can easily do it. Here we change <code>score</code> to hold the value <code>20</code>. This makes <code>let</code> particularly useful when you know the value of a variable will change as your program runs.</p>

            <p>On the other hand, <code>const</code> is used to declare variables that are constant. Once you assign a value to variable declared with <code>const</code>, you cannot reassign it. This makes <code>const</code> ideal for values that you do not want to change accidentally during the execution of your program.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {maxScore}
                </SyntaxHighlighter>
            </div>

            <p>Once <code>maxScore</code> is assigned the value <code>100</code>, it <em>cannot</em> be changed</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {maxError}
                </SyntaxHighlighter>
            </div>

            <p>Trying to reassign a value to a <code>const</code> variable will throw an error in your JS console, as <code>const</code> variables are <em>immutable</em> once they are assigned.</p>

            <p>Now, variables declared with <code>const</code> <strong>must</strong> be assigned a value at the time of declaration. If you try to declare a <code>const</code> variable without assigning it a value, you will get an error:</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {unassignedConst}
                </SyntaxHighlighter>
            </div>

            <p>You should use <code>let</code> when you need to declare variables that will be reassigned later (tracking a changing score or updating a value over time) and use <code>const</code> when you want to declare variables that should remain constant (configuration values or settings).</p>

            <p>And oh yeah, you can also use the <code>var</code> keyword for assignment too!</p>

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

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="basics"
            />
        </div>
    )
}