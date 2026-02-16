import { helloWorld } from './hello-world'
import { haiku } from './haiku'
import { countFromOneToTen } from './count-from-one-to-ten'
import { famousQuotes } from './famous-quotes'
import { exponentExpression } from './exponent-expression'
import { simpleRemainder } from './simple-remainder'
import { noRemainder } from './no-remainder'

const problems = {
    // Printing 101
    "hello-world": helloWorld,
    "haiku": haiku,
    "count-from-one-to-ten": countFromOneToTen,
    "famous-quotes": famousQuotes,
    // Calculator
    "exponent-expression": exponentExpression,
    "simple-remainder": simpleRemainder,
    "no-remainder": noRemainder,
}

export default problems