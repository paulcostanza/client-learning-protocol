import { evaluatePythonCodeForFunction } from "../../../../../Helpers/EvaluateCode"

const starterCode = `def no_remainder(x, y):
  # write your code here
  
  



`

const testCases = [
    { input: "9, 2", expected: "4" },
    { input: "14, 13", expected: "1" },
    { input: "846, 25", expected: "33" },
    { input: "263, 81", expected: "3" },
    { input: "259, 7", expected: "37" },
]

const evaluateCode = evaluatePythonCodeForFunction("no_remainder", testCases)

export const noRemainder = {
    id: "simple-remainder",
    title: "7. No Remainder",
    problemStatement: `<p>You know what? I actually hate remainders. Use <code>x</code> and <code>y</code> to divide and give me a whole number.`,
    starterCode,
    evaluateCode
}