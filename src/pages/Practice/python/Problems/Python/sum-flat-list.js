import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def sum_flat_list(nums: list[int]) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        ([1, 2, 3, 4], 10),
        ([5, 10, 15], 30),
        ([1], 1),
        ([], 0),
        ([0, 1, 0, 2], 3),
        ([-1, 2, -3, 4], 2),
        ([10, 20, 30, 40, 50], 150)
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (nums, expected) in enumerate(test_cases, 1):
        try:
            result = sum_flat_list(nums)

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
1 + 2 + 3 + 4 = 10

---

Example #2:
Input: nums = [5, 10, 15]
Output: 30

Explanation:
5 + 10 + 15 = 30

---

Example #3:
Input: nums = []
Output: 0

Explanation:
An empty list has no values to add, so the result is 0.
`

const constraints = `<ul>
<li><code>0 <= len(nums) <= 10^5</code></li>
<li><code>nums</code> contains integers</li>
<li>Do not use loops</li>
<li>Do not use <code>sum()</code>.</li>
<li>Do not use <code>functools.reduce()</code></li>
<li>The solution <em>must</em> use recursion</li>
</ul>
`

const solution = `<h1>Recursion</h1>

<p>To solve this problem we need to return the first element of the list plus recursion on the rest of the list.</p>

<p>Remember to <em>trust the recursion</em> and assume <code>sum_flat_list(nums[1:])</code> correctly sums the rest of the list.</p>

<h2>Algorithm</h2>

<ol>
    <li>Base case: If we have an empty list then return 0.</li>
    <li>Recursion case: <code>nums[0] + sum_flat_list(nums[1:])</code></li>
</ol>

<pre class="solution-code-pre"><code>def sum_flat_list(nums: list[int]) -> int:
  if not nums:
    return 0

  return nums[0] + sum_flat_list(nums[1:])
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(n).</p>
`

export const sumFlatList = {
    id: "sum-flat-list",
    title: "60. Sum Flat List",
    problemStatement: `<p>Given a list of <code>nums</code>, sum each integer and return the total <strong>recursivly</code>.</p>

    <p>Loops, <code>sum()</code>, and <code>functools.reduce</code> are <code>not</code> allowed! The solution must use recursion.</p>
  
  
  `,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("sum-flat-list"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- list
- functions
- recursion: basic recurive functions and how they work
*/
