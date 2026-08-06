import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function TwoPointersAndSlidingWindow() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const coreConceptExample = `List: [1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13]
       ^                                 ^
    Left (1)                          Right (13)`

    const coreConceptMoveRight = `List: [1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13]
       ^                             ^
    Left (1)                      Right (12)`

    const twoPointer = `array = [2, 5, 8, 12, 16, 23]

def two_pointer_demo(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
    
        if current_sum == target:
            return([arr[left], arr[right]])
        elif current_sum < target:
            left += 1
        else:
            right -= 1
            
    return "Not found"

print(two_pointer_demo(array, 18))
print(two_pointer_demo(array, 19))`

    const twoPointerOutcome = `[2, 16]
Not found`

    return (
        <div className="container">
            <h1>Two Pointers & Sliding Window</h1>

            <p>The brute-force way to find the <em>best pair</em> in an array is to test out every possible pair. Going in order usually requires iterating through two <code>for</code> loops, resulting in <code>O(n<sup>2</sup>)</code>. What is cool about the two-pointer technique is that you can do a similar search to find your pair, but in <code>O(n)</code> time. The reason for this is that you are able to visit pairs by traversing your list with one pass, rather than two!</p>

            <p>The <strong>two-pointer technique</strong> is a strategy used to efficiently solve problems that involve searching for a pair of elements or a subarray that meets a certain condition. It involves using two pointers that traverse the data structure, often a list or linked list, and manipulates their positions based on the problem requirements. It only works when moving a pointer changes the answer in a predictable direction (aka <em>monotonicity</em>, more on this later).</p>

            <p>The improved time complexity is accomplished by understanding the <strong>elimination invariant</strong>. This is a fancy way of saying that each pointer that moves must be able to justify that all pairs you just skipped over could not have been (or lead you towards) the answer you are looking for. If you cannot state this argument, then you cannot use this technique.</p>

            <blockquote>
                <p>An essential concept to grasp is that two-pointers does not just randomly skip pairs... you are mathematically proving that the pairs you skip are <em>useless</em>. </p>
            </blockquote>

            <h2>Core concept</h2>

            <p>Imagine you have a sorted list and you are looking for two numbers that add up to a target value, say <code>11</code>.</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {coreConceptExample}
                </SyntaxHighlighter>
            </div>

            <p>If we were to brute force this (two <code>for</code> loops) we would be testing every single possible set of pairs. However, the two-pointer approach starts at the two extreme ends with a <code>left</code> pointer and a <code>right</code> pointer. At any given moment, the two pointers form a <em>window</em>. Everything outside the pointers is considered eliminated, while everything inside the window is still a possible solution. This is where our <em>elimination invariant</em> starts to make sense. </p>

            <blockquote>
                <p>An <strong>invariant</strong> is a rule that stays true throughout the entire execution of your code. In this context, the <strong>elimination invariant</strong> means that every time you move a pointer, you must be 100% certain that the elements you are leaving behind can never form the best pair with any other remaining element.</p>
            </blockquote>

            <p>We are ready to search for <code>11</code> in our example:</p>

            <ul>
                <li><code>left</code> points to 1</li>
                <li><code>right</code> points to 13</li>
                <li>our current sum <code>1 + 13 = 14</code> is too big</li>
            </ul>

            <p>Since the list is sorted, <code>13</code> is the largest number available. If adding <code>13</code> to our smallest number <code>1</code> is already too big, then adding <code>13</code> to any other number must <em>also</em> be too big. We now have the <em>proof</em>! The pairs <code>(2, 13)</code>, <code>(3, 13)</code>, <code>(4, 13)</code>, <code>(6, 13)</code>, <code>(8, 13)</code>, <code>(9, 13)</code>, <code>(10, 13)</code>, <code>(11, 13)</code>, and <code>(12, 13)</code> are mathematically guaranteed to be greater than <code>11</code>. Because we just proved <code>13</code> is useless to us, we can safely discard it by shifting the <code>right</code> pointer inward like so:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {coreConceptMoveRight}
                </SyntaxHighlighter>
            </div>

            <p>By moving right from <code>13</code> to <code>12</code>, we just skipped 9 pairs! Our code does not need to check them because we <em>know</em> they were not the answer. With two-pointers, every time you move a pointer one step inward, you are not just eliminating one pair... you are eliminating an entire row or column of pairs. Brute force explores the entire grid of pairs while two pointer will eliminate a whole slice of the grid based on logic with each step. Since you only move the pointers a combined total of <code>n</code> times before they meet in the middle, you only do <code>O(n)</code> work.</p>

            <p>However, if your list is unsorted or if your condition does not have a clear direction (as in too big or too small), you cannot use two pointers. </p>

            <h2>Framework</h2>

            <p>We have four specific questions we need to answer to properly execute the two-pointer technique:</p>

            <ul>
                <li><strong>What is the state?</strong> What variables are you tracking? <code>left</code>, <code>right</code>, <code>max_area</code>, etc.</li>
                <li><strong>What is the invariant?</strong> What is true about the stuff you have not visited? Example, any pair involving the discarded pointer can <em>no longer</em> produce a valid or better solution.</li>
                <li><strong>When do you move which pointer?</strong> What is the exact condition to make a move? Ex: move <code>l</code> if <code>height[l] &lt; height[r]</code></li>
                <li><strong>Why is it safe to make this move?</strong> What is the elimination proof that moving it is the right thing to do?</li>
            </ul>

            <blockquote>
                <p>As you work through two-pointer questions, try to name exactly which pairs or windows each pointer move eliminates and why it is safe.</p>
            </blockquote>

            <h2>Two-Pointer Technique in action</h2>

            <p>Here we have an example of a problem where you need to find a pair of elements in a sorted array that sum up to a given target.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {twoPointer}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {twoPointerOutcome}
                </SyntaxHighlighter>
            </div>

            <p>Our pointers are the two variables <code>left</code> and <code>right</code>, with both starting on the opposite ends of the list. We loop through the list looking for the two elements that add up to <code>target</code>.</p>

            <p>If the sum is greater than <code>target</code>, our sum is too high and we need to lower the higher number, so the <code>right</code> index is lowered by one. This cancels out all pairs (<code>left</code>, <code>right</code>) where (<code>left = right-1, right-2,...</code>, <code>right</code>) If our sum is lower than <code>target</code>, our sum is too low and we need to raise the lower number, so the <code>left</code> index is raised by one.</p>

            <p>If <code>left</code> is greater than or equal to <code>right</code>, that means we have traversed the whole array and we <em>do not</em> have two elements that add up to the <code>target</code>.</p>

            <hr />

            <h2>Review</h2>

            <p><strong>Monotonicity</strong> (or Monotonic Property): The <em>one-way street</em> rule. It means as a value or pointer moves in one direction, the output only changes in one direction (it only increases, or it only decreases). Without this, two pointers fails.</p>

            <p><strong>Invariant</strong>: A condition or rule that must always remain true throughout the entire execution of your loop. For example, in a sliding window, the invariant might be <em>the window contains zero duplicate characters.</em></p>

            <p>Two pointers only works when moving a pointer lets you permanently elminate possibilities. This requires some <em>monotonic property</em>, such as a sorted array or another structure where moving left or right changes the result predictably. If you cannot prove that a pointer's movement can safely discard candidates, then two pointers is not the correct approach for the problem.</p>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="two-pointers-and-sliding-window"
            />

        </div>
    )
}