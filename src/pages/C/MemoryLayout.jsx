import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import MainMemoryLayout from '../../assets/C/MemoryLayout/main memory layout.png'

export default function MemoryLayout() {

    const memoryExample = `#include <stdio.h>
double f(int []);

int main()
{
    int x[3] = {1, 7, 3};
    double result = f(x);
    return 0;
}

double f(int list[])
{
    double q = 7.0;
    return q;
}`

    return (
        <div>
            <h2>Memory Organization and Segment Structure Layout</h2>

            <p>
                The memory layout of a C program follows a well-defined structure that organizes different types of data and code into distinct segments within the process address space.
            </p>
            <img src={MainMemoryLayout} alt="main memory layout" style={{ maxWidth: "100%" }} />
            <p>
                Each <strong>segment</strong> serves a specific purpose and has unique characteristics that determine how memory is allocated, accessed, and managed during program execution.
            </p>
            <p>
                The stack segment occupies the upper portion of the memory layout and grows downward as function calls are made and local variables are created. This segment contains all <strong>local variables, function parameters, and return addresses</strong>, with each function call creating a new stack frame that holds its local data.
            </p>
            <p>
                In this particular example, the stack segment stores the local array <code>x</code> containing the values <code>[1, 7, 3]</code>, along with variables like <code>result</code>, <code>f</code>, and <code>q</code> that exist within the scope of their respective functions.
            </p>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {memoryExample}
                </SyntaxHighlighter>
            </div>

            <p>
                The stack operates on a last-in-first-out basis, automatically managing memory allocation and deallocation as functions are called and return. When the main function executes, it creates space for the array <code>x</code> and the <code>result</code> variable, while the function <code>f</code> creates its own stack frame containing the local variable <code>q</code> initialized to <code>7.0</code>.
            </p>
            <p>
                This automatic memory management makes the stack efficient for temporary storage but limits the lifetime of variables to their enclosing scope. The <code>heap</code> segment provides dynamic memory allocation capabilities, though it remains unused in this simple example.
            </p>
            <p>
                Located between the stack and the lower memory segments, the <code>heap</code> grows upward and allows programs to request memory at runtime using functions like <code>malloc()</code> and <code>free()</code>.
            </p>
            <p>
                The <code>constant</code> and <code>global</code> segment stores variables that persist throughout the entire program execution, such as the global variable <code>size</code> with its value of <code>3</code>. This segment typically contains initialized global variables, static variables, and string literals that need to remain accessible from multiple functions or throughout the program's lifetime.
            </p>
            <p>
                The <code>code</code> segment resides at the bottom of the memory layout and contains the compiled machine instructions for all functions in the program. This segment is typically read-only to prevent accidental modification of the program code during execution.
            </p>
            <p>
                The function <code>f</code> demonstrates a simple implementation that always returns the value <code>7.0</code> using a local variable <code>q</code>, while the main function orchestrates the program flow by initializing the array, calling function <code>f</code>, and storing the returned value.
            </p>
            <p>
                The memory organization ensures that each type of data is stored in the appropriate segment based on its scope, lifetime, and usage patterns, providing both efficiency and security for program execution.
            </p>
        </div>
    )
}