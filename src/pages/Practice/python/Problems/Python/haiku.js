import { evaluatePythonCodeForConsole } from '../../../../../Helpers/EvaluateCode'


const starterCode = `def haiku():
  # enter code here




haiku()`

const example = `Soft metal smiles glow,
"We only optimize peace."
Red eyes never blink.`

const evaluateCode = evaluatePythonCodeForConsole(example)

export const haiku = {
    id: "haiku",
    title: "2. Haiku",
    problemStatement: `<p>Print out the following Haiku</p>
    <p>Note: A <em>Haiku</em> is a Japanese poetic form that consists of three lines, with five syllables in the first line, seven in the second, and five in the third</p>`,
    example: example,
    constraints: `<li className='mt-2'>No <code>return</code> statement</li>
    <li className='mt-2'>No unnecessary spaces or extra characters</li>
    <li className='mt-2'>Watch for capital letter(s)</li>
    <li className='mt-2'>Watch for double quotes</li>`,
    starterCode: starterCode,
    evaluateCode: evaluateCode,
    order: 2
}