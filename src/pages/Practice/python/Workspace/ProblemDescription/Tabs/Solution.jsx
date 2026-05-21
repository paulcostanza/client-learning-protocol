import { getProblemStatusById } from '../../../../../../Helpers/localStorageHelper'
import { useEffect, useState } from 'react'

export default function Solution({ problem }) {
    const [status, setStatus] = useState(
        getProblemStatusById(problem.id)
    )

    useEffect(() => {
        const refreshStatus = () => {
            setStatus(
                getProblemStatusById(problem.id)
            )
        }

        window.addEventListener(
            'problem-status-changed',
            refreshStatus
        )

        return () =>
            window.removeEventListener(
                'problem-status-changed',
                refreshStatus
            )
    }, [problem.id])

    return (
        <div>
            {problem.solution ? (
                status === undefined ? (
                    <>
                        <p style={{ textAlign: "center" }}><strong>✋🏻🛑⛔️ To view solution, please submit the problem ⛔️🛑✋🏻</strong></p>
                        <p>Right or wrong, this window will explain how to approach this question, and the various ways to solve it.</p>
                    </>
                ) : (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: problem.solution
                        }}
                    />
                )
            ) : (
                <>
                    <h1 className="problem-title">Solution</h1>
                    <p>⚠️ Work in Progress ⚠️</p>
                </>
            )}
        </div>
    )
}