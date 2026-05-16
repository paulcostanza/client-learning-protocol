import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Strings() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }

    return (
        <div className="container">
            <h1>Strings</h1>

            {/* <div className="">
                <SyntaxHighlighter language="c++" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {something}
                </SyntaxHighlighter>
            </div> */}

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="strings"
            />
        </div>
    )
}