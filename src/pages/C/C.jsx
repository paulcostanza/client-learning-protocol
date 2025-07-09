import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Table from '@mui/joy/Table'
import Sheet from '@mui/joy/Sheet'
import MemoryLayout from './MemoryLayout'

export default function C() {

    const simpleProgram = `int main() {
    return 0;
}`

    const printInC = `#include <stdio.h>

int main() {
    printf("Program in C!\\n");
    return 0;
}`

    const pythonVsC = `print("starting") 
func_that_doesnt_exist("uh oh")
print("finished")`

    const howConstWorks = `int main() {
    const int x = 5;
    x = 10; // error
}`

    const stringsInC = `char *msg_from_paul = "Hope you are learning a lot!";`

    const formatSpecifierExample = `printf("Hello, %s. You are %d years old. \\n", name, age);`

    const functionsInC = `float add(int x, int y) {   // #1
    return (float)(x + y);  // #2
}`

    const callAFunction = `int main() {
    float result = add(10, 5);
    printf("resultZ: %f\\n", result);
    return 0;
}`

    const howToVoid = `int get_integer(void) {
    return 42;
}`

    const returnVoid = `void print_integer(int x) {
    printf("this is an int: %d", x);
}`

    const postfixExample = `int a = 5;
int b = a++; 
// b is assigned 5, then a becomes 6`

    const prefixExample = `int a = 5; 
int b = ++a; 
// a becomes 6, then b is assigned 6`

    const shortHandIfStatement = `// Example 1
if (x > 3) printf("x is greater than 3\\n");

// Example 2
char *get_temperature_status(int temp) {
    if (temp < 70) return "too cold";
    if (temp > 90) return "too hot";
    return "just right";
}`

    const ternaryOperator = `int a = 5;
int b = 10;
int max = a > b ? a : b;
printf("max: %d\\n", max);
// max: 10`

    const size_tExample = `size_t size = sizeof(int);
// size will hold the number of bytes used by an int`

    const sizeofExample = `#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>

int main() {
    // Use %zu is for printing *sizeof* result
    printf("sizeof(char) = %zu\\n", sizeof(char));
    printf("sizeof(bool) = %zu\\n", sizeof(bool));
    printf("sizeof(int) = %zu\\n", sizeof(int));
    printf("sizeof(float) = %zu\\n", sizeof(float));
    printf("sizeof(double) = %zu\\n", sizeof(double));
    printf("sizeof(size_t) = %zu\\n", sizeof(size_t));
}`

    const pragmaOnce = `// my_header.h
#pragma once

struct Point {
    int x;
    int y;
};`

    const headerGuards = `#ifndef MY_HEADER_H
#define MY_HEADER_H

// some cool stuff

#endif`

    return (
        <>
            <main>
                <div className="container" id="space-on-top-of-page">

                    <h2>C Program Structure</h2>
                    <p>The simplest C program is essentially:</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {simpleProgram}
                        </SyntaxHighlighter>
                    </div>

                    <ul>
                        <li>a function named <code>main</code> is always the entry point to a C program.</li>
                        <li><code>int</code> is the return type of the function and is short for <strong>integer</strong>. Because this is the <code>main</code> function, the return value is the <em>exit code</em> of the program. <code>0</code> means success, anything else means failure.</li>
                        <li>the opening bracket, <code>&#123;</code> is the start of the function body</li>
                        <li><code>return 0</code> returns the <code>0</code> value (an integer) from the function. Again, this is the exit code because it is the <code>main</code> function.</li>
                        <li><code>;</code> at the end of <code>return 0;</code> is required in C to terminate statements</li>
                        <li>the closing bracket, <code>&#125;</code> denotes the end of the function's body</li>
                    </ul>

                    <h4>Print</h4>
                    <p>Printing in C is done with a function called <code>printf</code> from the <code>stdio.h</code> (standard input/output) library with a lot of weird formatting rules. To use it, you need an <code>#include</code> at the top of your file, along with the <code>printf</code> inside of the function:</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {printInC}
                        </SyntaxHighlighter>
                    </div>

                    <blockquote>
                        <code>\n</code> is required to print a newline character and flush the buffer in the browser
                    </blockquote>

                    <h2>C is Compiled</h2>

                    <p>This python code prints <code>starting</code> <em>before</em> it crashes:</p>

                    <div className="">
                        <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {pythonVsC}
                        </SyntaxHighlighter>
                    </div>

                    <p>But in C, it would crash <em>before</em> it can even run. If there is a problem, the compiler tells us <strong>before</strong> the program even starts. Now... C does not tell us about all the possible problems that might arise in our program. But it does tell us about some of them.</p>
                    <p>The compiler checks your source code, turns the source code into an executable, and then directly runs the executable in whatever environment it is in to run.</p>
                    <p>A compiled language will let you know there is an error <em>at</em> compile time, rather than waiting to run into the problem during execution.</p>

                    <h2>Basic Types</h2>

                    <ul>
                        <li><code>int</code>: an integer</li>
                        <li><code>float</code>: a floating point number</li>
                        <li><code>char</code>: a character</li>
                        <li><code>char *</code>: an array of characters (think 'string')</li>
                    </ul>
                    <p>Important to note that C does not allow you to change the type of an existing variable, but the value of a variable <em>is</em> allowed to change.</p>

                    <h4>Constants</h4>

                    <p>To declare a variable whose value <em>cannot</em> change we will use the <code>const</code> type qualifier. (More on type qualifiers later!)</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {howConstWorks}
                        </SyntaxHighlighter>
                    </div>

                    <h2>Strings</h2>

                    <p>Most programming languages these days (even compiled ones) have a built-in <code>string</code> type of some sort. C does not!</p>
                    <p>Instead, C strings are just arrays of characters. This is how you get a <em>string</em> in C:</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {stringsInC}
                        </SyntaxHighlighter>
                    </div>

                    <p>Notes that it is required to use double quotes for <code>char *</code> (strings) while single quotes are strictly for <code>char</code>.</p>

                    <h2>Printing Variables</h2>

                    <p>C can get a little complicated when it comes to string interpolation. We need to tell C <em>how</em> we want particular values to be printed using <strong>format specifiers</strong>.</p>
                    <p>Common format specifiers are:</p>
                    <ul>
                        <li><code>%d</code> - digit (integer)</li>
                        <li><code>%c</code> - character</li>
                        <li><code>%f</code> - floating point number</li>
                        <li><code>%s</code> - string (<code>char *</code>)</li>
                    </ul>

                    <p>Example:</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {formatSpecifierExample}
                        </SyntaxHighlighter>
                    </div>

                    <h2>Functions</h2>
                    <p>In C, functions specify the types for their arguments and return value.</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {functionsInC}
                        </SyntaxHighlighter>
                    </div>

                    <ol>
                        <li>
                            <strong>#1</strong>
                            <ul>
                                <li><code>float</code>: return type for the function</li>
                                <li><code>add</code>: the name of the function</li>
                                <li><code>int x, int y</code>: the arguments to the function and their types are specified</li>
                            </ul>
                        </li>
                        <li>
                            <strong>#2</strong>
                            <ul>
                                <li><code>x + y</code>: adds the two arguments together</li>
                                <li><code>(float)</code>: *casts* the result as a float</li>
                            </ul>
                        </li>
                    </ol>

                    <p>Here is how you would call the function:</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {callAFunction}
                        </SyntaxHighlighter>
                    </div>

                    <h2>Void</h2>

                    <p>There is a special type for function signature: <code>void</code>. There are two primary ways you will use it.</p>
                    <ol>
                        <li>To explicitly state that a function takes no arguments:</li>
                    </ol>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {howToVoid}
                        </SyntaxHighlighter>
                    </div>

                    <ol start="2">
                        <li>When a function does not return anything:</li>
                    </ol>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {returnVoid}
                        </SyntaxHighlighter>
                    </div>

                    <p>Note: <code>void</code> does not equal <code>None</code> or <code>null</code>! It is not a value that can be assigned to a variable, it only works with functions</p>

                    <h2>File Layout</h2>

                    <p>In C:</p>
                    <ul>
                        <li><code>.h</code> files are <em>header files</em> that contain the <em>function prototypes</em>. They declare what functions exist, what types they use, but do not actually write the body.</li>
                        <li><code>.c</code> files contain the implementation (c code) or <em>source files</em>. These contain the actual function implementations.</li>
                        <li><code>main.c</code> is where everything is brought together. It is the entry point of your program.</li>
                    </ul>

                    <p>By separating declarations (<code>.h</code>) from implementations (<code>c</code>), you can:</p>
                    <ul>
                        <li><strong>organize code:</strong> keep related functions grouped</li>
                        <li><strong>prevent redundancy:</strong> define a function once in a <code>.c</code> file but declare it in a <code>.h</code> file that multiple other <code>.c</code> files can <code>#include</code>.</li>
                        <li><strong>speed up compilation:</strong> changes to a <code>.c</code> file only require that specific file and files that depend on its <code>.h</code> to be recompiled, rather than the whole project</li>
                    </ul>

                    <blockquote>
                        To import code from another file, you must include the <code>.h</code> file. It is common to place the <code>main</code> function inside of its own file.
                    </blockquote>

                    <h2>Math Operators</h2>

                    <p>In addition to the standard stuff, we also have the <em>increment</em> (<code>++</code>) and <em>decrement</em> (<code>--</code>) operators, which can be used in two forms: postfix and prefix.</p>
                    <p><strong>Postfix</strong> (<code>x++</code> or <code>x--</code>): the value of <code>x</code> is used in the expression first, and then <code>x</code> is incremented / decremented like so...</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {postfixExample}
                        </SyntaxHighlighter>
                    </div>

                    <p><strong>Prefix</strong> (<code>++x</code> or <code>--x</code>): <code>x</code> is incremented or decremented first, and then the new value of <code>x</code> is used in the expression like so...</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {prefixExample}
                        </SyntaxHighlighter>
                    </div>

                    <blockquote>
                        It is common to avoid prefix. If you want to increment a variable but keep the original value, you can just do it in two steps to save yourself the confusion.
                    </blockquote>

                    <p><em>Quick tip</em> when doing an operation between an int and a float, the result will be a float unless you type cast!</p>

                    <h2>if statements</h2>

                    <p>Your standard stuff. In addition, you can write an <code>if</code> statement without braces if you only have one statement in the body</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {shortHandIfStatement}
                        </SyntaxHighlighter>
                    </div>

                    <h2>Ternary</h2>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {ternaryOperator}
                        </SyntaxHighlighter>
                    </div>

                    <h2>Type Sizes</h2>

                    <p>In C, the "size" (in memory) of a type is not guaranteed to be the same on all systems. This is because the size of a type is dependent on the system's architecture. For example, on a 32-bit system, the size of an <code>int</code> is usually 4 bytes, while on a 64-bit system, the size of an <code>int</code> is usually 8 bytes. Of course, you never know until you run <code>sizeof</code> with the compiler you plan on using.</p>
                    <p>However, some types are always guaranteed to be the same. Here is a list of the basic C data types along with their typical sizes in bytes. Note that sizes can vary based on the platform (32-bit vs 64-bit systems).</p>

                    <Sheet>
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
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Size</th>
                                    <th>Represents</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>char</code></td>
                                    <td>1 byte</td>
                                    <td>single character</td>
                                    <td>Always 1 byte, but can be signed or unsigned</td>
                                </tr>
                                <tr>
                                    <td><code>float</code></td>
                                    <td>4 bytes</td>
                                    <td>single-precision floating-point number</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><code>double</code></td>
                                    <td>8 bytes</td>
                                    <td>double-precision floating-point number</td>
                                    <td></td>
                                </tr>
                            </tbody>

                        </Table>
                    </Sheet>

                    <br />

                    <p>The actual sizes of these types can be determined using the <code>sizeof</code> operator in C for a specific platform. Even though it is used like a function, <code>sizeof</code> is technically a unary operator, and <em>not</em> a function.</p>

                    <h2>Sizeof</h2>

                    <p>C gives us a way to check the size of a type of a variable with <code>sizeof</code>.</p>
                    <p>You can use <code>sizeof</code> like a function (although technically it is a unary operator).</p>
                    <p>We will use the <code>sizeof</code> operator to understand the memory layout of different types in C.</p>

                    <h4><code>size_t</code></h4>

                    <p>The <code>size_t</code> type is a special type that is guaranteed to be able to represent the size of the largest possible object in the target platform's address space (meaning it can fit any single, non-struct value inside it). It's also the type that <code>sizeof</code> returns</p>
                    <ul>
                        <li><code>size_t</code> is a special unsigned integer type in C.</li>
                        <li>It represents the size of the largest object that can exist on the target platform</li>
                        <li>The <code>sizeof</code> operator always returns a value of type <code>size_t</code></li>
                        <li>Its actual size (number of bytes) depends on the platform (example: 4 bytes on 32-bit systems, 8 bytes on 64-bit systems)</li>
                        <li>You'll commonly see <code>size_t</code> used for array indexing, memory allocation, and anywhere you need to represent the size of something in bytes</li>
                    </ul>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {size_tExample}
                        </SyntaxHighlighter>
                    </div>

                    <p>You can run this in any program you are working in to get a quick reference from your system:</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {sizeofExample}
                        </SyntaxHighlighter>
                    </div>

                    <h2>Pragma Once and Header Guards</h2>

                    <p>There is potential issue you might run into in regards to <code>.h</code> header files: multiple inclusions. Sometimes, the same header file might get included more than once, directly or indirectly, in larger C programs. If the same header file gets included more than once, you can end up with errors caused by redefining things like functions or structs.</p>

                    <h4>Pragma Once</h4>

                    <p>One simple solution is <code>#pragma once</code>. Adding this line to the top of a header file tells the compiler to include the file only once, even if it is referenced multiple times across your program. This is known as a <strong>compiler directive</strong>.</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {pragmaOnce}
                        </SyntaxHighlighter>
                    </div>

                    <p>The <em>downside</em> is that this is not part of the official C standard. However, it is supported by almost all modern compilers.</p>

                    <h4>Header Guards</h4>

                    <p>Another common way to avoid multiple inclusions is with include guards, which use preprocessor directives like this:</p>

                    <div className="">
                        <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                            wrapLines={true} className=" code-snippet">
                            {headerGuards}
                        </SyntaxHighlighter>
                    </div>



                    <p>This method works by defining a unique <em>macro</em> for the header file. The macro name should be unique and is usually based on the file name. The first time the file is included, the macro (<code>MY_HEADER_H</code>) is not defined, so the contents are included and the macro is defined. The next time, the macro is already defined, so the contents are skipped. This is the <em>portable, standard way</em> to prevent multiple inclusions.</p>
                    <p>The <em>upside</em> is that this will work with all C compilers.</p>

                    <h2>Welcome to Memory Management</h2>
                    <p>Understanding how your <em>software</em> runs on <em>hardware</em> is important for writing fast, performant code. One of the main aspects of software performance is <strong>memory management</strong>.</p>
                    <ul>
                        <li>how and where programs store data in memory</li>
                        <li>how to manually manage memory</li>
                        <li>how to make programs more efficient</li>
                        <li>practice programming in a lower-level language</li>
                        <li>learn about (and build) garbage collection</li>
                    </ul>
                    <blockquote>
                        Even though we will be using C, this section is focused on memory management
                    </blockquote>

                    <MemoryLayout />
                </div>
            </main>
        </>
    )
}