import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def zipper(str_a, str_b):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (("abc", "xyz"), "axbycz"),
    (("abc", "wxyz"), "awbxcyz"),
    (("wxyz", "abc"), "waxbycz"),
    (("", "abc"), "abc"),
    (("abc", ""), "abc"),
    (("", ""), ""),
    (("hello", "hi"), "hheillo"),
    (("ab", "12345"), "a1b2345"),
    (("12345", "ab"), "1a2b345"),
    (("a", "b"), "ab"),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, ((str_a, str_b), expected) in enumerate(test_cases, 1):
    try:
      result = zipper(str_a, str_b)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: str_a="{str_a}", str_b="{str_b}"
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: str_a="{str_a}", str_b="{str_b}"
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
  print("---")

  for log in logs:
    print(log)

run_tests()
`

const example = `Example #1 Input:
Input: str_a = "abc"
       str_b = "xyz"

Output: "axbycz"

Explanation:
Characters are interleaved one at a time.

---

Example #2 Input:
Input: str_a = "abc"
       str_b = "wxyz"

Output: "awbxcyz"

Explanation:
The remaining character from str_b is appended.

---

Example #3 Input:
Input: str_a = "wxyz"
       str_b = "ab"

Output: "waxbyz"

Explanation:
The remaining characters from str_a are appended.
`

const constraints = `<ul>
<li>0 ≤ str_a.length ≤ 10^5</li>
<li>0 ≤ str_b.length ≤ 10^5</li>
<li>Both strings contain printable characters</li>
</ul>`


const solution = `
<h2>Solution #1</h2>

<p><em>Quick, gets the job done</em></p>

<pre class="solution-code-pre"><code>
def zipper(str_a, str_b):  
  zipped = "" 
  idx = 0 
  
  while len(str_a) > idx and len(str_b) > idx: 
    zipped += str_a[idx] 
    zipped += str_b[idx] 
    idx += 1 
    
  if len(str_a) > idx: 
    zipped += str_a[idx:] 
    
  if len(str_b) > idx: 
    zipped += str_b[idx:] 
    
  return zipped
</code></pre>

<ul>
    <li>loop while both strings still have characters</li>
    <li>add one character from each string</li>
    <li>append the remainder from the longer string</li>
</ul>

<p>This is <strong>less efficient</strong> in python because strings are immutable. So essentially every <code>+=</code> creates a new string rather than modifying the existing one. As the string grows, more copying is required.</p>

<p>Time complexity is O(n^2) because of the repeated concatenation.</p>

<h2>Solution #2</h2>

<p><em>Efficiency with lists</em></p>

<pre class="solution-code-pre"><code>
def zipper(str_a, str_b):
    zipped = []
    idx = 0

    while idx < len(str_a) and idx < len(str_b):
        zipped.append(str_a[idx])
        zipped.append(str_b[idx])
        idx += 1

    zipped.extend(str_a[idx:])
    zipped.extend(str_b[idx:])

    return ''.join(zipped)
</code></pre>

<p>Lists avoid repeated string copying. Characters are collected first,
then combined once using <code>join()</code>.</p>

<p>Time complexity is O(n)</p>
`


export const zipper = {
  id: "zipper",
  title: "31. Zipper",
  problemStatement: `<p>Given two strings, return a new string that interweaves their characters one at a time. If one string is longer, append the remaining characters at the end.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("zipper"),
  solution: solution
}

// make sure it works
// add a solution -> Not sure if I have this implemented yet!
// move pass fail to top in textCode

// zipped = "" idx = 0 while len(str_a) > idx and len(str_b) > idx: zipped += str_a[idx] zipped += str_b[idx] idx += 1 if len(str_a) > idx: zipped += str_a[idx:] if len(str_b) > idx: zipped += str_b[idx:] return zipped







