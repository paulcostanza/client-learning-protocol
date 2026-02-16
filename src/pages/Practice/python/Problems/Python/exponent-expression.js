import { evaluatePythonCodeForFunction } from '../../../../../Helpers/EvaluateCode'

const starterCode = `def power(base, exp):
  # write your function here

`

const testCases = [
    { input: "2, 3", expected: "8" },
    { input: "5, 0", expected: "1" },
    { input: "10, 2", expected: "100" },
    { input: "3, 4", expected: "81" },
    { input: "7, 1", expected: "7" },
    { input: "2, 30", expected: "1073741824" }
];

const evaluateCode = evaluatePythonCodeForFunction("power", testCases);

export const exponentExpression = {
    id: "exponent-expression",
    title: "5. Exponent Expression",
    problemStatement: `<p>Return the value where <code>base</code> and <code>exp</code> return the answer.</p>`,
    starterCode,
    evaluateCode
}