import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def min_window(s: str, t: str) -> str:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (("ADOBECODEBANC", "ABC"), "BANC"),
    (("a", "a"), "a"),
    (("a", "aa"), ""),
    (("aa", "aa"), "aa"),
    (("ab", "b"), "b"),
    (("abc", "ac"), "abc"),
    (("", "a"), ""),
    (("a", ""), "")
  ]

  passed = 0
  failed = 0
  logs = []

  for i, ((s, t), expected) in enumerate(test_cases, 1):
    try:
      result = min_window(s, t)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: s = "{s}", t = "{t}"
Output: "{result}"
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: s = "{s}", t = "{t}"
Got: "{result}"
Expected: "{expected}"
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
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

Explanation:
"BANC" is the shortest substring containing A, B, and C.

---

Example #2:
Input: s = "a", t = "a"
Output: "a"

---

Example #3:
Input: s = "a", t = "aa"
Output: ""
`

const constraints = `<ul>
  <li>1 ≤ <code>s.length</code>, <code>t.length</code> ≤ 10<sup>5</sup></li>
  <li><code>s</code> and <code>t</code> consist of uppercase and lowercase English letters.</li>
</ul>`

const solution = `
<h1>Brute Force</h1>

<p>We want the smallest substring <code>s</code> that contains all characters of <code>t</code> with the right counts. The brute-force way is to try <em>every possible substring</em> of <code>s</code> and check whether it covers all the characters in <code>t</code>.</p>

<p>For each starting index, we expand the end index and keep a frequency map for the current substring. Whenever the substring has all required characters, we see if it is the smallest one so far.</p>

<p>This is simple to understand, but <em>very</em> slow because we check many overlapping substrings.

<p>Time complexity is O(n^2 * m), where n is the length of the string <code>s</code> and <code>m</code> is the total number of unique characters in the string <code>t</code> and <code>s</code>.</p>

<p>Space complexity is O(m).</p>

<h1>Sliding window</h1>

<p>We want the <em>smallest window</em> in <code>s</code> that contains all characters of <code>t</code> with the right counts. Instead of checking all substrings, we use our friend sliding window.</p>

<ul>
    <li>Expand the window by moving the right pointer <code>r</code> and adding characters into a <code>window</code> map.</li>
    <li>Once the window has all required characters (it <em>covers</em> <code>t</code>), we try to <em>shrink it from the left</em> with pointer <code>l</code> to make it as small as possible while still valid.</li>
</ul>


<p>During this process, we keep track of the best (smallest) window seen so far. This way, we only scan each character at most two times, making it efficient and still easy to follow.</p>

<h2>Algorithm</h2>

<ol>
    <li>If <code>t</code> is empty, return <code>""</code>.</li>

    <li>Build a frequency map <code>countT</code> for characters in <code>t</code>.</li>

    <li>Initialize:</li>
    <ul>
      <li><code>window</code> as an empty map for the current window counts.</li>
      <li><code>have = 0</code> for how many characters currently meet the required count.</li>
      <li><code>need = len(countT)</code> for how many distinct characters we need to match.</li>
      <li><code>res = [-1, -1]</code> and <code>resLen = infinity</code> to store the best window.</li>
    </ul>

    <li>Use a right pointer <code>r</code> to expand the window over <code>s</code>:</li>
    <ul>
      <li>Add <code>s[r]</code> to <code>window</code>.</li>
      <li>If <code>s[r]</code> is in <code>countT</code> and its count in <code>window</code> matches <code>countT</code>, increment <code>have</code>.</li>
    </ul>

    <li>When <code>have == need</code>, the window is valid:</li>    
    <ul>
      <li>Update the best result if the current window is smaller.</li>
      <li>Then shrink from the left:</li>
      <ul>
        <li>Decrease the count of <code>s[l]</code> in <code>window</code>.</li>
        <li>If <code>s[l]</code> and its count in <code>window</code> falls below <code>countT</code>, decrement <code>have</code>.</li>
        <li>Move <code>l</code> right.</li>
      </ul>
    </ul>

    <li>After the loop, return the substring defined by <code>res</code> if found. Otherwise, return <code>""</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def min_window(s: str, t: str) -> str:
    if t == "":
        return ""

    countT, window = {}, {}
    for c in t:
        countT[c] = 1 + countT.get(c, 0)

    have, need = 0, len(countT)
    res, resLen = [-1, -1], float("infinity")
    l = 0
    for r in range(len(s)):
        c = s[r]
        window[c] = 1 + window.get(c, 0)

        if c in countT and window[c] == countT[c]:
            have += 1

        while have == need:
            if (r - l + 1) < resLen:
                res = [l, r]
                resLen = r - l + 1

            window[s[l]] -= 1
            if s[l] in countT and window[s[l]] < countT[s[l]]:
                have -= 1
            l += 1
    l, r = res
    return s[l : r + 1] if resLen != float("infinity") else ""
</code></pre>

<p>Time complexity is O(n + m), where n is the length of the string <code>s</code> and <code>m</code> is the total number of unique characters in the string <code>t</code> and <code>s</code>.</p>
<p>Space complexity is O(m) where <code>m</code> is the number of distinct characters stored in the frequency maps.</p>

<h1>Common Pitfalls</h1>

<h2>Not handling duplicate characters in target</h2>

<p>The target string <code>t</code> may contain duplicate characters (like "AAB"). Simply checking for character presence is insufficient, you must track the exact count of each character and ensure the window contains at least that many occurrences.</p>

<h2>Shrinking the window too aggressively</h2>

<p>When contracting the window from the left, some implementations remove characters before checking if the window is still valid. Always update the result before shrinking, and only shrink while the window remains valid.</p>



<h2>Incorrect validity check logic</h2>

<p>Using <code>have == need</code> requires careful management. <code>have</code> should only increment when a character's count exactly reaches the required amount, and only decrement when it falls below. Incrementing <code>have</code> every time a required character is added leads to overcounting.</p>

<h2>Forgetting to handle empty target string</h2>

<p>When <code>t</code> is empty, the minimum window is an empty string. Failing to handle this edge case at the start can lead to unexpected behavior or incorrect results.</p>

<h2>Off-by-one errors in substring extraction</h2>

<p>When storing and returning the result window, confusing inclusive vs exclusive bounds leads to returning a substring that is one character too short or too long. Ensure consistency between how you store indices and how you extract the final substring.</p>

`

export const minimumWindowSubstring = {
    id: "minimum-window-substring",
    title: "56. Minimum Window Substring",
    problemStatement: `<p>Given two strings <code>s</code> and <code>t</code>, return the shortest <em>substring</em> of <code>s</code>, such that every character in <code>t</code>, including duplicates, is present in the substring. If such a substring does not exist, return an empty string.</p>

    <p>It's cool to assume that the correct output is always unique.</p>
  `,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("minimum-window-substring"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- dictionaries: used for counting character frequencies in both the target string and current window
- sliding window technique: the optimal solution uses a dynamic window that expands and contracts to find the minimum valid substring
- two pointers: left and right pointers manage the window boundaries while traversing the string
*/
