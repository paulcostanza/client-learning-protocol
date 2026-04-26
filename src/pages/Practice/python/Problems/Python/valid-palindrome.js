const starterCode = `def valid_palindrome(str):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("racecar", True),
    ("A man, a plan, a canal: Panama", True),
    ("hello", False),
    ("", True),
    ("a", True),
    ("No lemon, no melon", True),
    ("Was it a car or a cat I saw?", True),
    ("123abccba321", True),
    ("abc", False),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (s, expected) in enumerate(test_cases, 1):
    try:
      result = valid_palindrome(s)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: "{s}"
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: "{s}"
Got: {result}
Expected: {expected}
---""")
        failed += 1

    except Exception as e:
      logs.append(f"""Test {i}: ERROR {e}
---""")
      failed += 1

  # Print summary FIRST
  if failed == 0:
    print("********** PASS **********")
  else:
    print("********** FAIL **********")

  print(f"Passed: {passed}, Failed: {failed}\\n")
  print("---")

  # Then print details
  for log in logs:
    print(log)

run_tests()`

const example = `Example #1 Input:
Input: str = "racecar"
Output: true

Explanation: The string reads the same forward and backward.

Example #2 Input:
Input: str = "A man, a plan, a canal: Panama"
Output: true

Explanation: Ignoring spaces, punctuation, and casing, it becomes "amanaplanacanalpanama".

Example #3 Input:
Input: str = "hello"
Output: false
`

const constraints = `<ul>
<li>0 ≤ str.length ≤ 10^5</li>
<li>str consists of ASCII characters</li>
<li>You must ignore non-alphanumeric characters</li>
<li>You must ignore letter casing</li>
</ul>`

export const validPalindrome = {
    id: "valid-palindrome",
    title: "22. Valid Palindrome",
    problemStatement: `<p>Given a string <code>str</code>, return a boolean that determines if <code>str</code> is a valid palindrome or not. For this problem, ignore any non-alphabet characters such as spaces, quesiton marks, etc. Please ignore character casings as well.</p>`,
    starterCode,
    testCode,
    constraints,
    example
}