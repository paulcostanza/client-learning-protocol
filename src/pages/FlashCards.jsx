import { useState, useEffect } from 'react'
import DrawButton from './flash-cards/DrawButton/DrawButton'
import Card from './flash-cards/Card/Card'
// import FakeQuestions from './flash-cards/data/fake.json'
import PythonQuestions from './flash-cards/data/python.json'
import JavaQuestions from './flash-cards/data/java.json'
import NetworkingQuestions from './flash-cards/data/networking'
import CybersecurityQuestions from './flash-cards/data/cybersecurity.json'

export default function FlashCards() {

    const [cards, setCards] = useState([...PythonQuestions])
    const [cardIdx, setCardIdx] = useState(0)
    const [currentCard, setCurrentCard] = useState([])
    const [incorrect, setIncorrect] = useState([])
    const [wrongIdx, setWrongIdx] = useState(0)

    // user picks which topic to study
    function launchQuiz(type) {
        if (type == "Intro") {
            console.log("Intro is pressed")
        } else if (type == "Python") {
            setCards([...PythonQuestions])
        } else if (type == "Java") {
            setCards([...JavaQuestions])
        } else if (type == "Cybersecurity") {
            setCards([...CybersecurityQuestions])
        } else if (type == "Networking") {
            setCards([...NetworkingQuestions])
        } else {
            console.log("Nada is pressed")
        }
    }

    // random does not seem to work
    // runs whenever cards is effected
    useEffect(() => {
        setCurrentCard(getRandomCard(cards))
    }, [cards])

    const getRandomCard = (currentCards) => {
        return currentCards[Math.floor(Math.random() * currentCards.length)]
    }

    const updateCard = () => {

        // did not immediately reflect updated state & held
        // prev state. This makes it update immediately
        setCardIdx(prevIdx => {
            const nextIdx = prevIdx + 1

            if (nextIdx >= cards.length) {
                setCardIdx(0)

                if (incorrect.length > 0) {
                    setCards([...incorrect])
                    setIncorrect([])
                    setWrongIdx(0)
                } else {
                    alert("You did it, yay!")
                }
            } else {
                setCurrentCard(cards[nextIdx])
            }
            return nextIdx
        })
    }


    const wrongAnswer = () => {
        setIncorrect((prevIncorrect) => [...prevIncorrect, currentCard]);
        setWrongIdx(prevWrong => prevWrong + 1)
        updateCard()
    }

    return (
        <>
            <div className="fake-nav-bar">
                <ul>
                    <li><button onClick={() => launchQuiz("Intro")}>Intro</button></li>
                    <li><button onClick={() => launchQuiz("Python")}>Python</button></li>
                    <li><button onClick={() => launchQuiz("Java")}>Java</button></li>
                    <li><button onClick={() => launchQuiz("Cybersecurity")}>Cybersecurity</button></li>
                    <li><button onClick={() => launchQuiz("Networking")}>Networking</button></li>
                </ul>
            </div>

            <div className="App">

                {/* Our card's question and answer */}
                <div className="cardRow">
                    <Card style={{ whiteSpace: 'pre-line' }} question={currentCard.question} answer={currentCard.answer} />
                </div>

                {/* Draw card button */}
                <div className="buttonRow">
                    <div className="flex justify-center">
                        <button onClick={updateCard} className="btn">
                            Draw Card
                        </button>
                        <button onClick={wrongAnswer} className='btn'>
                            Needs Practice
                        </button>
                    </div>
                    <p>You are on card #{cardIdx + 1} of {cards.length}</p>
                    <p>Total incorrect (this round): {wrongIdx}</p>
                </div>

                {/* end of className=App */}
            </div>
        </>
    )
}