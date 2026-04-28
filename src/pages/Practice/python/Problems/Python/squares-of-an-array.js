import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def squares_of_an_array(nums):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([-4, -1, 0, 3, 10], [0, 1, 9, 16, 100]),
    ([-7, -3, 2, 3, 11], [4, 9, 9, 49, 121]),
    ([0, 1, 2], [0, 1, 4]),
    ([], []),
    ([5], [25]),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (nums, expected) in enumerate(test_cases, 1):
    try:
      result = squares_of_an_array(nums[:])

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: {nums}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {nums}
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
Input: nums = [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]

Explanation: Squaring each element gives [16, 1, 0, 9, 100], which sorted becomes [0, 1, 9, 16, 100].

Example #2 Input:
Input: nums = [-7, -3, 2, 3, 11]
Output: [4, 9, 9, 49, 121]
`

const constraints = `<ul>
<li>0 ≤ nums.length ≤ 10^4</li>
<li>-10^4 ≤ nums[i] ≤ 10^4</li>
<li>nums is sorted in non-decreasing order</li>
</ul>`

export const squaresOfAnArray = {
  id: "squares-of-an-array",
  title: "23. Squares of an Array",
  problemStatement: `<p>Given a sorted list of integers, return an array of the squares of each number sorted in non-decreasing order.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("squares-of-an-array"),
}