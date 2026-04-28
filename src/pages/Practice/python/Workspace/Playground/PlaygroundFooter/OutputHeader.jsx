import { useState, useEffect } from 'react'

export default function OutputHeader({
    onRun,
    onSubmit,
    onNextProblem,
    onNextInPlaylistProblem,
    correct
}) {
    const [hasPassed, setHasPassed] = useState(true)

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

                        <button
                            className='next-in-playlist-btn'
                            onClick={onNextInPlaylistProblem}>
                            Next In Playlist
                        </button>
                    </>
                )}
            </div>
        </div >
    )
}