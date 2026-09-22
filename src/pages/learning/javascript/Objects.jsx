import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Objects() {
    const quizImports = {
        js: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const userPaul = `const user = {
  name: "Paul",
  email: "paul@clp.com",
  age: 35,
}
 
console.log(user.name)`

    const userPaulConsole = `Paul`

    const objectLiteral = `const user = {
  name: "Paul",
  email: "paul@clp.com",
  age: 35,
  isAdmin: true,
}`

    const accessObject = `console.log(user.name)
console.log(user.email)`

    const accessObjectConsole = `Paul
paul@clp.com`

    const bracketNotation = `const user = {
  "first name": "Paul",
  email: "paul@clp.com",
}
 
const displayField = "email"
 
console.log(user["first name"])
console.log(user[displayField])
console.log(user.displayField)`

    const bracketNotationConsole = `Paul
paul@clp.com
undefined`

    return (
        <div className="container">
            <h1>Objects</h1>

            <p>So far every value we have encountered has been basic values, one at a time. Even arrays are really just single values lined up in order. But real data is rarely shaped like that. A user is not just a name, or just an email, or just an age. A user is all three at once, grouped together as one labeled entity.</p>

            <p>This entity is called an <strong>object</strong> and it stores data as <em>key-value pairs</em>.</p>

            <p>Arrays are like a row of numbered lockers. You ask for locker <code>2</code> and the position will tell you nothing about what is inside. Objects are like a labeled file cabinet. You ask for the <code>name</code> drawer or the <code>email</code> drawer, and the label carries meaning before you even look at the value. Arrays are ordered while objects are named. </p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {userPaul}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {userPaulConsole}
                </SyntaxHighlighter>
            </div>

            <p>The curly braces hold a set of <em>key-value pairs</em>. The key, aka the <em>property name</em>, is located on the left, while the value is located on the right.</p>

            <blockquote>
                <p>Almost every real program deals with shaped data: blogs containing title, body, author, API responses nested objects deep, the DOM itself, and JSON (the format the web sends data in). </p>
            </blockquote>

            <h2>Creating</h2>

            <p>An <strong>object literal</strong> is a pair of curly braces with comma-separated <code>key: value</code> pairs inside like so:</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {objectLiteral}
                </SyntaxHighlighter>
            </div>

            <p>Notice how the keys are unquoted. Quotes are only needed when a key has space or hypens. The values can be any data type. Strings, numbers, booleans, arrays, other objects, or even functions.</p>

            <blockquote>
                <p>When you have a function attached to an object as a value of a property, it is called a <strong>method</strong>. </p>
            </blockquote>

            <p>You may also notice that every key-value pair, even the last one, are separated by commas. The comma <em>is</em> allowed after the last pair and is considered good practice.</p>

            <p>The term <em>object literals</em> just means an object that is directly written out. You will see other ways later on.</p>

            <h2>Accessing</h2>

            <p>The most common way to read a property is with the help of <strong>dot notation</strong>. The object name is followed by (1) a dot and then (2) the key.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {accessObject}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {accessObjectConsole}
                </SyntaxHighlighter>
            </div>

            <p>The part after the dot (the key) has to be a valid identifier. If you have keys like <code>"first-name"</code> or <code>"main-email"</code>, then the dot syntax becomes invalid.</p>

            <p>To fix this we use <strong>bracket notation</strong>.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {bracketNotation}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {bracketNotationConsole}
                </SyntaxHighlighter>
            </div>

            <p>With bracket notation we simply use brackets instead of a dot, with the key written as a string (like it should be in the object literal). In addition, bracket notations have the additional benefit of being used as a variable, as you can see with the <code>displayField</code> variable. The variable is evaluated first and is then looked up.</p>

            <p><code>user.displayField</code> returns <code>undefined</code> because it is not accessible by dot notation! JS literally looks up the key <code>displayField</code> and doesn't hit anything. Asking for a key that is not connected to an object will never cause an error, but rather it will return <code>undefined</code>.</p>

            <h2>Adding to an object</h2>

            Objects do not need to be set in stone the moment you create them. You can add, change, and remove properties










            <hr />





            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="objects"
            />
        </div>
    )
}