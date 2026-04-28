import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def first_digit(num):
  # write your function here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (16, 1),
    (78, 7),
    (23, 2),
    (99, 9),
    (10, 1),
    (54, 5)
  ]

  passed = 0
  failed = 0

  for i, (num, expected) in enumerate(test_cases, 1):
    try:
      result = first_digit(num)
      if str(result) == str(expected):
        print(f"Test {i}: PASS")
        print(f"First digit of {num} = {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"First digit of {num} = (got {result}, expected {expected})")
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
Input: a = 16
Output: 1
Explanation: The first digit of 16 is 1

Input: a = 78
Output: 7
Explanation: The first digit of 78 is 7
`

export const firstDigitOfTwoDigitNumber = {
  id: "first-digit-of-two-digit-number",
  title: "12. First digit of a 2 digit number",
  problemStatement: `<p>Given a 2 digit number represented by <code>num</code>, return its first digit.</p>`,
  starterCode,
  testCode,
  example,
  status: getProblemStatusById("first-digit-of-two-digit-number"),
}