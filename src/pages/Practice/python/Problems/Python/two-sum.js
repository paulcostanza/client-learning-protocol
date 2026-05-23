import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def two_sum(nums, target):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (([2, 7, 11, 15], 9), [0, 1]),
    (([3, 2, 4], 6), [1, 2]),
    (([3, 3], 6), [0, 1]),
    (([1, 5, 8, 2], 7), [1, 3]),
    (([-1, -2, -3, -4, -5], -8), [2, 4]),
    (([0, 4, 3, 0], 0), [0, 3]),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, ((nums, target), expected) in enumerate(test_cases, 1):
    try:
      result = two_sum(nums[:], target)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: nums = {nums}, target = {target}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: nums = {nums}, target = {target}
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
    print("********** P A S S **********")
  else:
    print("********** F A I L **********")

  print(f"Passed: {passed}, Failed: {failed}\\n")
  print("---")

  # Then print details
  for log in logs:
    print(log)

run_tests()`

const example = `Example #1 Input:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]

Explanation:
nums[0] + nums[1] = 2 + 7 = 9

Example #2 Input:
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]

Explanation:
nums[1] + nums[2] = 2 + 4 = 6

Example #3 Input:
Input: nums = [3, 3], target = 6
Output: [0, 1]

Explanation:
nums[0] + nums[1] = 3 + 3 = 6
`

const constraints = `<ul>
<li>2 ≤ nums.length ≤ 10^5</li>
<li>-10^9 ≤ nums[i] ≤ 10^9</li>
<li>-10^9 ≤ target ≤ 10^9</li>
<li>Exactly one valid answer exists</li>
<li>You may not use the same element twice</li>
</ul>`



export const twoSum = {
  id: "two-sum",
  title: "33. Two Sum",
  problemStatement: `<p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return the indices of the two numbers such that they add up to <code>target</code>.</p>

<p>You may assume that each input has exactly one solution, and you may not use the same element twice.</p>

<p>Return the indices in ascending order.</p>`,

  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("two-sum"),
}


// nums_map = {}

// for idx, num in enumerate(nums):
//     difference = target - num
//     if difference in nums_map:
//         return [nums_map[difference], idx]
//     nums_map[num] = idx