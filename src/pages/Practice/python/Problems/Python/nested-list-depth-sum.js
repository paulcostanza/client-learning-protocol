import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def weight_sum(nums: list) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        ([1, 2, 3, 4], 10),
        ([5, 10, 15], 30),
        ([1], 1),
        ([], 0),
        ([1, [2, 3]], 11),
        ([1, [2, [3, 4]]], 26),
        ([[1, 2], [3, 4]], 20),
        ([1, [2, [3, [4, 5]]]], 50),
        ([1, [[[69, 5], [64, 62], 3]]], 810),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (nums, expected) in enumerate(test_cases, 1):
        try:
            result = weight_sum(nums)

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
            logs.append(f"""Test {i}: ERROR

Input: {nums}
Error: {e}
---""")
            failed += 1

    if failed == 0:
        print("********** P A S S **********")
    else:
        print("********** F A I L **********")

    print(f"Passed: {passed}, Failed: {failed}\\n")

    for log in logs:
        print(log)


run_tests()
`

const example = `Example #1:
Input: nums = [1, 2, 3, 4]
Output: 10

Explanation:
All integers are at depth 1, so the weighted sum is:
(1 * 1) + (2 * 1) + (3 * 1) + (4 * 1) = 10.


---

Example #2:
Input: nums = [1, [2, 3]]
Output: 11

Explanation:
1 is at depth 1, while 2 and 3 are at depth 2.

The weighted sum is:
(1 * 1) + (2 * 2) + (3 * 2) = 11.


---

Example #3:
Input: nums = [1, [2, [3, 4]]]
Output: 26

Explanation:
1 is at depth 1, 2 is at depth 2, and 3 and 4 are at depth 3.

The weighted sum is:
(1 * 1) + (2 * 2) + (3 * 3) + (4 * 3) = 26.
`

const constraints = `<ul>
    <li><code>nums</code> contains only integers and nested lists</li>
    <li>Nested lists may contain additional nested lists</li>
    <li>Each integer is multiplied by its depth</li>
    <li>The top-level depth is <code>1</code></li>
    <li>Return <code>0</code> if <code>nums</code> is empty</li>
    <li>The nesting depth may vary</li>
</ul>
`

const solution = `<h1>Recursion</h1>

<p>The key to this problem is keeping track of the current depth as you recursively traverse the nested list.</p>

<p><em>Remember</em> to trust the recursion!</p>

<h2>Algorithm</h2>

<ol>
    <li>Create a <code>helper</code> function that accepts the current list and its depth.</li>
    <li>Initialize a <code>total</code> variable to <code>0</code>.</li>
    <li>For each item in <code>nums</code>:</li>
    <ul>
        <li>If the item is an integer, add the integer multiplied by the current depth to <code>total</code>.</li>
        <li>If the item is a list, recursively process it with <code>depth + 1</code>.</li>
    </ul>
    <li>Return <code>total</code></li>
    <li>Start the recursion at depth <code>1</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def weight_sum(nums: list) -> int:
    def helper(nums, depth):
        total = 0

        for el in nums:
            if isinstance(el, list):
                total += helper(el, depth + 1)
            else:
                total += el * depth

        return total

    return helper(nums, 1)
</code></pre>

<ul>
    <li>Time complexity is <code>O(n)</code>, where <code>n</code> is the total number of integers and nested-list elements.</li>
    <li>Space complexity is <code>O(d)</code>, where <code>d</code> is the maximum nesting depth.</li>
</ul>
`

export const nestedListDepthSum = {
    id: "nested-list-depth-sum",
    title: "65. Nested List Depth Sum",
    problemStatement: `<p>Return the depth-weighted sum of all integers in a nested list. Each integer needs to be multiplied by its nested depth (with top level = 1). The results need to be summed together.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("nested-list-depth-sum"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- list
- functions
- isinstance()
- recursion: basic recursive functions and how they work
*/

/*
Other ways to solve it

- BFS variant with a queue of (item, depth) tuples
- iterative DFS using a stack of (item, depth) tuples
*/