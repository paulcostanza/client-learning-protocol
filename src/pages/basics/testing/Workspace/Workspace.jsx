import Split from 'react-split'
import { useParams } from 'react-router-dom'
import { problemsList } from '../Problems/Python/ProblemsList'
import ProblemDescription from './ProblemDescription/ProblemDescription'
import Playground from './Playground/Playground'
import { useState, useEffect } from 'react'
import PythonProblems from '../Problems/Python/index.js'

export default function Workspace() {
    const { problemId } = useParams()
    const problem = PythonProblems[problemId]
    const flatProblems = Object.values(problemsList).flat()
    // const problem = flatProblems.find(p => p.id === problemId)
    const [currentProblemIdx, setCurrentProblemIdx] = useState('hello-world')
    const currentProblem = PythonProblems[currentProblemIdx]

    useEffect(() => {
        document.body.classList.add('hide-scrollbar');
        return () => document.body.classList.remove('hide-scrollbar');
    }, []);

    if (!problem) return <h1>Yo! Problem not found...</h1>

    return (
        <Split className='split'>
            <ProblemDescription problem={problem} />
            <Playground problem={problem} />
        </Split>
    )
}