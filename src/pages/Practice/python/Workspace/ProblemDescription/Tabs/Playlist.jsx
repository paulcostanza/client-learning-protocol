import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Box from "@mui/material/Box"
import { problemsList } from '../../../Problems/Python/ProblemsList'
import {
    getQuestionStatus,
    getNextReview,
    getHumanReadableNextReview,
} from '../../../../../../Helpers/localStorageHelper'

export default function Playlist() {
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
        console.log("statuses: ", statuses)
    }, [])

    const handleRowClick = (problem) => {
        navigate(`/practice/python/${problem.id}`)
    }

    const sections = ["Hello World", "Calculator", "Strings", "Lists", "Sets", "Dictionaries", "Sorting", "Binary Search", "Two Pointers", "Sliding Window", "Linked List", "Trees", "Matrices", "Design", "Problem Solving"]
    const sectionCamelCase = ["helloWorld", "calculator", "strings", "lists", "sets", "dictionaries", "sorting", "binarySearch", "twoPointers", "slidingWindow", "linkedList", "trees", "matrices", "design", "problemSolving"]
    const questionsLeft = sections.reduce((count, section, idx) => {
        return (
            count +
            problemsList[sectionCamelCase[idx]].filter(problem => {
                const status =
                    problemStatuses[problem.id]?.review === 'Ready!'
                        ? 'ready'
                        : problemStatuses[problem.id]?.status
                return status !== 'correct'
            }).length
        )
    }, 0)

    return (
        <div>
            <h1 className="problem-title">{questionsLeft !== 0 ? questionsLeft + " To go..." : "All done for today! Check back tomorrow."}</h1>
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
                                <TableCell style={{ width: '0' }}>
                                    #
                                </TableCell>
                                <TableCell style={{ textSize: '20px' }}>
                                    Problem Name
                                </TableCell>
                                <TableCell style={{ textAlign: 'center', width: '70px' }}>
                                    Status
                                </TableCell>
                                <TableCell style={{ textAlign: 'center' }}>
                                    Section
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {sections.map((section, idx) => (
                                <>
                                    {problemsList[sectionCamelCase[idx]]
                                        .map(problem => {
                                            const status = problemStatuses[problem.id]?.review === 'Ready!' ? 'ready' : problemStatuses[problem.id]?.status
                                            if (status !== 'correct') {
                                                return (
                                                    <tr
                                                        key={`${problem.id}`}
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => handleRowClick(problem)}
                                                    >
                                                        <td>{problem.order}.</td>
                                                        <td>{problem.title}</td>
                                                        <td align="center">
                                                            {status === 'incorrect' && <span>❌</span>}
                                                            {status === 'ready' && <span>❓</span>}
                                                        </td>
                                                        <td align="center">{section}</td>
                                                    </tr>
                                                )
                                            }
                                        })
                                    }
                                </>
                            ))}
                        </tbody>
                    </Table>
                </Box>
            </Paper>
            <hr />
        </div>
    )
}