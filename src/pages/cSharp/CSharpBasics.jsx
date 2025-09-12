import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Latex from 'react-latex'

import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"

export default function CSharpBasics() {

    const comments = `// one way to write a comment

/*
And another way
to write a comment!
*/`

    const declaringVariables = `int number; // without value, not initialized

int Number = 1; // with a value, initialized

const float Pi = 3.14f; // constant float with value, initialized`

    const identifiers = `1route // nope
oneRoute // yup

first name // nope
firstName // yup

int // nope
@int // yup

fn // nope
firstName // yup`

    const floatAndDecimal = `float numberOne = 1.2f;
decimal numberTwo = 1.2m;`

    const formatString = `Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);
Console.WriteLine("{0} {1}", float.MinValue, float.MaxValue);`

    const postAndPrefix = `// postfix 
int a = 1;
int b = a++;
// a = 2 and b = 1

// postfix 
int a = 1;
int b = a++;
// a = 2 and b = 1`

    const variableDemo = `namespace HelloNerd
{
    internal class Program
    {
        static void Main(string[] args)
        {
            byte number = 4;
            int count = 10;
            float totalPrice = 20.95f;
            char character = 'A';
            string firstName = "Paul";
            bool isWorking = true;
        }
    }
}`

    const variableWithVarDemo = `namespace HelloNerd
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var number = 4;
            var count = 10;
            var totalPrice = 20.95f;
            var character = 'A';
            var firstName = "Paul";
            var isWorking = true;
        }
    }
}`

    return (
        <>
            <h1>C# Basics</h1>

            <h2 id="comments">Comments</h2>

            <p>Text that we put into our code to improve its readability and maintainability.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {comments}
                </SyntaxHighlighter>
            </div>

            <p>When to use a comment?</p>
            <p>When you need to explain whys, hows, constrains, etc. Not so much the whats.</p>

            <h2 id="primitive-types">Primitive Types</h2>

            <p>Variables: a name given to a storage location in memory</p>
            <p>Constant: an immutable value</p>

            <h4 id="declaring-variables-and-constants">Declaring variables and constants</h4>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className="code-snippet">
                    {declaringVariables}
                </SyntaxHighlighter>
            </div>

            <h4 id="identifiers">Identifiers</h4>

            <p>Cannot start with a number, cannot include a whitespace, cannot be a reserved keyword, use meaningful names</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {identifiers}
                </SyntaxHighlighter>
            </div>

            <h4 id="naming-conventions">Naming Conventions</h4>
            <ul>
                <li>camel case: <code>firstName</code></li>
                <li>pascal case: <code>FirstName</code></li>
                <li>hungarian notation: <code>strFirstName</code></li>
            </ul>

            <p>In C#...</p>
            <ul>
                <li>local variables use camel case</li>
                <li>constants use pascal case</li>
            </ul>

            <h4 id="primitive-types">Primitive Types</h4>

            <Paper elevation={9} >
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{ width: '150px', }}
                                >C# Type</TableCell>
                                <TableCell
                                    style={{ width: '100px', }}
                                >.NET Type</TableCell>
                                <TableCell
                                    style={{ width: '150px', textAlign: 'center' }}
                                >Bytes</TableCell>
                                <TableCell
                                    style={{ width: '250.4px', textAlign: 'center' }}
                                >Range</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            <tr>
                                <td><strong>byte</strong></td>
                                <td>Byte</td>
                                <td align="center">1</td>
                                <td align="center">0 to 255</td>
                            </tr>
                            <tr>
                                <td><strong>short</strong></td>
                                <td>Int16</td>
                                <td align="center">2</td>
                                <td align="center">-32,768 to 32,767</td>
                            </tr>
                            <tr>
                                <td><strong>int</strong></td>
                                <td>Int32</td>
                                <td align="center">4</td>
                                <td align="center">-2.1 billon to 2.1 billion</td>
                            </tr>
                            <tr>
                                <td><strong>long</strong></td>
                                <td>Int64</td>
                                <td align="center" >8</td>
                                <td align="center">-9 quintillion to 9 quintillion</td>
                            </tr>
                            <tr>
                                <td><strong>float</strong></td>
                                <td>Single</td>
                                <td align="center">4</td>
                                <td align="center">-3.4 * 10^(38) to 3.4 * 10^(38)</td>
                            </tr>
                            <tr>
                                <td><strong>double</strong></td>
                                <td>Double</td>
                                <td align="center">8</td>
                                <td align="center">-1.7 * 10^(308) to 1.7 * 10^(308)</td>
                            </tr>
                            <tr>
                                <td><strong>decimal</strong></td>
                                <td>Decimal</td>
                                <td align="center">16</td>
                                <td align="center">-7.9 * 10^(28) to 7.9 * 10^(28)</td>
                            </tr>
                            <tr>
                                <td><strong>char</strong></td>
                                <td>Char</td>
                                <td align="center">2</td>
                                <td align="center">Unicode Characters</td>
                            </tr>
                            <tr>
                                <td><strong>bool</strong></td>
                                <td>Boolean</td>
                                <td align="center">1</td>
                                <td align="center">True / False</td>
                            </tr>
                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <br />

            <h4 id="real-numbers">Real Numbers</h4>

            <p>Integrals:</p>
            <ul>
                <li><code>byte</code></li>
                <li><code>short</code></li>
                <li><code>int</code></li>
                <li><code>long</code></li>
            </ul>

            <p>Real Numbers:</p>
            <ul>
                <li><code>float</code></li>
                <li><code>double</code></li>
                <li><code>decimal</code></li>
            </ul>

            <p>C# uses <em>double</em> as a default for the compiler when using real numbers. To declare the other two:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {floatAndDecimal}
                </SyntaxHighlighter>
            </div>

            <p>Without the <code>f</code> and <code>m</code> suffixes, these variables would run as doubles!</p>

            <h4 id="non-primitive-types">Non-Primitive Types</h4>
            <ul>
                <li>String</li>
                <li>Array</li>
                <li>Enum</li>
                <li>Class</li>
            </ul>

            <div className="container accordion">
                {/* Question #2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed shadow-none elements-in-accordion" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionTwo" aria-expanded="false" aria-controls="questionTwo">

                            <div>
                                <span className="child-of-accordion">Which of the following is a valid identifier in C#:</span>
                                <br />
                                <ol>
                                    <li><code>1route</code></li>
                                    <li><code>int</code></li>
                                    <li><code>@int</code></li>
                                    <li><code>first name</code></li>
                                </ol>
                            </div>

                        </button>
                    </h2>
                    <div id="questionTwo" className="accordion-collapse collapse" data-bs-parent="#this-question">
                        <div className="accordion-body">
                            <strong>Answer:</strong> <code>@int</code>
                        </div>
                    </div>
                </div>

                {/* Question #3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed shadow-none elements-in-accordion" type="button" data-bs-toggle="collapse"
                            data-bs-target="#questionThree" aria-expanded="false" aria-controls="questionThree">
                            <div>
                                <span className="child-of-accordion">Which type is the default for real numbers in C#: </span>
                                <br />


                                <ol>
                                    <li><code>float</code></li>
                                    <li><code>double</code></li>
                                    <li><code>decimal</code></li>
                                    <li><code>int</code></li>
                                </ol>


                            </div>

                        </button>
                    </h2>
                    <div id="questionThree" className="accordion-collapse collapse" data-bs-parent="#this-question">
                        <div className="accordion-body">
                            <strong>Answer:</strong> <code>double</code>
                        </div>
                    </div>
                </div>

            </div>

            <h2 id="variables-and-constants">Variables and Constants</h2>

            <p>Demo of some variables in action:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {variableDemo}
                </SyntaxHighlighter>
            </div>

            <p>Nothing too exciting...</p>
            <p>Now <code>var</code> allows the C# compiler detect the datatype for this variable. Example:</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {variableWithVarDemo}
                </SyntaxHighlighter>
            </div>

            <h4 id="format-string">Format String</h4>

            <p>A String that can be used as some kind of template.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {formatString}
                </SyntaxHighlighter>
            </div>

            <h2 id="operators">Operators</h2>
            <ul>
                <li>arithmetic operators</li>
                <li>comparison operators</li>
                <li>assignment operators</li>
                <li>logical operators</li>
                <li>bitwise operators</li>
            </ul>

            <h4 id="arithmetic-operator">Arithmetic operator</h4>

            <Paper elevation={9} >
                <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{ width: '90px', }}
                                ></TableCell>
                                <TableCell
                                    style={{ width: '110px', textAlign: 'center' }}
                                >Operator</TableCell>
                                <TableCell
                                    style={{ width: '90px', textAlign: 'center' }}
                                >Example</TableCell>
                                <TableCell
                                    style={{ width: '140px', textAlign: 'center' }}
                                >Notes</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            <tr>
                                <td><strong>Add</strong></td>
                                <td align="center"><Latex children={"$ + $"} /></td>
                                <td align="center"><code>a + b</code></td>
                                <td align="center"></td>
                            </tr>
                            <tr>
                                <td><strong>Subtract</strong></td>
                                <td align="center"><Latex children={"$ - $"} /></td>
                                <td align="center"><code>a - b</code></td>
                                <td align="center"></td>
                            </tr>
                            <tr>
                                <td><strong>Multiply</strong></td>
                                <td align="center"><Latex children={"$ * $"} /></td>
                                <td align="center"><code>a * b</code></td>
                                <td align="center"></td>
                            </tr>
                            <tr>
                                <td><strong>Divide</strong></td>
                                <td align="center"><Latex children={"$ / $"} /></td>
                                <td align="center" ><code>a / b</code></td>
                                <td align="center"></td>
                            </tr>
                            <tr>
                                <td><strong>Remainder</strong></td>
                                <td align="center"><code>%</code></td>
                                <td align="center"><code>a % b</code></td>
                                <td align="center"></td>
                            </tr>
                            <tr>
                                <td><strong>Increment</strong></td>
                                <td align="center"><Latex children={"$ ++ $"} /></td>
                                <td align="center"><code>a++</code></td>
                                <td align="center">Same as: <span style={{ display: 'block' }}><code>a = a + 1</code></span></td>
                            </tr>
                            <tr>
                                <td><strong>Decrement</strong></td>
                                <td align="center"><Latex children={"$ -- $"} /></td>
                                <td align="center"><code>b--</code></td>
                                <td align="center">Same as: <span style={{ display: 'block' }}><code>b = b - 1</code></span></td>
                            </tr>

                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <br />

            <p>Now there are two types of increment and decrements... <em>postfix</em> and <em>prefix</em>.</p>

            <div className="">
                <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {postAndPrefix}
                </SyntaxHighlighter>
            </div>

            <h4 id="comparison-operators">Operators</h4>

            <p>The following tables show Comparison, Assignment, and Logical Operators.</p>

            <Paper elevation={9} >
                <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{ width: '180px', textTransform: 'uppercase' }}
                                >Comparison Operators</TableCell>
                                <TableCell
                                    style={{ width: '130px', textAlign: 'center' }}
                                >Operator</TableCell>
                                <TableCell
                                    style={{ width: '130px', textAlign: 'center' }}
                                >Example</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            <tr>
                                <td><strong>Equal</strong></td>
                                <td align="center"><code>==</code></td>
                                <td align="center"><code>a == b</code></td>

                            </tr>
                            <tr>
                                <td><strong>Not Equal</strong></td>
                                <td align="center"><code>!=</code></td>
                                <td align="center"><code>a != b</code></td>

                            </tr>
                            <tr>
                                <td><strong>Greater than</strong></td>
                                <td align="center"><code>&gt;</code></td>
                                <td align="center"><code>a &gt; b</code></td>

                            </tr>
                            <tr>
                                <td><strong>Greater than or equal to</strong></td>
                                <td align="center"><code>&ge;</code></td>
                                <td align="center" ><code>a &ge; b</code></td>

                            </tr>
                            <tr>
                                <td><strong>Less than</strong></td>
                                <td align="center"><code>&lt;</code></td>
                                <td align="center"><code>a &lt; b</code></td>

                            </tr>
                            <tr>
                                <td><strong>Less than or equal to</strong></td>
                                <td align="center"><code>&le;</code></td>
                                <td align="center"><code>a &le; b</code></td>

                            </tr>

                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <br />

            <Paper elevation={9} >
                <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{ width: '180px', textTransform: 'uppercase' }}
                                >Assignment Operators</TableCell>
                                <TableCell
                                    style={{ width: '130px', textAlign: 'center' }}
                                >Operator</TableCell>
                                <TableCell
                                    style={{ width: '130px', textAlign: 'center' }}
                                >Example</TableCell>
                                <TableCell
                                    style={{ width: '130px', textAlign: 'center' }}
                                >Same as</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            <tr>
                                <td><strong>Assignment</strong></td>
                                <td align="center"><code>=</code></td>
                                <td align="center"><code>a = 1</code></td>
                                <td align="center"><code></code></td>
                            </tr>
                            <tr>
                                <td><strong>Addition assignment</strong></td>
                                <td align="center"><code>+=</code></td>
                                <td align="center"><code>a += 3</code></td>
                                <td align="center"><code>a = a + 3</code></td>
                            </tr>
                            <tr>
                                <td><strong>Subtraction assignment</strong></td>
                                <td align="center"><code>-=</code></td>
                                <td align="center"><code>a -=5</code></td>
                                <td align="center"><code>a = a - 5</code></td>
                            </tr>
                            <tr>
                                <td><strong>Multiplication assignment</strong></td>
                                <td align="center"><code>*=</code></td>
                                <td align="center" ><code>a *= 7</code></td>
                                <td align="center"><code>a = a * 7</code></td>
                            </tr>
                            <tr>
                                <td><strong>Division assignment</strong></td>
                                <td align="center"><code>/=</code></td>
                                <td align="center"><code>a /= 9</code></td>
                                <td align="center"><code>a = a / 9</code></td>
                            </tr>
                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <br />

            <Paper elevation={9} >
                <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{ width: '180px', textTransform: 'uppercase' }}
                                >Logical Operators</TableCell>
                                <TableCell
                                    style={{ width: '130px', textAlign: 'center' }}
                                >Operator</TableCell>
                                <TableCell
                                    style={{ width: '130px', textAlign: 'center' }}
                                >Example</TableCell>

                            </TableRow>
                        </TableHead>
                        <tbody>
                            <tr>
                                <td><strong>And</strong></td>
                                <td align="center"><code>&&</code></td>
                                <td align="center"><code>a && b</code></td>
                            </tr>
                            <tr>
                                <td><strong>Or</strong></td>
                                <td align="center"><code>||</code></td>
                                <td align="center"><code>a || b</code></td>
                            </tr>
                            <tr>
                                <td><strong>Not</strong></td>
                                <td align="center"><code>!</code></td>
                                <td align="center"><code>!a</code></td>
                            </tr>
                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <br />

            <h4 id="bitwise-operators">Bitwise Operators</h4>

            <p>Used mostly in low-level programming. Windows API, web-sockets, encryption, things like that.</p>

            <Paper elevation={9} >
                <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{ width: '180px', textTransform: 'uppercase' }}
                                >Bitwise Operators</TableCell>
                                <TableCell
                                    style={{ width: '130px', textAlign: 'center' }}
                                >Operator</TableCell>
                                <TableCell
                                    style={{ width: '130px', textAlign: 'center' }}
                                >Example</TableCell>
                                <TableCell
                                    style={{ width: '230px', textAlign: 'center' }}
                                >
                                    Explanation of the Example
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            <tr>
                                <td><strong>And</strong></td>
                                <td align="center"><code>&</code></td>
                                <td align="center"><code>a & b</code></td>
                                <td>Each bit is 1 if both bits are 1</td>
                            </tr>
                            <tr>
                                <td><strong>Or</strong></td>
                                <td align="center"><code>|</code></td>
                                <td align="center"><code>a | b</code></td>
                                <td>Each bit is 1 if either bit is 1</td>
                            </tr>
                            <tr>
                                <td><strong>XOR</strong></td>
                                <td align="center"><code>^</code></td>
                                <td align="center"><code>a ^ b</code></td>
                                <td>Each bit is 1 if only one bit is 1</td>
                            </tr>
                            <tr>
                                <td><strong>NOT</strong></td>
                                <td align="center"><code>~</code></td>
                                <td align="center"><code>~a</code></td>
                                <td>Each bit is flipped - 0 becomes 1 and 1 becomes 0</td>
                            </tr>
                            <tr>
                                <td><strong>Left Shift</strong></td>
                                <td align="center"><code>&lt;&lt;</code></td>
                                <td align="center"><code>a &lt;&lt; 2</code></td>
                                <td>Shifts all bits in <code>a</code> left by 2 positions (multiplies by 4)</td>
                            </tr>
                            <tr>
                                <td><strong>Right Shift</strong></td>
                                <td align="center"><code>&gt;&gt;</code></td>
                                <td align="center"><code>a &gt;&gt; 2</code></td>
                                <td>Shifts all bits in <code>a</code> right by 2 positions (divides by 4, discards bits)</td>
                            </tr>
                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <h2 id="review">Review</h2>

            <p>C# is a statically typed language. When you declare a variable you need to specify its type and that type cannot
                change during the lifetime of that variable.</p>

            <p>Learned about the primitive types as well.</p>

        </>
    )
}