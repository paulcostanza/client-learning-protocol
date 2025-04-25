import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KnowledgeCheck from '../components/KnowledgeCheck'

import Questions from './quiz/Questions.jsx'
import Results from './quiz/Results'

import { useState, useEffect } from 'react'

// have next question hidden until the user tries to answer the question
// right or wrong, the next question button will become visible


// quiz and questions
export default function Quiz() {

    const [totalQuestions, setTotalQuestions] = useState(0)
    const [correctQuestions, setCorrectQuestions] = useState(0)

    useEffect(() => {
        console.log("totalQuestions: " + totalQuestions)
    }, [totalQuestions])

    function onChecked(check) {
        console.log("current idx: " + check)
    }

    function onNext() {
        setTotalQuestions(prev => prev + 1)
        // update idx? 

    }

    function compareAnswer(userAnswer, correctAnswer) {
        if (userAnswer === correctAnswer) {
            return true
        } return false
    }

    return (
        <>
            <NavBar />
            <main>
                <div className="container" id="space-on-top-of-page">
                    <div className="quiz-page">
                        <h1>Quiz Time</h1>

                        <Questions onChecked={onChecked} compareAnswer={compareAnswer} />

                        <div className="buttons">
                            <button>I'm cooked</button>
                            <button onClick={compareAnswer}>Check Answer</button>
                            <button onClick={onNext}>Next Question</button>
                        </div>
                    </div>
                </div >

                {/* <KnowledgeCheck /> */}

                {/* add finished button after check answer is pressed for 
                current question, then if clicked run results */}
                <Results />

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