import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DrawButton from './flash-cards/DrawButton/DrawButton'
import Card from './flash-cards/Card/Card'
// import FakeQuestions from './flash-cards/data/fake.json'
import PythonQuestions from './flash-cards/data/python.json'
import JavaQuestions from './flash-cards/data/java.json'
import NetworkingQuestions from './flash-cards/data/networking.json'
import CybersecurityQuestions from './flash-cards/data/cybersecurity.json'

export default function FlashCards() {

    const [cards, setCards] = useState([...PythonQuestions])
    const [idx, setIdx] = useState(0)
    const [currentCard, setCurrentCard] = useState({})
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
    useEffect(() => {
        setCurrentCard(getRandomCard(cards))
    }, [cards])

    const getRandomCard = (currentCards) => {
        return currentCards[Math.floor(Math.random() * currentCards.length)]
    }

    // when user gets a card incorrect, add it to the 'wrong' deck
    const handleAddIncorrect = (item) => {
        setIncorrect((prevIncorrect) => [...prevIncorrect, item]);
    };


    const updateCard = () => {

        let nextIdx = idx + 1

        // if you finish cards
        if (nextIdx >= cards.length) {
            nextIdx = 0

            if (wrongIdx > 0) {
                setCards([...incorrect])
                setIncorrect([])
                setWrongIdx(0)
            }

            else {
                alert("You did it, yay!")
            }
        }

        setIdx(nextIdx)
        setCurrentCard(cards[nextIdx])

    }


    const wrongAnswer = () => {
        handleAddIncorrect(currentCard)
        setWrongIdx(wrongIdx + 1)
        updateCard()
    }

    return (
        <>
            <NavBar />

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
                    <DrawButton updateCard={updateCard} wrongAnswer={wrongAnswer} />
                    <p>You are on card #{idx + 1} of {cards.length}</p>
                    <p>Total incorrect: {wrongIdx}</p>
                </div>

                {/* end of className=App */}
            </div>

            <Footer />
        </>
    )
}