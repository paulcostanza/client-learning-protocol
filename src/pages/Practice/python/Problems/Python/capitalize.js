const starterCode = `def capitalize(str):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("chris alan", "Chris Alan"),
    ("paul allen", "Paul Allen"),
    ("heLLo woRLD", "HeLLo WoRLD"),
    ("john   doe", "John   Doe"),
    ("123abc test", "123abc Test"),
  ]

  passed = 0
  failed = 0

  for i, (s, expected) in enumerate(test_cases, 1):
    try:
      result = capitalize(s)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: ({s})")
        print(f"Output: {result}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: ({s})")
        print(f"Got: {result}")
        print(f"Expected: {expected}")
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

const example = `Example Input:
str = 'paul allen'

Output:
"Paul Allen"
`

const constraints = `<ul>
<li>0 < len(str) < 1000</li>
<li><code>str</code> conists of alphanumeric characters and spaces</li>
</ul>`

export const capitalize = {
    id: "capitalize",
    title: "18. Capitalize",
    problemStatement: `<p>Ensure that the first and last names of a list of people begin with a capital letter.</p>`,
    starterCode,
    testCode,
    constraints,
    example
}