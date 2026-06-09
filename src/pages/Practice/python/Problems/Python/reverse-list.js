import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def reverse_list(l):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        (['h', 'e', 'l', 'l', 'o'], ['o', 'l', 'l', 'e', 'h']),
        (['A', 'B', 'C', 'D'], ['D', 'C', 'B', 'A']),
        (['x'], ['x']),
        (['a', 'b'], ['b', 'a']),
        ([], [])
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (chars, expected) in enumerate(test_cases, 1):
        try:
            reverse_list(chars)

            if chars == expected:
                logs.append(f"""Test {i}: PASS
Input: {expected[::-1]}
Output: {chars}
---""")
                passed += 1
            else:
                logs.append(f"""Test {i}: FAIL
Got: {chars}
Expected: {expected}
---""")
                failed += 1

        except Exception as e:
            logs.append(f"""Test {i}: ERROR {e}
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
Input: s = ['h', 'e', 'l', 'l', 'o']
Output: ['o', 'l', 'l', 'e', 'h']

Explanation:
- Swap the first and last characters.
- Continue moving inward until the pointers meet.

---

Example #2:
Input: s = ['A', 'B', 'C', 'D']
Output: ['D', 'C', 'B', 'A']

Explanation:
- Reverse the list in place using swaps.
`

const constraints = `<ul>
<li>0 ≤ <code>len(s)</code> ≤ 100,000</li>
<li>Each element is a printable ASCII character</li>
<li>The list must be modified in place</li>
<li>Use O(1) extra space</li>
</ul>`

const solution = `
<h1><code>.reverse()</code></h1>

<p>You could simply use the built-in <code>.reverse()</code> method.</p>

<pre class="solution-code-pre"><code>def reverse_string(l):
    return l.reverse()
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<p><strong>However</strong>, this method sidesteps the core skill being tested here. How would you manually swap elements of a list using an index's position?</p>

<h1>Two-pointers</h1>

<p>Let's manually swap our elements to grasp and fully understand what is going on under the hood.</p>

<h2>Algorithm</h2>

<ol>
    <li>Assign two variables, <code>left</code> to the beginning of the list and <code>right</code> to the end of the list.</li>
    <li>Start a loop that continues until <code>left</code> is greater than <code>right</code></li>
    <ul>
        <li>swap the element at position <code>left</code> with the element at position <code>right</code></li>
        <li>add 1 to <code>left</code></li>
        <li>subtract 1 from <code>right</code></li>
    </ul>
    <li>Return <code>l</code></li>
</ol>

<pre class="solution-code-pre"><code>def reverse_string(l):
    left, right = 0, len(l) - 1

    while left < right:
        l[left], l[right] = l[right], l[left]
        left += 1
        right -= 1
    
    return l
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>
`

export const reverseList = {
    id: "reverse-list",
    title: "21. Reverse List",
    problemStatement: `<p>Given a list of characters, reverse the list <strong>in place</strong> and return it.</p>
    <p>Try not to allocate a new list or any extra space proportional to the input size. Get the modification to happen directly on the input list.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("reverse-list"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- <code>.reverse()</code>
- Two Pointers
*/

