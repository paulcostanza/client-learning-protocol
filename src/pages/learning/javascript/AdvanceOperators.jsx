import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"

export default function AdvanceOperators() {
    const quizImports = {
        javaScript: () => import('../../../pages/quiz/database/JavaScriptQuestions.js')
    }

    const unaryPlus = `const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number
`

    const unaryNegative = `const str = '42';
const strToNegativeNum = -str;

console.log(strToNegativeNum); // -42
console.log(typeof str); // string
console.log(typeof strToNegativeNum); // number
`

    const logicalNotOperator = `let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true`

    const voidKeyword = `const result = void (2 + 2);
console.log(result); // undefined`

    const bitwiseAnd = `let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a & b);  // 1 (Binary: 001)`

    const bitwiseOr = `let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a | b);  // 7 (Binary: 111)`

    const bitwiseXor = `let a = 5;  // Binary: 101
let b = 3;  // Binary: 011
console.log(a ^ b);  // 6 (Binary: 110)`

    const bitwiseNot = `let a = 5;  // Binary: 101
console.log(~a);  // -6`

    const leftShift = `let a = 5;  // Binary: 101
console.log(a << 1);  // 10 (Binary: 1010)`

    const rightShift = `let a = 5;  // Binary: 101
console.log(a >> 1);  // 2 (Binary: 10)`

    return (
        <div className="container">
            <h1>Advance Operators</h1>

            <p>Here, we will talk about <em>unary operators</em> and <em>bitwise operators</em></p>

            <h2>Unary Operators</h2>

            <p><strong>Unary operators</strong> act on a single operand to perform operations like type conversion, value manipulation, or checking certain conditions. We have various types available for us to use in JavaScript.</p>

            <p>The <strong>unary plus</strong> operator converts its operand into a number. If the operand is already a number, it remains unchanged.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {unaryPlus}
                </SyntaxHighlighter>
            </div>

            <p>Unary plus is great for when you want to make sure you are working with a numeric value. We also have a <strong>unary negation</strong> operator.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {unaryNegative}
                </SyntaxHighlighter>
            </div>

            <p>The <strong>logical NOT operator</strong> (<code>!</code>) is another unary operator. It flips the boolean value of its operand. This is probably the one you will see the most.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {logicalNotOperator}
                </SyntaxHighlighter>
            </div>

            <p>The <code>void</code> keyword is a unary operator that evaluates an expression and returns undefined.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {voidKeyword}
                </SyntaxHighlighter>
            </div>

            <p>And finally we have the <code>typeof</code> operator, which you already know about!</p>

            <blockquote>
                <p>You didn't skip any lesson, did you?! Lol, jk. If you did just remember that <code>typeof</code> returns the type of its operand as a string, that's it!</p>
            </blockquote>

            <h2>Bitwise Operators</h2>

            <p><strong>Bitwise operators</strong> in JS are special operators that work on the binary representations of numbers. They are often used in low-level programming and cryptography. To understand bitwise operators, we first need to grasp the concept of bits and binary numbers.</p>

            <h3>Binary Crash Course</h3>

            <p>In computing, a <strong>bit</strong> is the most basic unit of information. It can have only two values: <code>0</code> or <code>1</code>. Binary is a number system that uses only these two digits to represent all numbers.</p>

            <p>For example, the binary representation of the decimal number <code>10</code> is <code>1010</code>. In this sytem, each digit represents a power of <code>2</code>, starting from the rightmost digit and increasing as we move left.</p>

            <Paper elevation={9} sx={{ maxWidth: '500px', margin: 'auto' }} >
                <Box sx={{ width: '100%', overflowX: 'auto', maxWidth: '500px', margin: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <tbody>
                            <tr>
                                <td><code>1</code></td>
                                <td><code>0</code></td>
                                <td><code>1</code></td>
                                <td><code>0</code></td>
                            </tr>
                            <tr>
                                <td><code>1 * 2<sup>3</sup></code></td>
                                <td><code>0 * 2<sup>2</sup></code></td>
                                <td><code>1 * 2<sup>1</sup></code></td>
                                <td><code>0 * 2<sup>0</sup></code></td>
                            </tr>
                            <tr>
                                <td><code>8</code></td>
                                <td><code>0</code></td>
                                <td><code>2</code></td>
                                <td><code>0</code></td>
                            </tr>
                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <p>In the table above, the first row shows the binary number <code>1010</code>, the second row shows the power of <code>2</code> represented by each binary position, and the third row shows the result of each multiplication. If you add all the values in the third row, they total <code>10</code>.</p>

            <h3>Back to operators</h3>

            <p>These operators perform operations on the binary representation of numbers. JS provides several bitwise operators, including AND (<code>&</code>), OR (<code>|</code>), XOR (<code>^</code>), NOT (<code>~</code>), left shift (<code>&lt;&lt;</code>), and right shift (<code>&gt;&gt;</code>).</p>

            <h4><code>&</code></h4>

            <p>The bitwise AND (<code>&</code>) returns a <code>1</code> in each bit position for which the corresponding bits of both operands are <code>1</code>.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {bitwiseAnd}
                </SyntaxHighlighter>
            </div>

            <h4><code>|</code></h4>

            <p>The bitwise OR (<code>|</code>) returns a <code>1</code> in each bit position for which the correxponding bits of either or both operands are <code>1</code>.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {bitwiseOr}
                </SyntaxHighlighter>
            </div>

            <h4><code>^</code></h4>

            <p>The bitwise XOR (<code>^</code>) operator returns a <code>1</code> in each bit position for which the corresponding bits of either, but not both, operands are <code>1</code>.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {bitwiseXor}
                </SyntaxHighlighter>
            </div>

            <h4><code>~</code></h4>

            <p>The bitwise NOT (<code>~</code>) operator inverts all the bits of its operand. All of the <code>1</code>s becomes <code>0</code>s and all of the <code>0</code>s become <code>1</code>s.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {bitwiseNot}
                </SyntaxHighlighter>
            </div>

            <h4><code>&lt;&lt;</code></h4>

            <p>The left shift (<code>&lt;&lt;</code>) operator shifts all bits to the left by a specified number of positions.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {leftShift}
                </SyntaxHighlighter>
            </div>

            <h4><code>&gt;&gt;</code></h4>

            <p>The right shift (<code>&gt;&gt;</code>) operator shifts all bits to the right.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} className="code-snippet" wrapLines={true}>
                    {rightShift}
                </SyntaxHighlighter>
            </div>






            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="advance-operators"
            />
        </div>
    )
}