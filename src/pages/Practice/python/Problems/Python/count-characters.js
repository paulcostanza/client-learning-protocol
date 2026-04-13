const starterCode = `def count_characters(phrase):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (
      "hello",
      {"h":1,"e":1,"l":2,"o":1}
    ),
    (
      "aabb",
      {"a":2,"b":2}
    ),
    (
      "",
      {}
    ),
    (
      "abc",
      {"a":1,"b":1,"c":1}
    ),
    (
      "Hello",
      {"H":1,"e":1,"l":2,"o":1}
    )
  ]

  passed = 0
  failed = 0

  for i, (phrase, expected) in enumerate(test_cases, 1):
    try:
      result = count_characters(phrase)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: {phrase}")
        print(f"Output: {result}")
        print("---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: {phrase}")
        print(f"Got: {result}")
        print(f"Expected: {expected}")
        print("---")
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

const example = `Example I Input:
"hello"

Output:
{"h":1,"e":1,"l":2,"o":1}

Example II Input:
"aabb"

Output:
{"a":2,"b":2}
`

const constraints = `<ul>
<li>The input is a string</li>
<li>0 <= length of string <= 1000</li>
<li>All characters should be counted (including spaces and punctuation if present)</li>
<li>Return a dictionary mapping each character to its count</li>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(n)</li>
</ul>
`

export const countCharacters = {
    id: "count-characters",
    title: "26. Count Characters",
    problemStatement: `<p>Given a string <code>phrase</code>, return a dictionary with the count of each character in the word. The <em>keys</em> should be the characters and the <em>values</em> should be the count of each character.`,
    starterCode,
    testCode,
    constraints,
    example
}