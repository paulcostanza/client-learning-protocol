import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Loops() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const forLoop = `for _ in range(6):
    print("Hello World")`

    const forLoopConsole = `Hello World
Hello World
Hello World
Hello World
Hello World
Hello World`

    const forLoopStartAndStop = `for num in range(4, 9):
    print(num)`

    const forLoopStartAndStopOutput = `4
5
6
7
8`

    const forLoopWithList = `scores = [82, 79, 91, 65]
 
for score in scores:
    print(score)`

    const forLoopWithListOutput = `82
79
91
65`

    const forLoopWithString = `phrase = "Hell's yeah"
 
for char in phrase:
    print(char)`

    const forLoopWithStringOutput = `H
e
l
l
\'
s

y
e
a
h`

    const continueExample = `for floor in range(1, 16):
    if floor == 13:
        continue

    print(f"Floor at hotel: {floor")`

    const continueExampleConsole = `Floor at hotel: 1
Floor at hotel: 2
Floor at hotel: 3
Floor at hotel: 4
Floor at hotel: 5
Floor at hotel: 6
Floor at hotel: 7
Floor at hotel: 8
Floor at hotel: 9
Floor at hotel: 10
Floor at hotel: 11
Floor at hotel: 12
Floor at hotel: 14
Floor at hotel: 15`

    const forLoopBreak = `usernames = ["guest", "admin", "root"]
 
for name in usernames:
    print(name)
    if name == "admin":
        print("Found admin!")
        break`

    const forLoopBreakOutput = `guest
admin
Found admin!`

    const nestedLoop = `grid = [['o', 'o', 'x'],
        ['x', 'o', 'o'],
        ['x', 'x', 'o'],]
        
for row in range(len(grid)):
    for col in range(len(grid[row])):
        if grid[row][col] == 'x':
            print(f'Critical hit at coordinates ({row}, {col})!')`


    const nestedLoopOutput = `Critical hit at coordinates (0, 2)!
Critical hit at coordinates (1, 0)!
Critical hit at coordinates (2, 0)!
Critical hit at coordinates (2, 1)!`

    const whileLoop = `start = 7

while start > 0:
    print(start)
    start -= 1`

    const whileLoopConsole = `5
4
3
2
1`

    return (
        <div className="container">
            <h1>Loops</h1>

            <p>Image having to repeat the same work over and over. Writing and rewriting the same thing can become tedious real quick. That's why we use loops! It runs the same block of code more than once. We write the logic one time and let python handle the repetition.</p>

            <h2>The <code>for</code> loop</h2>

            <p>The simplest loop uses the function <code>range()</code> with a single number. It starts at 0 and counts up to, but not including, that number:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopConsole}
                </SyntaxHighlighter>
            </div>

            <p>Indentation marks what belongs inside the loop. Anything indented under the <code>for</code> loop runs on every iteration.</p>

            <p>The underscore (<code>_</code>) represents a <em>junk</em> variable. It's assigned a value, but the value is not used in the code, so there is no point naming the variable.</p>

            <p>We can also give <code>range()</code> a start and an end. The start is included, the end is still not:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopStartAndStop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopStartAndStopOutput}
                </SyntaxHighlighter>
            </div>

            <p>In addition, the <code>for</code> loop allows you to iterate over elements inside a <code>list</code>.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopWithList}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopWithListOutput}
                </SyntaxHighlighter>
            </div>

            <p>And even more in addition, python allows us to loop through strings, one character at a time: </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopWithString}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopWithStringOutput}
                </SyntaxHighlighter>
            </div>

            <h3><code>continue</code></h3>

            <p><code>continue</code> allows you to skip items that you do not want to use in a loop... <em>Go directly to the next iteration of this loop.</em></p>

            <p>Since <code>continue</code> immediately halts the current iteration and jumps to the next one, it saves the program from doing unnecessary work.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {continueExample}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {continueExampleConsole}
                </SyntaxHighlighter>
            </div>

            <h3><code>break</code></h3>

            <p><code>break</code> exits the loop immediately, even if more items or iterations remain:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopBreak}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {forLoopBreakOutput}
                </SyntaxHighlighter>
            </div>

            <p>It is great to use <code>break</code> when we have found what we need and there is no reason to finish the rest.</p>

            <h2>Nested loops</h2>

            <p>A <strong>nested loop</strong> is a loop inside another loop. The inner loop runs all the way through for every single pass of the outer loop.</p>

            <p>For example, a grid whould be a natural fit. Each row is a list, and the grid is a list of those rows:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {nestedLoop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {nestedLoopOutput}
                </SyntaxHighlighter>
            </div>

            <h2>The <code>while</code> loop</h2>

            <p>
                The <code>while</code> loop provides a way to repeatedly execute a block of code as long as a specified condition is <code>True</code>. It is a versatile construct for situations where the number of iterations is <i>not</i> known beforehand.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {whileLoop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {whileLoopConsole}
                </SyntaxHighlighter>
            </div>

            <p>
                If the while loop's condition is not properly defined or contains a logical error within the body that causes it to always evaluate to <code>True</code>, the loop will continue to execute indefinitely, resulting in an <strong>infinite loop</strong>. This means that the code inside the loop will keep running repeatedly without ever exiting, which can lead to performance issues and may even cause the program to become unresponsive.
            </p>

            <p>Notice in the example how the variable <code>start</code> iterates down by one each loop. This means the conditional statement <code>start &gt; 0</code> ends when <code>start</code> is equal to <code>0</code>.</p>

            <p><code>0</code> is not less than <code>0</code>, thus ending the loop.</p>

            <hr />

            <h2>Review</h2>

            {/* <div className="">
                            <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                                {recursiveRecipe}
                            </SyntaxHighlighter>
                        </div> */}

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="loops"
            />
        </div>
    )
}

// explain range() and stepping