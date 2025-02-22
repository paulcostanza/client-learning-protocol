import './Card.css'

function Card(props) {

    function flipCard(e) {
        e.currentTarget.classList.add("mouse-click")
        e.currentTarget.classList.remove("card-hover")
    }

    function flipCardBack(e) {
        e.currentTarget.classList.add("card-hover")
        e.currentTarget.classList.remove("mouse-click")
    }


    return (
        <div className="card-container">
            <div className="card card-hover" onClick={flipCard} onMouseLeave={flipCardBack}>
                <div className="front">
                    <div className="question">{props.question}</div>
                </div>
                <div className="back">
                    <div className="answer">{props.answer}</div>
                </div>
            </div>
        </div>
    )

}

export default Card
