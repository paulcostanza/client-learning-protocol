import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def first_digit_from_hundreds_place(num):
  # write your function here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (165, 1),
    (762, 7),
    (166, 1),
    (768, 7),
    (999, 9),
    (100, 1),
    (234, 2),
    (501, 5)
  ]

  passed = 0
  failed = 0

  for i, (num, expected) in enumerate(test_cases, 1):
    try:
      result = first_digit_from_hundreds_place(num)
      if str(result) == str(expected):
        print(f"Test {i}: PASS")
        print(f"First digit of hundreds place in {num} = {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"First digit of hundreds place in {num} = (got {result}, expected {expected})")
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
Input: a = 165
Output: 1
Explanation: The first digit of 165 is 1.

Input: a = 762
Output: 7
Explanation: The first digit of 762 is 7.
`

export const firstDigitOfHundredsPlace = {
  id: "first-digit-of-hundreds-place",
  title: "14. First digit of Hundreds Place",
  problemStatement: `<p>Given a three digit number <code>num</code>, return the first digit.</p>`,
  starterCode,
  testCode,
  example,
  status: getProblemStatusById("first-digit-of-hundreds-place"),
}