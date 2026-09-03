```jsx
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Backtracking() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    return (
        <div className="container">
            <h1>Backtracking</h1>

            <hr />

            <h2>Review</h2>

            {/* <div className="">
                            <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                                {recursiveRecipe}
                            </SyntaxHighlighter>
                        </div> */}

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="backtracking"
            />
        </div>
    )
}
```