export default function Results(props) {

    const percentage = (props.correct / props.total) * 100;

    return (
        <div className="container">


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
            {/* onClick => hide results and restart quiz */}
        </div>
    )
}

// hide quiz time when finished
// try again button to restart quiz
// add give up? button
// add cards to select the type of quiz
// add a timer to the quiz?