import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DrawButton from './flash-cards/DrawButton/DrawButton'
import Card from './flash-cards/Card/Card'
// import FakeQuestions from './flash-cards/data/fake.json'
import PythonQuestions from './flash-cards/data/python.json'
import JavaQuestions from './flash-cards/data/java.json'

export default function FlashCards() {


    const [cards, setCards] = useState([...PythonQuestions.cards])
    const [idx, setIdx] = useState(0)
    const [currentCard, setCurrentCard] = useState({})

    function launchQuiz(type) {
        if (type == "Intro") {
            console.log("Intro is pressed")
        } else if (type == "Python") {
            setCards([...PythonQuestions.cards])
        } else if (type == "Java") {
            setCards([...JavaQuestions.cards])
        } else {
            console.log("Nada is pressed")
        }
    }

    useEffect(() => {
        setCurrentCard(getRandomCard(cards))
    }, [cards])

    const getRandomCard = (currentCards) => {
        return currentCards[Math.floor(Math.random() * currentCards.length)]
    }

    // chooses a random card from selected pile and deletes it
    const updateCard = () => {
        console.log(cards[idx])
        console.log("idx === " + idx)
        console.log("card len: " + cards.length)

        let nextIdx = idx + 1
        if (nextIdx >= cards.length) {
            nextIdx = 0
        }

        setIdx(nextIdx)
        setCurrentCard(cards[nextIdx])
    }

    return (
        <>
            <NavBar />

            <div className="fake-nav-bar">
                <ul>
                    <li><button onClick={() => launchQuiz("Intro")}>Intro</button></li>
                    <li><button onClick={() => launchQuiz("Python")}>Python</button></li>
                    <li><button onClick={() => launchQuiz("Java")}>Java</button></li>
                </ul>
            </div>

            <div className="App">

                {/* Our card's question and answer */}
                <div className="cardRow">
                    <Card question={currentCard.question} answer={currentCard.answer} />
                </div>

                {/* Draw card button */}
                <div className="buttonRow">
                    <DrawButton updateCard={updateCard} />
                    <p>You are on card #{idx + 1}</p>
                </div>

                {/* end of className=App */}
            </div>

            <Footer />
        </>
    )
}