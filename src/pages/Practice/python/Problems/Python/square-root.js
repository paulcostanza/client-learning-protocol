import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def square_root(num):
  # write your function here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (25, 5),
    (9, 3),
    (169, 13),
    (1, 1),
    (0, 0),
    (100, 10)
  ]

  passed = 0
  failed = 0

  for i, (number, expected) in enumerate(test_cases, 1):
    try:
      result = square_root(number)
      # Accept both int and float answers
      if float(result) == float(expected):
        print(f"Test {i}: PASS")
        print(f"Square root of {number} = {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Square root of {number} = (got {result}, expected {expected})")
        print(f"---")
        failed += 1
    except Exception as e:
      print(f"Test {i}: ERROR {e}")
      failed += 1
        
  print(f"Passed: {passed}, Failed: {failed}")

  if failed == 0:
    print("********** P A S S **********")
  else:
    print("********** F A I L **********")

run_tests()`

const example = `Examples:
Input: 25
Output: 5
Explanation: Because 5 * 5 = 25

Input: 9
Output: 3
Explanation: Because 3 * 3 = 9

Input: 169
Output: 13
Explanation: Because 13 * 13 = 169
`

export const squareRoot = {
  id: "square-root",
  title: "8. Square root",
  problemStatement: `<p>Return the square root of a number.</p>`,
  starterCode,
  testCode,
  example,
  status: getProblemStatusById("square-root"),
}