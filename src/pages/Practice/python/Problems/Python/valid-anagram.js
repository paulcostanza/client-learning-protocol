import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def valid_anagram(a, b):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (("racecar", "carrace"), True),
    (("jar", "jam"), False),
    (("Listen", "Silent"), True),
    (("Triangle", "Integral"), True),
    (("apple", "papel"), True),
    (("rat", "car"), False),
    (("", ""), True),
    (("a", "A"), True),
    (("hello", "bello"), False),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, ((a, b), expected) in enumerate(test_cases, 1):
    try:
      result = valid_anagram(a, b)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: a = "{a}", b = "{b}"
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: a = "{a}", b = "{b}"
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
    print("********** PASS **********")
  else:
    print("********** FAIL **********")

  print(f"Passed: {passed}, Failed: {failed}\\n")
  print("---")

  # Then print details
  for log in logs:
    print(log)

run_tests()`

const example = `Example #1 Input:
Input: a = "racecar", b = "carrace"
Output: True

Explanation:
Both strings contain the exact same characters.

Example #2 Input:
Input: a = "jar", b = "jam"
Output: False

Explanation:
The strings contain different characters.

Example #3 Input:
Input: a = "Listen", b = "Silent"
Output: True

Explanation:
Character casing does not matter, so both strings are considered anagrams.
`

const constraints = `<ul>
<li>0 ≤ a.length, b.length ≤ 10^5</li>
<li>a and b consist of printable ASCII characters</li>
<li>Character casing should be ignored</li>
</ul>`



export const validAnagram = {
    id: "valid-anagram",
    title: "33. Valid Anagram",
    problemStatement: `<p>Given two strings <code>a</code> and <code>b</code>, return <code>True</code> if the strings are anagrams of each other. Otherwise, return <code>False</code>.</p>

<p>An anagram is formed by rearranging the characters of another string while using all original characters exactly once.</p>

<p>Character casing should be ignored for this problem.</p>`,

    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("valid-anagram"),
}

// def valid_anagram(a, b):
//   if len(a) != len(b):
//     return False

//   letters_a = {}
//   letters_b = {}

//   for char in a.lower():
//     letters_a[char] = letters_a.get(char, 0) + 1

//   for char in b.lower():
//     letters_b[char] = letters_b.get(char, 0) + 1

//   return letters_a == letters_b