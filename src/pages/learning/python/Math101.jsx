import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Math101() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }
    const exponentOperator = `print(2**10)`

    const exponentOperatorConsole = `1024`

    const moduloOperator = `dividend = 19
divisor = 5

remainder = dividend % divisor
print(remainder)`

    const moduloOperatorConsole = `4`

    const floorDivisionOperator = `dividend = 25
divisor = 9

quotient = dividend // divisor
print(quotient)`

    const floorDivisionOperatorConsole = `2`

    const rounding = `pi_value = 3.14159
rand_value = 3.6

rounded_pi_value = round(pi_value)
rounded_rand_value = round(rand_value)
print(rounded_pi_value)
print(rounded_rand_value)`

    const roundingConsole = `3
4`

    const floatToInt = `a = 3.14

integer_value = int(a)
print(integer_value)`

    const floatToIntConsole = `3`

    const absoluteValue = `a = -5

absolute_value = abs(a)
print(absolute_value)`

    const absoluteValueConsole = `5`

    const max = `largest = max(954, 654, 84848, -1132158)
print(largest)`

    const maxConsole = `84848`

    const intToFloat = `integer_number = 42
float_number = float(integer_number)`

    const intToFloatConsole = `42.0`

    const posAndNegInfinity = `negative_infinity = float("-inf")
positive_infinity = float("inf")

5 < positive_infinity       # True
-100 > negative_infinity    # True`

    const stayInfinite = `float("inf") + 1      # inf
float("-inf") - 1     # -inf`

    const numToString = `number = 33

string_number = str(number)
print(string_number)`

    const numToStringConsole = `"33"`

    const truthy = `result = bool(1)
print(result)`

    const truthyConsole = `True`

    const falsy = `result = bool(0)
print(result)`

    const falsyConsole = `False`

    return (
        <div>
            <h1>Math 101</h1>

            <h2>Exponent Operator</h2>
            <p>
                A squared number is obtained by multiplying an integer by itself. For example, 4 is a square number because it is 2^2. In Python, you can use the <code>**</code> operator to calculate the power of a number, which includes calculating square numbers. The <code>**</code> operator raises a number to the specified exponent.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {exponentOperator}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {exponentOperatorConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Remainder in Programming</h2>
            <p>
                In programming, the <code>%</code> symbol represents the <b>modulo</b> operator. It is used to calculate the remainder of a division operation between two numbers.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {moduloOperator}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {moduloOperatorConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Floor division operator</h2>

            <p>
                In programming, the floor division operator is used to perform division between two numbers and obtain the quotient as an integer, ensuring that any fractional part is discarded.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {floorDivisionOperator}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {floorDivisionOperatorConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Rounding Numerical Values</h2>

            <p>
                Rounding numerical values is a process of approximating a number to a certain precision or number of decimal places. Rounding is commonly used to simplify or represent numbers in a more readable or manageable form. The most straightforward rounding method is to round a number to the nearest integer. The rules are as follows:
            </p>

            <ul>
                <li>if the decimal part is 0.5 or greater, round up</li>
                <li>if the decimal part is less than 0.5, round down</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {rounding}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {roundingConsole}
                </SyntaxHighlighter>
            </div>

            <blockquote><code>round</code> is a built-in method in Python, just like <code>print</code>. Over time you will see and learn lots of them.</blockquote>

            <h2>Finding absolute values</h2>

            <p>
                The <code>abs</code> function allows you to find the absolute value of a number. The absolute value of a number is its distance from zero, without considering its sign.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {absoluteValue}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {absoluteValueConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Max</h2>

            <p>Find the highest number the pythonic way:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {max}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {maxConsole}
                </SyntaxHighlighter>
            </div>

            <p>This function takes in as many numbers as you want and returns the largest one.</p>

            <h2>Converting values into an integer</h2>

            <p>
                This function allows you to convert a value into an integer. This is helpful when you want to work with numerical data, or when you need to change the data type of variable. It basically throws out everything after the decimal point, which is process known as <b>truncation</b>.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {floatToInt}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {floatToIntConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Convert integer to a float</h2>

            <p>
                You can convert an integer to a float by passing the integer to the <code>float()</code> function. This type conversion allows you to work with numbers that have decimal points.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {intToFloat}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {intToFloatConsole}
                </SyntaxHighlighter>
            </div>

            <p><code>float()</code> can also create a numeric floating point of infinity. Because every value will be greater than negative infinity, we can use it to help us accomplish our goal of finding the max value. Same is true for finding the min value for positive infinity.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {posAndNegInfinity}
                </SyntaxHighlighter>
            </div>

            <p>An important behavior to be made aware of is that regardless of adding to positive infinity or subtracting from negative infinity, they will stay infinite.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {stayInfinite}
                </SyntaxHighlighter>
            </div>

            <h2>Convert a number to a string</h2>

            <p>
                This funciton converts a value into a string. This is useful when you want to represent non-string data as text.
            </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {numToString}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {numToStringConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Boolean conversion</h2>

            <p>Since we've been talking about conversions, let's throw in some Boolean action.</p>

            <p>
                Converting values into boolean is the process of evaluating an expression or a value and representing it as either <code>True</code> or <code>False</code>. Every value has an inherent truthiness or falsiness.
            </p>

            <p>
                When converted to a boolean, a value is considered either <i>truthy</i>, evaluates to <code>True</code>, or <i>falsy</i>, evalutes to <code>False</code>. The determination is based on whether the value is logically considered true or false.
            </p>

            <b>Common Truthy Values</b>

            <ul>
                <li>Non-zero numbers: any non-zero numerical value is truthy</li>
                <li>Non-empty sequences: strings, lists, and other iterable structures are truthy if they contain elements</li>
                <li>Non-element dictionaries: a dictionary is truthy if it has at least one key-value pair</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {truthy}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {truthyConsole}
                </SyntaxHighlighter>
            </div>

            <b>Common Falsy Values</b>

            <ul>
                <li>Zero: the number zero (0) is falsy</li>
                <li>Empty sequences: empty strings, lists, and other iterable structures are falsy</li>
                <li>None: the special constant <code>None</code> is falsy</li>
                <li>False: the bollean value <code>False</code> is falsy</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {falsy}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {falsyConsole}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="math-101"
            />

        </div>
    )
}