import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def convert_the_seconds(sec):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (0, [0, 0, 0]),
    (59, [0, 0, 59]),
    (60, [0, 1, 0]),
    (61, [0, 1, 1]),
    (3599, [0, 59, 59]),
    (3600, [1, 0, 0]),
    (3661, [1, 1, 1]),
    (7325, [2, 2, 5]),
    (86399, [23, 59, 59]),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (sec, expected) in enumerate(test_cases, 1):
    try:
      result = convert_the_seconds(sec)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: {sec}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {sec}
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
Input: sec = 3661
Output: [1, 1, 1]

Explanation:
3661 seconds = 1 hour (3600) + 1 minute (60) + 1 second

Example #2 Input:
Input: sec = 7325
Output: [2, 2, 5]

Explanation:
7325 = 2 hours (7200) + 2 minutes (120) + 5 seconds

Example #3 Input:
Input: sec = 59
Output: [0, 0, 59]
`

const constraints = `<ul>
<li>0 ≤ sec ≤ 10^7</li>
<li>Return value must be in the format <code>[hours, minutes, seconds]</code></li>
</ul>`

export const convertTheSeconds = {
  id: "convert-the-seconds",
  title: "24. Convert The Seconds",
  problemStatement: `<p>Given seconds as the integer <code>sec</code>, return a converted array that includes hours, minutes, and seconds like so:</p>
    
<p><code>[hours, minutes, seconds]</code></p>

<p>Where:</p>
<ul>
<li>1 hour = 3600 seconds</li>
<li>1 minute = 60 seconds</li>
</ul>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("convert-the-seconds"),
}