import { useState, useEffect } from 'react'

export default function OutputHeader({
    onRun,
    onSubmit,
    onNextProblem,
    correct
}) {
    const [hasPassed, setHasPassed] = useState(true)

    // Only show next once submitted and correct
    // useEffect(() => {
    //     if (correct) setHasPassed(true)
    // }, [correct])

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
                {hasPassed && (
                    <>
                        <button
                            className='nextproblem-btn'
                            onClick={onNextProblem}

                        >
                            Next Problem
                        </button>

                        {/* Once I add reviewing, this is the next one in 'Ready!' */}
                        {/* <button className='nexttodoproblem-btn'>
                            Next to do problem
                        </button> */}
                    </>
                )}
            </div>
        </div >
    )
}