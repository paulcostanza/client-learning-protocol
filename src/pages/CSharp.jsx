import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

// pics
import compile_c_or_cplusplus from '/src/assets/cSharp/compile-c-or-c++.png'
import compile_into_intermediate_language from '/src/assets/cSharp/compile into intermediate language.png'
import il_code_into_native_code from '/src/assets/cSharp/il-code-into-native-code.png'
import classes_101 from '/src/assets/cSharp/classes-101.png'
import namespace from '/src/assets/cSharp/namespace.png'
import assembly from '/src/assets/cSharp/assembly.png'
import application from '/src/assets/cSharp/application.png'

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


    return (
        <>
            <NavBar />

            <main>
                <div className="container" id="space-on-top-of-page">

                    <h2 id="intro">Intro</h2>
                    <p>What you will learn:</p>

                    <ul>
                        <li>difference between C# and .NET</li>
                        <li>CLR (Common Language Run-time)</li>
                        <li>classes</li>
                        <li>assemblies</li>
                        <li>namespaces</li>
                        <li>IL code</li>
                        <li>primitive vs nonprimitive types</li>
                    </ul>

                    <h2 id="difference-between-c-and-net">Difference between C# and .NET</h2>

                    <ul>
                        <li>C# is a programming language</li>
                        <li>.NET is a framework for building applications on Windows</li>
                    </ul>

                    <p>What is the .NET framework?</p>
                    <ul>
                        <li>CLR (Common Language Runtime)</li>
                        <li>Class Library</li>
                    </ul>

                    <h4 id="clr">CLR</h4>

                    <p>Before C#, we had two languages in the C family: C and C++. When compiling the application that uses either language, the compiler translated our code into the <em>native code</em> for the machine it was running on.</p>

                    <p><img className="img-in-reading" src={compile_c_or_cplusplus} alt="compile in c or c++" /></p>

                    <p>If you wrote an application in C++ on a Windows machine with 8086 processor architecture, the compiler would translate the code into the native code for that machine. An issue arrises when you have different operating systems and different hardwares. If you took that compiled application on the computer with a different architecture it would not run! Hence, Microsoft created C# and .NET...basicly they stole Java's concept.</p>

                    <p>When compiling code in Java, the code is not translated directly into the machine code, but translated into an
                        intermediate language called <strong>bytecode</strong>. We have the exact same concept in C#, with C# using
                        <strong>Intermediate Language</strong>.
                    </p>

                    <p><img className="img-in-reading" src={compile_into_intermediate_language} alt="compile into intermediate language" /></p>

                    <p>Intermediate language code is what your C# program compiles to, and is independent of the computer on which it is
                        running. Our next step is to compile the IL Code into the native code or the machine that is running the
                        application. This is now the job of CLR (<strong>Common Language Runtime</strong>). CLR is an application that is
                        sitting in the memory, whose job it is to translate the IL code into the machine code. This process is called
                        <strong>Just-in-time Compilation (JIT)</strong>.
                    </p>

                    <blockquote>
                        <p><em><strong>Intermediate Language</strong></em> <em>is like a universal assembly language that .NET uses before
                            translating to machine code.</em></p>
                    </blockquote>

                    <p><img className="img-in-reading" src={il_code_into_native_code} alt="il code into native codes" /></p>

                    <p>With this architecture you can write an application in C# and do not need to worry about compiling it into the native
                        code for different machines. As long as the machine has CLR, it can run your application.</p>

                    <h2 id="architecture-of-net-applicaitons">Architecture of .NET Applicaitons</h2>
                    <p>At a high level, when you build a C# application, your application consists of building blocks called
                        <em>classes</em>. These classes collaborate with each other at run time and as a result the application provides
                        some functionality.
                    </p>

                    <p><img className="img-in-reading" src={classes_101} alt="classes 101" /></p>

                    <p>Data represents the <em>state</em> of the application.</p>
                    <p><em>data == attributes</em>
                        <em>methods == functions</em>
                    </p>

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

                    <p><img className="img-in-reading" src={application} alt="applications" /></p>

                    <h4 id="review">Review</h4>
                    <p>It helps to think of it like this:</p>
                    <ul>
                        <li>namespace is a folder</li>
                        <li>assembly is a <code>.exe</code> or <code>.dll</code> file</li>
                        <li>class is a blueprint for an object</li>
                    </ul>

                    <h2 id="primitive-types">Primitive Types</h2>

                    <p>Variables: a name given to a storage location in memory</p>
                    <p>Constant: an immutable value</p>

                    <h4 id="declaring-variables-and-constants">Declaring variables and constants</h4>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {declaringVariables}
                        </SyntaxHighlighter>
                    </div>

                    <h4 id="identifiers">Identifiers</h4>

                    <p>Cannot start with a number, cannot include a whitespace, cannot be a reserved keyword, use meaningful names</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
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

                    <p><img className="img-in-reading" src="/src/assets/cSharp/primitive-types.png" alt="primitive types" /></p>

                    <h4 id="real-numbers">Real Numbers</h4>

                    <p><img className="img-in-reading" src="/src/assets/cSharp/real-numbers.png" alt="real numbers" /></p>

                    <p>C# uses <em>double</em> as a default for the compiler when using real numbers. To declare the other two:</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
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

                    <h2 id="overflowing">Overflowing</h2>

                    <p>Going over (or under) a data types limit. Example:</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {overflowing}
                        </SyntaxHighlighter>
                    </div>

                    <p>A byte's range is only 0 - 255, so when a limit in either direction is reached it will roll over to the other side.
                        C# does not have any overflow checker. If you believe it may happen and want to make sure it does not, then use the <code>checked</code> keyword like so:
                    </p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {checked}
                        </SyntaxHighlighter>
                    </div>

                    <p>The overflow will not run at runtime. Instead, an <em>exception</em> will be thrown. If you do not handle the error,
                        the program will crash.</p>
                    <p>Usually, you would just chose a data type that is more in your range rather than worrying about this.</p>

                    <h2 id="scope">Scope</h2>

                    <p>Where a variable / constant has meaning and is accessible.</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {scope}
                        </SyntaxHighlighter>
                    </div>

                    <h2 id="variables-and-constants">Variables and Constants</h2>

                    <p>Demo of some variables in action:</p>

                    <p><img className="img-in-reading" src="/src/assets/cSharp/variable-demo.png" alt="variable demo" /></p>

                    <p>Nothing too exciting...</p>
                    <p>var: allows the C# compiler detect the datatype for this variable. Example:</p>

                    <p><img className="img-in-reading" src="/src/assets/cSharp/var-keyword.png" alt="var keyword" /></p>

                    <h4 id="format-string">Format String</h4>

                    <p>A String that can be used as some kind of template.</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
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

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {implicitTypeConversion}
                        </SyntaxHighlighter>
                    </div>

                    <p>Since a byte only takes up 1 byte in memory and an int takes up 4 bytes, this easily works! Here is what the binary representation would look like:</p>

                    <p><img className="img-in-reading" src="/src/assets/cSharp/binary-representation.png" alt="binary representation" /></p>

                    <p>There is no data lose in this conversion, allowing for the conversion to be implicit.</p>

                    <h2 id="explicit-type-conversion">Explicit type conversion</h2>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {explicitTypeConvedrsion}
                        </SyntaxHighlighter>
                    </div>

                    <p>Going the other way, 3 bytes out of 4 bytes will be gone. There is a chance for data loss. Now data loss only happens
                        if the value restored in beyond the cpacity of a byte. In this example one can be stored in byte, so no data loss
                        will happen. If <code>i = 300</code>, there is no way it can fit.</p>

                    <p>When the compiler knows there will be a chance for data loss it <em>does not</em> allow implicit type conversion. You
                        need to explicity tell the compiler that you are aware of the data loss and you still want to go ahead with the
                        conversion. In situations like that, you need to add the prefix of the variable with the target type like so:</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {doingItAnyway}
                        </SyntaxHighlighter>
                    </div>

                    <p>This is what is known as <strong>casting</strong>. Another one:</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {casting}
                        </SyntaxHighlighter>
                    </div>

                    <p>Sometimes you will work with types of data that <em>are not</em> compatible, like so:</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {notCompatible}
                        </SyntaxHighlighter>
                    </div>

                    <p>Since string and int are not compatible they cannot use explicit casting, so we need a different mechanism for
                        converting a string to a number. We can either use the convert class or the parse method.</p>

                    <h2 id="non-compatible-types">Non-compatible types</h2>

                    <p>The <em>convert class</em> is part of .NET framework and is defined in the system namespace. It has a bunch of
                        methods for converting various types to other types.</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
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

                    <h2 id="try--catch">Try / Catch</h2>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
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

                    <p><img className="img-in-reading" src="/src/assets/cSharp/arithmetic-operators-part-01.png" alt="arithmetic operators part 1" /></p>

                    <p><img className="img-in-reading" src="/src/assets/cSharp/arithmetic-operators-part-02.png" alt="arithmetic operators part 2" /></p>

                    <p>There are two types of increment and decrements... postfix and prefix.</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
                            {postAndPrefix}
                        </SyntaxHighlighter>
                    </div>

                    <h4 id="comparison-operators">Comparison Operators</h4>

                    <p><img className="img-in-reading" src="/src/assets/cSharp/comparison-operator.png" alt="comparison operator" /></p>

                    <h4 id="assignment-operators">Assignment Operators</h4>

                    <p><img className="img-in-reading" src="/src/assets/cSharp/assignment-operators.png" alt="assignment operators" /></p>

                    <h4 id="logical-operators">Logical Operators</h4>

                    <p><img className="img-in-reading" src="/src/assets/cSharp/logical-operators.png" alt="logical operators" /></p>

                    <h4 id="bitwise-operators">Bitwise Operators</h4>

                    <p>Used mostly in low-level programming. Windows API, web-sockets, encryption, things like that.</p>

                    <p><img className="img-in-reading" src="/src/assets/cSharp/bitwise-operators.png" alt="bitwise operators" /></p>

                    <h2 id="comments">Comments</h2>

                    <p>Text that we put into our code to improve its readability and maintainability.</p>

                    <div className="center">
                        <SyntaxHighlighter language="c#" style={tomorrow} showLineNumbers
                            wrapLines={true} className="center code-snippet">
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
                                Convert IL (intermediate language) code into machine code at runtime.
                            </div>
                        </div>
                    </div>

                    {/* Question #2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed shadow-none elements-in-accordion" type="button" data-bs-toggle="collapse"
                                data-bs-target="#questionTwo" aria-expanded="false" aria-controls="questionTwo">
                                <span className="child-of-accordion">Which of the following is a valid identifier in C#:</span>
                                <br />
                                <ol>
                                    <li><code>1route</code></li>
                                    <li><code>int</code></li>
                                    <li><code>@int</code></li>
                                    <li><code>first name</code></li>
                                </ol>


                            </button>
                        </h2>
                        <div id="questionTwo" className="accordion-collapse collapse" data-bs-parent="#this-question">
                            <div className="accordion-body">
                                Answer: <code>@int</code>
                            </div>
                        </div>
                    </div>

                    {/* Question #3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed shadow-none elements-in-accordion" type="button" data-bs-toggle="collapse"
                                data-bs-target="#questionThree" aria-expanded="false" aria-controls="questionThree">
                                <span className="child-of-accordion">Which type is the default for real numbers in C#: </span>
                                <br />


                                <ol>
                                    <li><code>float</code></li>
                                    <li><code>double</code></li>
                                    <li><code>decimal</code></li>
                                    <li><code>int</code></li>
                                </ol>


                            </button>
                        </h2>
                        <div id="questionThree" className="accordion-collapse collapse" data-bs-parent="#this-question">
                            <div className="accordion-body">
                                Answer: <code>double</code>
                            </div>
                        </div>
                    </div>

                    {/* Question #4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                                data-bs-target="#questionFour" aria-expanded="false" aria-controls="questionFour">
                                <strong>True or False:</strong> A namespace in C# is used to organize related assemblies.
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

                    {/* Question #5 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                                data-bs-target="#questionFive" aria-expanded="false" aria-controls="questionFive">
                                <strong>True or False:</strong> Overflowing a byte will always crash your program, even without the checked keyword.
                            </button>
                        </h2>
                        <div id="questionFive" className="accordion-collapse collapse" data-bs-parent="#this-question">
                            <div className="accordion-body">
                                Answer: False
                                <br />
                                The value will <em>wrap around</em>.
                            </div>
                        </div>
                    </div>

                    {/* Question #6 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse"
                                data-bs-target="#questionSix" aria-expanded="false" aria-controls="questionSix">
                                <strong>True or False:</strong> C# allows implicit type conversion from <code>int</code> to <code>byte</code> without a cast.
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

                    {/* Question #7 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed shadow-none elements-in-accordion" type="button" data-bs-toggle="collapse"
                                data-bs-target="#questionSeven" aria-expanded="false" aria-controls="questionSeven">
                                Why does CE use IL (intermediate language) instead of compliling directly into machine code?
                            </button>
                        </h2>
                        <div id="questionSeven" className="accordion-collapse collapse" data-bs-parent="#this-question">
                            <div className="accordion-body">
                                So that the code can work on different types of computers. Instead of turning the code into machine code for just one computer when you compile it, it turns into IL first. Then, at runtime, the computer's JIT (just-in-time) compiler turns that IL into machine code that it can run. This lets the same code run on different computers without needing to be recompiled each time.
                            </div>
                        </div>
                    </div>



                </div >

            </main>


            <Footer />
        </>
    )
}