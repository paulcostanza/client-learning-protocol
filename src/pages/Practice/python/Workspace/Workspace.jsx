import Split from 'react-split'
import { useParams } from 'react-router-dom'
import ProblemDescription from './ProblemDescription/ProblemDescription.jsx'
import Playground from './Playground/Playground.jsx'
import { useState, useEffect } from 'react'
import PythonProblems from '../Problems/Python/index.js'
import { useNavigate } from 'react-router-dom'
import { getQuestionStatus, getNextReview, getHumanReadableNextReview } from '../../../../Helpers/localStorageHelper.js'

export default function Workspace() {
    const [activeTab, setActiveTab] = useState('description')
    const { problemId } = useParams()
    const problem = PythonProblems[problemId]
    const problemIds = Object.keys(PythonProblems)
    const currentIdx = problemIds.indexOf(problemId)
    const [output, setOutput] = useState('')
    const navigate = useNavigate()


    useEffect(() => {
        document.body.classList.add('hide-scrollbar')
        return () => document.body.classList.remove('hide-scrollbar')
    }, [])

    const nextProblem = () => {
        setOutput('')
        if (currentIdx < problemIds.length - 1) {
            const nextId = problemIds[currentIdx + 1]
            navigate(`/practice/python/${nextId}`)
            setActiveTab('description')
        } else {
            alert('You have reached the end of the line, nerd! More problems to come soon...')
        }
    }

    const nextInPlaylistProblem = () => {
        setOutput('')
        setActiveTab('description')

        let searchIdx = currentIdx + 1

        while (searchIdx != currentIdx) {
            let status = getQuestionStatus('python-basics', problemIds[searchIdx])
            let review = getHumanReadableNextReview(getNextReview('python-basics', problemIds[searchIdx]))

            if (typeof status == 'undefined'
                || status == 'incorrect'
                || review == 'Ready!') {
                if (searchIdx === problemIds.length) {
                    searchIdx = 0
                }
                navigate(`/practice/python/${problemIds[searchIdx]}`)
                return
            }
        }
        alert("No problem's in the playlist, try again tomorrow!")
    }

    if (!problem) return <h1>Yo! Problem not found...</h1>

    return (
        <Split className='split'>
            <ProblemDescription problem={problem} activeTab={activeTab} setActiveTab={setActiveTab} />
            <Playground
                problem={problem}
                nextProblem={nextProblem}
                nextInPlaylistProblem={nextInPlaylistProblem}
                output={output}
                setOutput={setOutput}
            />
        </Split>
    )
}