import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def count_affordable_pairs(prices, budget):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([1, 2, 3, 4, 5], 7, 8),
    ([1, 1, 1], 2, 3),
    ([2, 3, 5, 8], 7, 2),
    ([1, 2], 3, 1),
    ([5], 10, 0),
    ([], 100, 0),
  ]

  passed = 0
  failed = 0

  for i, (prices, budget, expected) in enumerate(test_cases, 1):
    try:
      result = count_affordable_pairs(prices, budget)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: ({prices}, {budget})")
        print(f"Output: {result}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: ({prices}, {budget})")
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
prices = [1, 2, 3, 4, 5]
budget = 7

Explanation:
We need pairs (i, j) with i < j and prices[i] + prices[j] ≤ 7. List all pairs:

(1, 2) = 3 ≤ 7
(1, 3) = 4 ≤ 7
(1, 4) = 5 ≤ 7
(1, 5) = 6 ≤ 7
(2, 3) = 5 ≤ 7
(2, 4) = 6 ≤ 7
(2, 5) = 7 ≤ 7
(3, 4) = 7 ≤ 7
Pairs like (3,5)=8, (4,5)=9 exceed the budget. Total valid pairs = 8.

Output:
8
`

const constraints = `<ul>
<li>0 ≤ prices.length ≤ 1000</li>
<li>1 ≤ prices[i] ≤ 10^9 for all 0 ≤ i < prices.length</li>
<li>prices is sorted in non-decreasing order</li>
<li>1 ≤ budget ≤ 10^9</li>
<li>All inputs are integers</li>
</ul>`

export const countAffordablePairs = {
  id: "count-affordable-pairs",
  title: "33. Count Affordable Pairs",
  problemStatement: `<p>Given a sorted array of positive integers and a target value, count the number of pairs <code>(i, j)</code> where <code>i < j</code> and <code>array[i] + array[j] <= target</code>.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("count-affordable-pairs"),
}