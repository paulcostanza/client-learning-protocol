import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import Dropdown from '../../../Helpers/Dropdown.jsx'

export default function IntroToIostream() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }

    const iostream = `#include <iostream>`

    const stdCout = `#include <iostream> // for std::cout

int main()
{
    std::cout << "Hello world!"; // print Hello world! to console

    return 0;
}`

    const chaining = `#include <iostream>

int main()
{
    int number{ 69 };
    std::cout << number << " " << number << "!!";

    return 0;
}`

    const chainingConsole = `69 69!!`

    const noEndl = `#include <iostream> // for std::cout

int main()
{
    std::cout << "Hi!";
    std::cout << "My name is Paul";
    return 0;
}`

    const noEndlConsole = `Hi!My name is Paul`

    const endl = `#include <iostream> // for std::cout and std::endl

int main()
{
    std::cout << "Hi!" << std::endl; // std::endl will cause the cursor to move to the next line
    std::cout << "My name is Paul." << std::endl;
    return 0;
}`

    const endlConsole = `Hi!
My name is Paul.`

    const newLine = `#include <iostream> // for std::cout

int main()
{
    int x{ 5 };
    std::cout << "x is equal to: " << x << '\n'; // single quoted (by itself) (conventional)
    std::cout << "Yep." << "\n";                 // double quoted (by itself) (unconventional but okay)
    std::cout << "And that's all, folks!\n";     // between double quotes in existing text (conventional)
    return 0;
}`

    const newLineConsole = `x is equal to: 5
Yep.
And that's all, folks!`

    const cin = `#include <iostream>  // for std::cout and std::cin

int main()
{
    std::cout << "Enter a number: "; // ask user for a number

    int x{};       // define variable x to hold user input (and value-initialize it)
    std::cin >> x; // get number from keyboard and store it in variable x

    std::cout << "You entered " << x << '\n';
    return 0;
}`

    const cinConsole = `Enter a number: 4
You entered 4`

    const cinIsBuffered = `#include <iostream>  // for std::cout and std::cin

int main()
{
    std::cout << "Enter two numbers: ";

    int x{};
    std::cin >> x;

    int y{};
    std::cin >> y;

    std::cout << "You entered " << x << " and " << y << '\n';

    return 0;
}`

    const simpleExtraction = `int x{};
std::cin >> x:`

    const checkpoint = `#include <iostream>  // for std::cout and std::cin

int main()
{
    std::cout << "Enter a number: "; // ask user for a number
    int x{}; // define variable x to hold user input
    std::cin >> x; // get number from keyboard and store it in variable x
    std::cout << "You entered " << x << '\n';

    return 0;
}`

    return (
        <div className="container">
            <h1>Intro To Iostream</h1>

            <p>Let's output text, as well as get input from the user.</p>

            <h2>The input/output library</h2>

            <p>The <strong>input/output library</strong> (io library) is part of the <em>C++ standard library</em> that deals with basic input and output. We will use the functionality in this library to get input from the keyboard and output data to the console. The io poart of iostream stands for <em>input/output</em>.</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {iostream}
                </SyntaxHighlighter>
            </div>

            <p>The <em>iostream</em> has a few predefined variables for us to use. Let's explore some of them.</p>

            <h2><code>std::cout</code></h2>

            <p><code>std::cout</code> is used to send data to the console to be printed as text. <code>cout</code> stands for <em>character output</em>.</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {stdCout}
                </SyntaxHighlighter>
            </div>

            <p>In this program, we have included iostream so that we have access to <code>std::cout</code>. Inside our <code>main</code> function, we use <code>std::cout</code>, along with the <strong>insertion operator</strong> (<code>&lt;&lt;</code>), to send the text <code>Hello world!</code> to the console to be printed. </p>

            <p><code>std::cout</code> can be used to print numbers and the value of variables as well. You can print more than one thing on the same line by simply <em>chaining</em> the insertion operator multiple times in a single statement to concatenate (link together) multiple pieces of output.</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {chaining}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {chainingConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Using <code>std::endl</code> to output a newline</h2>

            <p>What would you expect this program to print?</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {noEndl}
                </SyntaxHighlighter>
            </div>

            <p>You might be surprised at the result:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {noEndlConsole}
                </SyntaxHighlighter>
            </div>

            <p>Separate output statements <em>do not</em> result in separate lines of output on the console.</p>

            <p>If we want to print separate lines of output to the console, we need to tell the console to move the cursor to the next line. We can do that by outputting a newline. A <strong>newline</strong> is an OS-specific character or sequence of characters that moves the cursor to the start of the next line.</p>

            <p>One way to output a newline is to output <code>std::endl</code> (which stands for <em>end line</em>). </p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {endl}
                </SyntaxHighlighter>
            </div>

            <p>You might be surprised at the result:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {endlConsole}
                </SyntaxHighlighter>
            </div>

            <p>As you may have been able to guess, the second <code>std::endl</code> is not technically necessary, since the program ends immediately afterward. However, it serves a few useful purposes...</p>

            <ul>
                <li>It helps indicate that the line of output is a <em>complete thought</em></li>
                <li>It positions the cursor to the next line, so that if we later add additional lines of output those lines will appear where we expect - rather than appended to the prior line of output</li>
                <li>After running an executable from the command line, some operating systems do not output a new line before showing the command prompt again. If our program does not end with the cursor on a new line, the command prompt may appear appended to the prior line of output, rather than at the start of a new line as the user would expect.</li>
            </ul>

            <h2><code>std::cout</code> is buffered</h2>

            <p>Consider a rollercoaster ride at an amusement park. Passengers show up at random times and get in line. Periodically, a train arrives and boards passengers up to the maximum capacity of the train. When the train is full, or when enough time has passed, the train departs with a batch of passengers, and the ride commences. Any passengers unable to board the current train wait for the next one.</p>

            <p>This analogy is similar to how output sent to <code>std::cout</code> is typically processed in C++. Statements in our program request that output be sent to the console. However, that output is typically not sent to the console immediately. Instead, the requested output <em>gets in line</em>, and is stored in a region of memory set aside to collect such requests, which is called a <strong>buffer</strong>. Periodically, the buffer is <strong>flushed</strong>, meaning all of the data collected in the buffer is transferred to its destination (in this case, the console). </p>

            <p>This also means that if your program crashes, aborts, or is paused (for debugging purposes) before the buffer is flushed, any output still waiting in the buffer will not be displayed.</p>

            <blockquote>
                <p>The opposite of buffered output is unbuffered output. With unbuffered output, each individual output request is sent directly to the output device.</p>
                <p>Writing data to a buffer is typically fast, whereas transferring a batch of data to an output device is comparatively slow. Buffering can significantly increase performance by batching multiple output requests together to minimize the number of times output has to be sent to the output device.</p>
            </blockquote>

            <h2><code>std::endl</code> vs <code>\n</code></h2>

            <p>Using <code>std::endl</code> is inefficient. It does two jobs:</p>

            <ul>
                <li>outputs a newline - moves the cursor to the next line of the console</li>
                <li>flushes the buffer - which is slow. If we output multiple lines of text ending with <code>std::endl</code> we will get multiple flushes, which is slow and most likely unnecessary.</li>
            </ul>

            <p>When outputting text to the console, we typically do not need to explicitly flush the buffer ourselves. C++'s output system is designed to self-flush periodically, and it is both simpler and more efficient to let it flush itself. </p>

            <p>To output a newline without flushing the output buffer, we use the newline character (<code>\n</code>) with either single or double quotes on its own, or added to an existing string. This will move the cursor to the next line of the console without causing a flush, so it will perform better.</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {newLine}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {newLineConsole}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>Even though <code>'\n'</code> is represented in source code as two symbols, it is treated by the compiler as a single character, enabling us to use single quotes if you want.</p>
            </blockquote>

            <h2><code>std::cins</code></h2>

            <p>Another predefined variable in the iostream library, <code>std::cin</code> (character input) reads input from the keybaord. We use the <strong>extraction operator</strong> (<code>&gt;&gt;</code>) to put the input data in a variable, which can then be used in subsequent statements.</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow} showInlineLineNumbers={true}
                    wrapLines={true} className=" code-snippet">
                    {cin}
                </SyntaxHighlighter>
            </div>

            <p>When you run this program, line 5 prints <code>Enter a number:</code>. When the code gets to line 8, your program will wait for you to enter input. Once you enter a number and press enter, the number you enter will be assigned to variable <code>x</code>. Finally on line 10, the program will print <code>You entered</code> followed by the number you just entered. </p>

            <p>If the user entered the value <code>4</code>:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {cinConsole}
                </SyntaxHighlighter>
            </div>

            <h2><code>std::cin</code> is buffered</h2>

            <p>Inputting data is a two stage process:</p>

            <ol>
                <li>The individual characters you enter as input are added to the end of an input buffer, inside <code>std::cin</code>. The enter key, which is pressed to submit data, is also stored as a <code>'\n'</code> character.</li>
                <li>The extraction operator <code>&gt;&gt;</code> removes characters from the front of the input buffer and converts them into a value that is assigned to the associated variable. This variable can then be used in subsequent statements.</li>
            </ol>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {cinIsBuffered}
                </SyntaxHighlighter>
            </div>

            <p>Let's run this program twice in which the user enters numbers in different ways:</p>

            <h3>Run #1</h3>

            <ul>
                <li><code>std::cin &gt;&gt; x;</code> is encountered, the program will wait for input</li>
                <li>User enters the value <code>4</code>. The input <code>4\n</code> goes into the input buffer</li>
                <li>the value <code>4</code> is extracted to variable <code>x</code></li>
                <li><code>std::cin &gt;&gt; y;</code> is encountered, the program will again wait for input</li>
                <li>user enters the value <code>5</code>. The input <code>5\n</code> goes into the input buffer</li>
                <li>the value <code>5</code> is extracted to variable <code>y</code></li>
                <li>the program prints <code>You entered 4 and 5</code></li>
            </ul>

            <h3>Run #2</h3>

            <ul>
                <li><code>std::cin &gt;&gt; x;</code> is encountered, the program will wait for input</li>
                <li>the user enters <code>4 5</code> The input <code>4 5\n</code> goes into the input buffer</li>
                <li>only the value <code>4</code> is extracted to variable <code>x</code>, as extraction stops at the space</li>
                <li><code>std::cin &gt;&gt; y</code> is encountered, the program will <em>not</em> wait for input, as <code>5</code> is still in the input buffer and is extracted to variable <code>y</code></li>
                <li>the program then prints <code>You entered 4 and 5</code></li>
            </ul>

            <p>Since there was already prior input in the input buffer, the program did not wait for the user to enter addition input.</p>

            <h2>The basic extraction process</h2>

            <p>How <code>&gt;&gt;</code> works...</p>

            <ol>
                <li>If <code>std::cin</code> is not in a good state, meaning the prior extraction failed and <code>std::cin</code> has not yet been cleared, no extraction is attempted, and the extraction process aborts immediately.</li>
                <li>Leading whitespace characters such as spaces, tabs, and newlines at the front of the buffer are discarded from the input buffer. This will discard an unextracted newline character remaining from a prior line of input.</li>
                <li>If the input buffer is now empty, operator <code>&gt;&gt;</code> will wait for the user to enter more data. Any leading whitespace is discarded from the entered data.</li>
                <li>Operator <code>&gt;&gt;</code> then extracts as many consecutive characters as it can, until it encounters either a newline character (which represents the end of the line of input) or a character that is not valid for the variable being extracted to.</li>
            </ol>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {simpleExtraction}
                </SyntaxHighlighter>
            </div>

            <p>Let's look at three different input cases for the example code above:</p>

            <ol>
                <li>If the user types <code>5a</code> and enter...</li>
                <ul>
                    <li><code>5a\n</code> will be added to the buffer</li>
                    <li><code>5</code> will be extracted, converted to an integer and assigned to variable <code>x</code></li>
                    <li><code>a\n</code> will be left in the input buffer for the next extraction</li>
                </ul>
                <li>If the user types <code>b</code> and enter</li>
                <ul>
                    <li><code>b\n</code> would be added to the buffer</li>
                    <li>since <code>b</code> is not a valid integer, no characters will be extracted, so we end up with <strong>extraction failer</strong></li>
                    <li>variable <code>x</code> is set to <code>0</code>, and future extractions will fail until the input stream is cleared</li>
                </ul>
                <li><code>std::cin</code> is not in a good state due to a prior failed extraction</li>
                <ul>
                    <li>nothing happens</li>
                    <li>value of <code>x</code> is *not* altered</li>
                </ul>
            </ol>

            <h2>Checkpoint</h2>

            <p>Considered the following code:</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {checkpoint}
                </SyntaxHighlighter>
            </div>

            <p>Describe the output of the following types of input: </p>

            <Dropdown
                questions={[
                    "The letter: g",
                    "A number with a fractional part: 2.7 -or- 7.2",
                    "-1",
                    "The word: Hello",
                    "A really big number, at least 3 billion",
                    "123abc",
                    "abc123",
                    "5b6"
                ]}
                answers={[
                    `0 is always printed. An integer can't hold a letter, so extraction completely fails. x is assigned the value 0.`,
                    "The fractional part is removed and not rounded. Given the number 2.7, the 2 gets extracted, but . is an invalid character, so extraction stops here. The .7 remains for a future extraction attempt.",
                    "The entered number is output. A minus sign at the beginning of a number is acceptable, so it is extracted. The remaining numbers are extracted as well.",
                    "0 is always printed. An integer cannot hold a letter, so extraction completely fails. x is assigned the value 0.",
                    "You are most likely to get the number 2147483647. x can only hold numbers up to a certain size. If you enter a value larger than the largest number x can hold, it will be set to the largest number that x can hold (which is probably 2147483647, but might be different on your system).",
                    "The numeric values are printed (e.g. 123). 123 is extracted, the remaining characters (e.g. abc) are left for a later extraction.",
                    "0 is always printed. An integer cannot hold a letter, so extraction completely fails. x is assigned the value 0.",
                    "5 is printed. 5 is extracted. b is invalid, so extraction stops here. The b6 remains for a future extraction attempt."
                ]}
            />

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro-to-iostream"
            />
        </div>
    )
}