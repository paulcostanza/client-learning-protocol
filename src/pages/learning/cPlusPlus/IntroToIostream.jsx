import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function IntroToIostream() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }

    return (
        <div className="container">
            <h1>Intro To Iostream</h1>

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
                subcategory="intro-to-iostream"
            />
        </div>
    )
}