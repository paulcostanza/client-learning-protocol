import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Ram101() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const oneThreeFive = `random_data = [1, 3, 5]`

    const oneThreeFiveHiDude = `diff_rand_data = [1, 3, 5, "hi", "dude"]`

    return (
        <div className="container">
            <h1>RAM 101</h1>

            <p><strong>Data structures</strong> are a way to store data in an efficient manner inside of a computer component called <strong>Random Access Memory</strong>. RAM is often just referred to as <em>memory</em> and is where all of our variables are going to be stored. Let's start with how a list is stored in RAM.</p>

            <p>Even though a list is an ordered collection of ints, strings, etc., computers only understand data in terms of <strong>bits</strong>, <code>0</code>s and <code>1</code>s.</p>

            <p>Most computers these days have gigabytes (GBs) of RAM. The computer you are using might have 8 GB (8 x 10<sup>9</sup> bytes, about a 8 billion bytes) of RAM. A <strong>byte</strong> of RAM is made up of exactly 8 bits.</p>

            <p>Let's use an example list:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {oneThreeFive}
                </SyntaxHighlighter>
            </div>

            <p>In memory this looks like...</p>

            <ul>
                <li><code>00000000 00000000 00000000 00000001</code> for <code>1</code></li>
                <li><code>00000000 00000000 00000000 00000011</code> for <code>3</code></li>
                <li><code>00000000 00000000 00000000 00000101</code> for <code>5</code></li>
            </ul>

            <p>Integers commonly occupy 4 bytes (32 bits) in memory. An <strong>address</strong> and a <strong>value</strong> get associated with an integer upon storing it in RAM. An address is just a distinct location that each one of the values is stored at. We do not choose which addresses in memory are used. The operating system and runtime handle that for us. For the purposes of this lesson, we'll pretend each value is stored next to the previous one in memory. This simplified model will help us understand how data structures work.</p>

            <blockquote>
                <p>You do not always need to display all the zeros that exist in memory when talking about memory. For sanity sake, we could have just told you 4 bytes and displayed...</p>
                <ul>
                    <li><code>0001</code> for <code>1</code></li>
                    <li><code>0011</code> for <code>3</code></li>
                    <li><code>0101</code> for <code>5</code></li>
                </ul>
                <p>The previous example was to give you an understanding that 32-bits IS ACTUALLY 32-bits in memory. In most cases when learning or discussing the topic, you shorten it. Always be sure to check and understand the context!</p>
            </blockquote>

            <p>What our list of ints looks like in RAM:</p>

            <table className='memory'>
                <thead>
                    <tr>
                        <td>Address</td>
                        <td>Value</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>$0</td>
                        <td><code>1</code></td>
                    </tr>
                    <tr>
                        <td>$4</td>
                        <td><code>3</code></td>
                    </tr>
                    <tr>
                        <td>$8</td>
                        <td><code>5</code></td>
                    </tr>
                </tbody>
            </table>

            <blockquote>
                <p>The dollar sign is used to distinguish addresses from values, the addresses are labeled with "$"</p>
            </blockquote>

            <p>Each integer occupies 4 bytes of space, hence the addresses are 4 bytes apart.</p>

            <p>Let's add some strings to our program. Our new example:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {oneThreeFiveHiDude}
                </SyntaxHighlighter>
            </div>

            <p>And what it looks like in memory:</p>

            <table className='memory'>
                <thead>
                    <tr>
                        <td>Address</td>
                        <td>Value</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>$0</td>
                        <td><code>1</code></td>
                    </tr>
                    <tr>
                        <td>$4</td>
                        <td><code>3</code></td>
                    </tr>
                    <tr>
                        <td>$8</td>
                        <td><code>5</code></td>
                    </tr>
                    <tr>
                        <td>$12</td>
                        <td><code>h</code></td>
                    </tr>
                    <tr>
                        <td>$13</td>
                        <td><code>i</code></td>
                    </tr>
                    <tr>
                        <td>$14</td>
                        <td><code>d</code></td>
                    </tr>
                    <tr>
                        <td>$15</td>
                        <td><code>u</code></td>
                    </tr>
                    <tr>
                        <td>$16</td>
                        <td><code>d</code></td>
                    </tr>
                    <tr>
                        <td>$17</td>
                        <td><code>e</code></td>
                    </tr>
                </tbody>
            </table>

            <blockquote>
                <p>Wait... why is <code>hi</code> only taking up two bytes in memory?</p>
            </blockquote>

            <p>Integers are easy to work with in memory because they all occupy the same amount of space. Strings on the other hand are different. They can contain different numbers of characters, thus take up different amounts of space. Each ascii character takes up one byte of space.</p>

            <h2>Conclusion</h2>

            <p>The size of the type of data we store doesn't really matter, as long as the address in incremented relative to the size of the data type. The fact that elements are stored at predictable memory locations is what makes indexing so fast. To find the element at index 2, the computer can calculate its memory location directly instead of searching through the entire collection. This property is one of the main reasons arrays/list are such an important data structure.</p>

            <blockquote>
                <p>Be warned, we are simplifying how memory works so we can understand the important concept behind data structures and algorithms. Most of the time this knowledge is abstracted away from us as developers, but it is relevant to understand many algorithms and data structures. This oversimplification will help us but make no mistake, it gets a lot deeper.</p>
            </blockquote>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="ram-101"
            />
        </div>
    )
}