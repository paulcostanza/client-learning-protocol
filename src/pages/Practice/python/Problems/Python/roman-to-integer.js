import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def roman_to_int(str):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("III", 3),
    ("IV", 4),
    ("IX", 9),
    ("LVIII", 58),
    ("MCMXCIV", 1994),
    ("XL", 40),
    ("XC", 90),
    ("CD", 400),
    ("CM", 900),
    ("MMXXVI", 2026),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (s, expected) in enumerate(test_cases, 1):
    try:
      result = roman_to_int(s)

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
Input: str = "III"
Output: 3

Explanation: III = 1 + 1 + 1 = 3.

Example #2 Input:
Input: str = "IV"
Output: 4

Explanation: I comes before V, so it is subtracted: 5 - 1 = 4.

Example #3 Input:
Input: str = "MCMXCIV"
Output: 1994

Explanation: M = 1000, CM = 900, XC = 90, IV = 4.
Total = 1994.
`

const constraints = `<ul>
<li>1 ≤ str.length ≤ 15</li>
<li>str consists only of the characters <code>I, V, X, L, C, D, M</code></li>
<li>It is guaranteed that <code>str</code> is a valid Roman numeral in the range [1, 3999]</li>
</ul>`

export const romanToInteger = {
  id: "roman-to-integer",
  title: "32. Roman To Integer",
  problemStatement: `<p>Given <code>str</code>, a Roman numeral in a string format, convert it to an integer.</p>
    
<p>Roman numerals are represented by the following symbols:</p>
<ul>
<li><code>I = 1</code></li>
<li><code>V = 5</code></li>
<li><code>X = 10</code></li>
<li><code>L = 50</code></li>
<li><code>C = 100</code></li>
<li><code>D = 500</code></li>
<li><code>M = 1000</code></li>
</ul>

<p>Normally, symbols are added together. However, in certain cases, a smaller value placed before a larger value indicates subtraction:</p>
<ul>
<li><code>IV = 4</code>, <code>IX = 9</code></li>
<li><code>XL = 40</code>, <code>XC = 90</code></li>
<li><code>CD = 400</code>, <code>CM = 900</code></li>
</ul>

<p>Return the integer value of the Roman numeral.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("roman-to-integer"),
}