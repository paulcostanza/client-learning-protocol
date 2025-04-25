import data from './database/data'
import { useState, useRef } from 'react'


export default function Questions({ onChecked, compareAnswer }) {

    const [idx, setIdx] = useState(0)
    const [question, setQuestion] = useState(data[idx])
    const [lock, setLock] = useState(false)
    const [correctQuestions, setCorrectQuestions] = useState(0)

    // const question = data[0]

    function onSelect(idx) {
        onChecked(idx)
    }

    function checkAnswer(e, userAnswer) {

        // wait for Next Quesiton button to be clicked
        if (lock === false) {
            if (compareAnswer(question.answer, userAnswer)) {
                console.log('correct!')
                // add green background
                e.target.classList.add('correct')
                setCorrectQuestions(prev => prev + 1)
            } else {
                console.log('wrong!')
                // add red background
                e.target.classList.add('wrong')

            }
            setLock(true)
        }

        console.log(e.target)
    }

    return (
        <div className="questions">
            <h2>{question.question}</h2>
            <ul key={question.id}>
                {
                    question.options.map((option, idx) => (
                        <li key={idx} onClick={(e) => checkAnswer(e, option)}>
                            <input
                                type="radio"
                                value={true}
                                name="options"
                                id={`q${idx}-option`}
                                onChange={() => onSelect(idx)} />
                            <label htmlFor={`q${idx}-option`}>{option}</label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}