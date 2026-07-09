import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def first_unique_char(s):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("leetcode", 0),
    ("loveleetcode", 2),
    ("aabb", -1),
    ("z", 0),
    ("aabbccd", 6)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (s, expected) in enumerate(test_cases, 1):
    try:
      result = first_unique_char(s)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: s="{s}"
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: s="{s}"
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
Input: s = "leetcode"
Output: 0

Explanation:
- 'l' appears exactly once.
- It is the first non-repeating character.

---

Example #2:
Input: s = "loveleetcode"
Output: 2

Explanation:
- 'l' appears more than once.
- 'o' appears more than once.
- 'v' appears exactly once.
- The index of 'v' is 2.

---

Example #3:
Input: s = "aabb"
Output: -1

Explanation:
- Every character appears more than once.
- There is no non-repeating character.
`

const constraints = `<ul>
    <li>1 ≤ <code>s.length</code> ≤ 100,000</li>
    <li><code>s</code> consists of lowercase English letters</li>
</ul>`

const solution = `
<h1>Dictionary</h1>

<p>Instead of checking every pair of characters, we can count the frequency of each character in a single pass.</p>

<p>Then, in a second pass, we find the first character whose count is exactly <code>1</code>. This trades space for time.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create a dictionary to store the count of each character.</li>
    <li>First pass: iterate through the string and increment the count for each character.</li>
    <li>Second pass: iterate through the string again and return the index of the first character with count equal to <code>1</code>.</li>
    <li>If no unique character is found, return <code>-1</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def first_unique_char(s):
    count = {}

    for char in s:
        count[char] = count.get(char, 0) + 1

    for idx, char in enumerate(s):
        if count[char] == 1:
            return idx
    
    return -1
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(26) -> O(1) since we have 26 different characters at most.</p>

<h1>Dictionary - Optimal</h1>

<p>We can optimize the second pass by iterating over the hash map instead of the string. For each character, we store its first occurrence index. If the character appears again, we mark it as non-unique by setting its index to <code>n</code>, the string length. Finally, we find the minimum index among all unique characters.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create a dictionary where each character maps to its first occurrence index.</li>
    <li>Iterate through the string:</li>
    <ul>
        <li>If the character is not in the map, store its index</li>
        <li>If it already exists, mark it as non-unique by setting the value to <code>n</code></li>
    </ul>
    <li>Find the minimum value in the hash map</li>
    <li>Return the minimum index if it is less than <code>n</code>, otherwise return <code>-1</code></li>
</ol>

<pre class="solution-code-pre"><code>def first_unique_char(s):
    n = len(s)
    count = {}

    for idx, char in enumerate(s):
        if char not in count:
            count[char] = idx
        else:
            count[char] = n

    result = n
    for char in count:
        result = min(result, count[char])

    return -1 if result == n else result
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1) since we have 26 characters at most.</p>

<h1>Iteration</h1>

<p>Since the string contains only lowercase letters, we can iterate through all 26 characters and find the first occurrence of each. If a character's first and last occurrence are the same index, it appears exactly once. We track the minimum such index across all characters.</p>

<h2>Algorithm</h2>

<ol>
    <li>Initialize <code>result</code> to the string length <code>n</code></li>
    <li>For each character from <code>a</code> to <code>z</code>:</li>
    <ul>
        <li>find its first occurrence index using <code>indexof</code> (or equivalent)</li>
        <li>find its last occurrence index using <code>lastIndexOf</code></li>
        <li>if both indices are equal and the character exists, update <code>result</code> with the minimum</li>
    </ul>
    <li>Return <code>result</code> if it is less than <code>n</code>, otherwise return <code>-1</code></li>
</ol>

<pre class="solution-code-pre"><code>def first_unique_char(s):
    result = n = len(s)

    for char in range(ord('a'), ord('z') + 1):
        idx = s.find(chr(char))
        if idx != -1 and s.rfind(chr(char)) == idx:
            result = min(result, idx)
            
    return -1 if result == n else result
</code></pre>

<p>Time complexity is O(26 * n) -> O(n) since we have 26 different characters at most.</p>
<p>Space complexity is O(1).</p>

<h1>Common Pitfalls</h1>

<h2>Returning the character instead of the index</h2>

<p>This problem asks for the <em>index</em> and not the character itself. Get in the habit of double-cheching what the problem is asking for!</p>

<h2>Iterating over the dictionary instead of string</h2>

<p>Dictionaries <em>do not</em> preserve insertion order... sort of! Modern Python (versions 3.7+) now do. If you are using an older version you need to iterate over the string, because iterating over values not in order may give you incorrect results.</p>

<hr />

<p>You can use <code>defaultdict</code> to create a dictionary and ommit having to use <code>get</code>.</p>

<pre class="solution-code-pre"><code>count - defaultdict(int) # char -> count
for c in s:
  count[c] += 1
</code></pre>
`

export const firstUniqueCharacterInAString = {
    id: "first-unique-character-in-a-string",
    title: "21. First Unique Character in a String",
    problemStatement: `<p>You are given a string of <code>s</code>. Find the <em>first non-repeating character</em> in it and return its index. If it does not exist, return <code>-1</code>.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("first-unique-character-in-a-string"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- Dictionaries: used to count character frequencies in O(1) time
- String iteration: traversing strings and accessing characters by index
*/

// for time complexity, add how it is O(n) + O(n) = O(2n) = O(n)