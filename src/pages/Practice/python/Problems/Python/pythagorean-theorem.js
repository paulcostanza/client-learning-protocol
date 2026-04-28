import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def pythagorean_theorem(a, b):
  # write your function here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (3, 4, 5),
    (5, 12, 13),
    (8, 15, 17),
    (7, 24, 25),
    (6, 8, 10),
    (9, 12, 15)
  ]

  passed = 0
  failed = 0

  for i, (a, b, expected) in enumerate(test_cases, 1):
    try:
      result = pythagorean_theorem(a, b)
      # Accept both int and float answers
      if float(result) == float(expected):
        print(f"Test {i}: PASS")
        print(f"pythagorean_theorem({a}, {b}) = {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"pythagorean_theorem({a}, {b}) = (got {result}, expected {expected})")
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
Input: a = 3, b = 4
Output: 5
Explanation: c = sqrt of (a^2 + b^2) = sqrt of (9 + 16) = sqrt of 25 = 5

Input: a = 5, b = 12
Output: 13
Explanation: c = sqrt of (a^2 + b^2) = sqrt of (25 + 144) = sqrt of 169 = 13
`

export const pythagoreanTheorem = {
  id: "pythagorean-theorem",
  title: "9. Pythagorean Theorem",
  problemStatement: `<p>Given two shorter sides of a right triangle, return the hypotenuse.</p>`,
  starterCode,
  testCode,
  example,
  status: getProblemStatusById("pythagorean-theorem"),
}