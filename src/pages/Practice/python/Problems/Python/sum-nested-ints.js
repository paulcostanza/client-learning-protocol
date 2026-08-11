import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def sum_nested_ints(nums: list) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        ([1, 2, 3, 4], 10),
        ([5, 10, 15], 30),
        ([1], 1),
        ([], 0),
        ([1, [2, 3]], 6),
        ([1, [2, [3, 4]]], 10),
        ([[1, 2], [3, 4]], 10),
        ([1, [2, [3, [4, 5]]]], 15),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (nums, expected) in enumerate(test_cases, 1):
        try:
            result = sum_nested_ints(nums)

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
The list contains four integers. Their sum is 1 + 2 + 3 + 4 = 10.

---

Example #2:
Input: nums = [1, [2, 3]]
Output: 6

Explanation:
The list contains 1, along with a nested list containing 2 and 3.
The sum is 1 + 2 + 3 = 6.

---

Example #3:
Input: nums = [1, [2, [3, 4]]]
Output: 10

Explanation:
The list contains integers at multiple levels of nesting.
The sum is 1 + 2 + 3 + 4 = 10.
`

const constraints = `<ul>
    <li><code>nums</code> contains only integers and nested lists</li>
    <li>Nested lists may contain additional nested lists</li>
    <li>Return <code>0</code> if <code>nums</code> is empty</li>
    <li>The nesting depth may vary</li>
</ul>
`

const solution = `<h1>Recursion</h1>

<p>The best way to approach this problem is to think about flattening the list and adding as you go to complete the problem in a single recursive pass.</p>

<p><em>Remember</em> to trust the recursion!</p>

<h2>Algorithm</h2>

<ol>
    <li>Create an integer <code>total</code> to keep track of sum</li>
    <li>For each item in <code>nums</code>:</li>
    <ul>
        <li>If item is an integer you add it to <code>total</code></li>
        <li>Else you recurse on it, and add that to <code>total</code></li>
    </ul>
    <li>We return 1 (for current depth) plus the lowest depth in <code>result</code></li>
</ol>

<pre class="solution-code-pre"><code>def sum_nested(nums: list) -> int:
    total = 0
    
    for el in nums:
        if isinstance(el, list):
            total += sum_nested(el)
        else:
            total += el
            
    return total
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>
`

export const sumNestedInts = {
    id: "sum-nested-ints",
    title: "62. Sum Nested Ints",
    problemStatement: `<p>Return the sum of all integers in a nested list, regardless of depth.</p>`,
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
- isinstance()
- recursion: basic recurive functions and how they work
*/
