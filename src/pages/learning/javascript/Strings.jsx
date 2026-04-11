import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Strings() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const stringBasics = `let singleQuotes = 'This is a string';
console.log(singleQuotes);
let doubleQuotes = "This is also a string";
console.log(doubleQuotes);`

    const improperString = `const improperStr = "Do not do this'; // Error!`

    const immutable = `let developer = "Jimmy";
console.log(developer);
developer = "Johnny";
console.log(developer);`

    const index = `const developer = "Jessica";
console.log(developer[0]); // `

    const plusOperator = `let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; 
console.log(fullName); // John Doe`

    const spaceIssue = `let firstName = "John";
let lastName = "Doe";

let fullName = firstName + lastName; 
console.log(fullName); // "JohnDoe"`

    const plusEquals = `let greeting = 'Hello'
greeting += ', '
greeting += 'John!'

console.log(greeting); // "Hello, John!"`

    const newLineCharacter = `const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);`

    const escapeCharacter = `const statement = "She said, \\"Hello!\\"";
console.log(statement); // She said, "Hello!"`

    const templateLiterals = `const name = "Jessica";
const greeting = \`Hello, \${name}!\`; 
console.log(greeting); // "Hello, Jessica!"`

    return (
        <div className="container">
            <h1>Strings</h1>

            <p>In JS, a <strong>string</strong> is a sequence of characters used to represent text data. Strings are one of the primitive data types in the language, along with numbers, booleans, null, and undefined. To create a string in JS you can use single quotes (<code>'</code>) or double quotes (<code>"</code>).</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {stringBasics}
                </SyntaxHighlighter>
            </div>

            <p>Even though you can use single or double quotes to create strings, it is important to be consistent.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {improperString}
                </SyntaxHighlighter>
            </div>

            <p>Another thing to take into account is that strings are immutable. <code>Immutability</code> means that once something is created, it cannot be changed. So, when you create a string, you cannot change its characters directly. Instead, you would create a new string if you want to make changes.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {immutable}
                </SyntaxHighlighter>
            </div>

            <p>Since strings are immutable, we cannot update the first string directly. That is why we are assigning a new string to the <code>developer</code> variable. <strong>Reassignment</strong> is a brand new string, meaning we do not modify but rather replace, hence why this does not break the immutabilty rule.</p>

            <blockquote>
                <p>Once a string is created, you cannot change its characters directly.</p>
            </blockquote>

            <p>You can access a character from a string using bracket notations and passing in the index number. An <strong>index</strong> is the position of a character within a string. It is zero-based.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {index}
                </SyntaxHighlighter>
            </div>

            <h2>String concatenation</h2>

            <p>In JS, working with text is an essential part of coding, and often you need to combine or join pieces of text together. This process is called <strong>string concatenation</strong>.</p>

            <p>In this lesson, we will focus on how string concatenation works, specifically using the <code>+</code> operator, <code>+=</code> operator, and the <code>concat()</code> method.</p>

            <h3><code>+</code></h3>

            <p>The <code>+</code> operator is one of the simplest and most frequently used methods to concatenate strings. It allows you to join multiple strings or combine strings with variables that hold text.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {plusOperator}
                </SyntaxHighlighter>
            </div>

            <p>In this example, we used the <code>+</code> operator to concatenate the <code>firstName</code> and <code>lastName</code> variables along with a space (<code>" "</code>) to create the full name.</p>

            <p>One disadvantage of using the <code>+</code> operator for string concatenation is that it can lead to spacing issues if you do not carefully manage the spacing between the concatenated strings.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {spaceIssue}
                </SyntaxHighlighter>
            </div>

            <p>Whenever you use the <code>+</code> operator to concatenate strings, it is important to double check for any potential spacing issues.</p>

            <h3><code>+=</code></h3>

            <p>If you need to add or append to an existing string, then you can use the <code>+=</code> operator. This is helpful when you want to build upon a string by adding more text to it over time.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {plusEquals}
                </SyntaxHighlighter>
            </div>

            <p>Now there is one more way using a <strong>method</strong> called <code>concat()</code>. We will go over what that is in the next section!</p>

            <p>It is important to remember that strings are immutable which means once a string is created you <em>cannot</em> alter it. In this case, the original string of <code>Hello</code> is <em>not</em> modified. Instead, <code>greeting</code> now references the new string of <code>Hello, John</code>!</p>

            <p>This may not make much sense, but that is because we are not looking at it from the memory's point of view. (Notes to be added eventually...)</p>

            <h2>Escape sequences</h2>

            <p>A <strong>newline character</strong> (<code>\n</code>) creates a new line entity in a string. This comes in handy went printing to a console or a web page for formatting purposes.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {newLineCharacter}
                </SyntaxHighlighter>
            </div>

            <p>An <strong>escape string</strong> allows you to add characters that are used to code with that you acutally want in the string.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {escapeCharacter}
                </SyntaxHighlighter>
            </div>

            <h2>Template literals</h2>

            <p>Defined with backticks (<code>`</code>), <strong>template literals</strong> allow for easier string manipulation, including embedding variables directly inside a string. This is known as <strong>string interpolation</strong>.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {templateLiterals}
                </SyntaxHighlighter>
            </div>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro"
            />
        </div>
    )
}