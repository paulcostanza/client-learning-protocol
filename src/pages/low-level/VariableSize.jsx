import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Latex from 'react-latex'

import DynamicArrayInMemory from '../../assets/lowlevel/variablesizes/dynamic array in memory.png'
import EfficientVariable01 from '../../assets/lowlevel/variablesizes/efficient variable 01.png'
import EfficientVariable02 from '../../assets/lowlevel/variablesizes/efficient variable 02.png'
import EfficientVariable03 from '../../assets/lowlevel/variablesizes/efficient variable 03.png'
import TagsAndData from '../../assets/lowlevel/variablesizes/tags and data.png'
import VaraiblesInMemory from '../../assets/lowlevel/variablesizes/variables in memory.png'

export default function VariableSize() {

    const javascriptVariable = `// JavaScript
let a = 25`

    const pythonVariable = `# Python
a = 25`

    const cVariable = `// C
int a = 25;`

    const addIntAndFloatJavaScript = `let value_1 = 50
let value_2 = 3.14
let result = value_1 + value_2
console.log(result)`

    const addIntAndStringJavaScript = `// JavaScript
let a = "!!!"
let b = 7

let c = a + b // c = "!!!7"`

    const structs = `struct Student{
    id: u8,
    age: u8
}

struct ClassRoom{
    id: u16,
    size: u8,
    students: *
}`

    return (
        <div className="notes-content">
            <h1>The Size of Your Variables Matters</h1>
            <p>
                When transitioning from scripting languages like JavaScript or Python to systems programming, you encounter a new world of unfamiliar concepts. The stack, heap, pointers, system calls, locality, concurrency, parallelism, and more. Understanding these concepts before jumping into more complex programming will make that transition easier.
            </p>

            <blockquote>
                Enter: <strong>Variable Size</strong>
            </blockquote>

            <p>

            </p>

            <h2>Fixed-Size Types</h2>
            <em>A fundamental trait of systems programming languages</em>
            <p>
                One of the first things you may notice when transitioning from Python or JavaScript to Rust or C is that you cannot declare variables without specifying their type. Scripting languages can define variables simply as a number, where Rust and C will have not only integers and floating point values, but different kinds of each.
            </p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {javascriptVariable}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {pythonVariable}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {cVariable}
                </SyntaxHighlighter>
            </div>

            <p>
                In systems programming languages you have complete control over how much memory is used for representing data.
            </p>
            <p>
                In the realm of computers, all information is represented as a sequence of bits, where each bit can be either 1 or 0. The idea of representing data in binary is to consider every possible combination of bits in the sequence and associate each combination with a particular value.
            </p>
            <p>
                Example, if we want to represent numbers with a two bits long sequence, this will give us four possible combinations. We can then associate these combinations with values like so:
            </p>

            <div className='centerLatex'>
                <div><Latex>$00 \rightarrow 0$</Latex></div>
                <div><Latex>$01 \rightarrow 1$</Latex></div>
                <div><Latex>$10 \rightarrow 2$</Latex></div>
                <div><Latex>$11 \rightarrow 3$</Latex></div>
            </div>

            <p>
                However, we have run out of combinations and cannot represent the value 4. To solve this, we need to increment the length of the sequence. In doing so, we are now able to represent up to eight different values:
            </p>

            <div className="centerLatex">
                <div><Latex>$000 \rightarrow 0$</Latex></div>
                <div><Latex>$001 \rightarrow 1$</Latex></div>
                <div><Latex>$010 \rightarrow 2$</Latex></div>
                <div><Latex>$011 \rightarrow 3$</Latex></div>
                <div><Latex>$100 \rightarrow 4$</Latex></div>
                <div><Latex>$101 \rightarrow 5$</Latex></div>
                <div><Latex>$110 \rightarrow 6$</Latex></div>
                <div><Latex>$111 \rightarrow 7$</Latex></div>
            </div>

            <p>
                And if that is not enough, we just need to keep adding bits to the sequence until we have enough combinations to represent our desired values. Since every bit we add can only represent two different values, the range of values we can represent doubles. So who cares?
            </p>
            <p>
                When you run a program all of its variables are located somewhere in memory, and memory is limited. The purpose of all these types is to give you the ability of telling the compiler <em>explicitly</em> and <em>precisely</em> how much space you need in memory to represent the information your program will use.
            </p>

            <img src={VaraiblesInMemory} alt="variables in memory" className="img-in-reading" />

            <p>
                For convenience, computers do not operate directly with bits, but rather with groups of eight bits (<strong>bytes</strong>). This means the minimum number of bits you can use to represent something is eight.
            </p>
            <p>
                (insert gif of cycling through bytes with arrow pointing at them from 3:19)
            </p>
            <p>
                This is why you commonly encounter 8, 16, 32, or 64 bit numbers, and not random sizes. They need to sit in memory in subdivisions of eight.
            </p>
            <p>
                (pic of groupings of those in memory)
            </p>

            <h2>Size matters</h2>

            <em>Why would the size of a variable be important?</em>

            <p>
                Say you have a variable that represents the age of a person. Let's go with a 64-bit unsigned integer (which uses eight bytes in memory).
            </p>

            <p>
                (picture of let age: u64 = 21 and what that would look like in memory 3:48)
            </p>

            <p>
                As you can see, a 64 bit sequence is more than long enough to represent an age. Remember how one byte equals 8 bits? This means one byte can represent up to 255 values, much more than what we would need for our age variable. Since an age will never reach this limit, you do not even need seven of those eight bytes. All of this unused memory region is wasted space.
            </p>

            <p>
                (show difference between used and unused space 4:17)
            </p>

            <p>
                So an unsigned eight bit integer is really all you need!
            </p>

            <p>
                (show let age: u8 = 21 in memory 4:22)
            </p>

            <p>
                Now in scripting languages, you do not care about any of this. When you declare a variable, it is the <strong>interpreter's</strong> responsibility to determine where and how much space in memory variables require.
            </p>

            <p>
                (show age = 21 go through interpreter and then into memory 4:35)
            </p>

            <p>
                You will basically <em>always</em> use a lot more memory than necessary. When this applies to one single variable it is not that big of a deal, 7 wasted bytes is ok since modern computers have gigabytes of RAM. However, if you were dealing with thousands of different variables would would end up wasting a lot of space in memory.
            </p>

            <p>
                (wasted memory stick 4:58)
            </p>

            <p>
                Saving memory space becomes even more important when dealing with different kinds of numeric values. In JavaScript, you can do something like this:
            </p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {addIntAndFloatJavaScript}
                </SyntaxHighlighter>
            </div>

            <p>
                Can you tell if <code>result</code> is an integer or a floating-point type? Is the interpreter going to round the floating point before performing the operation? Does it transform the integer to a float, and then perform the operation? You may know the answer from experience or documentation, but not by any information that the code is providing.
            </p>

            <p>
                With Rust and C, you must <em>explicitly</em> express what you are trying to achieve. This is vital when it comes to performance.
            </p>

            <h2>Performance</h2>

            <p>
                In scripting languages once the interpreter assigns memory to variables later when those variables are needed, how does it know what they are? Because remember, in computers everything is represented as bits. If later in the program, we need to add those two values, there is no way to know if those bits are representing a number, a string, or anything else.
            </p>

            <p>
                (large numbers in memory 6:25)
            </p>

            <p>
                The easiest way to solve this is to attach extra information to each value. Hence, if those values are needed later, the interpreter can first read that information to determine whether it has to perform a numeric operation in the case of numbers, or a concatenation in the case of strings.
            </p>

            <p>
                (string + string and number + number example 7:00)
            </p>

            <p>
                A decent dynamic type system can also use this information to catch errors at runtime. For instance, when adding a string to a number it can throw an error. A really bad language however, will not tell you anything, convert one of the values, and then perform any possible operation.
            </p>

            <div className="">
                <SyntaxHighlighter language="javascript" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {addIntAndStringJavaScript}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <em>In some (really bad) languages, this is considered a feature and not a bug</em>
            </blockquote>
            <p>
                Marking explicit sections in memory as to what variable types with are is inefficient for several reasons. They require extra memory, taking up to several bytes. So not only do you lack control of the size of your variables, but the interpreter uses additional memory for each of them.
            </p>

            <img src={TagsAndData} alt="tags and data in memory" className='img-in-reading' />

            <p>
                This approach also imposes a large overhead on simple arithmetic and other operations that manipulate data. The <em>data type tagging</em> must be initialized, read, compared, and written at runtime, all of which add overhead to a simple addition operation. All of these tasks require CPU time, meaning the interpreter is executing all of these extra steps, rather than just the code.
            </p>
            <p>
                On the other hand, using languages that require the specific types and sizes of variables in your code, the compiler can use that information to produce very efficient machine code.
            </p>
            <p>
                (turn this into a gif)
            </p>
            <img src={EfficientVariable01} alt="efficient variable 01" className="img-in-reading" />
            <img src={EfficientVariable02} alt="efficient variable 02" className="img-in-reading" />
            <img src={EfficientVariable03} alt="efficient variable 03" className="img-in-reading" />
            <p>
                For the example above, the compiler knows that these two variables that are going to be stored somewhere in memory at runtime are 32 bit numbers, so it will emit machine code that fetches both values, performs an addition, and then stores the result somewhere else in memory, and that's it! No additional memory is used, and no additional validations, because of the additional information you provided at compile time.
            </p>
            <p>
                And that is one of the reasons statically typed languages are <strong>much</strong> faster than dynamically typed languages, including languages that are not system programming languages.
            </p>
            <h2>When not a fixed size</h2>
            <p>
                Consider that because the size of primitive values is known at compile time, that means the size of more complex values is also known at compile time. This applies to even your custom data types. Except, you do not always need fixed size types.
            </p>
            <p>
                <em>What if you do not know the size? What if you want to add elements to the array at runtime?</em>
            </p>
            <p>
                The solution is to use a special memory region where your array can grow or shrink dynamically. Instead of holding the array itself, your custom type holds a reference to that region of memory where the array is located. Plus other information, such as the size of the array so we always know how big the region is (currently).
            </p>

            <div className="">
                <SyntaxHighlighter language="rust" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {structs}
                </SyntaxHighlighter>
            </div>

            <img src={DynamicArrayInMemory} alt="dynamic array in memory" className="img-in-reading" />

            <p>
                Where does this get stored? In the <strong>stack</strong> and the <strong>heap</strong>.
            </p>
        </div>
    );
}