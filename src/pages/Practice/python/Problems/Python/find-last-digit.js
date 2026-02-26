const starterCode = `def last_digit(num):
  # write your function here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (132, 2),
    (162436, 6),
    (0, 0),
    (12345, 5),
    (987654321, 1),
    (100, 0)
  ]

  passed = 0
  failed = 0

  for i, (num, expected) in enumerate(test_cases, 1):
    try:
      result = last_digit(num)
      if str(result) == str(expected):
        print(f"Test {i}: PASS")
        print(f"Last digit of {num} = {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Last digit of {num} = (got {result}, expected {expected})")
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
Input: a = 132
Output: 2
Explanation: The last digit of 132 is 2

Input: a = 162436
Output: 6
Explanation: The last digit of 162436 is 6
`

export const findLastDigit = {
    id: "find-last-digit",
    title: "11. Find the last digit",
    problemStatement: `<p>Given <code>num</code>, return the last digit.</p>`,
    starterCode,
    testCode,
    example
}