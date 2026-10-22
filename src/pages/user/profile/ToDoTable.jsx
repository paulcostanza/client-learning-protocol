import React, { useState, useEffect } from "react"
import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Box from "@mui/material/Box"
import {
    getQuestionStatus,
    getNextReview,
    getHumanReadableNextReview
} from "../../../Helpers/localStorageHelper.js"

export default function ToDoTable() {
    // const [page, setPage] = useState(0)
    // const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage)
    // const handleChangePage = (event, newPage) => setPage(newPage)
    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10))
    //     setPage(0)
    // }

    // const quizKeys = Object.keys(quizImports)
    // const [allQuestions, setAllQuestions] = useState([])

    // useEffect(() => {
    //     Promise.all(
    //         quizKeys.map(key =>
    //             quizImports[key]().then(module => ({
    //                 quizKey: key,
    //                 questions: module.default
    //             }))
    //         )
    //     ).then(results => {
    //         const questions = results.flatMap(({ quizKey, questions }) =>
    //             questions
    //                 .filter(q => q.subcategory === subcategory)
    //                 .map(q => ({ ...q, quizKey }))
    //         );
    //         setAllQuestions(questions);
    //     });
    // }, []);

    return (
        <div>
            <Paper elevation={9}>
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                    <Table>
                        <TableHead>
                            {/* <TableRow>
                                <TableCell style={{ width: '100px' }}>Title</TableCell>
                                <TableCell style={{ textAlign: 'center', width: '90px' }}>Status</TableCell>
                                <TableCell style={{ width: '264.4px' }}>Question</TableCell>
                                <TableCell style={{ width: '100px', textAlign: 'center' }}>Review</TableCell>
                            </TableRow> */}
                            <TableRow>
                                <TableCell>Priority</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Category</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {/* {allQuestions
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((q, idx) => {
                                    const nextReviewTimestamp = getNextReview(q.quizKey, q.id);
                                    const review = getHumanReadableNextReview(nextReviewTimestamp);
                                    const key = q.quizKey || q.category || 'default'
                                    const status = review === 'Ready!' ? 'ready' : getQuestionStatus(q.quizKey, q.id);

                                    return (
                                        <tr
                                            key={`${q.quizKey}-${q.id}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => onRowClick && onRowClick(q)}
                                        >
                                            <td>{q.title ? q.title.slice(0, 40) : ''}</td>
                                            <td align="center">
                                                {status === 'correct' && <span>✔️</span>}
                                                {status === 'incorrect' && <span>❌</span>}
                                                {status === 'ready' && <span>❓</span>}
                                            </td>
                                            <td>
                                                {q.question.length > maxLengthOfQuestionInColumn
                                                    ? q.question.slice(0, maxLengthOfQuestionInColumn) + "..."
                                                    : q.question}
                                            </td>
                                            <td align="center">{review}</td>
                                        </tr>
                                    )
                                })} */}
                            <tr>
                                <td>1</td>
                                <td>Combine List</td>
                                <td>❌</td>
                                <td>basics</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>No bueno</td>
                                <td>❓</td>
                                <td>multiple choice</td>
                            </tr>
                        </tbody>
                    </Table>
                </Box>


            </Paper>
        </div>
    )
}