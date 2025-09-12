import React, { useState, useEffect } from "react"
import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Box from "@mui/material/Box"
import ModalForQuestions from "./ModalForQuestions.jsx"
import {
    getQuestionStatus,
    getNextReview,
    getHumanReadableNextReview
} from "../../Helpers/localStorageHelper.js"

export default function QuestionList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const maxLengthOfQuestionInColumn = 30;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleRowClick = (question) => {
        setSelectedQuestion(question)
        setModalOpen(true)
    }

    const quizImports = {
        js: () => import('./database/JavaScriptQuestions.js'),
        react: () => import('./database/ReactQuestions.js'),
        networking: () => import('./database/Networking.js'),
        python: () => import('./database/PythonQuestions.js'),
        java: () => import('./database/JavaQuestions.js'),
        c: () => import('./database/CQuestions.js'),
        cSharp: () => import('./database/CSharpQuestions.js'),
        redis: () => import('./database/RedisQuestions.js'),
        memory: () => import('./database/MemoryQuestions.js'),
        programming101: () => import('./database/Programming101Questions.js'),
        cybersecurity: () => import('./database/CyberSecurityQuestions.js'),
        linux: () => import('./database/LinuxQuestions.js')
    };

    const quizKeys = Object.keys(quizImports);
    const [allQuestions, setAllQuestions] = useState([]);

    useEffect(() => {
        Promise.all(
            quizKeys.map(key =>
                quizImports[key]().then(module => ({
                    quizKey: key,
                    questions: module.default
                }))
            )
        ).then(results => {
            const questions = results.flatMap(({ quizKey, questions }) =>
                questions.map(q => ({ ...q, quizKey }))
            );
            setAllQuestions(questions);
        });
    }, []);

    // may need to add loading indicator
    // when questions are being fetched from database
    // someday...

    return (
        <div className="container">
            <h1>Select a Question</h1>
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
                                <TableCell style={{ width: '190px' }} >
                                    Title
                                </TableCell>
                                <TableCell style={{ textAlign: 'center', width: '90px' }}>
                                    Status
                                </TableCell>
                                <TableCell style={{ width: '264.4px' }} >
                                    Question
                                </TableCell>
                                <TableCell style={{ textAlign: 'center', width: '100px' }}>
                                    Review
                                </TableCell>
                                <TableCell
                                    style={{ textAlign: 'center', width: '130px' }}
                                >
                                    Category
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {allQuestions
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((q, idx) => {
                                    const nextReviewTimestamp = getNextReview(q.quizKey, q.id)
                                    const review = getHumanReadableNextReview(nextReviewTimestamp)
                                    const status = review === 'Ready!' ? 'ready' : getQuestionStatus(q.quizKey, q.id)

                                    return (
                                        <tr
                                            key={`${q.quizKey}-${q.id}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleRowClick(q)}
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
                                            <td align="center">{q.quizKey}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                </Box>

                {/* Table pagination */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2,
                    py: 1,
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    border: '1px solid #fff',
                }}>
                    <span>
                        {`${page * rowsPerPage + 1}–${Math.min((page + 1) * rowsPerPage, allQuestions.length)} of ${allQuestions.length}`}
                    </span>
                    <Box
                        className="rows-per-page"
                        sx={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: 8 }}>Rows per page:</span>
                        <select
                            value={rowsPerPage}
                            onChange={handleChangeRowsPerPage}
                            style={{ padding: '4px 8px', cursor: 'pointer' }}
                        >
                            {[5, 10, 25, 50, allQuestions.length].map(opt => (
                                <option key={opt} value={opt}>
                                    {opt === allQuestions.length ? 'All' : opt}
                                </option>
                            ))}
                        </select>
                    </Box>
                    <Box>
                        <button
                            onClick={() => handleChangePage(null, page - 1)}
                            disabled={page === 0}
                            style={{ marginRight: 8 }}
                        >
                            <ArrowBackIosNewIcon />
                        </button>
                        <button
                            onClick={() => handleChangePage(null, page + 1)}
                            disabled={(page + 1) * rowsPerPage >= allQuestions.length}
                        >
                            <ArrowForwardIosIcon />
                        </button>
                    </Box>
                </Box>
            </Paper>

            <ModalForQuestions
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                question={selectedQuestion}
            />
        </div>
    );
}