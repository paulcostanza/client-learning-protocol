import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Numbers() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const typeOf = `const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number`

    const integers = `const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero); // number`

    const floatingPoints = `const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat); // number
console.log(typeof oneMoreFloat); // number`

    const infinity = `const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number`

    const notANumber = `const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN`

    const divideByZero = `const result = 10 / 0; 
console.log(result); // Infinity`

    const remainderOperator = `const num1 = 10;
const num2 = 3;
const remainder = num1 % num2;

console.log(remainder); // 1`

    const exponentiationOperator = `const num1 = 2;
const num2 = 3;

const exponent = num1 ** num2;
console.log(exponent); // 8`

    const operatorPrecedence = `const result = 10 + 5 * 2 - 8 / 4;
console.log(result); // 18`

    const assignmentOperator = `let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10`

    const exponentOperator = `const result = 2 ** 3 ** 2;
console.log(result); // 512`

    const stringPlusNumber = `const resultOne = 5 + '10';
console.log(resultOne); // 510
console.log(typeof resultOne); // string

const resultTwo = '10' + 5;
console.log(resultTwo); // 105
console.log(typeof resultTwo); // string`

    const stringEverythingElseNumber = `const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number`

    const whenStringIsNotANumber = `const subtractionResult = 'abc' - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

const multiplicationResult = 'abc' * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

const divisionResult = 'abc' / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number`

    const booleanPlusNumber = `const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string`

    const nullAndUndefinedPlusNumber = `const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number`

    const prefixIncrementOperator = `let x = 5;

console.log(++x); // 6
console.log(x); // 6`

    const postfixIncrementOperator = `let y = 5;

console.log(y++); // 5
console.log(y); // 6`

    const postAndPrefixDecoratorOperator = `let x = 5;
console.log(--x); // 4
console.log(x); // 4

let y = 5;
console.log(y--); // 5
console.log(y); // 4`

    const chooseBetweenPreAndPost = `let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)`

    const compoundAssignmentOperators = `let num = 5;
num = num + 2;      // how we have written it so far
console.log(num);   // 7

num += 3;           // the addition compound assignemnt operator in action
console.log(num);   // 10`

    const comparingWithAndWithoutCompoundAssignmentOperator = `// without compound assignment operators
let points = 50;
points = points + 1;
points = points / 3;
points = points * 2;

console.log(points); // 34

// with compound assignment operators
let score = 50;
score += 1;
score /= 3;
score *= 2;

console.log(score); // 34`

    return (
        <div className="container">
            <h1>Numbers</h1>

            <p>The <code>Number</code> type is one of the most used data types in JavaScript. It represents numeric values.</p>

            <p>Unlike many other programming lanugages that separate integers and floating-point numbers into different types, JS uses one type to account for numbers. This means you can work with whole numbers, decimals, and even special numeric values all under the same <code>Number</code> data type umbrella.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {typeOf}
                </SyntaxHighlighter>
            </div>

            <p>JavaScript's <code>Number</code> type includes various kinds of numeric values, ranging from simple integers and floating-point numbers to special cases like <code>Infinity</code> and <code>NaN</code> (not a number). Let's break down the main types you will encounter!</p>

            <p><strong>Integers</strong> are whole numbers without any fractional or decimal part. They can be positive, negative, or zero.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {integers}
                </SyntaxHighlighter>
            </div>

            <p><strong>Floating point</strong> numbers are numbers with decimal points. They are often referred to as just <em>floats</em>. They are useful when you need more precision, such as dealing with measurements or currencies.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {floatingPoints}
                </SyntaxHighlighter>
            </div>

            <p><strong>Infinity</strong> represents numbers that are beyond the maximum limit. You will encounter this when you try to divide a number or (on rare occasions) exceed the upper boundary of the <code>Number</code> type.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {infinity}
                </SyntaxHighlighter>
            </div>

            <p><strong>NaN</strong> represents <em>Not a Number</em>. Sometimes in JS, some mathematical operations will not result in a valid number. For instance, if you try to perform a mathematical operation on something that is not a number like in our example. Notice how <code>NaN</code> is still technically a <code>Number</code>.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {notANumber}
                </SyntaxHighlighter>
            </div>

            <p>Apart from the standard decimal system (base 10), JS also supports numbers in differet bases such as binary, octal, and hexadecimal (how fancy!).</p>

            <ul>
                <li><strong>Binary</strong> is a base-2 system that uses only digits 1 and 0</li>
                <li><strong>Octal</strong> is a base-8 system that uses only digits 0 to 7</li>
                <li><strong>Hexadecimal</strong> is a base-16 system that uses digits 0 -9 and letters a to f (like you may have seen in hex colors for CSS)</li>
            </ul>

            <h2>Arithmetic Operators</h2>

            <p>We have the standard arithetic operations, as well as so not so common ones:</p>

            <ul>
                <li>addition</li>
                <li>subtraction</li>
                <li>multiplication</li>
                <li>division</li>
                <li>remainder</li>
                <li>exponentiation</li>
            </ul>

            <h3>Multiplication & Division</h3>

            <p>The multiplication operator is represented by an asterisk <code>*</code>.</p>

            <p>In JS, the division operator is a slash <code>/</code> which differs from the division symbol used in traditional math <code>÷</code>.</p>

            <p>It is important to note that if you try to divide by zero, JS will return <code>Infinity</code>.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {divideByZero}
                </SyntaxHighlighter>
            </div>

            <p>Make sure to avoid those types of calculations so you do not end up with unexpected results in your code!</p>

            <h3>Remainder & Exponentiation</h3>

            <p>The <strong>remainder operator</strong> is represented by a percentage sign <code>%</code>. It returns the remainder of a division. The remainder in math is the leftover value after performing division.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {remainderOperator}
                </SyntaxHighlighter>
            </div>

            <p>The <strong>exponentiation operator</strong> is represented bya s double asterisk <code>**</code>. It raises one number to the power of another.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {exponentiationOperator}
                </SyntaxHighlighter>
            </div>

            <h2>Operator Precedence</h2>

            <p>It is possible to mix operators in a single operation or expression:</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {operatorPrecedence}
                </SyntaxHighlighter>
            </div>

            <p>When you mix different operators in a single expression, the JavaScript engine follows a system called operator precedence to determine the order of operations. <strong>Operator precedence</strong> determines the order in which operations are executed in expressions.</p>

            <blockquote>
                <p>So how exactly does operator precedence work?</p>
            </blockquote>

            <p>Just like algebra, JS evaluates operator in a specific order. Operators with a higher precedence are evaluated <em>before</em> those with lower precedence.</p>

            <ul>
                <li>Parenthesis (highest)</li>
                <li>Mulitplication & Division</li>
                <li>Addition & Subtraction (lowest)</li>
            </ul>

            <p>Now, <strong>associativity</strong> is what tells JS whether to evaluate operators from left-to-right or right-to-left. For most operators like addition and multiplication, associativity is left to right.</p>

            <blockquote>
                <p>Is there even a use case for right to left associative?</p>
            </blockquote>

            <p>Yes! The assignment operator is a perfect example. It evaluates the right side of the expression first.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {assignmentOperator}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>5</code> is assigned to <code>b</code> first</li>
                <li>then <code>b</code> is assigned to <code>a</code>, which now has the value of <code>5</code></li>
            </ul>

            <p>Exponent operator is another example of right-to-left associativity.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {exponentOperator}
                </SyntaxHighlighter>
            </div>

            <h2>Calcuations of mixing data types</h2>

            <p>JavaScript is a language where things can get pretty f**ked up real quick. One such way occurs when you mix numbers and strings in calculations.</p>

            <h3>Adding strings to numbers</h3>

            <p>In JS, the <code>+</code> operator handles both addition and <strong>string concatenation</strong> (the joining of two strings together).</p>

            <p>When you use <code>+</code> with a number and a string, JS treats them <em>both</em> as strings and joins them together.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {stringPlusNumber}
                </SyntaxHighlighter>
            </div>

            <p>In either case, the number 5 is converted to a string and JS will concatenate them. This is known as type coercion. <strong>Type coercion</strong> is when a value from one data type is converted into another.</p>

            <h3><code>[Subtracting|Multiplicating|Dividing]</code> strings to number</h3>

            <p>Subtraction, multiplication, and division behave different than addition. At first, JS tries to convert the string into a number before doing the math - another type coercion!</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {stringEverythingElseNumber}
                </SyntaxHighlighter>
            </div>

            <p>Now, if the string is not a number it will result in <code>NaN</code>.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {whenStringIsNotANumber}
                </SyntaxHighlighter>
            </div>

            <p>The strings above do not represent valid numeric values, so JS cannot convert it into a number. It makes sense the results of these operations are <code>NaN</code>, as they are invalid.</p>

            <h3>Adding booleans and numbers</h3>

            <p>JS treats booleans as numbers in mathematical operations.</p>

            <ul>
                <li><code>true</code> becomes <code>1</code></li>
                <li><code>false</code> becomes <code>0</code></li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {booleanPlusNumber}
                </SyntaxHighlighter>
            </div>

            <h3>Adding null/undefined and numbers</h3>

            <ul>
                <li><code>null</code> becomes <code>0</code></li>
                <li><code>undefined</code> becomes <code>Nan</code></li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {nullAndUndefinedPlusNumber}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>JavaScript will often perform type coercion, automaticaly converting data types such as numbers, strings, and booleans in unexpected ways. Understanding these conversions will help you avoid bugs.</p>
            </blockquote>

            <h2>Increment and Decrement</h2>

            <p>There is an easy technique you can use to increase or decrease values by one.</p>

            <p>Instead of writing something like <code>x = x + 1</code> or <code>x = x - 1</code>, you can use an increment operator <code>++</code> or a decrement operator <code>--</code>.</p>

            <p>The increment and decrement operators work in two different ways, prefix and postfix.</p>

            <p><strong>Prefix</strong> places the two addition/subtraction signs <em>before</em> the variable. It increases the value first, then returns a new value.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {prefixIncrementOperator}
                </SyntaxHighlighter>
            </div>

            <p><strong>Postfix</strong> places the two addition/subtraction signs <em>after</em> the variable. It returns the current value first, then increases it.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {postfixIncrementOperator}
                </SyntaxHighlighter>
            </div>

            <p>The decrement operator does the same things as increment, except it decreases the value by 1.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {postAndPrefixDecoratorOperator}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>So how do I choose which one to use?</p>
            </blockquote>

            <p>In many cases, it does not matter which one you use. Both are able to get the job done. However, if you are using the value immediately in an expression, the difference becomes <em>very</em> important.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {chooseBetweenPreAndPost}
                </SyntaxHighlighter>
            </div>

            <h2>Compound assignment operators</h2>

            <p>All arithmetic operators have a compound assignment form in JavaScript. <strong>Compound assignment operators</strong> provide a concise shorthand for an operation on a variable followed by storing the result in the same variable. They combine the operation and assignment into a shorter form like <code>x += y</code>, which is equivalent to writing <code>x = x + y</code>, but without repeating the variable name.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {compoundAssignmentOperators}
                </SyntaxHighlighter>
            </div>

            <p>Notice how <code>num += 3</code> combines both the addition and assignment steps into one! This saves time and reduces clutter in your code. Let's take a look at a few more: subtraction assignment operator, multiplication assignment operator, and division assignment operator.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {comparingWithAndWithoutCompoundAssignmentOperator}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>Doesn't that look so much cleaner?</p>
            </blockquote>

            <p>Now remember, there is a compound assignment operator for <em>every</em> operator in JS. So in addition we have...</p>

            <ul>
                <li><strong>Remainder assignment operator</strong> <code>%=</code>: divides a variable by the specified number and assigns the remainder to the variable</li>
                <li><strong>Exponent assignment operator</strong> <code>**=</code>: raises a variable to the power of the specified number and reassigns the result to the variable</li>
            </ul>

            <p>And a few that do not make any sense for now, but will if you keep studying!</p>

            <ul>
                <li><strong>Bitwise AND assignment operator</strong> <code>&=</code>: performs a bitwise AND operation with the specified number and reassigns the result to the variable</li>
                <li><strong>Bitwise OR assignment operator</strong> <code>|=</code>: performs a bitwise OR operation with the specified number and reassigns the result to the variable</li>
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