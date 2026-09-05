import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Backtracking() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const caseA = `sum([2, 4, 6])
    2 + sum([4, 6])
        4 + sum([6])
            6 + sum([])     # base case
            6 + 0           # now we resolve
        4 + 6
    2 + 10
12                          # our answer
`

    const caseB = `def sum(nums):
    def helper(idx, running_total):
        if idx == len(nums):
            return running_total

        return helper(idx + 1, running_total + nums[idx])
    return helper(0, 0)
`

    return (
        <div className="container">
            <h1>Backtracking</h1>

            <p>When applying recursion to summing a list of numbers, we have two different ways to do this:</p>

            <p><code>Case A:</code> return the answer directly. The sum of the list is the first number plus the sum of everything after the first number.</p>

            <p>Our example we will use: <code>sum([2, 4, 6])</code>. Let's examine how the call goes down the call stack:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {caseA}
                </SyntaxHighlighter>
            </div>

            <p><code>Case A</code> has each frame hold a smaller slice of the list. The position of where you are within that list is remembered <strong>implicitly</strong> by how deep we are in the call stack. This means we do not add numbers on the way down. Each stack frame pauses and waits until we hit our base case. Then, as the stack unwinds, it adds on its way back up.</p>

            <p>The key idea for <code>Case A</code> is that each recursive call returns a value to the previous call, holding all of the un-added numbers waiting to be summed. This should make sense, as this is what we are use to from the last sections.</p>

            <p><code>Case B:</code> a <code>helper</code> function is introduced to carry the state:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {caseB}
                </SyntaxHighlighter>
            </div>

            <p>Even though this looks way more complex, the basic idea is not too out there. Instead of letting the recursive calls build the answer on the way back, we carry the answer with us as we go.</p>

            <p>Let's use our previous example: <code>nums = [2, 4, 6]</code>. We will list the current calls to <code>helper</code> as we go, starting with its default:</p>

            {/* turn this into a table please */}
            <ul>
                <li><code>helper(0, 0)</code>      {"   "}     -&gt; <code>idx</code> = <code>0</code> | <code>running_total</code> = <code>0</code></li>
                <li><code>helper(1, 0 + nums[0])</code> -&gt; <code>idx</code> = <code>1</code> | <code>running_total</code> = <code>2</code> (because <code>num[0]</code> is <code>2</code>)</li>
                <li><code>helper(2, 2 + nums[1])</code> -&gt; <code>idx</code> = <code>2</code> | <code>running_total</code> = <code>6</code> </li>
                <li><code>helper(3, 2 + nums[2])</code> -&gt; <code>idx</code> = <code>3</code> | <code>running_total</code> = <code>12</code></li>
            </ul>

            <p>We then hit our base case since <code>idx</code> (<code>3</code>) equals the length of our list <code>nums</code>.</p>

            <p>With <code>Case B</code>, we pass the data forward <strong>explicitly</strong> in the parameters.</p>

            <blockquote>
                <p>Yeah, that's cool and all... but what the hell is the point of that?!</p>
            </blockquote>

            <p>Understanding what the difference between the two cases is essential to backtracking. <code>Case A</code> adds to the result <em>after</em> the recursive call returns. <code>Case B</code> is building the calculation <em>as you go</em>. <code>Case B</code> addition of using an index is the differential factor from <code>Case A</code>. <code>Case B</code> uses the index to keep track of where you are and keeps a current tracker of what you have done. </p>

            <blockquote>
                <p><code>Case B</code> carries the total of the sum of the list <strong>explicitly</strong> as <code>Case A</code> carries it <strong>implicitly</strong>, waiting to add it when the stack unwinds as it goes back up the chain.</p>
            </blockquote>

            <h2>What is backtracking?</h2>

            <p><strong>Backtracking</strong> is a problem-solving algorithmic technique that involves finding a solution incrementally by trying different options and undoing them as soon as you hit a dead end. It is a recursive algorithm that is used to solve problems by making a series of choices. When a choice leads to a dead end it <em>backtracks</em> to the last valid choice made and tries a different path.</p>


            <hr />

            <h2>Review</h2>



            <ReviewQuiz
                quizImports={quizImports}
                subcategory="backtracking"
            />
        </div>
    )
}