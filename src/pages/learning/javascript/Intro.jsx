import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Intro() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const htmlWithJS = `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: green;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <button onclick="alert('Button clicked!')">Click me</button>
</body>
</html>`

    const numberDataType = `// Examples of integers
console.log(3434);
console.log(5.234);
console.log(-67);
console.log(3.14);
console.log(7.2);
console.log(-14.5);`

    const stringDataType = `console.log("I love to code!");
console.log('I love to code!');`

    const objectDataType = `{
  name: "Alice",
  age: 30
};`

    const symbolDataType = `Symbol(mySymbol)`

    const symbolsCannotBeEqual = `const crypticKey1= Symbol("saltNpepper");
const crypticKey2= Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false`

    const bigIntDataType = `const veryBigNum = 1234567890123456789012345678901234567890n;`

    const letAge = `let age;`

    const letAgeOutput = `let age;
console.log(age); // undefined`

    const letAgeWithValue = `let age = 25;
console.log(age);
// age now returns the value of 25`

    const reassignment = `let age = 25;
console.log(age); // 25
age = 30;
console.log(age); // 30`

    const goodAndBadVariableNames = `// bad variable names
let x = 10;
let y = "John";

// good variable names
let age = 10;
let name = "John";`

    const validAndInvalidVariableNames = `// valid variable names
let age;
let _score;
let $total;

// invalid variable names
let 1stPlace; // starts with a number, will cause an error`

    const upperAndLowerCaseVariableNames = `let age = 25;
let Age = 30;
console.log(age); // 25
console.log(Age); // 30`

    const camelCase = `let thisIsCamelCase;
let anotherExampleVariable;
let freeCodeCampStudents;`

    const comments = `// This is a single-line comment and will be ignored by the JavaScript engine

/*
And this is a multi-line comment.
It can span multiple lines.
*/`

    const dynamicallyTyped = `let error = 404; // JavaScript treats error as a number
error = "Not Found"; // JavaScript now treats error as a string`

    const typeofOperator = `let age = 25;
console.log(typeof age); // "number"

let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"`

    const typeofNull = `let user = null;
console.log(typeof user); // "object"`

    return (
        <div className="container">
            <h1>Intro to JS</h1>

            <p><strong>JavaScript</strong> is a powerful programming language that brings interactivity and dynamic behavior to websites.</p>

            <p>While HTML and CSS are markup languages used to structure content and style elements on a page, JavaScript goes beyond those by enabling more complex functionality, such as handling user input, animating elements and even building full web applications.</p>

            <p>For example, when you click a button, submit a form, or hover over a menu, JS determines how the page behaves. </p>

            <div className="">
                <SyntaxHighlighter language="html" style={tomorrow} className="code-snippet">
                    {htmlWithJS}
                </SyntaxHighlighter>
            </div>

            <p>In this example, HTML is used to define the content:</p>

            <ul>
                <li>a heading - the <code>h1</code> element</li>
                <li>a button - the <code>button</code> element</li>
            </ul>

            <p>CSS is used to apply styles to the heading, such as making the text green. JS is used to display an alert message when the button is clicked.</p>

            <h2>Data types</h2>

            <p>A <strong>data type</strong> is the kind of value you store like a number or piece of text.</p>

            <p>A <code>variable</code> is a named container that stores a value of a specific data type, allowing you to reference and manipulate it throughtout your code.</p>

            <p>Think back to algebra... <code>x = 5</code>. That's it in a nutshell!</p>

            <h3>Number</h3>

            <p>A <code>Number</code> data type represents both integers and floating-point values.</p>

            <blockquote>
                <p>Here we use <code>console.log()</code>. This is a <strong>function</strong> that outputs information to the console, which is a part of your web browser used for debugging code. We also use <code>//</code> for comments, which are notes for yourself or other programmers that are ignored when the code runs.</p>
            </blockquote>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {numberDataType}
                </SyntaxHighlighter>
            </div>

            <p>Numbers come in two types:</p>

            <ul>
                <li><strong>Integers:</strong> negative and positive numbers with no decimal point</li>
                <li><strong>Floating-point:</strong> negative and positive numbers <em>with</em> a decimal point</li>
            </ul>

            <h3>String</h3>

            <p>A <strong>String</strong> is a sequence of characters, or text, enclosed in quotes. Here is an example string using double quotes:</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {stringDataType}
                </SyntaxHighlighter>
            </div>

            <p>In JS it is cool to use either double or single quotes. You most commonly will use strings to represent names, labels, alert messages, etc.</p>

            <h3>Boolean</h3>

            <p>A <strong>Boolean</strong> represents one of two values: <code>true</code> or <code>false</code>. For example, a program might check whether a user is logged in (<code>true</code>) or not (<code>false</code>) and change the page based on that. If the user is logged in, you probably want to show them the dashboard page. Otherwise, you will want to show them the login page.</p>

            <h3>undefined</h3>

            <p><strong>Undefined</strong> means a variable has been declared but has not been given a value yet. You will lean more about this later on.</p>

            <h3>Object</h3>

            <p>An <strong>object</strong> is a collection of key-value pairs.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {objectDataType}
                </SyntaxHighlighter>
            </div>

            <p>Objects are great for grouping related information together.</p>

            <h3>Symbol</h3>

            <p>A <strong>Symbol</strong> is a special type of value in JS that is always unique and cannot be changed (immutable). It is often used to create unique labels or identifiers for properties:</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {symbolDataType}
                </SyntaxHighlighter>
            </div>

            <p>In this example below, two symbols are created with the same description, but they are not equal:</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {symbolsCannotBeEqual}
                </SyntaxHighlighter>
            </div>

            <h3>BigInt</h3>

            <p>BigInt is used for very large numbers that exceed the limit of the <code>Number</code> type:</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {bigIntDataType}
                </SyntaxHighlighter>
            </div>

            <p>We create a BigInt by adding n at the end of a very large number.</p>

            <blockquote>
                <p><code>Symbol</code> and <code>BigInt</code> are two types that are less commonly used, but they are still important to know about.</p>
            </blockquote>

            <h2>Variables</h2>

            <p><strong>Variables</strong> act as containers for storing data that you can access and modify throughout your program.</p>

            <p>Think of variables as boxes that hold values. With variables, you can keep track of things like numbers or text and refer to these values whenever you need them in your program.</p>

            <p>One way to declare a variable in JS is to use the <code>let</code> keyword.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {letAge}
                </SyntaxHighlighter>
            </div>

            <p>Right now, the <code>age</code> variable does not have a value assigned to it. If you try and use it, it will return <code>undefined</code>, which means it has no value</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {letAgeOutput}
                </SyntaxHighlighter>
            </div>

            <p>To assign a value to a variable you will need to use the assignment operator.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {letAgeWithValue}
                </SyntaxHighlighter>
            </div>

            <p>The assignment operator looks like an equals sign (<code>=</code>) but it does <strong>not</strong> check for equality.</p>

            <p>The assignment operator is used to assign a value to a variable. This process of assigning a value to a variable is known as <strong>initialization</strong>.</p>

            <p>One advantage of using the <code>let</code> keyword to declare variables is that you can reassign a values to them. In programming, <strong>reassignment</strong> means giving a new value to a variable that already has one.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {reassignment}
                </SyntaxHighlighter>
            </div>

            <p>Now the <code>age</code> variable holds the value of <code>30</code>. Notice that the <code>let</code> keyword was not needed again because the age variable was <em>already</em> declared, so there is no need to declare it a second time.</p>

            <p>When using reassignment, you only need to reference the variable name. Reassignment is useful because it allows you to update and change the value stored in a variable as your program runs (ex: updating points in a game).</p>

            <p>Naming variables may seem straightforward, but there are some rules and best practices to ensure your code is readable and functional. Also, it can be a huge pain to properly describe something in your code.</p>

            <p>Your variable names should describe what the data represents. For example, instead of using a name like <code>x</code>, a more descriptive name such as <code>age</code> or <code>points</code> makes your code easier to understand.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {goodAndBadVariableNames}
                </SyntaxHighlighter>
            </div>

            <p>Variables in JS must begin with a letter, an underscore (<code>_</code>), or a dollar sign (<code>$</code>). They cannot start with a number.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {validAndInvalidVariableNames}
                </SyntaxHighlighter>
            </div>

            <p>Variable names are case-sensitive, meaning the word <code>age</code> in all lowercase and the word <code>Age</code> with a capital A are considered different variables.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {upperAndLowerCaseVariableNames}
                </SyntaxHighlighter>
            </div>

            <p>This is why it is important to stick with a consistent naming convention like camel case. <strong>Camel ase</strong> is where the first word is all lowercase and each subsequent word starts with an uppercase letter.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {camelCase}
                </SyntaxHighlighter>
            </div>

            <p>There are certain keywords in JS that you cannot use as variable names, such as <code>let</code>, <code>const</code>, <code>function</code>, or <code>return</code>, as they are reserved for the language itself. Don't worry, there's plenty more!</p>

            <p>You should also avoid special characters like exclamation points (<code>!</code>) or at (<code>@</code>) symbols in your variable names. It is best to keep variable names readable by using letters, numbers, underscores, or dollar signs.</p>

            <h2>Dynamically typed</h2>

            <p>JS is a <strong>dynamically typed language</strong>, which means that you do not have to specify the data type of a variable when you declare it. Other programming languages can sometimes require this. The JS engine automatically determines the data type based on the value assigned to the variable.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {dynamicallyTyped}
                </SyntaxHighlighter>
            </div>

            <h2><code>typeof</code> operator</h2>

            <p>The <code>typeof</code> operator is used to check the data type of a variable. It returns a string indicating the type of the variable (duh).</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {typeofOperator}
                </SyntaxHighlighter>
            </div>

            <p>However, there is a well-known quirk in JS when it comes to <code>null</code>. The <code>typeof</code> operator returns <em>object</em> for <code>null</code> values.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {typeofNull}
                </SyntaxHighlighter>
            </div>

            <h2><code>console.log()</code></h2>

            <blockquote>
                <p>I keep seeing this code in previous examples, but what is it?</p>
            </blockquote>

            <p><code>console.log</code> is a method that is used to log messages to the console. It is a helpful tool for debugging and testing your code.</p>

            <blockquote>
                <p>What's a console?</p>
            </blockquote>

            <p>More on that later!</p>

            <blockquote>
                <p>Thanks for nothing...</p>
            </blockquote>

            <p>Tehe!!</p>

            <h2>Semicolons in JS</h2>

            <p>Semicolons are primarily used to mark the end of a statement. This helps the JavaScript engine understand the separation of individual instructions, which is crucial for correct execution. They are not required and raise no error is they are in your code or not.</p>

            <blockquote>
                <p>Personally I hate them in JS so you will see examples with and without them. Deal with it!</p>
            </blockquote>

            <h2>Comments</h2>

            <p>Any line of code that is commented out is ignored by the JavaScript engine. Comments are used to explain code, make notes, or temporarily disable code.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet">
                    {comments}
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