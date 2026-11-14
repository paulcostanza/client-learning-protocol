import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReaskLoop from '../../../assets/python/inputAndOutput/reask loop.png'

export default function InputAndOutput() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const input = `name = input("Your name? ")
drink = input("What can I get you? ")
 
print(f"One {drink} for {name}!")`

    const inputOutput = `Your name? Sam
What can I get you? oat latte
One oat latte for Sam!`

    const badInput = `age = input("Age? ")    # typed: 30
print(age + 1)`

    const wrongAnswer = `a = input("First score: ")    # typed: 5
b = input("Second score: ")   # typed: 5
print(a + b)                  # 55`

    const convertingInput = `age = int(input("Age? "))
print(f"Next year: {age + 1}")`

    const formatSpec = `price = 4.5
print(f"$\{price:.2f} ")     # $4.50
print(f"{100 / 3:.1f}")     # 33.3`

    const addComma = `fans = 1234567
print(f"{fans:,}")          # 1,234,567`

    const fixedPointAndComma = `total = 98765.4
print(f"$\{total:,.2f}")     # $98,765.40`

    const width = `print(f"[{'tea':<8}]")    # [tea     ]
print(f"[{'tea':>8}]")    # [     tea]
print(f"[{'tea':^8}]")    # [  tea   ]`

    const prices = `prices = {"Coffee": 3.5, "Bagel": 2.25}
for item in prices:
    cost = prices[item]
    print(f"{item:<10}{cost:>6.2f}")`

    const pricesOutput = `Coffee      3.50
Bagel       2.25`

    const reaskWithAnd = `reply = input("Continue? (yes/no) ")
while reply != "yes" and reply != "no":
    reply = input("Please type yes or no: ")`

    const reaskLoop = `pick = input("Pick 1, 2, or 3: ")
while pick not in ["1", "2", "3"]:
    pick = input("Type 1, 2, or 3: ")
 
print(f"You picked option {pick}.")`

    const reaskLoopOutput = `Pick 1, 2, or 3: 4
Type 1, 2, or 3: two
Type 1, 2, or 3: 2
You picked option 2.`

    return (
        <div className="container">
            <h1>Input & Output</h1>

            <p>A program normally runs from start to finish without waiting for anyone. However, we could use something like <code>input()</code> that allows us to stop partway, ask a question, and wait for the answer:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {input}
                </SyntaxHighlighter>
            </div>

            <p>The program will still run top to bottom, but it stops at each <code>input()</code> until the question is answered. The second question only appears after we answer the first. One full run looks like this, with the typed answers after each question:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {inputOutput}
                </SyntaxHighlighter>
            </div>

            <p>Each <code>input()</code> call does three things:</p>

            <ul>
                <li>Prints the <em>prompt</em> and pauses the program</li>
                <li>Waits until the user presses the Enter key</li>
                <li>Returns whatever they typed, which we store in a variable</li>
            </ul>

            <p>After that, <code>name</code> and <code>drink</code> are ordinary strings. Anything we can do with a string, like dropping it into an f-string, works on them.</p>

            <blockquote>
                <p><code>input()</code> never adds a space after the prompt. Without one, the answer runs straight into the question: <code>Your name?Sam</code>. End every prompt with a space.</p>
            </blockquote>

            <h2>Converting input with <code>int()</code> and <code>float()</code></h2>

            <p><code>input()</code> returns exactly what was typed, as text. Type <code>30</code> and we get the string <code>"30"</code>, not the number 30. That breaks the moment we do math, in one of two ways.</p>

            <p>1. It crashes:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {badInput}
                </SyntaxHighlighter>
            </div>

            <p>Python stops with <code>TypeError: can only concatenate str (not "int") to str</code>, because it cannot add a number to text.</p>

            <p>2. It quietly gives the wrong answer:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {wrongAnswer}
                </SyntaxHighlighter>
            </div>

            <p>For strings using the addition sign means <em>join</em>, so <code>"5" + "5"</code> is <code>"55"</code>. No error, just a believable wrong answer.</p>

            <h3>Convert the answer</h3>

            <p>Wrap the <code>input()</code> call in <code>int()</code> or <code>float()</code>, and the variable holds a number from the start:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {convertingInput}
                </SyntaxHighlighter>
            </div>

            <p>Reading it from the inside out, <code>input()</code> returns <code>"30"</code>, <code>int()</code> turns it into <code>30</code>, and finally <code>age</code> stores the number. The braces in an f-string can hold any expression, so <code>&#123;age + 1&#125;</code> does the math right there.</p>

            <ul>
                <li><code>int()</code> for whole numbers such as ages, counts, & scores</li>
                <li><code>float()</code> for anything with a decimal point such as prices, distances, & temperatures.</li>
            </ul>

            <blockquote>
                <p><code>int()</code> is strict. <code>int("3.5")</code> crashes with a <code>ValueError</code>, and so does any answer that is not a number, such as <code>"thirty"</code>.</p>
            </blockquote>

            <h2>Formatting numbers with format specs</h2>

            <p>An f-string can control how a number looks, not just where it goes. After the value, add a colon and a <strong>format spec</strong>, a short code that describes how the value should print:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {formatSpec}
                </SyntaxHighlighter>
            </div>

            <h3>Decimal places</h3>

            <p><code>.2f</code> means <em>show exactly two decimal places</em>, rounding as needed, so <code>2.678</code> prints as <code>2.68</code> and <code>2.6</code> prints as <code>2.60</code>. Change the number to change the count: <code>.1f</code> shows one decimal. The <code>f</code> stands for <em>fixed-point</em>, a number with a set count of decimals.</p>

            <h3>Thousands separators</h3>

            <p>A comma in the spec puts a comma between every group of three digits, which makes big numbers readable at a glance.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {addComma}
                </SyntaxHighlighter>
            </div>

            <p>When combining fixed-point and comma, you must place the comma first:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {fixedPointAndComma}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>A format spec changes only how the number prints. After <code>print(f"&#123;price:.2f&#125;)</code>, the variable price still hnolds 4.5, and any math on it uses the full value.</p>
            </blockquote>

            <h2>Lining up columns with width and alignment</h2>

            <p>A format spec can also give a value a minimum <em>width</em>, meaning the total number of characters it takes up when printed. Shorter values get padded with spaces to fill it. A symbol before the width picks which side the value sits on:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {width}
                </SyntaxHighlighter>
            </div>

            <p>In the example, a total of <code>8</code> spaces is being taken up by each print statement. We place <code>tea</code> within those eight spaces depending on the symbol that precedes it.</p>

            <ul>
                <li><code>&lt;</code> lines the value up on the left</li>
                <li><code>&gt;</code> lines the value up on the right</li>
                <li><code>&#94;</code> centers the value in the middle</li>
            </ul>

            <p>With no symbol however, text goes left and numbers go right. For something like <code>f"&#123;42:8&#125;"</code>, it prints six spaces and then <code>42</code>. The <code>8</code> means the last digit in <code>42</code> ends on the eighth position.</p>

            <h3>Printing columns</h3>

            <p>Fixed widths are how we print columns that line up, whatever the length of each value:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {prices}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {pricesOutput}
                </SyntaxHighlighter>
            </div>

            <p>Width works with the number specs too. In <code>&gt;6.2f</code> the order is alignment, then width, then decimals. A thousands separator goes right after the width, as in <code>&#123; total:&gt;12, &#125;</code></p>

            <blockquote>
                <p>Text lines up on the left and numbers on the right. That matches how people scan a table, and it keeps the decimal points stacked.</p>
            </blockquote>

            <h2>Re-asking until the answer if valid</h2>

            <p>A program that trusts every answer breaks the first time someone types something unexpected. A better program checks the answer first, and if it is bad, will ask again.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {reaskWithAnd}
                </SyntaxHighlighter>
            </div>

            <p>Ask once, then loop for as long as the answer is bad, asking again each time. The loop only ends on a good answer, so every line after it can trust <code>reply</code>.</p>

            <p>Now, this approach works with one or two possible options. However, when you have a list of possible options it can make your code pretty messy really quick. To fix this we can place our potential items inside a <code>list</code> and use our old friend <code>not in</code> like so:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {reaskLoop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {reaskLoopOutput}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>not in</code> evaluates to <code>True</code> when the value is missing from the list.</li>
                <li>The list holds strings because that is what <code>input()</code> returns</li>
                <li>After the loop, <code>int(pick)</code> is safe, because the answer can only be <code>"1"</code>, <code>"2"</code>, or <code>"3"</code>.</li>
            </ul>

            <img className="img-in-reading" src={ReaskLoop} alt="Flow chart for when a user types in data that is not exceptable" />

            <blockquote>
                <p>The only way out is a good, exceptable answer that will not crash or fu¢k up your program.</p>
            </blockquote>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="input-and-output"
            />
        </div>
    )
}