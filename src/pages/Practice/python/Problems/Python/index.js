import { helloWorld } from './hello-world'
import { addFromFifteenToOneHundredSeven } from './add-from-fifteen-to-one-hundred-seven'
import { famousQuote } from './famous-quote'
import { exponentExpression } from './exponent-expression'
import { simpleRemainder } from './simple-remainder'
import { noRemainder } from './no-remainder'

const problems = {
    // Printing 101
    "hello-world": helloWorld,
    "famous-quote": famousQuote,
    // Calculator
    "add-from-fifteen-to-one-hundred-seven": addFromFifteenToOneHundredSeven,
    "exponent-expression": exponentExpression,
    "simple-remainder": simpleRemainder,
    "no-remainder": noRemainder,
}

export default problems