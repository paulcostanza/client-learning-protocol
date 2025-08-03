import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Latex from 'react-latex'

// images
import compile_c_or_cplusplus from '../../assets/cSharp/compile-c-or-c++.png'
import compile_into_intermediate_language from '../../assets/cSharp/compile into intermediate language.png'
import il_code_into_native_code from '../../assets/cSharp/il-code-into-native-code.png'
import classes_101 from '../../assets/cSharp/classes-101.png'
import namespace from '../../assets/cSharp/namespace.png'
import assembly from '../../assets/cSharp/assembly.png'
import application from '../../assets/cSharp/application.png'

// table
import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"

export default function CSharp() {

    const declaringVariables = `int number; // without value, not initialized

int Number = 1; // with a value, initialiized

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

    const overflowing = `byte number = 255
number = number + 1; // 0, this is overflowing!`

    const formatString = `Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);
Console.WriteLine("{0} {1}", float.MinValue, float.MaxValue);`

    const checked = `checked 
{
    byte number = 255;

    number = number + 1;
}`

    const scope = `{
    byte a = 1;
    {
        byte b = 2;
        {
            byte c = 3;
        }
    }
}`

    const implicitTypeConversion = `byte b = 1;
int i = b;`

    const explicitTypeConvedrsion = `int i = 1;
byte b = i; // won't compile!`

    const doingItAnyway = `int i = 1;
byte b = (byte)i;`

    const casting = `float f = 1.0f;
int i = (int)f;`

    const notCompatible = `string s = "1";
int i = (int)s; // will not compile`

    const convert = `string s = "1";
int i = Convert.ToInt32(s);
int j = int.Parse(s);`

    const tryCatch = `namespace HelloNerd
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string number = "1234";
                byte newNumber = Convert.ToByte(number);

                Console.WriteLine(newNumber);
            } 
            catch (Exception)
            {
                Console.WriteLine("Crash!!");
            }
            
           
        }
    }
}`

    const postAndPrefix = `// postfix 
int a = 1;
int b = a++;
// a = 2 and b = 1

// postfix 
int a = 1;
int b = a++;
// a = 2 and b = 1`

    const comments = `// one way to write a comment

/*
And another way
to write a comment!
*/`

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
            <main>
                <div className="container" id="space-on-top-of-page">

                    <h2 id="intro">Intro</h2>
                    <p>What you will learn:</p>

                    <ul>
                        <li>difference between C# and .NET</li>
                        <li>Common Language Runtime</li>
                        <li>classes</li>
                        <li>assemblies</li>
                        <li>namespaces</li>
                        <li>Intermediate Language code</li>
                        <li>primitive vs nonprimitive types</li>
                    </ul>

                    <h2 id="difference-between-c-and-net">Difference between C# and .NET</h2>

                    <ul>
                        <li>C# is a programming language</li>
                        <li>.NET is a framework for building applications on Windows</li>
                    </ul>

                    <p>What is the .NET framework?</p>
                    <ul>
                        <li>Common Language Runtime CLR</li>
                        <li>Class Library</li>
                    </ul>

                    <h4 id="clr">CLR</h4>

                    <p>Before C#, we had two languages in the C family: C and C++. When compiling the application that uses either language, the compiler translated our code into the <strong>native code</strong> for the machine it was running on.</p>

                    <p><img className="img-in-reading" src={compile_c_or_cplusplus} alt="compiling c or c++" /></p>

                    <p>If you wrote an application in C++ on a Windows machine with 8086 processor architecture, the compiler would translate the code into the native code for that machine. An issue arrises when you have different operating systems and different hardwares. If you took that compiled application on the computer with a different architecture it would not run! Hence, Microsoft created C# and .NET...basicly they stole Java's concept.</p>

                    <p>When compiling code in Java, the code is not translated directly into the machine code, but translated into an
                        intermediate language called <strong>bytecode</strong>. We have the exact same concept in C#, with C# using <strong>Intermediate Language</strong>.
                    </p>

                    <p><img className="img-in-reading" src={compile_into_intermediate_language} alt="compile into intermediate language" /></p>

                    <p>Intermediate language code is what your C# program compiles to, and is independent of the computer on which it is
                        running. Our next step is to compile the IL Code into the native code or the machine that is running the
                        application. This is now the job of CLR (<strong>Common Language Runtime</strong>). CLR is an application that is
                        sitting in the memory, whose job it is to translate the IL code into the machine code. This process is called <strong>Just-in-time Compilation (JIT)</strong>.
                    </p>

                    <blockquote>
                        <p><em><strong>Intermediate Language</strong></em> <em>is like a universal assembly language that .NET uses before
                            translating to machine code.</em></p>
                    </blockquote>

                    <p><img className="img-in-reading" src={il_code_into_native_code} alt="il code into native codes" /></p>

                    <p>With this architecture you can write an application in C# and do not need to worry about compiling it into the native
                        code for different machines. As long as the machine has CLR, it can run your application.</p>

                    <div className="container accordion">
                        {/* Question #1 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#questionOne" aria-expanded="false" aria-controls="questionOne">
                                    What is the primary purpose of the CLR (common language runtime) in the .NET framework?
                                </button>
                            </h2>
                            <div id="questionOne" className="accordion-collapse collapse" data-bs-parent="#this-question">
                                <div className="accordion-body">
                                    Convert IL (<em>intermediate language</em>) code into machine code at runtime.
                                </div>
                            </div>
                        </div>

                        {/* Question #7 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#questionSeven" aria-expanded="false" aria-controls="questionSeven">
                                    Why does C# use IL (intermediate language) instead of compliling directly into machine code?
                                </button>
                            </h2>
                            <div id="questionSeven" className="accordion-collapse collapse" data-bs-parent="#this-question">
                                <div className="accordion-body">
                                    So that the code can work on different types of computers. Instead of turning the code into machine code for just one computer when you compile it, it turns into IL first. Then, at runtime, the computer's JIT (<em>just-in-time</em>) compiler turns that IL into machine code that it can run. This lets the same code run on different computers without needing to be recompiled each time.
                                </div>
                            </div>
                        </div>

                    </div>

                    <h2 id="architecture-of-net-applicatons">Architecture of .NET Applicatons</h2>
                    <p>At a high level, when you build a C# application, your application consists of building blocks called <em>classes</em>. These classes collaborate with each other at run time and as a result the application provides
                        some functionality.
                    </p>

                    <p><img className="img-in-reading" src={classes_101} alt="classes 101" /></p>

                    <p>Data represents the <em>state</em> of the application.</p>
                    <h5 class="center-text"><em>data<Latex>$ \Longleftrightarrow $</Latex> attributes</em></h5>
                    <h5 class="center-text"><em>methods<Latex>$ \Longleftrightarrow $</Latex> functions</em></h5>

                    <p>In a real-world application you can have hundreds, or even thousands of classes, each responsible for a piece of
                        functionality.</p>
                    <p>As the number of classes within an application grows, we need a way to organize these classes. Enter, <strong>namespace</strong>.
                    </p>

                    <p><img className="img-in-reading" src={namespace} alt="namespace" /></p>

                    <p>A namespace is a container for related classes. We can have namespaces for working with data like databases, one for
                        graphics and images, one for security, etc. As these namespaces grow we need a different way of partitioning an
                        application. This is where we use an <strong>assembly</strong>.</p>

                    <p><img className="img-in-reading" src={assembly} alt="assembly" /></p>

                    <p>An assembly is a container for related namespaces. Physically it is a file on the disk which can either be an
                        executable or a DLL (<strong>Dynamically linked library</strong>). When you compile an application the compiler
                        builds one or more assemblies depending on how you partition your code.</p>

                    <img className="img-in-reading" src={application} alt="applications" />

                    <h4 id="review">Review</h4>
                    <p>It helps to think of it like this:</p>
                    <ul>
                        <li>namespace is a folder</li>
                        <li>assembly is a <code>.exe</code> or <code>.dll</code> file</li>
                        <li>class is a blueprint for an object</li>
                    </ul>

                    <div className="container accordion">
                        {/* Question #4 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#questionFour" aria-expanded="false" aria-controls="questionFour">
                                    <div>
                                        <strong>True or False:</strong> A namespace in C# is used to organize related assemblies.
                                    </div>

                                </button>
                            </h2>
                            <div id="questionFour" className="accordion-collapse collapse" data-bs-parent="#this-question">
                                <div className="accordion-body">
                                    Answer: False
                                    <br />
                                    Namespace is used to organize related classes, interfaces, structs, and enums within an assembly, but not the assemblies themselves.
                                </div>
                            </div>
                        </div>
                    </div>

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
                                color="neutral"
                                size="lg"
                                stickyFooter={false}
                                stickyHeader={false}
                                stripe="odd"
                                variant="outlined"
                                hoverRow
                            >
                                {/* total width: 876 */}
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            style={{ width: '90px', }}
                                        >C# Type</TableCell>
                                        <TableCell
                                            style={{ width: '110px', }}
                                        >.NET Type</TableCell>
                                        <TableCell
                                            style={{ width: '90px', textAlign: 'center' }}
                                        >Bytes</TableCell>
                                        <TableCell
                                            style={{ width: '140px', textAlign: 'center' }}
                                        >Range</TableCell>
                                    </TableRow>
                                </TableHead>
                                <tbody>
                                    <tr>
                                        <td><strong>byte</strong></td>
                                        <td>Byte</td>
                                        <td align="center">1</td>
                                        <td align="center"><Latex>$ 0 $</Latex> to <Latex>$ 255 $</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><strong>short</strong></td>
                                        <td>Int16</td>
                                        <td align="center">2</td>
                                        <td align="center"><Latex>$ -32,768 $</Latex> to <Latex>$ 32,767 $</Latex></td>
                                    </tr>
                                    <tr>
                                        <td><strong>int</strong></td>
                                        <td>Int32</td>
                                        <td align="center">4</td>
                                        <td align="center"><Latex>$ -2.1 $</Latex>B to <Latex>$ 2.1 $</Latex>B</td>
                                    </tr>
                                    <tr>
                                        <td><strong>long</strong></td>
                                        <td>Int64</td>
                                        <td align="center" >8</td>
                                        <td align="center"><Latex>$ -9 $</Latex>Quint to <Latex>$ 9 $</Latex>Quint</td>
                                    </tr>
                                    <tr>
                                        <td><strong>float</strong></td>
                                        <td>Single</td>
                                        <td align="center">4</td>
                                        <td align="center"><Latex children={"$ -3.4 \\cdot 10^{38} $"} /> to <Latex children={"$ 3.4 \\cdot 10^{38} $"} /></td>
                                    </tr>
                                    <tr>
                                        <td><strong>double</strong></td>
                                        <td>Double</td>
                                        <td align="center">8</td>
                                        <td align="center"><Latex children={"$ -1.7 \\cdot 10^{308} $"} /> to <Latex children={"$ -1.7 \\cdot 10^{308} $"} /></td>
                                    </tr>
                                    <tr>
                                        <td><strong>decimal</strong></td>
                                        <td>Decimal</td>
                                        <td align="center">16</td>
                                        <td align="center"><Latex children={"$ -7.9 \\cdot 10^{28} $"} /> to <Latex children={"$ 7.9 \\cdot 10^{28} $"} /></td>
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

                    <p>With out the <code>f</code> and <code>m</code> suffix, these variables would run as doubles!</p>

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

                    <h2 id="overflowing">Overflowing</h2>

                    <p>Going over (or under) a data types limit. Example:</p>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {overflowing}
                        </SyntaxHighlighter>
                    </div>

                    <p>A byte's range is only 0 - 255, so when a limit in either direction is reached it will roll over to the other side.
                        C# does not have any overflow checker. If you believe it may happen and want to make sure it does not, then use the <code>checked</code> keyword like so:
                    </p>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {checked}
                        </SyntaxHighlighter>
                    </div>

                    <p>The overflow will not run at runtime. Instead, an <em>exception</em> will be thrown. If you do not handle the error,
                        the program will crash.</p>
                    <p>Usually, you would just chose a data type that is more in your range rather than worrying about this.</p>

                    <div className="container accordion">

                        {/* Question #5 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#questionFive" aria-expanded="false" aria-controls="questionFive">
                                    <div>
                                        <strong>True or False:</strong> Overflowing a byte will always crash your program, even without the checked keyword.
                                    </div>

                                </button>
                            </h2>
                            <div id="questionFive" className="accordion-collapse collapse" data-bs-parent="#this-question">
                                <div className="accordion-body">
                                    <strong>Answer:</strong> False
                                    <br />
                                    The value will <em>wrap around</em>.
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="scope">Scope</h2>

                    <p>Where a variable / constant has meaning and is accessible.</p>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {scope}
                        </SyntaxHighlighter>
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

                    <h2 id="type-conversion">Type Conversion</h2>
                    <ul>
                        <li>implicit type conversion</li>
                        <li>explicit type conversion (casting)</li>
                        <li>conversion between non-compatible types</li>
                    </ul>

                    <h4 id="implicit-type-conversion">Implicit type conversion</h4>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {implicitTypeConversion}
                        </SyntaxHighlighter>
                    </div>

                    <p>Since a byte only takes up 1 byte in memory and an int takes up 4 bytes, this easily works! Here is what the binary representation would look like:</p>

                    <p>One byte: <Latex children={"00000001"} style={{ textAlign: 'right' }} /></p>
                    <p>Four bytes: <Latex children={"00000000 00000000 00000000 00000001"} /></p>

                    <p>There is no data lose in this conversion, allowing for the conversion to be implicit.</p>

                    <h4 id="explicit-type-conversion">Explicit type conversion</h4>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {explicitTypeConvedrsion}
                        </SyntaxHighlighter>
                    </div>

                    <p>Going the other way, 3 bytes out of 4 bytes will be gone. There is a chance for data loss. Now data loss only happens
                        if the value restored in beyond the cpacity of a byte. In this example one can be stored in byte, so no data loss
                        will happen. If <code>i = 300</code>, there is no way it can fit.</p>

                    <p>When the compiler knows there will be a chance for data loss it <em>does not</em> allow implicit type conversion. You
                        need to explicity tell the compiler that you are aware of the data loss and you still want to go ahead with the
                        conversion. In situations like that, you need to add the prefix of the variable with the target type like so:</p>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {doingItAnyway}
                        </SyntaxHighlighter>
                    </div>

                    <p>This is what is known as <strong>casting</strong>. Another one:</p>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {casting}
                        </SyntaxHighlighter>
                    </div>

                    <p>Sometimes you will work with types of data that <em>are not</em> compatible, like so:</p>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {notCompatible}
                        </SyntaxHighlighter>
                    </div>

                    <p>Since string and int are not compatible they cannot use explicit casting, so we need a different mechanism for
                        converting a string to a number. We can either use the convert class or the parse method.</p>

                    <h4 id="non-compatible-types">Non-compatible types</h4>

                    <p>The <em>convert class</em> is part of .NET framework and is defined in the system namespace. It has a bunch of
                        methods for converting various types to other types.</p>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {convert}
                        </SyntaxHighlighter>
                    </div>

                    <p>Here are some of the methods you can find in the convert class:</p>
                    <ul>
                        <li><code>ToByte()</code></li>
                        <li><code>ToInt16()</code></li>
                        <li><code>ToInt32()</code></li>
                        <li><code>ToInt64()</code></li>
                    </ul>


                    <div className="container accordion">
                        {/* Question #6 */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#questionSix" aria-expanded="false" aria-controls="questionSix">

                                    {/* this div cancels out weird effects that happen without it */}
                                    <div>
                                        <strong>True or False:</strong> C# allows implicit type conversion from <code>int</code> to <code>byte</code> without a cast.
                                    </div>

                                </button>
                            </h2>
                            <div id="questionSix" className="accordion-collapse collapse" data-bs-parent="#this-question">
                                <div className="accordion-body">
                                    Answer: False
                                    <br />
                                    Implicit type conversion from <code>int</code> to <code>byte</code> is not allowed because <code>byte</code> has a smaller range than <code>int</code>. For this example, you would need an <em>explicit cast</em>.
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 id="try--catch">Try / Catch</h2>

                    <div className="">
                        <SyntaxHighlighter language="csharp" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {tryCatch}
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
                        <Box sx={{ width: '100%', overflowX: 'auto' }}>
                            <Table
                                borderAxis="none"
                                color="neutral"
                                size="lg"
                                stickyFooter={false}
                                stickyHeader={false}
                                stripe="odd"
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
                                        <td align="center"><Latex children={"$ % $"} /></td>
                                        <td align="center"><code>a % b</code></td>
                                        <td align="center"></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Increment</strong></td>
                                        <td align="center"><Latex children={"$ ++ $"} /></td>
                                        <td align="center"><code>a++</code></td>
                                        <td align="center">Same as: <code>a = a + 1</code></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Decrement</strong></td>
                                        <td align="center"><Latex children={"$ -- $"} /></td>
                                        <td align="center"><code>b++</code></td>
                                        <td align="center">Same as: <code>b = b - 1</code></td>
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
                        <Box sx={{ width: '100%', overflowX: 'auto' }}>
                            <Table
                                borderAxis="none"
                                color="neutral"
                                size="lg"
                                stickyFooter={false}
                                stickyHeader={false}
                                stripe="odd"
                                variant="outlined"
                                hoverRow
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            style={{ width: '180px', textTransform: 'uppercase' }}
                                        >Comparison Operators</TableCell>
                                        <TableCell
                                            style={{ width: '200px', textAlign: 'center' }}
                                        >Operator</TableCell>
                                        <TableCell
                                            style={{ width: '200px', textAlign: 'center' }}
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
                        <Box sx={{ width: '100%', overflowX: 'auto' }}>
                            <Table
                                borderAxis="none"
                                color="neutral"
                                size="lg"
                                stickyFooter={false}
                                stickyHeader={false}
                                stripe="odd"
                                variant="outlined"
                                hoverRow
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            style={{ width: '180px', textTransform: 'uppercase' }}
                                        >Assignment Operators</TableCell>
                                        <TableCell
                                            style={{ width: '200px', textAlign: 'center' }}
                                        >Operator</TableCell>
                                        <TableCell
                                            style={{ width: '200px', textAlign: 'center' }}
                                        >Example</TableCell>
                                        <TableCell
                                            style={{ width: '200px', textAlign: 'center' }}
                                        >Same as</TableCell>
                                    </TableRow>
                                </TableHead>
                                <tbody>
                                    <tr>
                                        <td><strong>Assignment</strong></td>
                                        <td align="center"><code>==</code></td>
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
                                        <td><strong>Subtration assignment</strong></td>
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
                        <Box sx={{ width: '100%', overflowX: 'auto' }}>
                            <Table
                                borderAxis="none"
                                color="neutral"
                                size="lg"
                                stickyFooter={false}
                                stickyHeader={false}
                                stripe="odd"
                                variant="outlined"
                                hoverRow
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            style={{ width: '180px', textTransform: 'uppercase' }}
                                        >Logical Operators</TableCell>
                                        <TableCell
                                            style={{ width: '200px', textAlign: 'center' }}
                                        >Operator</TableCell>
                                        <TableCell
                                            style={{ width: '200px', textAlign: 'center' }}
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
                        <Box sx={{ width: '100%', overflowX: 'auto' }}>
                            <Table
                                borderAxis="none"
                                color="neutral"
                                size="lg"
                                stickyFooter={false}
                                stickyHeader={false}
                                stripe="odd"
                                variant="outlined"
                                hoverRow
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            style={{ width: '180px', textTransform: 'uppercase' }}
                                        >Bitwise Operators</TableCell>
                                        <TableCell
                                            style={{ width: '200px', textAlign: 'center' }}
                                        >Operator</TableCell>
                                        <TableCell
                                            style={{ width: '200px', textAlign: 'center' }}
                                        >Example</TableCell>

                                    </TableRow>
                                </TableHead>
                                <tbody>
                                    <tr>
                                        <td><strong>And</strong></td>
                                        <td align="center"><code>&</code></td>
                                        <td align="center"><code>a & b</code></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Or</strong></td>
                                        <td align="center"><code>|</code></td>
                                        <td align="center"><code>a | b</code></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Box>
                    </Paper>

                    <br />


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

                    <h2 id="review">Review</h2>

                    <p>C# is a staticlly typed language. When you declare a variable you need to specify its type and that type cannot
                        change during the lifetime of that variable.</p>

                    <p>Learned about the primitive types as well.</p>

                </div>

                {/* Review section for now */}
                <div className="container accordion" id="this-question">
                </div >

            </main>
        </>
    )
}