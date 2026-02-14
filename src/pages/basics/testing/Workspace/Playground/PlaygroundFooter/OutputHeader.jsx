export default function OutputHeader({ onRun, onSubmit }) {
    // const handleRun = () => {
    //     console.log("Running!")
    //     // runs whatever the user wrote
    //     // prints out into console
    // }

    return (
        < div className='testcaseheader-btns' >
            <div className='testcaseheader-btns-left'>
                <button
                    className='testcaseheader-btn'
                    onClick={onRun}
                >
                    Run
                </button>

                <button
                    className='testcaseheader-btn'
                    onClick={onSubmit}
                >
                    Submit
                </button>
            </div>

            <div className='testcaseheader-btns-right'>
                <button className='nextproblem-btn'>
                    Next Problem
                </button>

                <button className='nexttodoproblem-btn'>
                    Next to do problem
                </button>
            </div>
        </div >
    )
}