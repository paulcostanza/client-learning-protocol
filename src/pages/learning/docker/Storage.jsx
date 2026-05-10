import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Storage() {
    const quizImports = {
        docker: () => import('../../../pages/quiz/database/DockerQuestions.js')
    }
    return (
        <div className="container">
            <h1>Storage</h1>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="intro"
            />
        </div>
    )
}