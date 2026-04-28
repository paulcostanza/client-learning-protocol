import { getProblemStatusById, isProblemReady } from '../../../../../Helpers/localStorageHelper'
// import { AiFillLike, AiFillDislike } from 'react-icons/ai'
// import { BsCheck2Circle } from 'react-icons/bs'
// import { TiStarOutline } from 'react-icons/ti'
import DOMPurify from 'dompurify'
import ProblemDescriptionNav from './ProblemDescriptionNav'
import { useEffect } from 'react'

export default function ProblemDescription({ problem }) {
    useEffect(() => {
        status = printStatus()
    }, [problem.status])

    const printStatus = () => {
        if (isProblemReady(problem.id) === true) return "question-mark"
        if (getProblemStatusById(problem.id) === 'correct') return "check-mark"
        if (getProblemStatusById(problem.id) === 'incorrect') return "x"
    }

    let status = printStatus()

    return (
        <div >
            <ProblemDescriptionNav
                questionId={problem.id}
            />
            <div className='problem-description-space' >
                <div>
                    <h1 className='problem-description-title'>{problem.title}</h1>
                </div>

                {/* Subtitle Bar - status, like, dislike, & save */}
                {/* Add after database connection */}
                <div className='problem-description-header-bar'>

                    <div className=''>
                        {status == "question-mark" && <span>❓</span>}
                        {status === 'check-mark' && <span>✔️</span>}
                        {status === 'x' && <span>❌</span>}
                    </div>
                    {/* <div className='clickable'>
                        <AiFillLike />
                        <span className='buffer-space'>120</span>
                    </div>
                    <div className='clickable'>
                        <AiFillDislike />
                        <span className='buffer-space'>2</span>
                    </div>
                    <div className='clickable'>
                        <TiStarOutline />
                    </div> */}
                </div>

                {/* Problem Statement(paragraphs) */}
                <div
                    className='problem-statements'
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(problem.problemStatement)
                    }}
                />

                {/* Examples */}
                {problem.example && (
                    <div className='examples'>
                        <div>
                            {/* <p className='font-medium'>Example #1: </p> */}
                            <div className='example-card'>
                                <pre
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(problem.example)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Constraints */}
                {problem.constraints && (
                    <>
                        <hr />
                        <div className='constraints'>
                            <div className='text-sm font-medium'>Constraints:</div>
                            <ul
                                className='ml-5 list-disc'
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(problem.constraints)
                                }}
                            />
                        </div>
                    </>
                )}

                {/* Comments  */}
            </div>
        </div>
    )
}