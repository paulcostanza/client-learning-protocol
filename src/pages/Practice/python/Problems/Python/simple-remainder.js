const starterCode = `def remainder(x, y):
  # write your code here
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (8, 3, 2, 2),
    (14, 13, 1, 1),
    (846, 25, 33, 21),
    (263, 81, 3, 20),
    (259, 97, 2, 65)
  ]

  passed = 0
  failed = 0

  for i, (x, y, quotient, expected) in enumerate(test_cases, 1):
    try:
      result = remainder(x, y)
      if str(result) == str(expected):
        print(f"Test {i}: PASS")
        print(f"{x} / {y} = {quotient} with a remainder of {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"{x} / {y} = {quotient} with a remainder of (got {result}, expected {expected})")
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
remainder(4, 2) would return 0
remainder(5, 3) would return 2`

export const simpleRemainder = {
  id: "simple-remainder",
  title: "5. Simple Remainder",
  problemStatement: `<p>What is the remainder of two numbers, <code>x</code> and <code>y</code>.`,
  starterCode,
  testCode,
  example
}