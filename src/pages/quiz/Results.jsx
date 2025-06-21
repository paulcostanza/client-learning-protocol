import { Link } from 'react-router-dom'

export default function Results(props) {

    const percentage = (props.correct / props.total) * 100;

    return (
        <div className="container questions">
            <div className="result">
                <div>
                    <span>Total Correct : </span>
                    <span>{props.correct}</span>
                </div>
                <div>
                    <span>Total Questions : </span>
                    <span>{props.total}</span>
                </div>
                <div>
                    <span>Quiz Results : </span>
                    <span>{percentage.toFixed(0)}%</span>
                </div>
            </div>

            <button onClick={props.restartQuiz}>Try again?</button>
            <Link to={`/quiz/`}><button>Back to Quiz Selection Page</button></Link>
        </div>
    )
}

// To Do
// hide quiz time when finished
// add give up? button to end quiz early
// add cards to select the type of quiz
// add a timer to the quiz? 20 seconds for each question - maybe a cool timer with the time counting down and a line around the circle that is shrinking with each second