import React, { useState, useEffect } from "react"

// table
import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TablePagination from '@mui/material/TablePagination'
import Box from "@mui/material/Box"

// helpers
import ModalForQuestions from "./ModalForQuestions.jsx"
import { getQuestionStatus } from "../../Helpers/localStorageHelper.js"

export default function QuestionList() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(null)


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

    const handleClose = () => {
        setModalOpen(false)
        setSelectedQuestion(null)
    }

    const quizImports = {
        js: () => import('./database/JavaScriptQuestions.js'),
        react: () => import('./database/ReactQuestions.js'),
        networking: () => import('./database/Networking.js'),
        python: () => import('./database/PythonQuestions.js'),
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
        // loads all questions from all quizzes
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

    // add loading indicator while questions are being fetched?
    // add sticy header for mobile?

    return (
        <div className="container">
            <h1>Select a Question</h1>
            <Paper elevation={9} >
                <Box sx={{ width: '100%', overflowX: 'auto' }}>
                    <Table
                        borderAxis="none"
                        color="neutral"
                        size="lg"
                        stickyFooter={false}
                        stickyHeader={false}
                        stripe="odd"
                        variant="outlined"
                        hoverRow
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '200px' }} >
                                    Title
                                </TableCell>
                                <TableCell style={{ width: '100px' }}>
                                    Status
                                </TableCell>
                                <TableCell style={{ width: '434.4px' }} >
                                    Question
                                </TableCell>
                                <TableCell
                                    style={{ textAlign: 'center', width: '140px' }}
                                >
                                    Category
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {allQuestions
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((q, idx) => {
                                    const status = getQuestionStatus(q.quizKey, q.id)
                                    return (
                                        <tr
                                            key={`${q.quizKey}-${q.id}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleRowClick(q)}
                                        >
                                            <td>{q.title ? q.title.slice(0, 40) : ''}</td>
                                            <td>
                                                {status === 'correct' && <span>✔️</span>}
                                                {status === 'incorrect' && <span>❌</span>}
                                            </td>
                                            <td>
                                                {q.question.length > 50
                                                    ? q.question.slice(0, 40) + "..."
                                                    : q.question}
                                            </td>
                                            <td align="center">{q.quizKey}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
                </Box>

                <TablePagination
                    component="div"
                    count={allQuestions.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 25, 50, { value: -1, label: 'All' }]}
                />
            </Paper>

            <ModalForQuestions
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                question={selectedQuestion}
            />
        </div>

    );
}