import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def replace_elements(l):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([17, 18, 5, 4, 6, 1], [18, 6, 6, 6, 1, -1]),
    ([400], [-1]),
    ([1, 2, 3, 4], [4, 4, 4, -1]),
    ([10, 9, 8, 7], [9, 8, 7, -1]),
    ([5, 5, 5], [5, 5, -1])
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (nums, expected) in enumerate(test_cases, 1):
    try:
      result = replace_elements(nums[:])

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
Input: l = [17, 18, 5, 4, 6, 1]
Output: [18, 6, 6, 6, 1, -1]

Explanation:
- 17 is replaced by 18 (largest value to its right).
- 18 is replaced by 6.
- 5 is replaced by 6.
- 4 is replaced by 6.
- 6 is replaced by 1.
- The last element becomes -1.

---

Example #2:
Input: l = [400]
Output: [-1]

Explanation:
- There are no elements to the right of 400.

---

Example #3:
Input: l = [1, 2, 3, 4]
Output: [4, 4, 4, -1]

Explanation:
- Every element is replaced by the greatest element to its right.
`

const constraints = `<ul>
    <li>1 ≤ <code>len(l)</code> ≤ 10<sup>4</sup></li>
    <li>1 ≤ <code>l[i]</code> ≤ 10<sup>5</sup></li>
</ul>`

const solution = `
<h1>Suffix Max</h1>

<p>By traversing right to left, we can maintain a running maximum of all elements seen so far in <code>right_max</code>. When we visit position <code>idx</code>, the current running maximum represents the greatest element to the right of <code>idx</code>. We then update <code>right_max</code> to include <code>arr[i]</code> for the next iteration. This eliminates redundant scanning.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create a result array <code>ans</code> of the same size as the input.</li>
    <li>Inistialize <code>right_max</code> to <code>-1</code> (the value for the last position).</li>
    <li>Traverse the array from right to left using index <code>idx</code>.</li>
    <li>For each index <code>idx</code>, store the current <code>right_max</code> in <code>ans</code>.</li>
    <li>Update <code>right_max</code> to be the maximum of itself and <code>arr[idx]</code>.</li>
    <li>Return the <code>ans</code> array.</li>
    
</ol>

<pre class="solution-code-pre"><code>def replaceElements(self, arr: List[int]) -> List[int]:
    right_max = -1
    current = -1

    for idx in range(len(arr) - 1, -1, -1):
        current = arr[idx]
        arr[idx] = right_max

        if current > right_max:
            right_max = current

    return arr
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>
`

export const replaceElementsWithGreatestElementOnRightSide = {
    id: "replace-elements-with-greatest-element-on-right-side",
    title: "31. Replace elements with greatest element on right side",
    problemStatement: `<p>You are given a list of <code>l</code>. Replace every element in that list with the greatest element among the elements to its right, and replace the last element with <code>-1</code>.</p>
    <p>Return the list.`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("replace-elements-with-greatest-element-on-right-side"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- list traversal: iterating through list both forward and backward
- suffix maximum pattern: maintaining a running maximum while traversing from right to left
*/
