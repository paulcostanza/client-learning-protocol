export default function Results() {
    return (
        <div className="container">
            <h1>Quiz Results</h1>

            <div className="result">
                <div>
                    <span>Total Quiz Points : </span>
                    <span>50</span>
                </div>
                <div>
                    <span>Total Questions : </span>
                    <span>50</span>
                </div>
                <div>
                    <span>Total Correct : </span>
                    <span>50</span>
                </div>
                <div>
                    <span>Quiz Results : </span>
                    <span>Passed</span>
                </div>
            </div>

            <button>Try again?</button>
            {/* onClick => hide results and restart quiz */}
        </div>
    )
}