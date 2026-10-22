import quizList from "./quizList"
import { Link } from 'react-router-dom'
import Card from '@mui/joy/Card'
import QuestionList from "../selectAQuestion/QuestionList"
import Carousel from "./Carousel"

export default function QuizList() {
    return (
        <>
            <main>

                <div className="container">
                    <h1>Select a Quiz</h1>
                    <Carousel style>
                        {quizList.map(quiz => (
                            <Link to={`/quiz/${quiz.id}`} className='quiz-cards'>
                                <Card>
                                    <img src={quiz.cardImage} style={{ width: '200px' }} />
                                    <li key={quiz.id} style={{ textAlign: 'center' }}>{quiz.title}</li>
                                </Card>
                            </Link>
                        ))}
                    </Carousel>
                    <sm><em>More quizzes to come soon!</em></sm>
                </div>
                <QuestionList />
            </main>
        </>
    )
}