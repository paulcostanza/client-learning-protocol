import Split from 'react-split'
import { useParams } from 'react-router-dom'
import { problemsList } from '../Problems/Python/ProblemsList'
import ProblemDescription from './ProblemDescription/ProblemDescription'
import Playground from './Playground/Playground'
import { useState, useEffect } from 'react'
import PythonProblems from '../Problems/Python/index.js'
import { useNavigate } from 'react-router-dom'

export default function Workspace() {
    const { problemId } = useParams()
    const problem = PythonProblems[problemId]
    const problemIds = Object.keys(PythonProblems);
    const currentIdx = problemIds.indexOf(problemId);
    const navigate = useNavigate()


    useEffect(() => {
        document.body.classList.add('hide-scrollbar');
        return () => document.body.classList.remove('hide-scrollbar');
    }, []);

    const nextProblem = () => {
        if (currentIdx < problemIds.length - 1) {
            const nextId = problemIds[currentIdx + 1];
            navigate(`/basics/testing/${nextId}`);
        } else {
            alert('You have reached the end of the line, nerd! More problems to come soon...')
        }
    };

    if (!problem) return <h1>Yo! Problem not found...</h1>

    return (
        <Split className='split'>
            <ProblemDescription problem={problem} />
            <Playground problem={problem} nextProblem={nextProblem} />
        </Split>
    )
}