import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function AlgorithmsProblemSolvingPatterns() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }



    return (
        <div className="container">
            <h1>Algorithms: Problem Solving Patterns</h1>

            <p>The following are reusable strategies that can be applied to various problems. They are not tied to just one problem, but applicable across many problems to improve efficiency for time and/or space. Some of the topics we will talk about include:</p>

            <ul>
                <li>Sliding window</li>
                <li>Fast & slow pointers</li>
                <li>Binary search</li>
                <li>Prefix sums</li>
                <li>Backtracking</li>
                <li>Greedy algorithms</li>
            </ul>



            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="algorithms-problem-solving-patterns"
            />
        </div>
    )
}