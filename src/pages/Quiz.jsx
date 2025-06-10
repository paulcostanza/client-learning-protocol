// import { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import KnowledgeCheck from '../components/KnowledgeCheck'

// import Questions from './quiz/Questions.jsx'
import Results from './quiz/Results'

import { useState, useEffect } from 'react'
import data from './quiz/database/data.js'

// have next question hidden until the user tries to answer the question
// right or wrong, the next question button will become visible


// quiz and questions
export default function Quiz() {
    const [idx, setIdx] = useState(0)
    const [selectedIdx, setSelectedIdx] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [checked, setChecked] = useState(false)
    const [correctQuestions, setCorrectQuestions] = useState(0)
    const question = data[idx]

    function onChecked(check) {
        console.log("current idx: " + check)
    }

    function onNext() {
        setChecked(false)
        setSelectedIdx(null)
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
        setSelectedIdx(optionIdx)
    }

    function checkAnswer() {
        if (selectedIdx === null) return
        setChecked(true)
        if (question.options[selectedIdx] === question.answer) {
            setCorrectQuestions(prev => prev + 1)
        }
    }

    function forfeitQuestion() {
        setChecked(true)
    }

    useEffect(() => {
        if (checked) {
            console.log(`Score: ${correctQuestions} out of ${idx + 1}`)
        }
    }, [checked])

    return (
        <>
            <NavBar />
            <main>
                <div className="container" id="space-on-top-of-page">
                    <div className="quiz-page">
                        {!showResult ? <h1>Quiz Time</h1> : <h1>Quiz Results</h1>}
                        {!showResult &&

                            <div className="questions">
                                <h2>{question.question}</h2>
                                <ul key={question.id}>
                                    {question.options.map((option, optionIdx) => {
                                        let className = ""
                                        if (checked) {
                                            if (option === question.answer) {
                                                className = "correct"
                                            } else if (optionIdx === selectedIdx) {
                                                className = "wrong"
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
                                                    type="radio"
                                                    checked={selectedIdx === optionIdx}
                                                    name="options"
                                                    id={`q${optionIdx}-option`}
                                                    readOnly
                                                />
                                                <label htmlFor={`q${optionIdx}-option`}>{option}</label>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="buttons">
                                    <button onClick={forfeitQuestion} disabled={checked}>I'm cooked</button>
                                    <button onClick={checkAnswer} disabled={checked || selectedIdx === null}>Check Answer</button>
                                    <button onClick={onNext} disabled={!checked}>Next Question</button>
                                </div>
                            </div>}

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
            <Footer />
        </>
    )
}

/**
 * HOW I WANT THIS TO WORK
 * 
 * each question can have as many options as it wants
 * the options can be randomized
 * the order of the questions are randomized
 */