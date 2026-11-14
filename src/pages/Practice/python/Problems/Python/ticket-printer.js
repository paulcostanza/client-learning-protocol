// work in progress!
// trying to get input to work with the current way we test

// Practice

// test for output: various examples of what an output currently looks like and how it should end up

// re-ask until valid

// create print outs like this: 

// NOW SHOWING
// 1  Space Dogs        9.50
// 2  Night Bus        11.00
// 3  Robot Summer     12.50
// Pick a movie (1-3): 4
// Please type 1, 2, or 3: 2
// How many tickets (1-6)? 3
// Name for the booking: Sam

// ------------------------------
//          YOUR TICKETS
// ------------------------------
// Name:                      Sam
// Movie:               Night Bus
// Tickets:                     3
// Total:                  $33.00
// ------------------------------
import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

// Secondary file called movies.py:
// movies = {
//     "Night Bus": 11.00,
//     "The Last Horizon": 12.50,
//     "Space Raiders": 10.00
// }

const starterCode = `def ticket_printer() -> None:
  # write your code here!
  
  
  
  
  
  
  
  
`

const inputs = ["Sam", "Night Bus", "3"];

const expectedOutput = `
// ------------------------------
//          YOUR TICKETS
// ------------------------------
// Name:                      Sam
// Movie:               Night Bus
// Tickets:                     3
// Total:                  $33.00
// ------------------------------
`;

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
Input: 
- Sam
- Night Bus
- 3

Output:
// ------------------------------
//          YOUR TICKETS
// ------------------------------
// Name:                      Sam
// Movie:               Night Bus
// Tickets:                     3
// Total:                  $33.00
// ------------------------------

---

`

const constraints = `<ul>
    <li>Import the <code>movies</code> dictionary from <code>movies.py</code>.</li>
    <li>Use <code>input()</code> to collect all three pieces of information.</li>
    <li>The movie entered will exist in the <code>movies</code> dictionary.</li>
    <li>The ticket quantity will be a positive integer.</li>
    <li>Format the total as currency with exactly two decimal places.</li>
    <li>Maintain the exact spacing and formatting shown in the example.</li>
</ul>`

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


`

export const ticketPrinter = {
    id: "ticket-printer",
    title: "Ticket Printer",
    problemStatement: `<p>Print out a ticket receipt for a movie cinema. The data needs to include the pateron's name, the movie they are seeing, how many tickets they need, and the total cost.<p>
    
    <p>The data about the movies is in an external file called \`movies.py\`. `,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("ticket-printer"),
    solution: solution
}

/*
Warning: users can total cheat on this if they hard code the answer.

- 
*/