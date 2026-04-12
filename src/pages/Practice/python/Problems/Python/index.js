import { helloWorld } from './hello-world'
import { addFromFifteenToOneHundredSeven } from './add-from-fifteen-to-one-hundred-seven'
import { famousQuote } from './famous-quote'
import { exponentExpression } from './exponent-expression'
import { simpleRemainder } from './simple-remainder'
import { noRemainder } from './no-remainder'
import { addSNumberNTimes } from './add-s-n-times'
import { squareRoot } from './square-root'
import { pythagoreanTheorem } from './pythagorean-theorem'
import { discountCalculator } from './discount-calculator'
import { findLastDigit } from './find-last-digit'
import { firstDigitOfTwoDigitNumber } from './first-digit-of-two-digit-number'
import { findSumOfTwoDigitNum } from './find-sum-of-two-digit-num'
import { firstDigitOfHundredsPlace } from './first-digit-of-hundreds-place'
import { substringDeduplicator } from './substring-deduplicator'
import { singleIndexStringMutation } from './single-index-string-mutation'
import { textWrap } from './text-wrap'
import { countAffordablePairs } from './count-affordable-pairs'
import { matrixRotationI } from './matrix-rotation-i'
import { howMany } from './how-many'
import { addLists } from './add-lists'
import { popLastNElements } from './pop-last-n-elements'
import { palindromeCharacters } from './palindromeCharacters'
import { listToSet } from './list-to-set'
import { countUniqueWords } from './count-unique-words'
import { containsDuplicate } from './contains-duplicate'

const problems = {
    // Printing 101
    "hello-world": helloWorld,
    "famous-quote": famousQuote,
    // Calculator
    "add-from-fifteen-to-one-hundred-seven": addFromFifteenToOneHundredSeven,
    "exponent-expression": exponentExpression,
    "simple-remainder": simpleRemainder,
    "no-remainder": noRemainder,
    "add-s-n-times": addSNumberNTimes,
    "square-root": squareRoot,
    "pythagorean-theorem": pythagoreanTheorem,
    "discount-calculator": discountCalculator,
    "find-last-digit": findLastDigit,
    "first-digit-of-two-digit-number": firstDigitOfTwoDigitNumber,
    "find-sum-of-two-digit-num": findSumOfTwoDigitNum,
    "first-digit-of-hundreds-place": firstDigitOfHundredsPlace,
    // Strings
    "substring-deduplicator": substringDeduplicator,
    "single-index-string-mutation": singleIndexStringMutation,
    "text-wrap": textWrap,
    "palindrome-characters": palindromeCharacters,
    // list, 
    "how-many": howMany,
    "add-lists": addLists,
    "pop-last-n-elements": popLastNElements,
    // sets,
    "list-to-set": listToSet,
    "count-unqiue-words": countUniqueWords,
    "contains-duplicate": containsDuplicate,
    // two pointer
    "count-affordable-pairs": countAffordablePairs,
    // matrices
    "matrix-rotation-i": matrixRotationI,
}

export default problems