import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

import quizList from "./quizList"
import { Link } from 'react-router-dom'

export default function QuizList() {
    return (
        <>
            <NavBar />
            <div>
                <h1>Select a Quiz</h1>
                <ul>
                    {quizList.map(quiz => (
                        <li key={quiz.id}>
                            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    )
}

// add button to come back to select a quiz
// add another file of questions!
