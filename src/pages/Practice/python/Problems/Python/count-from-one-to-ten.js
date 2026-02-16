import { evaluatePythonCodeForConsole } from '../../../../../Helpers/EvaluateCode'

const starterCode = `def onToTen():
  # enter code here
  
  
  
  
  
onToTen()`

const example = `1
2
3
4
5
6
7
8
9
10`

const evaluateCode = evaluatePythonCodeForConsole(example)

export const countFromOneToTen = {
    id: "count-from-one-to-ten",
    title: "3. Count from One to Ten",
    problemStatement: `<p>Print out 1 to 10, line by line.</p>`,
    example: example,
    constraints: `<li className='mt-2'>You could just print line by line, but is there a better way?</li>`,
    starterCode: starterCode,
    evaluateCode: evaluateCode
}