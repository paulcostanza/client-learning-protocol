import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"
import { problemsList } from './Problems/Python/ProblemsList'
import {
    getQuestionStatus,
    getNextReview,
    getHumanReadableNextReview,
} from '../../../Helpers/localStorageHelper'

export default function Testing() {
    const navigate = useNavigate()
    const quizKey = 'python-basics'

    const [problemStatuses, setProblemStatuses] = useState({})

    useEffect(() => {
        const statuses = {}
        for (const section of Object.keys(problemsList)) {
            for (const problem of problemsList[section]) {
                const status = getQuestionStatus(quizKey, problem.id)
                const nextReview = getNextReview(quizKey, problem.id)
                statuses[problem.id] = {
                    status,
                    review: getHumanReadableNextReview(nextReview)
                }
            }
        }
        setProblemStatuses(statuses)
    }, [])

    const handleRowClick = (problem) => {
        navigate(`/practice/python/${problem.id}`)
    }

    return (
        <div className='container'>
            <h1>Practice the basics: Python</h1>

            {/* Would like to turn each table into a dropdown as well. Can then impliment this nav bar: */}
            {/* Colapse all | Expand all | Jump to ToDo | Jump to furthest */}

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
                                    Strings
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
                                    const status = problemStatuses[problem.id]?.status
                                    const review = problemStatuses[problem.id]?.review

                                    return (
                                        <tr
                                            key={`${problem.id}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleRowClick(problem)}
                                        >
                                            <td>{problem.title}</td>
                                            <td align="center">
                                                {status === 'correct' && <span>✔️</span>}
                                                {status === 'incorrect' && <span>❌</span>}
                                                {status === 'ready' && <span>❓</span>}
                                            </td>
                                            <td align="center">{review}</td>
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
                                .map((problem) => {
                                    const status = problemStatuses[problem.id]?.status
                                    const review = problemStatuses[problem.id]?.review

                                    return (
                                        <tr
                                            key={`${problem.id}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleRowClick(problem)}
                                        >
                                            <td>{problem.title}</td>
                                            <td align="center">
                                                {status === 'correct' && <span>✔️</span>}
                                                {status === 'incorrect' && <span>❌</span>}
                                                {status === 'ready' && <span>❓</span>}
                                            </td>
                                            <td align="center">{review}</td>
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

