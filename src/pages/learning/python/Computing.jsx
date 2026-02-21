import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Latex from 'react-latex'

export default function Computing() {

    const scientificNotation = `print(16e3)
# prints 16000.0

print(7.1e-2)
# prints 0.071`

    const underScores = `num = 69_000
print(num)
# 69000

num2 = 789_012_345.67
print(num2)
# 789012345.67`

    const binaryInPython = `print(0b0001)
# Prints 1

print(0b0101)
# Prints 5`

    const bitwiseAndOperator = `  0101
& 0111
------
  0101`

    const andOperator = `0 & 0 = 0
1 & 1 = 1
1 & 0 = 0`

    const binaryNotation = `0b0101 & 0b0111
# equals 5

binary_five = 0b0101
binary_seven = 0b0111
binary_five & binary_seven
# equals 5`

    const convertBinary = `# this is a binary string
binary_string = "100"

# convert binary string to integer
num = int(binary_string, 2)`
    return (
        <>
            <h1>Computing</h1>

            <h2 id="scientific-notation">Scientific Notation</h2>

            <p><em>Scientific notation</em> is a way of expressing numbers that are too large or too small to conveniently write normally.</p>

            <p>You can add the letter <code>e</code> followed by a positive or negative integer to specify that you're using scientific notation.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {scientificNotation}
                </SyntaxHighlighter>
            </div>

            <h2 id="underscores-for-readability">Underscores for Readability</h2>

            <p>Python also allows you to represent large numbers in the decimal format using underscores as the delimiter instead of commas to make it easier to read.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {underScores}
                </SyntaxHighlighter>
            </div>

            <h2 id="binary-in-python">Binary in Python</h2>

            <p>You can write an integer in Python using binary syntax using the <code>0b</code> prefix:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {binaryInPython}
                </SyntaxHighlighter>
            </div>

            <p><em>Note</em> leading <code>0</code>s are often added for visual consistency but do not change the value of a binary number.</p>

            <h2 id="bitwise-codecode-operator">Bitwise <code>&amp;</code> Operator</h2>

            <p>Similar to logical operators, but instead of operating on boolean values, bitwise operators apply the same logic to all the bits in a value by column. Example, the numbers <Latex>$ 5 $</Latex> and <Latex>$ 7 $</Latex> represented in binary would result in <Latex>$ 5 $</Latex>.</p>

            <div className="">
                <SyntaxHighlighter language="bash" style={tomorrow} className="code-snippet">
                    {bitwiseAndOperator}
                </SyntaxHighlighter>
            </div>

            <p>A <Latex>$ 1 $</Latex> in binary is the same as <code>True</code>, while <Latex>$ 0 $</Latex> is <code>False</code>. So really a bitwise operation is just a bunch of logical operations that are completed in tandem by column.</p>

            <div className="center">
                <SyntaxHighlighter language="bash" style={tomorrow} className="center">
                    {andOperator}
                </SyntaxHighlighter>
            </div>

            <p>The binary <code>&amp;</code> (ampersand) will always produce the same or less amount of <Latex>$1 $</Latex>s. It is also referred to as masking or filtering.</p>

            <h2 id="bitwise-codecode-operator">Bitwise <code>|</code> Operator</h2>

            <p>The bitwise <em>or</em> operator is similar to the bitwise <em>and</em> operator in that it works on binary rather than boolean values. However, the bitwise <em>or</em> operator <em>or</em>s the bits together.</p>

            <h2 id="binary-notation">Binary Notation</h2>

            <p>Remember that when writing a number in binary, the prefix <code>0b</code> is used to indicate that what follows is a binary number. <code>0b10</code> is two in binary, but <code>10</code> without the <code>0b</code> prefix is simply ten.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {binaryNotation}
                </SyntaxHighlighter>
            </div>

            <h2 id="convert-binary">Convert Binary</h2>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {convertBinary}
                </SyntaxHighlighter>
            </div>

            <p>The first parameter in <code>int()</code> has to be a string of a binary number.</p>

        </>
    )
}