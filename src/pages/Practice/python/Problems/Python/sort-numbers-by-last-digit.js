import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def sort_numbers_by_last_digit(nums):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([23, 45, 12, 9], [12, 23, 45, 9]),        # last digits: 3,5,2,9 → 2,3,5,9
    ([10, 21, 32, 43], [10, 21, 32, 43]),      # last digits: 0,1,2,3
    ([7, -17, 27], [7, -17, 27]),              # all last digit 7 → stable
    ([34, 25, 16, 47], [34, 25, 16, 47]),
    ([34, 25, 16, 47], [34, 25, 16, 47]),     # corrected: 4,5,6,7 already sorted
    ([], []),
    ([5], [5]),
    ([100, -10, 0], [100, -10, 0]),            # all last digit 0
    ([19, 28, 37, 46], [46, 37, 28, 19]),     # last digits: 9,8,7,6 → sorted: 6,7,8,9
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (nums, expected) in enumerate(test_cases, 1):
    try:
      result = sort_numbers_by_last_digit(nums[:])

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
Input: nums = [23, 45, 12, 9]
Output: [12, 23, 45, 9]

Explanation:
Last digits are [3, 5, 2, 9]. Sorted order is based on [2, 3, 5, 9].

Example #2 Input:
Input: nums = [19, 28, 37, 46]
Output: [46, 37, 28, 19]

Explanation:
Last digits are [9, 8, 7, 6]. Sorted order is [6, 7, 8, 9].

Example #3 Input:
Input: nums = [7, -17, 27]
Output: [7, -17, 27]

Explanation:
All numbers have the same last digit (7), so original order is preserved.
`

const constraints = `<ul>
<li>0 ≤ nums.length ≤ 10^4</li>
<li>-10^4 ≤ nums[i] ≤ 10^4</li>
</ul>`

export const sortNumbersByLastDigit = {
  id: "sort-numbers-by-last-digit",
  title: "25. Sort Numbers By Last Digit",
  problemStatement: `<p>Sort and return the given list of numbers by their last digit in ascending order.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("sort-numbers-by-last-digit"),
}

// const solution = `Using the tools available to us, we should use the built-in <code>sorted</code> function and call it with a custom sortation. We need to add the <code>key</code> parameter.

// Solution:

// ~~~python
// def sort_numbers_by_last_digit(nums):
//     return sorted(nums, key=lambda num: abs(num) % 10)
// ~~~

// The <code>lambda</code> is an easy way to declare an anonymous function. <code>lambda: num: num % 10(num)</code> means it takes an element we identified as <code>num</code> from the list and returns the last digit in <code>num</code>. We then use that last digit to sort by.

// Why the absolute?

// Because of edge cases with negative numbers. Look at test case #3. Our input is [7, -17, 27] and we are expecting back [7, -17, 27]. Without the <code>abs</code>, <code>-17 % 10</code> produces <code>3</code>.

// <code>num</code> is just a placeholder with no significant meaning, we can call the element whatever we want.`