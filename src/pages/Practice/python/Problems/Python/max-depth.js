import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def max_depth(nums: list[int]) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        ([1, 2, 3, 4], 1),
        ([5, 10, 15], 1),
        ([1], 1),
        ([], 1),
        ([1, [2, 3]], 2),
        ([1, [2, [3, 4]]], 3),
        ([[1, 2], [3, 4]], 2),
        ([1, [2, [3, [4, 5]]]], 4),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (nums, expected) in enumerate(test_cases, 1):
        try:
            result = max_depth(nums)

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
Output: 1

Explanation:
This list contains no nested lists, so its depth is 1.

---

Example #2:
Input: nums = [1, [2, 3]]
Output: 2

Explanation:
The outer list has a nested list inside it, so the maximum depth is 2.

---

Example #3:
Input: nums = [1, [2, [3, 4]]]
Output: 3

Explanation:
The list contains a list, which contains another list, so the maximum depth is 3.
`

const constraints = `<ul>
<li><code>nums</code> is a Python list</li>
<li>A flat list has a depth of <code>1</code></li>
<li>Each level of nesting increases the depth by <code>1</code></li>
<li>The list may contain integers and other lists</li>
</ul>
`

const solution = `<h1>Recursion</h1>

<p>For each item we need to check if the element is an integer or a list. If it is a list then we will recurse. If not then we do not need to go any deeper.</p>

<p>The depth of the current list is <code>1 + max((depth(s) for s in sublists), default=0)</code>.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create a <code>result</code> list to keep track of depths.</li>
    <li>Check each item in <code>nums</code></li>
    <ul>
        <li>If item is also a list, we need to iterate into it and append its total depth to <code>result</code></li>
    </ul>
    <li>We return 1 (for current depth) plus the lowest depth in <code>result</code></li>
</ol>

<pre class="solution-code-pre"><code>def sum_flat_list(nums: list[int]) -> int:
  total = []
  for item in nested:
    if isinstance(item, list):
      total.append(max_depth(item))
    
  return 1 + max(total, default=0) 
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(n).</p>
`

export const maxDepth = {
    id: "max-depth",
    title: "61. Max Depth",
    problemStatement: `<p>Return the maximum nesting depth of a list. A flat list has a depth of <code>1</code>, a list containg a list has a depth of 2, and so on.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("max-depth"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- list
- functions
- recursion: basic recurive functions and how they work
*/
