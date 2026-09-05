import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def find_all_subsets(nums: list[int]) -> list[list[int]]:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        ([1, 2, 3], [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]),
        ([1, 2], [[], [2], [1], [1, 2]]),
        ([1], [[], [1]]),
        ([], [[]]),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (nums, expected) in enumerate(test_cases, 1):
        try:
            result = find_all_subsets(nums)

            if sorted(result) == sorted(expected):
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

    print(f"Passed: {passed}, Failed: {failed}\\\n")

    for log in logs:
        print(log)


run_tests()
`

const example = `Example #1:
Input: nums = [1, 2, 3]
Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

Explanation:
There are two choices for each number: include it or exclude it. Since there are 3 numbers, there are 2<sup>3</sup> = 8 possible subsets.

---

Example #2:
Input: nums = [1, 2]
Output: [[], [1], [2], [1, 2]]

Explanation:
There are two choices for each of the two numbers, giving 2^2 = 4 subsets.

---

Example #3:
Input: nums = []
Output: [[]]

Explanation:
The empty array has exactly one subset: the empty subset.
`

const constraints = `<ul>
    <li><code>nums</code> contains only unique integers</li>
    <li>The solution must contain all possible subsets</li>
    <li>The solution must not contain duplicate subsets</li>
    <li>The empty subset <code>[]</code> must be included</li>
    <li>The subsets may be returned in any order</li>
</ul>
`

const solution = `<h1>Backtracking</h1>

<p>The idea is to build all possible subsets by making a choice at each step. For every number we have two options: include it or exclude it (a good ol fashion dicision tree).</p>

<p>Backtracking is perfect for this problem, as it helps us to further explore by adding the current number, or explore without it by remove the number (undoing).</p>

<p>Whenever we reach the end of the array, the current list represents one complete subset, so we must store it. This pattern generates all <code>2<sup>n</sup></code> subsets.</p>

<h2>Algorithm</h2>

<ol>
    <li>We need to keep track of our...</li>
    <ul>
        <li><code>result</code>: the final list of all the subsets</li>
        <li><code>subset</code>: the current subset being built</li>
    </ul>
    <li>Define a recursive helper function <code>helper(idx)</code></li>
    <ul>
        <li>If <code>idx</code> equals the length of the input...</li>
        <ul>
            <li>add a copy of <code>subset</code> to <code>result</code></li>
            <li><code>return</code></li>
        </ul>
    </ul>
    <ul>
        <li>Option 1: include <code>nums[idx]</code></li>
        <ul>
            <li>append number to <code>subset</code></li>
            <li>recurse to next index</li>
            <li>remove the number (backtrack that sh!t)</li>
        </ul>
    </ul>
    <ul>
        <li>Option 2: skip <code>nums[idx]</code></li>
        <ul>
            <li>recurse to next index</li>
        </ul>
    </ul>

    <li>Start recursion with <code>helper(0)</code></li>
    <li><code>return result</code></li>
</ol>

<pre class="solution-code-pre"><code>def find_all_subsets(nums: list[int]) -> list[list[int]]:
    result = []
    subset = []
    def helper(idx: int) -> list[int]:
        if idx == len(nums):
            result.append(subset[:])
            return

        subset.append(nums[idx])
        helper(idx + 1)
        subset.pop()
        helper(idx + 1) 

    helper(0)

    return result
</code></pre>

<ul>
    <li>Time complexity is <code>O(n * 2<sup>n</sup>)</code></li>
    <li>Space complexity is <code>O(n)</code> for the extra space and <code>O(2<sup>n</sup>)</code> for the output list.</li>
</ul>

<h2>Iteration</h2>

<p>Starting with just one subset, for every number in the array we take all the subsets we have so far and create new subsets by adding the current number to each of them. If we have a list of <code>nums = [1, 2, 3]</code>:</p>

<ul>
    <li>Starts with <code>[[]]</code></li>
    <li>Add <code>1</code>: <code>[[], [1]]</code></li>
    <li>Add <code>2</code>: <code>[[], [1], [2], [1, 2]]</code></li>
    <li>Add <code>3</code>: <code>[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]</code></li>
</ul>

<p>Each step <em>doubles</em> the number of subsets</p>

<h3>Algorithm</h3>

<ol>
    <li>Initialize <code>result = [[]]</code>.</li>
    <li>For each number <code>num</code> in the input array...</li>
    <ul>
        <li>For every subset already in <code>result</code> we create a new subset that includes the current element.</li>
        <li>Append all these newly created subsets to <code>result</code>.</li>
    </ul>
    <li>Return <code>result</code> after processing all numbers in list.</li>
</ol>

<pre class="solution-code-pre"><code>def find_all_subsets(nums: list[int]) -> list[list[int]]:
    result = [[]]

    for num in nums:
        result += [subset + [num] for subset in result]

    return result
</code></pre>

<p>Time complexity of <code>O(n * 2<sup>n</sup>)</code>.</p>
<p>Space complexity of <code>O(n)</code> extra space and <code>O(2<sup>n</sup>)</code> for the output list.</p>

<h2>Bit Manipulation</h2>

<p>Every subset can be represented using bits. For a list of length <code>n</code>, there are <code>2<sup>n</sup></code> possible subsets. Each subset corresponds to a number from <code>0</code> to <code>2<sup>n</sup> - 1</code>. Example, if we have <code>nums = [a, b, c]</code>:</p>

<ul>
    <li><code>000</code>: choose nothing (<code>[]</code>)</li>
    <li><code>001</code>: choose <code>c</code></li>
    <li><code>010</code>: choose <code>b</code></li>
    <li><code>011</code>: choose <code>b, c</code></li>
    <li><code>100</code>: choose <code>a</code></li>
    <li>and so on...</li>
</ul>

<p>Each bit tells us whether or not to <em>include</em> the corresponding element. So for every integer <code>i</code> from <code>0</code> to <code>(1 << n) - 1</code>:</p>

<ul>
    <li>Check each bit <code>j</code> of <code>i</code>.</li>
    <li>If bit <code>j</code> is <code>i</code>, include <code>nums[j]</code> in the current subset.</li>
</ul>

<h3>Algorithm</h3>

<ol>
    <li>Let <code>n</code> be the length of <code>nums</code>.</li>
    <li>Loop <code>i</code> from <code>0</code> to <code>(1 << n) - 1</code>. This generates all bitmasks.</li>
    <li>For each <code>i</code> build a subset:</li>
    <ul>
        <li>For each position <code>j</code> from <code>0</code> to <code>n - 1</code> checkif the <code>j</code>-th bit of <code>i</code> is set, include <code>nums[j]</code> in the subset.</li>
    </ul>
    <li>Add the subset to the <code>result</code> list.</li>
    <li>return <code>result</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def find_all_subsets(nums: list[int]) -> list[list[int]]:
    n = len(nums)
    result = []
    for i in range(1 << n):
        subset = [nums[j] for j in range(n) if (i & (1 << j))]
        result.append(subset)
    return result
</code></pre>

<p>Time complexity is <code>O(n * 2<sup>n</sup>)</code>.</p>
<p>Space complexity is <code>O(n)</code> extra space and <code>O(2<sup>n</sup>)</code> for the output list.</p>

<h2>Common Pitfalls</h2>

<h3>Modifying the subset <em>after</em> adding to result</h3>

<p>When adding a subset to the result list, you must add a copy of the current subset. Otherwise, backtracking modifications will alter subsets already in the result.</p>

<pre class="solution-code-pre"><code># Wrong! This adds a reference that gest modified later
result.append(subset)

# Correct! This adds a copy
result.append(subset[:])
</code></pre>

<h3>Forgetting the empty subset</h3>

<p>The power set always includes the empty subset <code>[]</code>. Forgetting to initialize with an empty subset or starting the iteration incorrectly will miss this case.</p>

<h3>Incorrect index handling in backtracking</h3>

<p>When recursing, start from <code>idx + 1</code> to avoid reusing the same element and to prevent duplicate subsets. Starting from <code>0</code> or <code>idx</code> generates incorrect results.</p>

<pre class="solution-code-pre"><code># Wrong! This includes the current element again
for j in range(idx, len(nums)):

# Correct! This starts from the next element
for j in range(idx + 1, len(nums)):
</code></pre>

<h3>Integer overflow in bitmask approach</h3>

<p>For the bitmask solution, <code>1 << n</code> can overflow for large <code>n</code>. In most languages, this limits the approach to around 30 elements, though problem constraints usually keep <code>n</code> small.</p>
`

export const findAllSubsets = {
    id: "find-all-subsets",
    title: "Find All Subsets",
    problemStatement: `<p>Given an array <code>nums</code> of unique integers, return all possible subsets of <code>nums</code>. The solution set must not contain duplicate subsets. You may return the solution in any order.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("find-all-subsets"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- recursion: basic recursive functions and how they work
- backtracking
- bit manipulation
*/

/*
Other ways to solve it

- 
*/