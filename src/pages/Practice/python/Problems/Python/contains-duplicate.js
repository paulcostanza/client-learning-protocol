const starterCode = `def contains_duplicate(words):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (["apple", "banana", "apple", "orange"], True),
    ([], False),
    (["hello", "world"], False),
    (["a", "b", "c", "a"], True),
    ([1, 2, 3, 4], False)
  ]

  passed = 0
  failed = 0

  for i, (input_list, expected) in enumerate(test_cases, 1):
    try:
      result = contains_duplicate(input_list)

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
True

Example II Input:
["hello", "world"]

Output:
False`

const constraints = `<ul>
<li>The input is a list of elements (strings, integers, etc.)</li>
<li>The list may contain duplicate values</li>
<li>Return <code>True</code> if any value appears more than once</li>
<li>Return <code>False</code> if all elements are unique</li>
<li>If the list is empty, return <code>False</code></li>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(n)</li>
</ul>`

export const containsDuplicate = {
  id: "contains-duplicate",
  title: "24. Contains Duplicate",
  problemStatement: `<p>Given a list of <code>words</code>, return <code>True</code> if there are any duplciate strings in the list, and <code>False</code> if there are not.</p>`,
  starterCode,
  testCode,
  constraints,
  example
}