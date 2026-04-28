import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def valid_parentheses(str):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("()", True),
    ("()[]{}", True),
    ("(]", False),
    ("([)]", False),
    ("{[]}", True),
    ("", True),
    ("(", False),
    (")", False),
    ("((()))", True),
    ("[{()}]", True),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (s, expected) in enumerate(test_cases, 1):
    try:
      result = valid_parentheses(s)

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
Input: input = "()"
Output: true

Explanation: The parentheses are properly matched.

Example #2 Input:
Input: input = "()[]{}"
Output: true

Explanation: All types of brackets are matched and in correct order.

Example #3 Input:
Input: input = "(]"
Output: false

Explanation: The types do not match.

Example #4 Input:
Input: input = "([)]"
Output: false

Explanation: The order of closing brackets is incorrect.

Example #5 Input:
Input: input = "([{()}])"
Output: false

Explanation: All types of brackets are matched and in correct order.
`

const constraints = `<ul>
<li>0 ≤ input.length ≤ 10^5</li>
<li>input consists only of the characters <code>()[]{} </code></li>
</ul>`

export const validParentheses = {
  id: "valid-parentheses",
  title: "31. Valid Parentheses",
  problemStatement: `<p>Given a string <code>str</code> containing only the characters <code>(</code>, <code>)</code>, <code>{</code>, <code>}</code>, <code>[</code>, and <code>]</code>, determine if the string is valid.</p>
<p>A string is valid if:</p>
<ul>
<li>Every opening bracket has a corresponding closing bracket of the same type.</li>
<li>Brackets are closed in the correct order.</li>
<li>Every closing bracket has a matching opening bracket.</li>
</ul>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("valid-parentheses"),
}