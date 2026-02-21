const starterCode = `def no_remainder(x, y):
  # write your code here
  
  
  
  
  
    
`

const testCode = `def run_tests():
  test_cases = [
    (9, 2, 4.5, 4),
    (17, 5, 3.4, 3),
    (846, 25, 33.84, 33),
    (263, 50, 5.26, 5),
    (259, 7, 37.0, 37)
  ]

  passed = 0
  failed = 0

  for i, (x, y, quotient, expected) in enumerate(test_cases, 1):
    try:
      result = no_remainder(x, y)
      if str(result) == str(expected):
        print(f"Test {i}: PASS")
        print(f"{x} / {y} = {quotient}, round down to {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"{x} / {y} = {quotient}, round down to (got {result}, expected {expected})")
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
no_remainder(5, 3) would return 1
no_remainder(17, 15) would return 3`

export const noRemainder = {
  id: "no-remainder",
  title: "6. No Remainder",
  problemStatement: `<p>You know what? I actually hate remainders. Divide <code>x</code> and <code>y</code> and give me a whole number. Round down if you have to.</p>`,
  constraints: `<li className='mt-2'>You shouldn't need to round down, as you can do this in one statement</li>`,
  starterCode,
  testCode,
  example
}