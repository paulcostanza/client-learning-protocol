import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function AlgorithmsProblemSolvingPatterns() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const twoPointer = `array = [2, 5, 8, 12, 16, 23]
eighteen = 18
nineteen = 19

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

print(two_pointer_demo(array, eighteen))
print(two_pointer_demo(array, nineteen))`

    const twoPointerOutcome = `[2, 16]
Not found`

    return (
        <div className="container">
            <h1>Algorithms: Problem Solving Patterns</h1>

            <h2>Two-Pointer Technique</h2>

            <p>The <strong>two-pointer technique</strong> is a strategy used to efficiently solve problems that involve searching for a pair of elements or a subarray that meets a certain condition. It typically involves using two pointers that traverse the data structure, often an array or a linked list, and manipulating their positions based on the problem requirements. The technique is particularly useful for optimizing the time complexity of the solution.</p>

            <p>Here we have an example of a problem where you need to find a pair of elements in a sorted array that sums up to a given target.</p>

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

            <p>If the sum is greater than <code>target</code>, our sum is too high and we need to lower the higher number, so the <code>right</code> index is lowered by one. If our sum is lower than <code>target</code>, our sum is too lower and we need to raise the lower number, so the <code>left</code> index is raised by one.</p>

            <p>If <code>left</code> is greater than <code>right</code>, that means we have traversed the whole array and we <em>do not</em> have two elements that add up to the <code>target</code>.</p>




            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="algorithms-problem-solving-patterns"
            />
        </div>
    )
}