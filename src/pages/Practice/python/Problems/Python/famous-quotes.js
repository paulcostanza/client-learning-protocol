import { evaluatePythonCodeForConsole } from '../../../../../Helpers/EvaluateCode'

const starterCode = `def famous_quotes():
  # enter code here
  




famous_quotes()`

const example = `"I'll be back." - The Terminator, 1984
"You're gonna need a bigger boat." - Jaws, 1975
"Where we're going, we don't need roads." - Back to the Future, 1985`

const evaluateCode = evaluatePythonCodeForConsole(example)

export const famousQuotes = {
    id: "famous-quotes",
    title: "4. Famous Quotes",
    problemStatement: `<p>Print out these famous movie quotes.</p>`,
    example: example,
    constraints: `<li className='mt-2'>Make sure you escape</li>`,
    starterCode: starterCode,
    evaluateCode: evaluateCode
}