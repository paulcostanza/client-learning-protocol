import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def longest_substring_no_duplicates(s: str) -> int:
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
<h1>Sliding Window with a set</h1>

<p>Instead of restarting at every index like brute force, we can keep one window that always has <em>unique</em> characters. We expand the window by moving the <code>right</code> pointer. If we ever see a repeated character, we shrink the window from the <code>left</code> until the duplicate is removed. This way, the window always represents a valid substring, and we track its maximum size. It is efficient because each character is added and removed at most once.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create an empty set <code>charSet</code> and two pointers:</li>
    <ul>
      <li><code>l</code> = left edge of the window</li>
      <li><code>r</code> = right edge that moves through the string</li>
    </ul>
    <li>For each <code>r</code></li>
    <ul>
      <li>While <code>s[r]</code> is already in the set, we remove <code>s[l]</code> from the set and move <code>l</code> right.</li>
      <li>Add <code>s[r]</code> to the set.</li>
      <li>Update the result with the window size: <code>r - l + 1</code></li>
    </ul>
    <li>Return the maximum window size found.</li>
</ol>

<pre class="solution-code-pre"><code>def longest_substring_no_duplicates(s: str) -> int:
    charSet = set()
    l = 0
    res = 0

    for r in range(len(s)):
        while s[r] in charSet:
            charSet.remove(s[l])
            l += 1
        charSet.add(s[r])
        res = max(res, r - l + 1)
    return res
</code></pre>

<p>Time complexity is O(n), where n is the length of the string.</p>
<p>Space complexity is O(m), where m is the total number of unique characters in the string.</p>

<h1>Sliding Window with a dictionary</h1>

<p>Instead of removing characters one by one when we see a repeat, we can jump the <code>left</code> pointer directly to the correct position. We keep a map that stores the last index where each character appeared. When a character repeats, the earliest valid starting point moves to one position <em>after</em> its previous occurrence.</p>

<p>This lets us adjust the window in one step and always keep it valid, making the approach fast and clean.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create a dictionary <code>mp</code> to store the last index of each character.</li>
    <li>Initialize:</li>
    <ul>
      <li><code>l = 0</code> for the start of the window</li>
      <li><code>res = 0</code> for the longest length</li>
    </ul>
    <li>Loop through the string with index <code>r</code>:</li>
    <ul>
      <li>If <code>s[r]</code> is already in <code>mp</code>, move <code>l</code> to <code>max(l, mp[s[r]] + 1)</code> (but never backward!)</li>
      <li>Update <code>mp[s[r]] = r</code></li>
      <li>Update the longest length: <code>res = max(res, r - l + 1)</code></li>
    </ul>
    <li>Return <code>res</code> at the end.</li>
</ol>

<pre class="solution-code-pre"><code>def longest_substring_no_duplicates(s: str) -> int:
    mp = {} # {char : its_most_recent_idx}
    l = 0
    res = 0

    for r in range(len(s)):
        if s[r] in mp:  
            l = max(mp[s[r]] + 1, l)
        mp[s[r]] = r
        res = max(res, r - l + 1)
    return res
</code></pre>

<p>Time complexity is O(n), where n is the length of the string.</p>
<p>Space complexity is O(m), where m is the total number of unique characters in the string.</p>





<h1>Common Pitfalls</h1>

<h2>Not taking the maximum when jumping the left pointer</h2>

<p>When using the dictionary with sliding window, you should move the left pointer to <code>max(left, lastIndex[char] + 1)</code> when you find a duplicate character. Forgetting to get the higher value can cause the left pointer to move <em>backwards</em> if the duplicate character's last occurrence is before the current window start, leading to incorrect results.</p>

<h2>Forgetting to update the character's last index</h2>

<p>After processing each character, you must update its last seen index in the dictionary, regardless of whether it was a duplicate. Failing to update the index means future duplicate checks will reference stale positions, causing incorrect window calculations.</p>

<h2>Off-by-one in window size calculation</h2>

<p>When calculating the substring length, ensure you use <code>right - left + 1</code> since both indices are inclusive. Using <code>right - left</code> will undercount the length by one, resulting in an answer that is consistently one less than correct.</p>
`

export const longestSubstringWithoutDuplicates = {
  id: "longest-substring-without-duplicates",
  title: "62. Longest Substring Without Duplicates",
  problemStatement: `<p>Given a string<code>s</code>, find the length of the longest substring without duplicate characters.</p>
  
  <p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>  `,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("longest-substring-without-duplicates"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- sliding window technique: used to maintain a window of unique characters that can expand and shrink dynamically
- hash set: needed to track which characters are currently in the window for O(1) duplication detection
- hash map: the optimal solution uses a map to store character indices for direct pointer jumps
*/
