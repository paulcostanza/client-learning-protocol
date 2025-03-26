import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KnowledgeCheck from '../components/KnowledgeCheck'

import Questions from './quiz/Questions.jsx'
import Results from './quiz/Results'

// have next question hidden until the user tries to answer the question
// right or wrong, the next question button will become visible


// quiz and questions
export default function Quiz() {

    function onNext() {
        console.log('next question please...')
    }

    return (
        <>
            <NavBar />
            <main>
                <div className="container" id="space-on-top-of-page">
                    <div className="quiz-page">
                        <h1>Quiz Time</h1>

                        <Questions />

                        <div className="buttons">
                            <button>I'm cooked</button>
                            <button>Check Answer</button>
                            <button onClick={onNext}>Next Question</button>
                        </div>
                    </div>
                </div >

                {/* <KnowledgeCheck /> */}

                {/* add finished button, then if clicked run results */}
                <Results />

            </main>

            <Footer />
        </>
    )
}