import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def find_min(nums: list[int]) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("abcabcbb", 3),
    ("bbbbb", 1),
    ("pwwkew", 3),
    ("", 0),
    ("dvdf", 3),
    ("abba", 2),
    ("abcdef", 6),
    ("aab", 2)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (s, expected) in enumerate(test_cases, 1):
    try:
      result = longest_substring_no_duplicates(s)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: s = "{s}"
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: s = "{s}"
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
Input: s = "abcabcbb"
Output: 3

Explanation:
The longest substring without repeating characters is "abc".

---

Example #2:
Input: s = "bbbbb"
Output: 1

Explanation:
The longest substring without repeating characters is "b".

---

Example #3:
Input: s = "pwwkew"
Output: 3

Explanation:
The longest substring without repeating characters is "wke".
`

const constraints = `<ul>
    <li>0 ≤ <code>s.length</code> ≤ 5 * 10<sup>4</sup></li>
    <li><code>s</code> consists of English letters, digits, symbols, and spaces.</li>
</ul>`

const solution = `
<h1>Binary search</h1>

<p>In a rotated sorted array, the mimimum element is the <em>first element of the rotated portion</em>. Using binary search, we compare the middle valuewith the rightmost value:</p>

<ul>
  <li>If <code>nums[mid] < nums[right]</code>, then the minimum lies in the <em>left half</em> (including <code>mid</code>!)</li>
  <li>Otherwise, the mimimum lies in the <em>right half</em> (excluding <code>mid</code>!)</li>
</ul>

<p>This behaves exactly like finding a <em>lower bound</em>, graduallyt shrinking the search space until only the minimum remains.</p>

<h2>Algorithm</h2>

<ol>
    <li>Set <code>left = 0</code> and <code>right = n - 1</code></li>
    <li>While <code>left < right</code>:</li>
    <ul>
      <li>Compute <code>mid</code></li>
      <li>If <code>nums[mid]</code> is less than <code>nums[right]</code>, move <code>right</code> to <code>mid</code> because the mimimum is on the left.</li>
      <li>Otherwise, move <code>left</code> to <code>mid + 1</code> because the minimum is on the right.</li>
    </ul>
    <li>When the loop ends, <code>left</code> points to the smallest element.</li>
    <li>Return <code>nums[left]</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def longest_substring_no_duplicates(s: str) -> int:
    l, r = 0, len(nums) - 1
    while l < r:
        m = l + (r - l) // 2
        if nums[m] < nums[r]:
            r = m
        else:
            l = m + 1
    return nums[l]
</code></pre>

<p>Time complexity is O(log n).</p>
<p>Space complexity is O(1).</p>

<h1>Common Pitfalls</h1>

<h2>Comparing <code>mid</code> with <code>left</code> instead of <code>right</code></h2>

<p>In the lower bound approach, comparing <code>nums[mid]</code> with <code>nums[left]</code> instead of <code>nums[right]</code> can lead to incorrect boundary up0dates, especially when the array is not rotated or rotated by <code>n</code> positions. Comparing with the rightmost element consistently determines which half contains the mimimum.</p>

<h2></h2>

<p></p>

<h2></h2>

<p></p>`

export const findMinimumInRotatedSortedList = {
  id: "find-minimum-in-rotated-sorted-list",
  title: "62. Find Minimum In Rotated Sorted List",
  problemStatement: `<p>You are given a list of length <code>n</code> which was originally sorted in ascending order. It has now been <em>rotated</em> between <code>1</code> and <code>n</code> times. For example, the list might become: </p>

  <ul>
    <li><code>[3, 4, 5, 6, 1, 2]</code> if it was rotated <code>4</code> times.</li>
    <li><code>[1, 2, 3, 4, 5, 6]</code> if it was rotated <code>6</code> times.</li>
  </ul>

  <p>Notice that rotating the list <code>4</code> times moves the last four elements of the list to the beginning. Rotating the list <code>6</code> times produces the original array.</p>

  <p>Assuming all elements in the rotated sorted list <code>nums</code> are unique, return the minium element of this list.</p>

  <p>Don't be lame and submit <code>O(n)</code> time, we want <code>O(log n)</code> time!</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("find-minimum-in-rotated-sorted-list"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- binary search: the optimal solution adapts binary search to work on a rotated array by determining which half contains the minimum
- list rotation concept: understanding how rotation shifts elements helps identify the sorted and unsorted portions of the list
*/
