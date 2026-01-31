import Split from 'react-split'
import { useParams } from 'react-router-dom'
import { problems } from '../Problems/problems'
import ProblemDescription from './ProblemDescription/ProblemDescription'
import Playground from './Playground/Playground'
import { useEffect } from 'react'

export default function Workspace() {
    const { problemId } = useParams()
    const flatProblems = Object.values(problems).flat()
    const problem = flatProblems.find(p => p.id === problemId)

    useEffect(() => {
        document.body.classList.add('hide-scrollbar');
        return () => document.body.classList.remove('hide-scrollbar');
    }, []);

    if (!problem) return <h1>Yo! Problem not found...</h1>

    return (
        <Split className='split'>
            <ProblemDescription />
            <Playground />
        </Split>

    )
}