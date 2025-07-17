import quizList from "./quizList"
import { Link } from 'react-router-dom'

import Card from '@mui/joy/Card'
import Box from '@mui/joy/Box'
import CardCover from '@mui/joy/CardCover'

export default function QuizList() {
    return (
        <>
            <main>
                <div className="container">
                    <h1>Select a Quiz</h1>

                    <Box
                        componet="ul"
                        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0, justifyContent: 'center' }}
                    >
                        {quizList.map(quiz => (
                            <Link to={`/quiz/${quiz.id}`} className='quiz-cards'>
                                <Card>
                                    {/* <CardCover> */}

                                    <img src={quiz.cardImage} style={{ width: '200px' }} />
                                    <li key={quiz.id} style={{ textAlign: 'center' }}>{quiz.title}</li>
                                    {/* </CardCover> what does this do? */}

                                </Card>
                            </Link>
                        ))}

                    </Box>

                </div>
            </main>
        </>
    )
}