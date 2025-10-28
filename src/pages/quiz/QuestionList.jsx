import React, { useState, useEffect, useRef } from "react"
import Table from '@mui/joy/Table'
import Paper from "@mui/material/Paper"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import Box from "@mui/material/Box"
import ModalForQuestions from "./ModalForQuestions.jsx"
import {
    getQuestionStatus,
    getNextReview,
    getHumanReadableNextReview
} from "../../Helpers/localStorageHelper.js"
import SelectAQuestionFilter from "./SelectAQuestionFilter.jsx"

function filterQuestions(questions, status, review, category) {
    return questions.filter(q => {
        const nextReviewTimestamp = getNextReview(q.quizKey, q.id)
        const reviewValue = getHumanReadableNextReview(nextReviewTimestamp)
        const statusValue = reviewValue === 'Ready!' ? 'ready' : getQuestionStatus(q.quizKey, q.id)
        let statusMatch = true
        let reviewMatch = true

        if (status) {
            if (status === 'none') {
                statusMatch = !statusValue || statusValue === ''
            } else {
                statusMatch = statusValue === status
            }
        }

        switch (review) {
            case 'ready':
                reviewMatch = reviewValue === 'Ready!'
                break
            case 'tomorrow':
                reviewMatch = reviewValue === 'Tomorrow'
                break
            case '< a week':
                reviewMatch = reviewValue === 'Ready!' ||
                    reviewValue === 'Tomorrow' ||
                    (reviewValue.includes('days') && parseInt(reviewValue) <= 7)
                break
            case '< a month':
                reviewMatch = reviewValue === 'Ready!' ||
                    reviewValue === 'Tomorrow' ||
                    (reviewValue.includes('days') && parseInt(reviewValue) <= 30)
                break
            case '> a month':
                reviewMatch = reviewValue.includes('days') && parseInt(reviewValue) > 30
                break
            default:
                console.log('How in the hell did you hit this case?!?!')
        }

        const categoryMatch = !category || q.quizKey.toLowerCase() === category.toLowerCase()

        return statusMatch && reviewMatch && categoryMatch
    })
}

export default function QuestionList() {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    const [status, setStatus] = useState('')
    const [review, setReview] = useState('')
    const [category, setCategory] = useState('')
    const filterRef = useRef(null)

    const quizImports = {
        lowlevel: () => import('./database/LowLevelQuestions.js'),
        html: () => import('./database/HTMLQuestions.js'),
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
    }

    const quizKeys = Object.keys(quizImports)
    const [allQuestions, setAllQuestions] = useState([])

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
            )
            setAllQuestions(questions)
        })
    }, [])

    useEffect(() => {
        setPage(0)

        if (filterRef.current) {
            filterRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }, [status, review, category])


    const filteredQuestions = filterQuestions(allQuestions, status, review, category)
    const maxLengthOfQuestionInColumn = 30

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const handleRowClick = (question) => {
        setSelectedQuestion(question)
        setModalOpen(true)
    }

    function handleRandomQuestion() {
        if (filteredQuestions.length === 0) return
        const randomIdx = Math.floor(Math.random() * filteredQuestions.length)
        setSelectedQuestion(filteredQuestions[randomIdx])
        setModalOpen(true)
    }

    // may need to add loading indicator
    // when questions are being fetched from database
    // someday...

    return (
        <div className="container">
            <h1>Select a Question</h1>
            <div ref={filterRef}>
                <SelectAQuestionFilter
                    status={status}
                    setStatus={setStatus}
                    review={review}
                    setReview={setReview}
                    category={category}
                    setCategory={setCategory}
                    onRandom={handleRandomQuestion}
                    randomDisabled={filteredQuestions.length === 0}
                />
            </div>
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
                            {filteredQuestions
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
                        {filteredQuestions.length === 0
                            ? 'No questions'
                            : `${page * rowsPerPage + 1}–${Math.min((page + 1) * rowsPerPage, filteredQuestions.length)} of ${filteredQuestions.length}`}
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
                            {[5, 10, 25, 50, filteredQuestions.length].map(opt => (
                                <option key={opt} value={opt}>
                                    {opt === filteredQuestions.length ? 'All' : opt}
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
                            disabled={(page + 1) * rowsPerPage >= filteredQuestions.length}
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
    )
}