import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def palindrome_characters(str):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("racecar", "e"),
    ("abba", "bb"),
    ("madam", "d"),
    ("1221", "22"),
    ("abcba", "c"),
    ("hello", "none"),
    ("palindrome", "none"),
    ("a", "a"),
  ]

  passed = 0
  failed = 0

  for i, (s, expected) in enumerate(test_cases, 1):
    try:
      result = palindrome_characters(s)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: ({s})")
        print(f"Output: {result}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: ({s})")
        print(f"Got: {result}")
        print(f"Expected: {expected}")
        print(f"---")
        failed += 1

    except Exception as e:
      print(f"Test {i}: ERROR {e}")
      failed += 1
        
  print(f"Passed: {passed}, Failed: {failed}")

  if failed == 0:
    print("********** P A S S **********")
  else:
    print("********** F A I L **********")

run_tests()`

const example = `Example Input:
s = "racecar"

Output:
"e"

Explanation:
"racecar" is a palindrome and has odd length, so return the middle character.

Additional Examples:
palindrome_characters("abba") should return "bb"
palindrome_characters("abcba") should return "c"
palindrome_characters("hello") should return "none"
`

const constraints = `<ul>
<li>1 ≤ len(s) ≤ 1000</li>
<li><code>s</code> consists of alphanumeric characters and spaces</li>
</ul>`

export const palindromeCharacters = {
  id: "palindrome-characters",
  title: "18. Palindrome Characters",
  problemStatement: `<p>Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("palindrome-characters")
}