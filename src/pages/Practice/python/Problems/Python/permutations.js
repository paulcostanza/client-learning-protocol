import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def permutations(nums: list[int]) -> list[list[int]]:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        ([1, 2, 3], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]),
        ([1, 2], [[1, 2], [2, 1]]),
        ([1], [[1]]),
        ([], [[]]),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (nums, expected) in enumerate(test_cases, 1):
        try:
            result = permutations(nums)

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

    print(f"Passed: {passed}, Failed: {failed}\\n")

    for log in logs:
        print(log)


run_tests()
`

const example = `Example #1:
Input: nums = [1, 2, 3]
Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

Explanation:
There are 3 unique numbers, leading to 3! = 6 unique permutations.

---

Example #2:
Input: nums = [1, 2]
Output: [[1, 2], [2, 1]]

Explanation:
There are 2 unique numbers, leading to 2! = 2 unique permutations.

---

Example #3:
Input: nums = [1]
Output: [[1]]

Explanation:
A single element array has only 1 permutation.
`

const constraints = `<ul>
    <li><code>nums</code> contains only unique integers</li>
    <li>1 &lt;= <code>nums.length</code> &lt;= 6</li>
    <li>The solution must contain all possible permutations</li>
    <li>The solution must not contain duplicate permutations</li>
    <li>The permutations may be returned in any order</li>
</ul>
`

const solution = `<h2>Backtracking</h2>

<p>With backtracking we generate all solutions one element at a time. To accomplish this we use an array <code>curr</code> that represents the current permutation we are building. To start, we add the first element in <code>nums</code>. We have <code>curr = [nums[0]]</code>. We are locking in this first value and we will now find all permutations that start with <code>nums[0]</code>.</p>

<p>To find all permutations that start with <code>nums[0]</code>, we start by adding the next element, which is <code>nums[1]</code>. We now have <code>curr=[nums[0], nums[1]]</code>. We then lock in this second element and we now find all permutations that start with <code>nums[0], nums[1]</code>.</p>

<p>This pattern will continue until we use all elements and hit <code>len(curr) == len(nums)</code>.</p>

<p>Let's say we have finished finding all permutations that start with <code>[nums[0], nums[1]]</code>. We then backtrack by removing the <code>nums[1]</code>, and we are at <code>curr = [nums[0]]</code> again. Now when we add the second element we get <code>curr = [nums[0], nums[2]]</code>. We continue to find all permutations that start with <code>[nums[0], [2]]</code>.</p>

<p>This problem couldn't be more backtracking in nature.</p>

<h3>Algorithm</h3>

<ol>
    <li>Initialize <code>result</code> and <code>curr</code>.</li>
    <li>Initialize a <code>helper</code> functions that takes <code>curr</code> as an argument.</li>
    <ul>
        <li>If <code>len(curr) == len(nums)</code>, add a copy of <code>curr</code> to <code>result</code> and return.</li>
        <li>Iterate over <code>nums</code>. For each <code>num</code>, if <code>num</code> is not <code>curr</code> we add <code>num</code> to <code>curr</code> and call <code>helper(curr)</code>, then remove <code>num</code> from <code>curr</code>.</li>
    </ul>
    <li>Call <code>helper</code> with an initially empty <code>curr</code>.</li>
    <li>Return <code>result</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def permutations(nums: list[int]) -> list[list[int]]:
    result = []

    def helper(curr: list[int]) -> list[list[int]]:
        if len(curr) == len(nums):
            result.append(curr[:])
            return

        for num in nums:
            if num not in curr:
                curr.append(num)
                helper(curr)
                curr.pop()
    
    helper([])
    return result
</code></pre>

<p>Time complexity of <code>O(n * n!)</code>.</p>
<p>Space complexity of <code>O(n)</code> for <code>curr</code> and the depth of the recursion call stack.</p>

<h2>Iteration</h2>

<p>We build the permutation step-by-step using iteration instead of recursion.</p>

<p>Start with one empty permutation of <code>[]</code>. For each number in <code>nums</code>, we take all permutations and insert the new number into every possible position. For example, let's build with <code>[1, 2, 3]</code>:</p>

<ul>
    <li>Start with <code>[]</code>.</li>
    <li>Insert <code>1</code>: <code>[1]</code>.</li>
    <li>Insert <code>2</code> into every position of <code>[1]</code>: <code>[2, 1]</code>, <code>[1, 2]</code>.</li>
    <li>Insert <code>3</code> into every position of each permuation:</li>
    <ul>
        <li>For <code>[2, 1]</code>: <code>[3, 2, 1]</code>, <code>[2, 3, 1]</code>, <code>[2, 1, 3]</code>.</li>
        <li>For <code>[1, 2]</code>: <code>[3, 1, 2]</code>, <code>[1, 3, 2]</code>, <code>[1, 2, 3]</code>.</li>
    </ul>
</ul>

<p>By inserting each number in all positions of all existing permutations, we generate all possible permutations.</p>

<h3>Algorithm</h3>

<ol>
    <li>Start with <code>result = [[]]</code>.</li>
    <li>For each number <code>num</code> in <code>nums</code>:</li>
    <ul>
        <li>Create a new list <code>curr</code>.</li>
        <li>For every permutation <code>r</code> in <code>result</code>:</li>
        <ul>
            <li>Insert <code>num</code> into every index <code>0...len(r)</code> to create new permutations.</li>
            <li>Add each new permutation to <code>curr</code>.</li>
        </ul>
        <li>Replace <code>result</code> with <code>curr</code></li>
    </ul>
    <li>Return <code>curr</code> as the final list of all permutations.</li>
</ol>

<pre class="solution-code-pre"><code>def permutations(nums: list[int]) -> list[list[int]]:
    result = [[]]
    for num in nums:
        curr = []
        for r in result:
            for i in range(len(r) + 1):
                r_copy = r[:]
                r_copy.insert(i, num)
                curr.append(r_copy)
        result = curr
    return result
</code></pre>

<p>Time complexity is <code>O(n! * n<sup>2</sup>)</code>.</p>
<p>Space complexity is <code>O(n! * n)</code> for the output list.</p>

<h2>Backtracking with bit masking</h2>

<p>Let's generate all permutations with a bitmask (<code>mask</code>) to track which elements in <code>nums</code> have been used.</p>

<p>Each bit in <code>mask</code> represents whether an index <code>i</code> is used. If we use an example with 4 numbers: <code>mask = 0101</code> means indices 0 and 2 are already chosen. This makes checking usage extremely fast using:</p>

<ul>
    <li><code>(mask & (1 << i))</code>: checks if index <code>i</code> is used.</li>
    <li><code>(mask | (1 << i))</code>: marks index <code>i</code> as used for the next recursive call.</li>
</ul>

<p>We build permutations by trying every unused index at each step until we have chosen all numbers.</p>

<h3>Algorithm</h3>

<ol>
    <li>Start with...</li>
    <ul>
        <li>an empty permutation <code>perm</code></li>
        <li><code>mask = 0</code> meaning nothing is used yet</li>
    <ul>
    <li>If <code>perm</code> has length equal to <code>nums</code>, add a copy to the result.</li>
    <li>Loop through all indices <code>i</code> in <code>nums</code>. If bit <code>i</code> in <code>mask</code> is <code>0</code> then the number is not used:</li>
    <ul>
        <li>Append <code>nums[i]</code> to <code>perm</code>.</li>
        <li>Recurse with <code>mask</code> updated to mark <code>i</code> as used.</li>
        <li>Backtrack: remove the last element from <code>perm</code></li>
    </ul>
    <li>Continue until all permutations are generated.</li>
</ol>

<pre class="solution-code-pre"><code>def permutations(nums: list[int]) -> list[list[int]]:
    result = []

    def backtrack(perm: List[int], nums: List[int], mask: int):
        if len(perm) == len(nums):
            result.append(perm[:])
            return
        for i in range(len(nums)):
            if not (mask & (1 << i)):
                perm.append(nums[i])
                backtrack(perm, nums, mask | (1 << i))
                perm.pop()

    backtrack([], nums, 0)
    return result
</code></pre>

<p>Time complexity is <code>O(n! * n)</code>.</p>
<p>Space complexity is <code>O(n! * n)</code> for the output list.</p>

<h2>Common Pitfalls</h2>

<h3>Adding reference instead of copy</h3>

<p>When a complete permutation is found you must add a copy of the current permutation list to the result, not the reference. The reference means all entries in the result will point to the same list, which gets modified during backtracking.</p>

<h3>Forgetting to backtrack</h3>

<p>After recursively exploring with an element added to the permutation, you must remove it (backtrack) before trying the next element. Forgetting to pop the element or reset the visited flag results in incomplete exploration of the decision tree and missing permutations.</p>

<h3>Inefficient element tracking</h3>

<p>Using linear search to check if an element is already in the permutation leads to <code>O(n)</code> overhead per check, resulting in <code>O(n! * n<sup>2</sup>)</code> time complexity. Using a boolean visited array or bitmask reduces this to <code>O(1)</code> per check, achieving the optimal <code>O(n! * n)</code> complexity.</p>
`

export const permutations = {
    id: "permutations",
    title: "Permutations",
    problemStatement: `<p>Return all permutations of a list of distinct integers in any order.</p>
    <p>A permutation is a rearrangement of all the elements of an array.`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("permutations"),
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