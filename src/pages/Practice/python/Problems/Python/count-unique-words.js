import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def count_unique_words(my_list):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (["apple", "banana", "apple", "orange"], 3),
    ([], 0),
    (["hello", "hello", "hello"], 1),
    (["a", "b", "c", "d"], 4),
    (["one", "two", "two", "three", "one"], 3)
  ]

  passed = 0
  failed = 0

  for i, (input_list, expected) in enumerate(test_cases, 1):
    try:
      result = count_unique_words(input_list)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: {input_list}")
        print(f"Output: {result}")
        print("---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: {input_list}")
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
["apple", "banana", "apple", "orange"]

Output:
3

Example II Input:
["hello", "hello", "hello"]

Output:
1`

const constraints = `<ul>
<li>The input is a list of strings (words)</li>
<li>The list may contain duplicate words</li>
<li>Words are case-sensitive (e.g., "Apple" and "apple" are different)</li>
<li>If the list is empty, return 0</li>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(n)</li>
</ul>
`

export const countUniqueWords = {
  id: "count-unique-words",
  title: "25. Count Unique Words",
  problemStatement: `<p>Given a list of <code>words</code>, return the number of unique words in the list. It the list is empty, return 0.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("count-unique-words"),
}