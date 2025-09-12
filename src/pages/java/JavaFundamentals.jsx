import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

import SystemClassHierarchy from '../../assets/java/javafundamentals/system class hierarchy example.png'
import UnicodeExample from '../../assets/java/javafundamentals/unicode example.png'

import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"

export default function JavaFundamentals() {

    const compileSimpleJava = `paul@laptop:~$ javac Simple.java
paul@laptop:~$ java Simple`

    const simpleJavaProgram = `// This is a simple Java program
public class Simple {
    public static void main(String[] args) {
        System.out.println("Programming is fun!");
    }
}`

    const variablesAndLiterals = `int num = 5;            // variable is num, literal is 5
String food = "apple"   // variable is food, literal is apple`

    const concatenationOperator = `// concatenation operator in action
System.out.println("This is " + "one string.")`

    const mathPow = `double result = Math.pow(4.0, 2.0);     // returns 16.0
double x = Math.pow(5.0, 4.0);          // returns 625.0`

    const mathSqrt = `double result = Math.sqrt(9.0);         // returns 3.0
System.out.println(Math.sqrt(25.0));    // prints 5.0`

    const wideningConversion = `double x;
int y = 10;
x = y;  // a widening conversion takes place`

    const castOperator = `littleNum = (short)bigNum;
x = (long)3.7               // 3 is assigned to x
number = (int)72.567;       // 72 is assigned to number
value = (float)x;
value = byte(number)`

    const castOperatorAgain = `int pies = 10, people = 4, piesPerPersonInt;
double piesPerPersonDouble;
piesPerPersonInt = pies / people; // 2
piesPerPersonDouble = (double)pies / people; // 2.5`

    const mixingIntegerOperations = `short one = 1, two = 2, three;
three = one + two; // the outcome of one + two now produces an integer!`

    const mixingIntegerOperationsCorrectly = `three = (short)(one + two);`

    const finalExample = `final double INTEREST_RATE = 0.069;`

    const stringExample = `String name = "Paul";`

    const primitiveDataType = `int age = 25;
// the age variable holds the actual data`

    const sanchez = `String name = "Mark Sanchez"`

    const storedInMemory = `+-------------------+      
|   age:   23       |      
+-------------------+      +------------------------+
|   name: 0x2000 ---+----> | 0x2000: "Mark Sanchez" |
+-------------------+      +------------------------+`

    const javadoc = `paul@laptop:~$ Javadoc SourceFile.java`

    const comments = `/*
* Example #1 for
* block comments
*/

//*****************
// Example #2 for *
// block comments *
//*****************

/////////////////
// Example #3 for
// block comments
/////////////////

//---------------
// Example #4 for
// block comments
//---------------
`

    return (
        <div>
            <h1>Java Fundamentals</h1>

            <h2>Quick Review</h2>

            <p>
                The name of Java source code files end with <code>.java</code>. The program in the next section is named <code>Simple.java</code>. Using the Java compiler, you will compile the program. After that command runs, the compiler will create another file named <code>Simple.class</code>, which contains the translated Java byte code. Here is how you would run both commands:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {compileSimpleJava}
                </SyntaxHighlighter>
            </div>

            <p>Notice we did not need the <code>.class</code> extension!</p>

            <blockquote>
                <strong>Note</strong> Some IDEs will be able to compile and run the program with built-in UI buttons. You should take advantage of the shortcut, but understand what is going on under the hood!
            </blockquote>

            <h2>Parts of a Java Program</h2>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {simpleJavaProgram}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li>Line 1: The <strong>//</strong> represents a start of a comment</li>
                <li>Line 2: This is known as a <em>class header</em>, and marks the beginning of a class definition. Think of a class as a container.
                    <ul>
                        <li><code>public</code>: Java keyword, known as an <em>access specifier</em>. This controls where the class may be accessed from.</li>
                        <li><code>class</code>: Java keyword, indicates the beginning of the class definition.</li>
                        <li><code>Simple</code>: the name you chose for the class.</li>
                    </ul>
                    You may create more than one class in a file, but you may have only one public class per Java file. When a Java file has a public class, the name of the public class must be the same as the name of the file, without the <code>.java</code> extension.
                </li>
                <li>Line 3: The <em>method header</em>, marks the beginning of the method.
                    <ul>
                        <li><code>main</code>: the name of this method. Every Java application <strong>must</strong> have a method named <code>main</code>, as it signifies the starting point of an application.</li>
                        <li>We will learn about the other keywords a little later on.</li>
                    </ul>
                </li>
                <li>Line 4: Displays the <em>string literal</em> (the characters inside the quotation marks) on the screen.</li>
            </ul>
            <p>Since semicolons mark the end of a statement, why is there only one that appears in our program?</p>
            <ul>
                <li>Comments do not need one since they are ignored by the compiler</li>
                <li>Class headers and method headers do not end with a semicolon because they are terminated with a body of code inside the braces</li>
                <li>The brace characters are not statements, so you do not place a semicolon after them</li>
            </ul>

            <h2><code>print</code> and <code>println</code> methods, and the Java API</h2>

            <p>
                The <code>print</code> and <code>println</code> methods are used to display text output. They are part of the <strong>Java API</strong>, which is a collection of prewritten classes and methods for performing specific operations.
            </p>

            <ul>
                <li>API: Application Programmer Interface. The API is a standard library of prewritten classes for performing specific operations. These classes and their methods are available to Java programs. For example, the print and println methods are part of the API and provide ways for output to be displayed on the standard output device.</li>
                <li><code>System.out.println("");</code>
                    <ul>
                        <li><code>System</code>: A class within the Java API that contains objects and methods that perform system-level operations</li>
                        <li><code>out</code>: an object that is a member from the System class</li>
                        <li><code>println</code>: a method within the out object that outputs on the system console or standard output device.</li>
                        <li><code>""</code>: The value that goes in here is known as an <em>argument</em></li>
                    </ul>
                </li>
                <li>Escape Sequence: allows you to control the way output is displayed by embedding commands within the string itself. Starts with backslash character (<code>\</code>), and is followed by one or more control characters. Even though you have to type two characters to write an escape sequence, they are stored in memory as a single character.
                    <ul>
                        <li><code>\n</code>: advances output cursor to the next line.</li>
                        <li><code>\t</code>: tab escape sequence.</li>
                    </ul>
                </li>
            </ul>

            <p>
                <strong>The relationship between</strong> <code>System</code> <strong>class,</strong> <code>out</code> <strong>object,</strong> <code>print</code> <strong>and</strong> <code>println</code> <strong>methods</strong>
            </p>

            <img src={SystemClassHierarchy} alt="System class hierarchy example" className='center-img' />

            <h2>Variables and Literals</h2>

            <p><strong>Variables:</strong> a named storage location in the computer's memory.<br />
                <strong>Literal:</strong> a value that is written into the code of a program.</p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {variablesAndLiterals}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><strong>Variable declaration:</strong> Tells the compiler the name of the variable and the type of data it will hold.</li>
                <li><strong>Assignment statement:</strong> when you assign a variable with the assignment sign <code>=</code>.</li>
                <li><strong>Concatenation operator:</strong> appending one string to another using the <code>+</code> symbol.</li>
                <li><strong>Identifiers:</strong> any programmer-defined name (variables or classes)</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {concatenationOperator}
                </SyntaxHighlighter>
            </div>

            <h2>Primitive Data Types</h2>

            <p><strong>Data Types:</strong> The type of data the variable can hold. Selecting the proper data type is important because a variable's data type determines the amount of memory the variable uses, as well as how the variable is formatted and stores data.</p>

            <ul>
                <li><strong>Primitive:</strong> These data types cannot be used to create objects. Here are the primitive data types for numeric data:</li>
            </ul>

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
                                    style={{ width: '100px', }}
                                >Data Type</TableCell>
                                <TableCell
                                    style={{ width: '100px', textAlign: 'center' }}
                                >Size</TableCell>
                                <TableCell style={{ textAlign: 'center' }}
                                >Range</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            <tr><td>byte</td><td style={{ textAlign: 'center' }}>1 byte</td><td style={{ textAlign: 'center' }}>Integers in the range of -128 to +127</td></tr>
                            <tr><td>short</td><td style={{ textAlign: 'center' }}>2 bytes</td><td style={{ textAlign: 'center' }}>Integers in the range of -32,768 to +32,767</td></tr>
                            <tr><td>int</td><td style={{ textAlign: 'center' }}>4 bytes</td><td style={{ textAlign: 'center' }}>Integers in the range of -2,147,483,648 to +2,147,483,647</td></tr>
                            <tr><td>long</td><td style={{ textAlign: 'center' }}>8 bytes</td><td style={{ textAlign: 'center' }}>Integers in the range of -9 quintillion to +9 quintillion</td></tr>
                            <tr><td>float</td><td style={{ textAlign: 'center' }}>4 bytes</td><td style={{ textAlign: 'center' }}>Floating point number with 7 digits of accuracy</td></tr>
                            <tr><td>double</td><td style={{ textAlign: 'center' }}>8 bytes</td><td style={{ textAlign: 'center' }}>Floating point number with 15 digits of accuracy</td></tr>
                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <br />
            <ul>
                <li><strong>Boolean:</strong> Variables that hold either of the values true or false.</li>
                <li><strong>Char:</strong> Used to store one character at a time. Character literals must be stored inside single quotes (because they are different from string literals!).</li>
                <li><strong>Unicode:</strong> a set of numbers that are used to represent characters. Every character has its own unique number. When a character is stored in memory, it is actually the <em>numeric code</em> that is stored. When the computer is instructed to print the value on the screen, it displays the character that corresponds with the numeric code.</li>
            </ul>

            <img src={UnicodeExample} alt="Unicode example" className='center-img' />

            <h2>Arithmetic Operators</h2>

            <p>
                There are many operators for manipulating numeric values and performing arithmetic operations. There are three kinds of operators in Java:
            </p>

            <ul>
                <li>
                    <strong>Unary:</strong> Just adding a negative to a positive or adding negative to a negative or variable.
                </li>
                <li>
                    <strong>Binary:</strong> Simple equations. (<code>total = saleOne + saleTwo</code>)
                </li>
                <li>
                    <strong>Ternary:</strong> testing a boolean value. (
                    <code>variable = booleanValue ? runsIfTrue : runsIfFalse;</code>)
                </li>
                <li>
                    <strong>Integer Division:</strong> When dividing two integers, it will always result in an integer. If the answer is supposed to be a float, everything after the decimal place gets dropped (<strong>truncated</strong>). 5 / 2 = 2. In order for a division operation to return a floating-point value, one of the operands must be of a floating-point data type. 5.0 / 2 = 2.5
                </li>
            </ul>

            <h2>The Math class</h2>

            <p>
                The Java API provides a class named <code>Math</code>, which contains many methods that are useful for performing complex mathematical operations.
            </p>

            <h3>
                The <code>Math.pow</code> method
            </h3>

            <p>
                The method takes two double arguments. It raises the first argument to the power of the second argument, and returns the result as a double.
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {mathPow}
                </SyntaxHighlighter>
            </div>

            <h3>
                The <code>Math.sqrt</code> method
            </h3>

            <p>
                Accepts a double value as its argument and returns the square root of the value.
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {mathSqrt}
                </SyntaxHighlighter>
            </div>

            <h2>Cast Operators</h2>

            <p>
                Java is a <strong>strongly typed</strong> language. This means that before a value is assigned to a variable, Java checks the data types of the variable and the value being assigned to it to determine whether they are compatible.
            </p>
            <p>
                <strong>Cast operators</strong> allows you to convert values manually when mixing different data types in a math operation. One data type outranks (has a higher rank than) another if it can hold a larger number in memory, meaning they can only convert from a lower data type to a higher data type. One instance where this would be helpful is in cases where you want to avoid integer division and are looking for a floating point number. Here is the list from high to low data types:
            </p>
            <ul>
                <li>Double</li>
                <li>Float</li>
                <li>Long</li>
                <li>Int</li>
                <li>Short</li>
                <li>Byte</li>
            </ul>

            <p>
                In assignment statements where values of lower-ranked data types are
                stored in variables of higher-ranked data types, Java automatically
                converts the lower-ranked value to the higher-ranked type. This process
                is called <strong>widening conversion</strong>. For example:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {wideningConversion}
                </SyntaxHighlighter>
            </div>

            <p>
                To do the opposite would be a <strong>narrowing conversion</strong>.
                Example, converting a double down to an int. This could potentially
                cause a loss of data, Java does not automatically perform them. Hence
                cast operators.
            </p>

            <p>Example of cast operators:</p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {castOperator}
                </SyntaxHighlighter>
            </div>

            <p>
                Notice that when a cast operator is applied to a variable, it does not change the contents of the variable. It only returns the value stored in the variable, converted to the specified data type.
            </p>

            <p>
                Let's take a look at an expression where we can apply a cast operator:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {castOperatorAgain}
                </SyntaxHighlighter>
            </div>


            <pre>
                <code>{ }</code>
            </pre>

            <p>
                The statement does not convert the value in pies or people to a{" "} <code>double</code>, but converts the result of the expression{" "} <code>pies / people</code>.
            </p>
            <p>
                <strong>Important!</strong> The cast conversion goes follows mathematical ordering. However, anything in parenthesis takes precedence. Example, if{" "} <code>piesPerPersonDouble = (double)(pies / people);</code>, then{" "} <code>piesPerPersonDouble</code> would equal <code>2.0</code>!
            </p>

            <h2>Mixed Integer operations</h2>

            <p>
                The Java language gets a little weird internally when it handles arithmetic operations on <code>int</code>, <code>byte</code>, and{" "} <code>short</code> variables.
            </p>

            <p>
                When values of the <code>byte</code> or <code>short</code> data type are used in arithmetic expressions, they are temporarily converted into{" "} <code>int</code> values. The result of an arithmetic operation using only a mixture of <code>byte</code>, <code>short</code> or{" "} <code>int</code> values will always result in an <code>int</code>. So the following example will produce an error:
            </p>


            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {mixingIntegerOperations}
                </SyntaxHighlighter>
            </div>

            <p>
                To avoid this, try declaring the variable three as an integer, or use a cast operation like:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {mixingIntegerOperationsCorrectly}
                </SyntaxHighlighter>
            </div>

            <h2>
                Creating Named Constants with <code>final</code>
            </h2>

            <p>
                The <strong>final</strong> keyword can be used in a variable declaration to make the variable constant, meaning the value cannot be changed during the execution of the program. Use the <strong>final</strong> keyword at the start of the variable declaration, as well as cap lock the name of the variable.
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {finalExample}
                </SyntaxHighlighter>
            </div>

            <h2>The String Class</h2>

            <p>
                Objects are created from classes. Objects can contain <strong>attributes</strong> (data values stored in the object) and <strong>methods</strong> (procedures performed on the object attributes). The programmer determines the attributes and methods that are necessary, and then creates a class that describes the object. A class can be used to specify the attributes and methods that a particular type of object may have. The class is a blueprint that an object is created from (the class is the description of the object). Classes are allowed to create as many objects as you want, and each creation of an object is called an <strong>instance</strong> of a class.
            </p>

            <p>
                Think of a class as a <em>blueprint</em> that an object can be created from. So a class is not an object, but a <em>description</em> of an object. When the program is running, it can use the class to create, in memory, as many objects as needed.
            </p>
            <p>
                Java does not have a primitive data type for storing them in memory. So instead, strings are a class that are provided by the Java API named <strong>String</strong>. By convention, the first character of a class name is always written in an uppercase letter. You must declare the string just like declaring a number data type:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {stringExample}
                </SyntaxHighlighter>
            </div>

            <p>
                The <code>String</code> class also has various methods that allow you to work with strings.
            </p>

            <h2>Primitive Type Variables and Class Type Variables</h2>

            <p>
                Primitive type variables hold the actual data with which they are associated with. Example:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {primitiveDataType}
                </SyntaxHighlighter>
            </div>

            <p>
                Class type variables do not hold the actual data item that it is associated with, but hold the address (from memory) of the data item that is associated with it. This means that class type variables are known as <strong>reference variables</strong> because they reference the data through the address.
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {sanchez}
                </SyntaxHighlighter>
            </div>

            <h3>Primitives and Class Variables in memory</h3>

            <p>In memory, our two variables could look something like this:</p>


            <table className='html-table'>
                <thead>
                    <tr>
                        <th>Variable</th>
                        <th>Value</th>
                        <th>Memory Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>age</td>
                        <td>25</td>
                        <td>0x1000</td>
                    </tr>
                    <tr>
                        <td>name</td>
                        <td>
                            <code>0x2000</code>
                        </td>
                        <td>0x1004</td>
                    </tr>
                </tbody>
            </table>

            <br />


            <p>And at address <code>0x2000</code>, the actual string data is stored:</p>

            <table className='html-table'>
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>0x2000</code></td>
                        <td>"Mark Sanchez"</td>
                    </tr>
                </tbody>
            </table>
            <p>So:</p>
            <ul>
                <li>
                    <code>age</code> holds the actual value <code>25</code>.
                </li>
                <li>
                    <code>name</code> holds the address <code>0x2000</code>, which points
                    to the string object <code>"Mark Sanchez"</code> stored elsewhere in
                    memory.
                </li>
            </ul>
            <p>
                <strong>Review of what is being stored in memory:</strong>
            </p>

            <div className="">
                <SyntaxHighlighter language="terminal" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {storedInMemory}
                </SyntaxHighlighter>
            </div>

            <p>It may seem strange to do all this extra work for reference variables (class variables), but there are few reasons why this happens:</p>

            <ol>
                <li>
                    <strong>Efficient memory usage:</strong> multiple variables can point to the same object in memory, which will actually save space when the same string is used in many places.
                </li>
                <li>
                    <strong>Object sharing &amp; manipulation:</strong> you can pass around references to objects, allowing methods to modify or access the same data without copying it.
                </li>
                <li>
                    <strong>Support for large and complex data:</strong> objects can be much larger than primitives. Storing only an address in the variable keeps variable size small and predictable.
                </li>
                <li>
                    <strong>Consistency with object-oriented design:</strong> all class-type variables work this way, making Java's memory management consistent and flexible.
                </li>
            </ol>


            <h2>Comments</h2>

            <p><em>Wait a second, what are comments?</em></p>

            <p>
                Comments are notes that document lines or sections of the program. The compiler ignores them, as they are intended for people who may be reading the source code. They are intended for programmers to read them, and to help understand <em>the why</em> of the code.
            </p>

            <ul>
                <li>
                    <strong>Single-line Comments:</strong> (<code>//</code>) at the beginning of your line.
                </li>
                <li>
                    <strong>Multi-line Comments:</strong> starts with and ends with <code>/* Some code in here */</code>. Everything between the markers is ignored.
                </li>
                <li>
                    <strong>Documentation Comments:</strong> These comments are read and processed by a program named <strong>JavaDoc</strong>, which comes with the JDK. The Javadoc program reads Java source code files and generates attractively formatted HTML files that document the source code. Using <code>/** Documentation */</code>, you can run the Javadoc program from the command prompt using the Javadoc command:

                    <div className="">
                        <SyntaxHighlighter language="terminal" style={tomorrow}
                            wrapLines={true} className=" code-snippet">
                            {javadoc}
                        </SyntaxHighlighter>
                    </div>
                </li>
                <li>
                    <strong>Block comments:</strong> Some programmers like to visually separate comments from surrounding code.

                    <div className="">
                        <SyntaxHighlighter language="java" style={tomorrow}
                            wrapLines={true} className=" code-snippet">
                            {comments}
                        </SyntaxHighlighter>
                    </div>
                </li>
            </ul>

            <h2>To do</h2>

            <p>
                Pull up an IDE and try the following exercises. If you cannot do them off the top of your head, then review this section.
            </p>

            <ol>
                <li>In the console, ask the user for their first name, middle name, and last name. Print out their initials.</li>
            </ol>

        </div>
    )
}