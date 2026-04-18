import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function ConditionalsIfStatements() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const partyTime = `let isOldEnoughToPary = true;

console.log(isOldEnoughToPary); // true`

    const partyIfElse = `let isOldEnoughToParty = true;

if (isOldEnoughToParty) {
 console.log("Party on dude!"); // this statement will print in the console
} else {
 console.log("Sorry, you are not old enough to party.");
}`

    const equalityComparison = `console.log(5 == "5"); // true`

    const strickEqualityComparison = `console.log(2 != "2"); // false
console.log(5 !== "5"); // true`

    const greaterThan = `let a = 6;
let b = 9;
let c = 6;
let d = 9;

console.log(a > c); // false
// 6 is not greater than 6

console.log(b > a); // true
// 9 is greater than 6

console.log(a >= c); // true
// 6 is equal to 6

console.log(a >= d); // false
// 6 is not greater than or equal to 9`

    const lessThan = `let a = 6;
let b = 9;
let c = 6;
let d = 9;

console.log(a < c); // false
// 6 is not less than 6

console.log(a < b); // true
// 6 is less than 9

console.log(a <= c); // true
// 6 is equal to 6

console.log(d <= a); // false
// 9 is not less than or equal to 6`

    const booleanFunction = `Boolean("Hello World!") // return true`

    return (
        <div className="container">
            <h1>Conditionals: If statements</h1>

            <p><em>In order to use if statements we must first understand what booleans are.</em></p>

            <p><strong>Booleans</strong> are a data type with only <code>true</code> and <code>false</code> values. They are useful because they allow you to do something based on some condition. Booleans are essential when you want to evaluate whether something should happen or not, like deciding if someone can access a certain feature in your app.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {partyTime}
                </SyntaxHighlighter>
            </div>

            <h2><code>if</code> statements</h2>

            <p>A <strong>conditional statement</strong> helps you make a decision in your code based on a condition. Here we use an <code>if-else</code> statement.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {partyIfElse}
                </SyntaxHighlighter>
            </div>

            <p>If <code>isOldEnoughToParty</code> is <code>true</code>, then the sentence <code>Party on dude!</code> will be logged to the console. Otherwise, if <code>isOldEnoughToParty</code> is <code>false</code> then the sentence <code>Sorry, you are not old enough to party.</code> will be logged to the console. In this case, our variable is true, which prints our first log statement.</p>

            <p>To compare two values, you can use either the <em>equality</em> (<code>==</code>) or <em>strict equality</em> (<code>===</code>) operator. The result of the comparison will be a boolean of either <code>true</code> or <code>false</code>. Here is an example of using the equality operator to compare a string to a number.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {equalityComparison}
                </SyntaxHighlighter>
            </div>

            <p>Here JS converts the string <code>"5"</code> into the number <code>5</code> and then checks if they are equal. Since both values are now the same, the result is <code>true</code>. The equality operator uses <strong>type coercion</strong> before checking if each value is equal.</p>

            <p>This differs from the strict equality operator, which does not perform type coercion. The strict equality operator will check if the <em>types</em> are the same and if the <em>values</em> are the same. Here is an example using the strict equality operator to compare a number and string. This operator is represented by a triple equals sign <code>===</code>.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {strickEqualityComparison}
                </SyntaxHighlighter>
            </div>

            <p>In the first console statement with 2, the result is <code>false</code> because the inequality operator will first convert the string value to a number and then compare the values. Since both values would be the same it will return <code>false</code>.</p>

            <p>However, when we use the strict inequality operator it does not perform any type coercion. And since number <code>5</code> does not equal string <code>"5"</code>, we get <code>true</code>.</p>

            <h2>Comparison Operators</h2>

            <p><strong>Comparison operators</strong> allow you to compare two values and return a <code>true</code> or <code>false</code> result. You can then use the result to make a decision or control the flow of your program. You use comparisons in if statements, loops, and many other situations where you need to make decisions based on certain conditions.</p>

            <ul>
                <li>The <strong>greater than operator</strong> <code>&gt;</code> checks if the value on the left is greater than the one on the right.</li>
                <li>The <strong>greater than or equal operator</strong> <code>&gt;=</code> checks if the value on the left is either greater than or equal to the one on the right.</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {greaterThan}
                </SyntaxHighlighter>
            </div>

            <p>Now let's go the other way.</p>

            <ul>
                <li>The <strong>less than operator</strong> <code>&lt;</code> checks if the value on the left is less than the one on the right.</li>
                <li>The <strong>less than or equal operator</strong> <code>&lt;=</code> checks if the value on the left is either less than or equal to the one on the right.
                </li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {lessThan}
                </SyntaxHighlighter>
            </div>

            <h2>Quick tips</h2>

            <p>The <code>Boolean()</code> function is used to check the truthiness of a value.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {booleanFunction}
                </SyntaxHighlighter>
            </div>

            <p><strong>Falsy values</strong> are values that evaluate to <code>false</code> in a boolean context. Examples include:</p>

            <ul>
                <li><code>""</code></li>
                <li><code>0</code></li>
                <li><code>false</code></li>
                <li><code>null</code></li>
                <li><code>undefined</code></li>
                <li><code>NaN</code></li>
            </ul>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="numbers"
            />
        </div>
    )
}