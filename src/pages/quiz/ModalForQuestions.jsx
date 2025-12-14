import React, { useState, useMemo } from "react"
import Modal from '@mui/material/Modal'
import Box from "@mui/material/Box"
import ReactMarkdown from 'react-markdown'
import { checkAnswer, forfeitQuestion } from './quizLogic'
import { saveSectionQuestionResult } from "../../Helpers/localStorageHelper.js"
import { fixGrammar } from "../../Helpers/CategoryFixer.js"

export default function ModalForQuestions({ open, onClose, question }) {
    const [checked, setChecked] = useState(false)
    const [selectedIdx, setSelectedIdx] = useState(null)
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState('')
    const [displayDescription, setDisplayDescription] = useState('')

    const { shuffledOptions, correctIndices } = useMemo(() => {
        if (!question || question.type === 'input') {
            return { shuffledOptions: [], correctIndices: [] }
        }

        if (question.random) {
            const shuffled = [...question.options].sort(() => Math.random() - 0.5)

            const correctIndices = []
            if (question.type === 'radio') {
                correctIndices.push(shuffled.indexOf(question.answer))
            } else if (question.type === 'checkbox') {
                question.answer.forEach(correctAnswer => {
                    const index = shuffled.indexOf(correctAnswer)
                    if (index !== -1) correctIndices.push(index)
                })
            }

            return { shuffledOptions: shuffled, correctIndices }
        } else {
            const correctIndices = []
            if (question.type === 'radio') {
                correctIndices.push(question.options.indexOf(question.answer))
            } else if (question.type === 'checkbox') {
                question.answer.forEach(correctAnswer => {
                    const index = question.options.indexOf(correctAnswer)
                    if (index !== -1) correctIndices.push(index)
                })
            }
            return { shuffledOptions: question.options, correctIndices }
        }
    }, [question])

    if (!question) return null

    function onSelect(optionIdx) {
        if (question.type === 'radio' || question.type === 'input') {
            setSelectedIdx(optionIdx)
        } else if (question.type === 'checkbox') {
            setSelectedCheckboxes(prev =>
                prev.includes(optionIdx)
                    ? prev.filter(idx => idx !== optionIdx)
                    : [...prev, optionIdx]
            )
        }
    }

    function handleCheckAnswer() {
        if (question.type === 'input') {
            const regex = new RegExp(question.answer, "i")
            const isCorrect = regex.test(inputValue.trim())
            setChecked(true)
            setResult(isCorrect ? "Correct!" : "Incorrect!")
            setDisplayDescription(question.description || "")

            if (question.quizKey && question.id !== undefined) {
                saveSectionQuestionResult(question.quizKey, question.id, isCorrect ? "correct" : "incorrect")
            }
            return
        }
        const { result, description } = checkAnswer(
            { ...question, options: shuffledOptions },
            selectedIdx,
            selectedCheckboxes
        )
        setChecked(true)
        setResult(result)
        setDisplayDescription(description)
    }

    function handleForfeit() {
        const { result, description } = forfeitQuestion(question)
        setChecked(true)
        setResult(result)
        setDisplayDescription(description)
    }

    // reset modal state on exit
    function handleExit() {
        setChecked(false)
        setSelectedIdx(null)
        setSelectedCheckboxes([])
        setInputValue('')
        setResult('')
        setDisplayDescription('')
        onClose()
    }

    return (
        <Modal open={open} onClose={handleExit}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'var(--bg)',
                boxShadow: 24,
                p: 4,
                minWidth: 300,
                maxWidth: '100vw',
                borderRadius: 2,
                maxHeight: '90vh',
                overflowY: 'auto'
            }}
                className="modal-for-questions">
                {question.category && question.title
                    ? <span><em>{question.title}</em>  -&gt; {fixGrammar(question.category)}</span>
                    : <span>{fixGrammar(question.category)}</span>}
                <h4 className="modal-question">
                    <ReactMarkdown>
                        {question.question}
                    </ReactMarkdown>
                </h4>
                {question.type === 'input' ? (
                    <div style={{ margin: "1em 0" }}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            disabled={checked}
                            style={{ width: "100%", padding: "8px", fontSize: "1em" }}
                            placeholder="Type your answer here"
                        />
                    </div>
                ) : (
                    <ul key={question.id}>
                        {shuffledOptions.map((option, optionIdx) => {
                            let className = ""

                            if (checked) {
                                switch (question.type) {
                                    case 'radio':
                                        if (correctIndices.includes(optionIdx)) {
                                            className = "correct"
                                        } else if (optionIdx === selectedIdx) {
                                            className = "wrong"
                                        }
                                        break
                                    case 'checkbox':
                                        if (correctIndices.includes(optionIdx)) {
                                            className = "correct"
                                        } else if (selectedCheckboxes.includes(optionIdx)) {
                                            className = "wrong"
                                        }
                                        break
                                    default:
                                        console.log('How in the hell did you reach this point?!')
                                }
                            }

                            return (
                                <li
                                    key={optionIdx}
                                    className={className}
                                    onClick={() => !checked && onSelect(optionIdx)}
                                    style={{ cursor: checked ? "default" : "pointer" }}
                                >
                                    <input
                                        type={question.type === "radio" ? "radio" : "checkbox"}
                                        checked={
                                            question.type === "radio"
                                                ? selectedIdx === optionIdx
                                                : selectedCheckboxes.includes(optionIdx)
                                        }
                                        name="options"
                                        id={`q${optionIdx}-option`}
                                        disabled={checked}
                                        onChange={() => onSelect(optionIdx)}
                                    />
                                    <label htmlFor={`q${optionIdx}-option`}>
                                        <ReactMarkdown components={{ ul: 'span', ol: 'span', li: 'span', p: 'span' }}>
                                            {option}
                                        </ReactMarkdown>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                )}

                <div className="questions-footer">
                    <div className="buttons">
                        <button onClick={handleForfeit} disabled={checked}>I'm cooked</button>
                        <button
                            onClick={handleCheckAnswer}
                            disabled={
                                checked || (
                                    question.type === 'radio'
                                        ? selectedIdx === null
                                        : question.type === 'checkbox'
                                            ? selectedCheckboxes.length === 0
                                            : question.type === 'input'
                                                ? inputValue.trim() === ""
                                                : false
                                )
                            }
                        >Check Answer</button>
                        <button onClick={handleExit}>Exit</button>
                    </div>
                    {result &&
                        <div id='questions-footer-result' className={result === 'Correct!' ? 'result-correct' : 'result-incorrect'}>
                            {result}
                        </div>
                    }
                </div>
                {displayDescription && (
                    <div className={
                        `answer-description ${result === 'Correct!' ? 'answer-description-correct' : 'answer-description-incorrect'
                        }`
                    }>
                        <ReactMarkdown>
                            {displayDescription}
                        </ReactMarkdown>
                    </div>
                )}
            </Box>
        </Modal >
    )
}