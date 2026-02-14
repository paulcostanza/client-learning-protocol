import { Link, useLocation, useNavigate } from 'react-router-dom'
import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"
import { problemsList } from './Problems/Python/ProblemsList'

export default function Testing() {
    const navigate = useNavigate()

    const handleRowClick = (problem) => {
        console.log(`You have selected problem: ${problem.title}`)
        navigate(`/basics/testing/${problem.id}`)
    }

    return (
        <div className='container'>
            <h1>Practice the basics: Python</h1>

            <Paper elevation={9} >
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ textSize: '20px' }}>
                                    Hello World
                                </TableCell>
                                <TableCell style={{ textAlign: 'center' }}>
                                    Status
                                </TableCell>
                                <TableCell style={{ textAlign: 'center' }} >
                                    Review
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {problemsList.helloWorld
                                .map(problem => {
                                    // const nextReviewTimestamp = getNextReview(q.quizKey, q.id)
                                    // const review = getHumanReadableNextReview(nextReviewTimestamp)
                                    // const status = review === 'Ready!' ? 'ready' : getQuestionStatus(q.quizKey, q.id)

                                    return (
                                        <tr
                                            key={`${problem.id}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleRowClick(problem)}
                                        >
                                            <td>{problem.title}</td>
                                            <td align="center">
                                                {problem.status}
                                                {/* {status === 'correct' && <span>✔️</span>}
                                                {status === 'incorrect' && <span>❌</span>}
                                                {status === 'ready' && <span>❓</span>} */}
                                            </td>
                                            <td align="center">{problem.review}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                </Box>
            </Paper>

            <hr />

            <Paper elevation={9} >
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ textSize: '20px' }}>
                                    Calculator
                                </TableCell>
                                <TableCell style={{ textAlign: 'center' }}>
                                    Status
                                </TableCell>
                                <TableCell style={{ textAlign: 'center' }} >
                                    Review
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {problemsList.calculator
                                .map((problem, idx) => {

                                    return (
                                        <tr
                                            key={`${problem.id}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleRowClick(problem)}
                                        >
                                            <td>{problem.title}</td>
                                            <td align="center">
                                                {problem.status}
                                                {/* {status === 'correct' && <span>✔️</span>}
                                                {status === 'incorrect' && <span>❌</span>}
                                                {status === 'ready' && <span>❓</span>} */}
                                            </td>
                                            <td align="center">{problem.review}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                </Box>
            </Paper>
        </div>
    )
}

