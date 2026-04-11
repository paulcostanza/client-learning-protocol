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

    const concatExample = `let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result); // Hello World`

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

            <h3>+=</h3>

            <p>If you need to add or append to an existing string, then you can use the <code>+=</code> operator. This is helpful when you want to build upon a string by adding more text to it over time.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {plusEquals}
                </SyntaxHighlighter>
            </div>

            <p>It is important to remember that strings are immutable which means once a string is created you <em>cannot</em> alter it. In this case, the original string of <code>Hello</code> is <em>not</em> modified. Instead, <code>greeting</code> now references the new string of <code>Hello, John</code>!</p>

            <p>This may not make much sense, but that is because we are not looking at it from the memory's point of view. (Notes to be added eventually...)</p>

            <h3><code>concat()</code></h3>

            <p>Another way you can concatenate strings is to use the <code>concat()</code> method.</p>

            <blockquote>
                <p>Hold up, what the hell is a method?</p>
            </blockquote>

            <p>In programming, a <code>function</code> is a reusable block of code that performs a specific task and can be called with various inputs. A <code>method</code> is a type of function that is associated with an object, meaning it operates on the data contained <em>within</em> that object.</p>

            <p>In future lessons, we will dive much deeper into how functions, objects, and methods work in JavaScript. For now, it is important to understand that JS has dozens of methods you can use for various data types, like the <code>concat()</code> method for strings.</p>

            <div className="">
                <SyntaxHighlighter language="js" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {concatExample}
                </SyntaxHighlighter>
            </div>

            <p>In this example, we use the <code>concat()</code> method to join <code>str1</code>, a space (<code>' '</code>), and <code>str2</code> into a single string.</p>

            <p>What makes this method cool is that you can add as many or as few string elements as you want to concatenate. All you need to do is seperate them by a comma inside the parenthesis.</p>

            <h3>Concatenation review</h3>

            <ul>
                <li><code>+</code> operator is best for simple concatenation, especially when you need to combine a few strings or variables</li>
                <li><code>+=</code> operator is useful when building up a string step by step or appending new content to an existing string variable</li>
                <li>the <code>concat()</code> method is beneficial when you need to concatenate multiple strings together</li>
            </ul>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro"
            />
        </div>
    )
}