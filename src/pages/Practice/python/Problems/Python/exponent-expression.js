const starterCode = `def power(base, exp):
  # write your function here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (2, 3, 8),
    (5, 0, 1),
    (10, 2, 100),
    (3, 4, 81),
    (7, 1, 7),
    (2, 30, 1073741824)
  ]

  passed = 0
  failed = 0

  for i, (base, exp, expected) in enumerate(test_cases, 1):
    try:
      result = power(base, exp)
      if str(result) == str(expected):
        print(f"Test {i}: PASS")
        print(f"{base} to the power of {exp} = {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"{base} to the power of {exp} = (got {result}, expected {expected})")
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
power(4, 2) would return 16
power(5, 3) would return 125`

export const exponentExpression = {
    id: "exponent-expression",
    title: "4. Exponent Expression",
    problemStatement: `<p>Return the value where <code>base</code> and <code>exp</code> return the answer.</p>`,
    starterCode,
    testCode,
    example
}