import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def sort_numbers_by_absolute_value(nums):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([3, -1, -4, 2], [-1, 2, 3, -4]),
    ([-7, -3, 2, 3, 11], [2, -3, 3, -7, 11]),
    ([0, -1, 1], [0, -1, 1]),
    ([], []),
    ([5], [5]),
    ([-2, 2, -2, 2], [-2, 2, -2, 2]),
    ([10, -10, 5, -5], [5, -5, 10, -10]),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (nums, expected) in enumerate(test_cases, 1):
    try:
      result = sort_numbers_by_absolute_value(nums[:])

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
Input: nums = [3, -1, -4, 2]
Output: [-1, 2, 3, -4]

Explanation:
Absolute values are [3, 1, 4, 2], so sorting by absolute value gives [-1, 2, 3, -4].

Example #2 Input:
Input: nums = [-7, -3, 2, 3, 11]
Output: [2, -3, 3, -7, 11]

Explanation:
Absolute values are [7, 3, 2, 3, 11]. Sorted order respects stability for equal values.

Example #3 Input:
Input: nums = [0, -1, 1]
Output: [0, -1, 1]
`

const constraints = `<ul>
<li>0 ≤ nums.length ≤ 10^4</li>
<li>-10^4 ≤ nums[i] ≤ 10^4</li>
</ul>`

export const sortNumbersByAbsoluteValue = {
  id: "sort-numbers-by-absolute-value",
  title: "25. Sort Numbers By Absolute Value",
  problemStatement: `<p>Sort and return the given list of numbers by their absolute value in ascending order.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("sort-numbers-by-absolute-value"),
}

// const solution = `Using the tools available to us, we should use the built-in <code>sorted</code> function and call it with a custom sortation. We need to add the <code>key</code> parameter. There is also the built-in function <code>abs</code> that returns the absolute value of a number. This problem is already done!

// Solution #1:

// ~~~python
// def sort_numbers_by_absolute_value(nums):
//     return sorted(nums, key=lambda num: abs(nums))
// ~~~

// The <code>lambda</code> is an easy way to declare an anonymous function. <code>lambda: num: abs(num)</code> means it takes an element we identified as <code>num</code> from the list and returns <code>abs(num)</code>. <code>num</code> is just a placeholder with no significant meaning, we can call the element whatever we want.

// Solution #2:

// ~~~python
// def sort_numbers_by_absolute_value(nums):
//     return sorted(nums, key=abs)
// ~~~

// <code>abs</code> is a built-in function, so no need for the lambda. We also can omit the parentheses after <code>abs</code>, or else it will execute prematurely. The sorting function will handle that for us!`