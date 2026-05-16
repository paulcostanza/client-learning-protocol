import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Comments() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }

    const helloWorld = `std::cout << "Hello world!"; // everything from here to the end of the line is ignored`

    const singleLineComments = `std::cout << "Hello world!\\n"; // std::cout lives in the iostream library
std::cout << "It is very nice to meet you!\\n"; // these comments make the code hard to read
std::cout << "Yeah!\\n"; // especially when lines are different lengths`

    const linedUpSingleLineComments = `std::cout << "Hello world!\\n";                  // std::cout lives in the iostream library
std::cout << "It is very nice to meet you!\\n;"  // this is much easier to read
std::cout << "Yeah!\\n";                         //  don't you think so?`

    const commentsAboveLine = `// std::cout lives in the iostream library
std::cout << "Hello world!\\n";

// this is much easier to read
std::cout << "It is very nice to meet you!\\n;"

// don't you think so?
std::cout << "Yeah!\\n";`

    const multilineComment = `/* This is a multi-line comment.
   This line will be ignored.
   So will this one. */`

    const multilineCommentBeautified = `/* This is a multi-line comment.
 * the matching asterisks to the left
 * can make this easier to read
 */`

    const badComments = `// Bad comments
// set sight range to 0
sight = 0;

// calculate the cost of the items
cost = quantity * 2 * storePrice;`

    const goodComments = `// Good comments
// the player just drank a potion of blindness and can not see anything
sight = 0;

// we need to multiply by 2 because the item is bought in pairs
cost = quantity * 2 * storePrice;`

    return (
        <div className="container">
            <h1>Comments</h1>

            <p>A <strong>comment</strong> is a programmer-readable note that is inserted directly into the source code of the program. Comments are ignored by the compiler and are for the programmer's use only.</p>

            <h2>Single-line comments</h2>

            <p>The <code>//</code> symbol begins a C++ single-line comment, which tells the compiler to ignore everything from the <code>//</code> symbol to the end of the line.</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {helloWorld}
                </SyntaxHighlighter>
            </div>

            <p>Typically, the single-line comment is used to make a quick comment about a single line of code.</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {singleLineComments}
                </SyntaxHighlighter>
            </div>

            <p>Having comments to the right of a line can make both the code and the comment hard to read, particularly if the line is long. If the lines are fairly short, the comments can be simply aligned (usually to a tab stop) like so:</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {linedUpSingleLineComments}
                </SyntaxHighlighter>
            </div>

            <p>However, if the lines are long, placing comments to the right can make your lines really long. In that case, single-line comments are often placed above the line it is commenting:</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {commentsAboveLine}
                </SyntaxHighlighter>
            </div>

            <h2>Multi-line comments</h2>

            <p>The <code>/*</code> and <code>*/</code> pair of symbols denotes a C-style multi-line comment. Everything in between the symbols is ignored.</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {multilineComment}
                </SyntaxHighlighter>
            </div>

            <p>Since everything between the symbols is ignored, you will sometimes see programmers <em>beautify</em> their multi-line comments:</p>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {multilineCommentBeautified}
                </SyntaxHighlighter>
            </div>

            <h2>Proper use of comments</h2>

            <p>Comments are primarily used for three things:</p>

            <ol>
                <li><strong>Describing what the library, program, or function does.</strong> These are typically placed at the top of the file, library, or preceding a function. The user (possibly someone else, or even yourself) can tell at a glance if the code is relevant to what is trying to be accomplished.</li>
                <ul>
                    <li><code>// This program calculates the stufent's final grade based on their test and homework scores.</code></li>
                    <li><code>// This function uses Newton's method to approximate the root of a fiven equation.</code></li>
                    <li><code>// The following lines generate a random item based on rarity, level, and a weight factor.</code></li>
                </ul>
                <li>Within a library, program, or function described above, comments can be used to descibe <strong>how the code is going to accomplish its goal</strong>. These comments give the user an idea of how the code is going to accomplish its goal without having to understand what each individual line of code does.</li>
                <ul>
                    <li><code>/* To calculate the final grade, we sum all the weighted midterm and homework scores and then divide by the number of scores to assign a percentage, which is used to calculate a letter grade. */</code></li>
                </ul>
                <li>At the statement level, comments should be used to describe <strong>why the code is doing something</strong>.</li>
                <ul>
                    <li>Bad comments explain what the code is doing. Something simple and obvious does not need a comment about <em>what</em> is going on.</li>
                </ul>
            </ol>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {badComments}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="cpp" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {goodComments}
                </SyntaxHighlighter>
            </div>

            <p>Programmers often have to make a tough decision between solving a problem one way, or solving it another way. Comments are a great way to remind yourself (or tell somebody else) the reason you made one decision instead of another.</p>

            <h2>Commenting out code</h2>

            <p>Converting one or more lines of code into a comment is called <strong>commenting out</strong> your code. This provides a convenient way to (temporarily) exclude parts of your code from being included in your compiled program.</p>

            <blockquote>
                <p>Why would I want to comment out code?</p>
            </blockquote>

            <ol>
                <li><strong>You are working on a new piece of code that won't run.</strong> Commenting out the code that is preventing your program from running will allow it to run. When you are ready, you can uncomment the code to continue working on it.</li>
                <li><strong>To find the source of an error.</strong> If a program is not producing the desired results or is crashing, it can sometimes be useful to disable parts of your code to see if you can isolate what is causing it to not work correctly. If you comment out one or more lines of code, and your program starts working as expected or stops crashing, odds are whatever you last commented out was part of the problem.</li>
                <li><strong>You want to replace one piece of code with another piece of code.</strong> Instead of just deleting the original code, you can comment it out and leave it there for reference until you are sure your new code works properly. Once you are sure your new code is working, you can remove the old commented out code. If you cannot get your new code to work, you can always delete the new code and uncomment the old code to revert to what you had before.</li>
            </ol>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="comments"
            />
        </div>
    )
}