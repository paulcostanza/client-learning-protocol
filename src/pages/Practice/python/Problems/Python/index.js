import { helloWorld } from './hello-world'
// import { haiku } from './haiku'
import { addFromFifteenToOneHundredSeven } from './add-from-fifteen-to-one-hundred-seven'
import { famousQuote } from './famous-quote'
import { exponentExpression } from './exponent-expression'
import { simpleRemainder } from './simple-remainder'
import { noRemainder } from './no-remainder'

const problems = {
    // Printing 101
    "hello-world": helloWorld,
    // "haiku": haiku,
    "famous-quote": famousQuote,
    "add-from-fifteen-to-one-hundred-seven": addFromFifteenToOneHundredSeven,

    // Calculator
    "exponent-expression": exponentExpression,
    "simple-remainder": simpleRemainder,
    "no-remainder": noRemainder,
}

export default problems