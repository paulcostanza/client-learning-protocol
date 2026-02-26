const starterCode = `def sum_digit_two(num):
  # write your function here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (14, 5),
    (87, 15),
    (16, 7),
    (78, 15),
    (23, 5),
    (99, 18),
    (10, 1),
    (54, 9)
  ]

  passed = 0
  failed = 0

  for i, (num, expected) in enumerate(test_cases, 1):
    try:
      result = sum_digit_two(num)
      if str(result) == str(expected):
        print(f"Test {i}: PASS")
        print(f"Sum of digits of {num} = {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Sum of digits of {num} = (got {result}, expected {expected})")
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
Input: x = 14
Output: 5
Explanation: Because 1 + 4 = 5

Input: x = 87
Output: 15
Explanation: Because 8 + 7 = 15
`

export const findSumOfTwoDigitNum = {
    id: "sum-of-two-digit-number",
    title: "13. Find sum of two digit number",
    problemStatement: `<p>Given a 2 digit number represented by <code>num</code> return the sum of its digits.</p>`,
    starterCode,
    testCode,
    example
}