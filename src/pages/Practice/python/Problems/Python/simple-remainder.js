import { evaluatePythonCodeForFunction } from "../../../../../Helpers/EvaluateCode"

const starterCode = `def remainder(x, y):
  # write your code here
  
  



`

const testCases = [
    { input: "8, 3", expected: "2" },
    { input: "14, 13", expected: "1" },
    { input: "846, 25", expected: "21" },
    { input: "263, 81", expected: "20" },
    { input: "259, 97", expected: "65" },
]

const evaluateCode = evaluatePythonCodeForFunction("remainder", testCases)

export const simpleRemainder = {
    id: "simple-remainder",
    title: "6. Simple Remainder",
    problemStatement: `<p>What is the remainder of two numbers, <code>x</code> and <code>y</code>.`,
    starterCode,
    evaluateCode
}