import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def valid_palindrome(s):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("racecar", True),
    ("A man, a plan, a canal: Panama", True),
    ("hello", False),
    ("", True),
    ("a", True),
    ("No lemon, no melon", True),
    ("Was it a car or a cat I saw?", True),
    ("123abccba321", True),
    ("abc", False),
    (".,!?", True)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (s, expected) in enumerate(test_cases, 1):
    try:
      result = valid_palindrome(s)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: "{s}"
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: "{s}"
Got: {result}
Expected: {expected}
---""")
        failed += 1

    except Exception as e:
      logs.append(f"""Test {i}: ERROR {e}
---""")
      failed += 1

  # Print summary FIRST
  if failed == 0:
    print("********** P A S S **********")
  else:
    print("********** F A I L **********")

  print(f"Passed: {passed}, Failed: {failed}\\n")
  print("---")

  # Then print details
  for log in logs:
    print(log)

run_tests()`

const solution = `<h1>Clean and reverse</h1>

<p>To check if a string is a palindrome, we only care about letters and digits. Everything else can be ignored</p>

<p>We can build a cleaned version of the string that contains only alphanumeric characters with all letters converted to lowercase for consistency. Once we have this cleaned string, the problem becomes very simple: a string is a palindrome if it is exactly the same as its reverse.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create an empty string called <code>newStr</code></li>
    <li>Loop through each character <code>c</code> in the input string. If <code>c</code> is alphanumeric, convert it to lowercase and add it to <code>newStr</code></li>
    <li>Compare <code>newStr</code> with its reverse - <code>newStr[::-1]</code></li>
    <ul>
        <li>if they are equal, return <code>True</code></li>
        <li>Otherwise, return <code>False</code></li>
    </ul>
</ol>

<pre class="solution-code-pre"><code>def valid_palindrome(s):
    newStr = ""
    for c in s:
      if c.isalnum():
        newStr += c.lower()
    return newStr == newStr[::-1]
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(n).</p>


<h1>Two pointers</h1>

<p>Instead of building a new string, we can check the palindrome directly in-place using two pointers.</p>

<p>One pointer starts at the beginning, <code>left</code>, and the other at the end, <code>right</code>. We move both pointers inward, skipping any characters that are not letters of digits. Whenever both pointers point to valid characters, we compare them in lowercase form. If they are different at any point, the string is <em>not</em> a palindrome.</p>

<p>Compared to the <em>Clean and reverse</em> approach, this method avoids extra space and keeps the logic simple and efficient.</p>

<h2>Algorithm</h2>

<ol>
    <li>Initialize two pointers. <code>left</code> at the start of the string, <code>right</code> at the end of the string.</li>
    <li>While <code>left</code> is less than <code>right</code>...</li>
    <ul>
        <li>Move <code>left</code> foward until it points to an alphanumeric character</li>
        <li>Move <code>right</code> backward until it points to an alphanumeric character</li>
        <li>Compare the lowercase characters at <code>left</code> and <code>right</code>. If they do not match, return <code>False</code>.</li>
        <li>Move both pointers inward with <code>1eft += 1</code> and <code>right -= 1</code></li>
    </ul>
    <li>If the loop finishes without mismatches, return <code>True</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def valid_palindrome(s):
    left, right = 0, len(s) - 1

    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while right > left and not s[right].isalnum():
            right-= 1
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1
    return True
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<h1>Common Pitfalls</h1>

<h2>Not skipping non-alphanumeric characters</h2>

<p>This problem requires you to ignore all characters that are <em>not</em> letters or digits. Forgetting to skip spaces, punctuation, and special characters will cause false negatives.</p>

<h2>Case sensitivity</h2>

<p>Letters must be compared in a case-insensitive manner. Comparing <code>A</code> directly with <code>a</code> will return false even though they should be treated as equal. Always convert both characters to the same case before comparing!</p>

<h1>Bonus</h1>

<h2>Create your own <code>.isalnum()</code></h2>

<p>Using <code>ord()</code>, you can create your own method for checking if a character is a number, letter, or something else. We will rewrite the code with the added method:</p>

<pre class="solution-code-pre"><code>def valid_palindrome(s):
    left, right  = 0, len(s) - 1

    while left < right :
        while left < right  and not isAlphaNum(s[left]):
            left += 1
        while right > left and not isAlphaNum(s[right]):
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1
    return True

def isAlphaNum(c):
    return (ord('A') <= ord(c) <= ord('Z') or
            ord('a') <= ord(c) <= ord('z') or
            ord('0') <= ord(c) <= ord('9'))
</code></pre>
`

const example = `Example #1 Input:
Input: str = "racecar"
Output: true

Explanation: The string reads the same forward and backward.

Example #2 Input:
Input: str = "A man, a plan, a canal: Panama"
Output: true

Explanation: Ignoring spaces, punctuation, and casing, it becomes "amanaplanacanalpanama".

Example #3 Input:
Input: str = "hello"
Output: false
`

const constraints = `<ul>
<li>0 ≤ str.length ≤ 10^5</li>
<li>str consists of ASCII characters</li>
<li>You must ignore non-alphanumeric characters</li>
<li>You must ignore letter casing</li>
</ul>`

export const validPalindrome = {
  id: "valid-palindrome",
  title: "19. Valid Palindrome",
  problemStatement: `<p>Given a string <code>str</code>, return a boolean that determines if <code>str</code> is a valid palindrome or not. For this problem, ignore any non-alphanumerc characters such as spaces, quesiton marks, etc. Please ignore character casings as well.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("valid-palindrome"),
  solution: solution,
}

/**
 * Prerequisites: 
 * 
 * Before attempting this problem, you should be confortable with...
 * 
 * - string manipulation: filtering characters, converting case, and reversing strings
 * - character classification: identifying alphanumeric vs non-alphanumeric characters
 * - two pointers: using pointers from both ends of a string to compare characters efficiently
 */