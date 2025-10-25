import { useState } from 'react'
import QuestionTableList from './QuestionTableList.jsx'
import ModalForQuestions from '../pages/quiz/ModalForQuestions.jsx'

// the review questions at the bottom of a learning page
export default function ReviewQuiz({ quizImports, subcategory }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [refresh, setRefresh] = useState(0)

    function handleRowClick(question) {
        setSelectedQuestion(question)
        setModalOpen(true)
    }

    function handleAnswered() {
        setRefresh(r => r + 1)
        setModalOpen(false)
    }

    return (
        <>
            <QuestionTableList
                quizImports={quizImports}
                subcategory={subcategory}
                key={refresh}
                onRowClick={handleRowClick}
            />

            <ModalForQuestions
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                question={selectedQuestion}
                onAnswered={handleAnswered}
            />
        </>
    )
}