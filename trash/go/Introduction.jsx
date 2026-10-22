import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import GoCompiler from '../../../assets/go/introduction/go compiler.png'
import CompilerVsInterpreter from '../../../assets/go/introduction/compiler vs interpreter.png'
import IdleMemoryUsage from '../../../assets/go/introduction/idle memory usage.png'


export default function Introduction() {
    const quizImports = {
        go: () => import('../../../pages/quiz/database/GoQuestions.js')
    }

    const lameWay = `var mySkillIssues int // defaults variable to its zero value
mySkillIssues = 69    // overwrites the zero value`

    const coolWay = `mySkillIssues := 42`

    const typeInference = `mySkillIssues := 42         // int
pi := 3.14159               // float64
message := "Hello, nerd!"   // string
isGoat := true              // bool`

    const basicGoCode = `package main

import "fmt"

func main() {
    fmt.Println("The compiled textio server is starting")
}`

    const casting = `temperatureFloat := 88.26
temperatureInt := int64(temperatureFloat)`

    const annoyingConversion = `var myAge uint = 34
myAgeInt := int(myAge)`

    const sameLineDeclaration = `mileage, company := 80569, "Toyota"`

    const multilineDeclaration = `mileage := 80569
company := "Toyota"`

    const pi = `const pi = 3.14159`

    const computedConst = `const firstName = "Paul"
const lastName = "Costanza"
const fullName = firstName + " " + lastName`

    const noConstInJavaScript = `// the current time can only be known when the program is running
const currentTime = time.Now()`

    const variantFormatting = `s := fmt.Sprintf("I am %v years old", 10)
// I am 10 years old

s := fmt.Sprintf("I am %v years old", "way too many")
// I am way too many years old`

    const lotsOfFormatting = `// string
s := fmt.Sprintf("I am %s years old", "way too many")
// I am way too many years old

// integer
s := fmt.Sprintf("I am %d years old", 10)
// I am 10 years old

// float
s := fmt.Sprintf("I am %f years old", 10.523)
// I am 10.523 years old

// the .2 rounds the number to 2 decimal places
s := fmt.Sprintf("I am %.2f years old", 10.523)
// I am 10.52 years old`

    return (
        <div>
            <h1>Go Introduction</h1>

            <h2>Basic Variables</h2>

            <ul>
                <li><code>bool</code>: a boolean value that is <code>true</code> or <code>false</code></li>
                <li><code>string</code>: sequence of characters</li>
                <li><code>int</code>: a signed integer</li>
                <li><code>float64</code>: a floating-point number</li>
                <li><code>byte</code>: eight bits of data</li>
            </ul>

            <h3>Declaring a variable the lame way</h3>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {lameWay}
                </SyntaxHighlighter>
            </div>

            <h2>Short Variable Declaration</h2>

            <p>The cool way to declare variables in Go:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {coolWay}
                </SyntaxHighlighter>
            </div>

            <p>The <em>walrus operator</em>, <code>:=</code>, declares a new variable and assigns a value to it in one line. <em>Type inference</em> takes place (the automatic detection of the type of an expression in a programming language).</p>

            <h3>When to Use the Walrus Operator</h3>

            <p><code>:=</code> should be used instead of <code>var</code> declarations basically anywhere possible. The limitation is that <code>:=</code> cannot be used outside of a function (in the global/package scope, more on that later).</p>

            <p>The type inference is based on the value that is being assigned.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {typeInference}
                </SyntaxHighlighter>
            </div>

            <h2>Why Go?</h2>

            <ul>
                <li>fast and lightweight</li>
                <li>easily concurrent</li>
                <li>easy and simple</li>
                <li>compiled</li>
                <li>statically typed</li>
                <li>garbage collected</li>
            </ul>

            <h2>The Compilation Process</h2>

            <p>Computers need machine code because they do not understand English, or even your favorite programming language. We need to convert our high-level code into machine language, which is really just a set of instructions that some specific hardware can understand.</p>

            <p>The Go compiler's job is to take Go code and produce machine code, an <code>.exe</code> file on Windows or a standard executable on Mac/Linux.</p>

            <img className="img-in-reading" src={GoCompiler} alt="simple overview of the go compiler" />

            <h3>Go program structure</h3>

            <p>Let's look at a basic piece of Go code and break it down a little bit:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {basicGoCode}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>package main</code> lets Go compiler know that we want this code to compile and run as a standalone program, as opposed to being a library that is imported by other programs.</li>
                <li><code>import "fmt"</code> imports the <em>formatting package</em> from the <em>standard library</em>. It allows us to use <code>fmt.Println</code> to print to the console.</li>
                <li><code>func main()</code> defines the <code>main</code> function, the entry point for Go program.</li>
            </ul>

            <h3>Two kinds of errors</h3>

            <p>There are two main kinds of errors in programming:</p>

            <ol>
                <li><strong>Compilation errors.</strong> Occur when code is compiled. This is usually the better error to have of the two because they will never accidentally make it into production. You cannot ship a program with a compiler error because the resulting executable cannot be created.</li>
                <li><strong>Runtime errors.</strong> These occur when a program is running. These are generally worse because they can cause your program to crash or behave unexpectedly.</li>
            </ol>

            <h2>Fast and Compiled</h2>

            <p>Generally speaking languages that compile directly to machine code produce programs that are faster than interpreted programs.</p>

            <p>Go is a very fast programming language, beating JavaScript, Python, and Ruby in most benchmarks.</p>

            <p>However, Go programs do not run quite as fast as its compiled counterparts like Rust, Zig, and C. That said, it compiles much faster than they do, which makes the developer experience super productive.</p>

            <h2>Type Sizes</h2>

            <p>Integers, uints, floats, and complex numbers all have type sizes.</p>

            <h4>Signed Integers (No Decimal)</h4>

            <ul>
                <li><code>int</code></li>
                <li><code>int8</code></li>
                <li><code>int16</code></li>
                <li><code>int32</code></li>
                <li><code>int64</code></li>
            </ul>

            <h4>Unsigned Integers (Whole Numbers/No Decimal)</h4>

            <p><em>uint</em> stands for <em>unsigned integer</em></p>

            <ul>
                <li><code>uint</code></li>
                <li><code>uint8</code></li>
                <li><code>uint16</code></li>
                <li><code>uint32</code></li>
                <li><code>uint64</code></li>
                <li><code>uintptr</code></li>
            </ul>

            <h4>Signed Decimal Numbers</h4>

            <ul>
                <li><code>float32</code></li>
                <li><code>float64</code></li>
            </ul>

            <h4>Complex Numbers (has a real and imaginary part to the number)</h4>

            <ul>
                <li><code>complex64</code></li>
                <li><code>complex128</code></li>
            </ul>

            <h3>What's the deal with the sizes?</h3>

            <p>The various sizes (8, 16, 32, 64, 128, etc) represents how many bits in memory will be used to store the variable. The <em>default</em> <code>int</code> and <code>uint</code> types refer to their respective 32 or 64-bit sizes depending on the environment of the user.</p>

            <p>The <em>standard</em> sizes that should be used unless you have a specific performance need (like using less memory) are:</p>

            <ul>
                <li><code>int</code></li>
                <li><code>uint</code></li>
                <li><code>float64</code></li>
                <li><code>complex128</code></li>
            </ul>

            <h3>Converting between types</h3>

            <p>Some types can be easily converted like this:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {casting}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                Casting a float to an integer in this way <em>truncates</em> the floating point portion.
            </blockquote>

            <h2>Which type should you use?</h2>

            <p>With so many types for what is essentially just a number, developers coming from languages that only have one kind of <code>Number</code> type (like JS) may find the choices daunting.</p>

            <h3>Prefer <em>default</em> types</h3>

            <p>A problem arises when we have a <code>uint16</code>, and the function we are trying to pass it into takes an <code>int</code>. We are forced to write code riddled with type conversions like:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {annoyingConversion}
                </SyntaxHighlighter>
            </div>

            <p>This style of code can be both slow and annoying to read. When Go developers stray from the <em>default</em> type for any given type family, the code can get messy quickly. Unless you have a good <em>performance related</em> reason, you will typically just want to use the <em>default</em> types:</p>

            <ul>
                <li><code>bool</code></li>
                <li><code>string</code></li>
                <li><code>int</code></li>
                <li><code>uint</code></li>
                <li><code>byte</code></li>
                <li><code>rune</code></li>
                <li><code>float64</code></li>
                <li><code>complex128</code></li>
            </ul>

            <h3>When should I use a more specific type?</h3>

            <p>When you are super concerned about performance and memory usage.</p>
            <p>That's about it. The only reason to deviate from the defaults is to squeeze out every last bit of performance when you are writing an application that is resource-constrained.</p>

            <h2>Go is statically typed</h2>

            <p>Go enforces static typing, meaning variable types are known <em>before</em> the code runs. That means your editor and the compiler can display type errors before the code is ever run. That means your editor and the compiler can display type errors before the code is ever run, making development easier and faster.</p>

            <p>Contrast this with most dynamically typed languages like JS and Python... dynamic typing often leads to subtle bugs that are hard to detect. The code <em>must</em> be run to catch syntax and type errors.</p>

            <h3>Concatenating Strings</h3>

            <p>Two strings can be concatenated with the <code>+</code> operator. But the compiler will not allow you to concatenate a <code>string</code> variable with an <code>int</code> or a <code>float64</code>!</p>

            <h2>Compiled vs. Interpreted</h2>

            <p>You can run a compiled program <em>without</em> the original source code. You do not need the compiler anymore after it has done its job. That is how most video games are distributed. Players do not need to install the correct version of Go to run a PC game: they just download the executable game and run it.</p>

            <img className="img-in-reading" src={CompilerVsInterpreter} alt="differences between a compiler and an interpreter" />

            <p>With interpreted languages like Python and Ruby, the code is interpreted at <em>runtime</em> by a separate program known as the <em>interpreter</em>. Distributing code for users to run can be a pain because they need to have an interpreter installed, and they need access to the source code.</p>

            <h4>Examples of compiled languages</h4>

            <ul>
                <li>Go</li>
                <li>C</li>
                <li>C++</li>
                <li>Rust</li>
            </ul>

            <h4>Examples of interpreted languages</h4>

            <ul>
                <li>JavaScript (sometimes JIT - compiled, but a similar concept)</li>
                <li>Python</li>
                <li>Ruby</li>
            </ul>

            <p>One of the most convenient things about using a compiled language like Go is that when you deploy a server you do not need to include any runtime language dependencies like Node or Python interpreter. You just add the pre-compiled binary to the server and start it up.</p>

            <h3>Differences between a compiled and interpreted language</h3>

            <p>When you write code it is in a human readable form. Your hardware doesn't have a clue on what any of it means. Your computer's CPU only understands binary. So then we need some sort of in-between action, that translates from what we understand to what the computer can understand. This is essentially what <strong>compilation</strong> is, taking our code and transforming it into machine code.</p>

            <p>In Go, this process starts off with you <code>main.go</code> program, and it is run through the Go compiler. You can run this through the terminal with the line <code>go build</code>. This produces a new file, the <em>executable program</em>. You can run this executable directly on the operating system without any sort of intervention from the Go tool chain and it will work (granted, your code has no errors).</p>

            <p>Languages like Python <em>require</em> you to use the interpreter to run it, no exceptions. You need to run the source code directly on your machine.</p>

            <p>You can see how compiling is much faster now. Compiling makes you do all of your compilation upfront, so when running the executable you don't need to run any conversions from human readable text to binary machine code.</p>

            <p>With the interpreted language, as we run the program the interpreter is reading the human code and converts it into machine code the CPU can operate on <em>while it is running</em>.</p>

            <h2>Same line declarations</h2>

            <p>You can declare multiple variables on the same line:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {sameLineDeclaration}
                </SyntaxHighlighter>
            </div>

            <p>This is the same as:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {multilineDeclaration}
                </SyntaxHighlighter>
            </div>

            <h2>Small memory footprint</h2>

            <p>Go programs are fairly lightweight. Each program includes a small amount of extra code that is included in the executable binary called the <strong>Go Runtime</strong>. One of the purposes of the Go runtime is to clean up unused memory at a runtime. It includes a <em>garbage collector</em> that automatically frees up memory that is no longer in use.</p>

            <h3>Comparison</h3>

            <p>As a general rule, Java programs use <em>more</em> memory than comparable Go programs. There are several reasons for this, but one of them is that Java uses a virtual machine to interpret bytecode at runtime and typically allocates more on the heap.</p>

            <p>On the other hand, Rust and C programs use slightly <em>less</em> memory than Go program because more control is given to the developer to optimize the memory usage of the program. The Go runtime just handles it for us automatically.</p>

            <h3>Idle memory usage</h3>

            <img className="img-in-reading" src={IdleMemoryUsage} alt="comparing the memory usage of Java, Go, & Rust" />

            <p>Using a very simple programs written in Java, Go, and Rust, you can see that Go and Rust use very little memory when compared to Java.</p>

            <p>How a language handles memory has a huge impact on how it performs. What is speed? Basically, it is how fast your program can perform computations. It is measured in the amount of CPU cycles required to get the job done. The other is memory usage. How much memory (RAM) the program needs to store its data (variables) while it does those computations.</p>

            <p>Like Java, Go is garbage collected, meaning memory management is automated. But unlike Java, Go <em>does not</em> use a virtual machine. When you compile Go code, you get a single, compiled binary just like you would in Rust or C. The difference is that the Go binary includes a <em>runtime</em>. It has some extra code that is compiled into the executable. This code contains things like the garbage collector and go routine scheduling.</p>

            <p>One important aspect of Go's memory management is that can allocate more data on the stack than the heap. Stack allocations are usually much more performant than heap allocation.</p>

            <h2>Constants</h2>

            <p>Constants are declared with the <code>const</code> keyword. They cannot use the <code>:=</code> short declaration syntax.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {pi}
                </SyntaxHighlighter>
            </div>

            <p>Constants can be primitive types like strings, integers, booleans, and floats. They <em>cannot</em> be more complex types like slices, maps and structs (more on these later).</p>

            <p>As the name implies, the value of a constant cannot be changed after it has been declared.</p>

            <p>Constants must be known at compile time. As you see in the previous example they can be declared with a static value. However, constants can be computed as long as the computation can happen at compile time.</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {computedConst}
                </SyntaxHighlighter>
            </div>

            <p>That said, you cannot declare a constant that can only be computed at run-time like you can in JavaScript.</p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {noConstInJavaScript}
                </SyntaxHighlighter>
            </div>

            <h2>Comparing Go's speed</h2>

            <p>Go is generally faster and more lightweight than interpreted or VM-powered languages. However, in terms of execution speed, Go does lag behind some other compiled languages like C, C++, and Rust.</p>

            <p>Go is a bit slower mostly due to its automated memory management, known as the <strong>Go runtime</strong>. Slightly slower speed is the price we pay for memory safety and simple syntax.</p>

            <h2>Formatting strings in Go</h2>

            <p>Go follows the printf tradition from the C language.</p>

            <ul>
                <li><code>fmt.Printf()</code> prints a formatted string to standard out</li>
                <li><code>fmt.Sprintf()</code> returns the formatted string</li>
            </ul>

            <p>These following <em>formatting verbs</em> work with the formatting function above:</p>

            <p>The <code>%v</code> variant prints the Go syntax representation of a value, which acts as a nice default</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {variantFormatting}
                </SyntaxHighlighter>
            </div>

            <p>If you want to print in a more <em>specific</em> way, you can use the following formatting verbs:</p>

            <div className="">
                <SyntaxHighlighter language="go" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {lotsOfFormatting}
                </SyntaxHighlighter>
            </div>

            <h2>Runes and string encoding</h2>

            <p>In many programming languages a <em>character</em> is a single byte. Using ASCII encoding, the standard for the C programming language, we can represent 128 characters with 7 bits. This is enough for the English alphabet, numbers, and some special characters.</p>

            <p>In Go, strings are just sequences of bytes: they can hold arbitrary data. However, Go also has a special type, <code>rune</code>, which is an alias for <code>int32</code>. This means that a <code>rune</code> is a 32-bit integer, which is large enough to hold any Unicode code point.</p>

            <p>When you are working with strings, you need to be aware of the encoding (bytes → representation). Go uses UTF-8 encoding, which is a variable-length encoding.</p>

            <p>There are two takeaways from this:</p>

            <ul>
                <li>When you need to work with individual characters in a string, you should use the <code>rune</code> type. It breaks strings up into their individual characters, which can be more than one byte long.</li>
                <li>We can include a wide variety of Unicode characters in our strings, such as emojis and Chinese characters, and Go will handle them just fine.</li>
            </ul>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="introduction"
            />
        </div>
    )
}