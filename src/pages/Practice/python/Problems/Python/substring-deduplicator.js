import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def merge_the_tools(str, k):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("AABCAAADA", 3, ["AB", "CA", "AD"]),
    ("AAABBBCCC", 3, ["A", "B", "C"]),
    ("ABCDEFGH", 2, ["AB", "CD", "EF", "GH"]),
    ("AAAAAA", 2, ["A", "A", "A"]),
    ("ABABABAB", 4, ["AB", "AB"]),
  ]

  passed = 0
  failed = 0

  for i, (s, k, expected) in enumerate(test_cases, 1):
    try:
      result = merge_the_tools(s, k)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: ({s}, {k})")
        print(f"Output: {result}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: ({s}, {k})")
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
str = "AABCAAADA"
k = 3

Process:
Substrings: AAB, CAA, ADA
Processed:  AB,  CA,  AD

Output:
["AB", "CA", "AD"]
`

const constraints = `<ul>
<li>The length of s is divisible by k</li>
<li><code>1 ≤ k ≤ len(s)</code></li>
</ul>
`

export const substringDeduplicator = {
  id: "substring-deduplicator",
  title: "15. Substring Deduplicator",
  problemStatement: `<p>You are given a string <code>str</code> and an integer <code>k</code>.</p>

    <ol>
        <li>Divide the string <code>str</code> into consecutive substrings of length <code>k</code>.</li>
        <li>For each substring:</li>
        <ul>
            <li>Remove any repeated characters.</li>
            <li>Keep only the first occurrence of each character.</li>
            <li>Maintain the original order of characters.</li>
        </ul>
        <li>Return a list of the processed substrings in order.</li>
    </ol>
`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("substring-deduplicator"),
}