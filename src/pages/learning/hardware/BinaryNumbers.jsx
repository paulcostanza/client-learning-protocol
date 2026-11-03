import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function BinaryNumbers() {
    const quizImports = {
        hardware: () => import('../../quiz/database/HardwareQuestions.js')
    }

    return (
        <div className="container">
            <h1>Binary Numbers</h1>

            <p>A computer's tiniest software measurement is called a <strong>bit</strong>. Bits are all 0s and 1s. 1 bit can be either a <code>0</code> for off, or a <code>1</code> for on.</p>

            <p>The next step up from a bit is a byte. A <strong>byte</strong> is made up of 8 bits, meaning we have 8 available spots in memory.</p>

            <p>The way you read and write binary is that you want to start from the right side. Each spot is a power of <code>2</code>, represented by the first line. The second line shows what the powers of two equal:</p>

            <p style={{ textAlign: "center" }}>| <code>2<sup>7</sup></code> | <code>2<sup>6</sup></code> | <code>2<sup>5</sup></code> | <code>2<sup>4</sup></code> | <code>2<sup>3</sup></code> | <code>2<sup>2</sup></code> | <code>2<sup>1</sup></code> | <code>2<sup>0</sup></code> |</p>

            <p style={{ textAlign: "center" }}>| <code>128</code> | <code>64</code> | <code>32</code> | <code>16</code> | <code>8</code> | <code>4</code> | <code>2</code> | <code>1</code> |</p>

            <p>Since bits have the property of on or off, a value of...</p>

            <ul>
                <li><code>1</code> means that the position is on</li>
                <li><code>0</code> means that the position is off</li>
            </ul>

            <p>When the position is on we only add that bit's numeric representation. Example: using only four bits, the binary number <code>1001</code> is equal to 9. We read binary from right to left. Starting from the right side:</p>

            <ul>
                <li>the first <code>1</code> is in the <code>2<sup>0</sup></code> place, meaning a decimal value of 1.</li>
                <li>the first <code>0</code> is in the <code>2<sup>1</sup></code> place. This place is off, meaning we don't care about its value.</li>
                <li>the second <code>0</code> is in the <code>2<sup>2</sup></code> place. This place is off, meaning we don't care about its value.</li>
                <li>the second <code>1</code> is in the <code>2<sup>3</sup></code> place, meaning a decimal value of 8.</li>
            </ul>

            <p>Add it up and we get 9!</p>

            <p>In our example we used 4 bits, and before that we explained a byte is 8 bits. It does not if you are working with 4-bit, 8-bit, 64-bit, 128-bit, etc. You just keep adding powers of 2 and you can figure out any binary number!</p>

            <h2>Review</h2>

            {/* <div className="">
                            <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                                {recursiveRecipe}
                            </SyntaxHighlighter>
                        </div> */}

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="binary-numbers"
            />
        </div>
    )
}