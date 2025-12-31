import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { saveSectionQuestionResult } from '../../Helpers/localStorageHelper.js'
import { checkAnswer, forfeitQuestion } from './quizLogic';
import ReactMarkdown from 'react-markdown'
import Results from './Results.jsx'

// quiz and questions
export default function Quiz() {
    const { quizId } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [idx, setIdx] = useState(0)
    const [selectedIdx, setSelectedIdx] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [checked, setChecked] = useState(false)
    const [correctQuestions, setCorrectQuestions] = useState(0)
    const [result, setResult] = useState('')
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([])
    const [displayDescription, setDisplayDescription] = useState('')
    const navigate = useNavigate()

    const quizImports = {
        introtocomp: () => import('./database/IntroToCompQuestions.js'),
        lowlevel: () => import('./database/LowLevelQuestions.js'),
        html: () => import('./database/HTMLQuestions.js'),
        js: () => import('./database/JavaScriptQuestions.js'),
        react: () => import('./database/ReactQuestions.js'),
        networking: () => import('./database/Networking.js'),
        python: () => import('./database/PythonQuestions.js'),
        java: () => import('./database/JavaQuestions.js'),
        c: () => import('./database/CQuestions.js'),
        cPlusPlus: () => import('./database/CPlusPlusQuestions.js'),
        cSharp: () => import('./database/CSharpQuestions.js'),
        go: () => import('./database/GoQuestions.js'),
        redis: () => import('./database/RedisQuestions.js'),
        memory: () => import('./database/MemoryQuestions.js'),
        programming101: () => import('./database/Programming101Questions.js'),
        cybersecurity: () => import('./database/CyberSecurityQuestions.js'),
        linux: () => import('./database/LinuxQuestions.js')
    }

    useEffect(() => {
        setLoading(true)
        setData([])
        if (quizImports[quizId]) {
            quizImports[quizId]().then(module => {
                setData(module.default)
                setLoading(false)
            })
        } else {
            setLoading(false)
        }
    }, [quizId])

    useEffect(() => {
        if (checked) {
            console.log(`Score: ${correctQuestions} out of ${idx + 1}`)
        }
    }, [checked])

    if (loading) return <div>Loading...</div>
    if (!data.length) return <div>No questions found.</div>

    const question = data[idx]

    function onNext() {
        setChecked(false)
        setSelectedIdx(null)
        setSelectedCheckboxes([])
        setResult('')
        setDisplayDescription('')
        if (idx < data.length - 1) {
            setIdx(idx + 1)
        } else {
            setShowResult(true)
        }
    }

    function restartQuiz() {
        setShowResult(false)
        setIdx(0)
        setCorrectQuestions(0)
    }

    function onSelect(optionIdx) {
        if (question.type === 'radio') {
            setSelectedIdx(optionIdx)
        } else if (question.type === 'checkbox') {
            setSelectedCheckboxes(prev => {
                if (prev.includes(optionIdx)) {
                    return prev.filter(idx => idx != optionIdx)
                } else {
                    return [...prev, optionIdx]
                }
            })
        }
    }

    function checkAnswer() {
        if (question.type === 'radio') {
            if (selectedIdx === null) return
            setChecked(true)
            if (question.options[selectedIdx] === question.answer) {
                setCorrectQuestions(prev => prev + 1)
                setResult('Correct!')
                saveSectionQuestionResult(quizId, question.id, 'correct')
            } else {
                setResult('Wrong!')
                saveSectionQuestionResult(quizId, question.id, 'incorrect')
            }
        } else if (question.type === 'checkbox') {
            setChecked(true)
            const selectedOptions = selectedCheckboxes.map(idx => question.options[idx])
            const correct = Array.isArray(question.answer) &&
                question.answer.length === selectedOptions.length &&
                question.answer.every(ans => selectedOptions.includes(ans))
            if (correct) {
                setCorrectQuestions(prev => prev + 1)
                setResult('Correct!')
                saveSectionQuestionResult(quizId, question.id, 'correct')
            } else {
                setResult('Wrong!')
                saveSectionQuestionResult(quizId, question.id, 'incorrect')
            }
        }

        if (question.description) {
            setDisplayDescription(question.description)
        }

    }

    function forfeitQuestion() {
        setChecked(true)
        setResult('Need to study bro...')
        saveQuestionResult(question.id, 'incorrect')
        if (question.description) {
            setDisplayDescription(question.description)
        }
    }

    return (
        <>
            <main>
                <div className="container" id="space-on-top-of-page">
                    <div className="quiz-page">
                        {!showResult ? <h1>Quiz Time</h1> : <h1>Quiz Results</h1>}
                        {!showResult &&

                            <div className="questions">
                                {question.title ?? <em>{question.title}</em>}
                                <h4 className="modal-question">
                                    <ReactMarkdown>
                                        {question.question}
                                    </ReactMarkdown>
                                </h4>
                                <ul key={question.id}>
                                    {question.options.map((option, optionIdx) => {
                                        let className = ""

                                        if (checked) {
                                            if (question.type === 'radio') {
                                                if (option === question.answer) {
                                                    className = "correct"

                                                } else if (optionIdx === selectedIdx) {
                                                    className = "wrong"
                                                }
                                            } else if (question.type === 'checkbox') {
                                                if (question.answer.includes(option)) {
                                                    className = "correct"
                                                } else if (selectedCheckboxes.includes(optionIdx)) {
                                                    className = "wrong"
                                                }
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
                                                    type={question.type === "radio" ?
                                                        "radio" : "checkbox"
                                                    }
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
                                                    <ReactMarkdown components={{ p: 'span' }}>
                                                        {option}
                                                    </ReactMarkdown>
                                                </label>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="questions-footer">
                                    <div className="buttons">
                                        <button onClick={forfeitQuestion} disabled={checked}>I'm cooked</button>
                                        <button
                                            onClick={checkAnswer}
                                            disabled={
                                                checked || (
                                                    question.type === 'radio'
                                                        ? selectedIdx === null
                                                        : selectedCheckboxes.length === 0
                                                )
                                            }
                                        >Check Answer</button>
                                        <button onClick={onNext} disabled={!checked}>Next Question</button>
                                        <button onClick={() => navigate(-1)}>Quiz Page</button>
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
                                        <ReactMarkdown>{displayDescription}</ReactMarkdown>
                                    </div>
                                )}
                            </div>
                        }

                        {showResult && (
                            <Results
                                correct={correctQuestions}
                                total={data.length}
                                restartQuiz={restartQuiz}
                            />
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}