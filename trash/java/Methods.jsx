import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import QuestionTableList from '../../../components/QuestionTableList.jsx'
import ModalForQuestions from '../../quiz/ModalForQuestions.jsx'

import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"

import DeclareScannerMethodBreakdown from '../../../assets/java/methods/declare a scanner object.png'

export default function Methods() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [refresh, setRefresh] = useState(0)

    const quizImports = {
        java: () => import('../../quiz/database/JavaQuestions.js')
    }

    function handleRowClick(question) {
        setSelectedQuestion(question)
        setModalOpen(true)
    }

    function handleAnswered() {
        setRefresh(r => r + 1)
        setModalOpen(false)
    }

    const length = `int stringSize = name.length();`

    const methodCalls = `referenceVariable.method(arguments...);`

    const methodExamples = `// example #1
char letter;
String name = "Herman";
letter = name.charAt(3); // 'm'

// example #2
int stringSize;
String name = "Herman";
stringSize = name.length(); // 6

// example #3
String bigName = "HERMAN";
String littleName = bigName.toLowerCase(); // "herman"

// example #4
String littleName = "herman";
String bigName = littleName.toUpperCase(); // "HERMAN";
`

    const importScanner = `import java.util.Scanner;`

    const createScannerObject = `Scanner keyboard = new Scanner(System.in);`

    const scannerMethods = `// setup
System keyboard = new Scanner(system.in);

// nextByte
byte x;
System.out.print("Enter a byte value: ");
x = keyboard.nextByte();
keyboard.close();

// nextDouble
double numberDouble;
System.out.print("Enter a double value: ");
numberDouble = k.nextDouble();

// nextFloat
float numberFloat;
System.out.print("Enter a float value: ");
numberFloat = keyboard.nextFloat();

// nextInt
int numberInt;
System.out.print("Enter an integer value: ");
numberInt = k.nextInt();

// nextLine
String name;
System.out.print("Enter your name: ");
name = keyboard.nextLine();

// nextLong
long numberLong;
System.out.print("Enter a long value: ");
numberLong = k.nextLong();

// nextShort
short numberShort;
System.out.print("Enter a short value: ");
numberShort = keyboard.nextShort();

// closing
keyboard.close();
`

    const charAt = `String input;
char answer;
Scanner keyboard = new Scanner(System.in);

System.out.print("Are you having fun: (Y=yes, N=No) ");
input = keyboard.nextLine();

answer = input.charAt(0);
keyboard.close();`

    const nextLineIssue = `Scanner keyboard = new Scanner(System.in);

System.out.print("Enter your age: ");
int age = keyboard.nextInt(); // user enters: 23 [Enter]

System.out.print("Enter your name: ");
String name = keyboard.nextLine(); // this reads the leftover newline, not the name!
`

    const nextLineIssueFixed = `Scanner keyboard = new Scanner(System.in);

System.out.print("Enter your age: ");
int age = keyboard.nextInt();
keyboard.nextLine(); // consume the leftover newline

System.out.print("Enter your name: ");
String name = keyboard.nextLine(); // now this works as expected
`

    return (
        <div>
            <h1>Methods</h1>

            <p>
                So what are these methods that are associated with the <code>String</code> class that we keep talking about? Well, there are quite a few. There is one called <code>length</code> that will return the length of the string stored in an object. We use it like so:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {length}
                </SyntaxHighlighter>
            </div>

            <p>
                This statement calls the <code>length</code> method of the object that <code>name</code> refers to (from previous section). To <em>call</em> a method means to execute it. The general form of a method call is as follows:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {methodCalls}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>referenceVariable</code>: the name of a variable that references an object</li>
                <li><code>method</code>: name of the method</li>
                <li><code>arguments</code>: zero or more pieces of data that the method plays with. In this case with <code>length</code>, we do not require additional information.</li>
            </ul>

            <p>Here are a few more important methods to help you get started:</p>

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
                                >Method</TableCell>
                                <TableCell style={{ textAlign: 'center' }}
                                >Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            <tr>
                                <td><code>charAt(index)</code></td>

                                <td>
                                    The argument <code>index</code> is an <code>int</code> value and specifies a character position in the string. The first character is at position 0, the second character is at position 1, and so forth. The method returns the character at the specified position. The return value is of the type <code>char</code>.
                                </td>
                            </tr>
                            <tr>
                                <td><code>length()</code></td>

                                <td>
                                    This method returns the number of characters in the string. The return value is of the type <code>int</code>
                                </td>
                            </tr>
                            <tr>
                                <td><code>toLowerCase()</code></td>

                                <td>
                                    This method returns a new string that is the lowercase equivalent of the string contained in the calling object.
                                </td>
                            </tr>
                            <tr>
                                <td><code>toUpperCase</code></td>

                                <td>
                                    This method returns a new string that is the uppercase equivalent of the string contained in the calling object.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <br />

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {methodExamples}
                </SyntaxHighlighter>
            </div>

            <h2>Scope</h2>

            <p><em>A variable's scope is the part of the program with access to that variable.</em></p>

            <p>
                Every variable has a <strong>scope</strong>. The scope of a variable is the part of the program where the variable may be accessed by its name. A variable is visible only to statements inside the variable's scope. These rules can get kind of complex, so we will start with just the basics for now.
            </p>
            <p>
                <strong>Local variables</strong> are variables declared inside of a method. The local variable's scope begins from when it is declared to the end of its method. The variable <em>cannot</em> be accessed by statements that are outside this region.
            </p>

            <h2>Reading Keyboard Input</h2>
            <p>
                Objects of the <strong>Scanner class</strong> can be used to read input from the keyboard. Scanner comes from the Java API object <code>System.in</code>, which refers to the standard input device (the keyboard). <code>System.in</code> can only read input as byte values, which is not very useful because programs normally require values of other data types as input. <strong>Scanner</strong> is designed to read input from a source (such as <code>System.in</code>) and it will provide methods that you can use to retrieve the input formatted as primitive values or strings.
            </p>

            <h3>Using the import statement</h3>

            <p>
                The Scanner class is not automatically available to your Java program, and you must import it at the top. This will tell the Java compiler where in the Java library to find the Scanner class and use it.
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {importScanner}
                </SyntaxHighlighter>
            </div>

            <h3>Create/Using the Scanner object</h3>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {createScannerObject}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>Scanner</code>: The data type of the declared variable.</li>
                <li><code>keyboard</code>: the name of the variable to choose. This will hold the address of the Scanner object (because the Scanner is a class type variable).</li>
                <li><code>new</code>: A Java keyword that creates an object in memory.</li>
                <li><code>Scanner(System.in)</code>: This specifies that a Scanner object should be created, and it should be connected to the <code>System.in</code> object. This is assigned to the variable keyboard.</li>
            </ul>


            <img src={DeclareScannerMethodBreakdown} alt="DeclareScannerMethodBreakdown" className='center-img' />

            <p>In memory, <code>keyboard</code> might look something like this:</p>

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
                        <td><code>keyboard</code></td>
                        <td><code>0x3000</code></td>
                        <td><code>0x1008</code></td>
                    </tr>
                </tbody>
            </table>

            <p>Now at address <code>0x3000</code>, the actual <code>Scanner</code> object is stored:</p>

            <table className='html-table'>
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>0x3000</code></td>
                        <td>Scanner object (with fields)</td>
                    </tr>
                </tbody>
            </table>

            <p>
                Just like with <code>String</code>, the variable <code>keyboard</code> holds the address of the <code>Scanner</code> object, not the object itself. The actual object (with its internal data and methods) is stored elsewhere in memory.
            </p>

            <h3>Using Scanner class methods</h3>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {scannerMethods}
                </SyntaxHighlighter>
            </div>

            <h3>Special Cases for Scanner class</h3>

            <p>
                <strong>char data type:</strong> There is no method to get a char data type, so the following is an example of how to get it using a combination of the Scanner class string method and the <code>charAt</code> method:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {charAt}
                </SyntaxHighlighter>
            </div>

            <h3>Mixing <code>nextLine</code> with other Scanner methods</h3>
            <p>
                When you call a Scanner class's method to read a primitive value, and follow up with the <strong>nextLine</strong> method, an annoying and hard-to-find problem can occur. There is a slight difference in behavior between the <strong>nextLine</strong> method and the other Scanner class methods. Unlike other methods, the <strong>nextLine</strong> method is not designed to skip over an initial newline character (which is created in the area of memory called the <strong>keyboard buffer</strong>). So if that is the first character that the nextLine method encountered, then nothing ends up being read. The solution is easy, just add <code>keyboard.nextLine()</code> to consume the remaining newline character. Use it after the primitive value, after the print line statement, and before assigning value to a variable.
            </p>
            <p>
                <em>Another way to look at the problem:</em><br />
                When the user types keystrokes on the keyboard, those keystrokes are stored in an area of memory that is sometimes called the <strong>keyboard buffer</strong>. Pressing the <strong>Enter</strong> key causes a newline character to be stored in the keyboard buffer. This isn't a problem when reading ints, doubles or floats, as the newline (<code>\n</code>) is ignored, because it is not a number. However, when trying to read strings, <strong>nextLine</strong> will only read the newline character and skip everything after it!
            </p>
            <p>
                <em>One more time:</em><br />
                When the user is typing input for a number variable, say an <code>int</code>, they type the number and then hit the enter button. For input, whenever enter is hit, it is stored in the <strong>keyboard buffer</strong>. Now this is fine going inputting number after number, but it becomes an issue if the user is entering a <code>String</code>. Rather than the string the user hits saves to the variable, the newline character from the enter button is.
            </p>
            <p>
                When using the <code>Scanner</code> class, you may run into problems if you mix methods like <code>nextInt()</code>, <code>nextDouble()</code>, etc. with <code>nextLine()</code>. This is because methods like <code>nextInt()</code> do <strong>not</strong> consume the newline character (<code>\n</code>) left in the input buffer when the user presses Enter. As a result, a following <code>nextLine()</code> may read only that leftover newline and return an empty string.
            </p>
            <p><strong>Example of the problem:</strong></p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {nextLineIssue}
                </SyntaxHighlighter>
            </div>

            <p><strong>How to fix:</strong></p>

            <p>
                After reading a primitive value, add an extra <code>nextLine()</code> to consume the leftover newline before reading a string:
            </p>

            <div className="">
                <SyntaxHighlighter language="java" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {nextLineIssueFixed}
                </SyntaxHighlighter>
            </div>

            <p>
                <strong>Summary:</strong><br /> Always use an extra <code>nextLine()</code> after reading a primitive value and before reading a string with <code>nextLine()</code>. This ensures you get the user's actual input, not just the leftover newline.
            </p>

            <h2>Review</h2>

            <QuestionTableList
                quizImports={quizImports}
                subcategory="methods"
                key={refresh}
                onRowClick={handleRowClick}
            />

            {/* when a user clicks on a question from table, this pops up */}
            <ModalForQuestions
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                question={selectedQuestion}
                onAnswered={handleAnswered}
            />
        </div>
    )
}