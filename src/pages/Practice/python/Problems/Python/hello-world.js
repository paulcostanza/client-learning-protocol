import { evaluatePythonCodeForConsole } from '../../../../../Helpers/EvaluateCode'

const starterCode = `def helloWorld(): 
  # Write your code here




  
helloWorld()
`

const example = `Hello world!`

const evaluateCode = evaluatePythonCodeForConsole(example)

export const helloWorld = {
    id: "hello-world",
    title: "1. Hello World",
    problemStatement: `<p>Print the phrase <code>Hello world!</code> to the console.</p>`,
    constraints: `<li className='mt-2'>No <code>return</code> statement</li>
    <li className='mt-2'>No unnecessary spaces or extra characters</li>
    <li className='mt-2'>Watch for capital letter(s)</li>`,
    starterCode: starterCode,
    evaluateCode: evaluateCode,
    order: 1
}