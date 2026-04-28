import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def list_to_set(my_list):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([1, 2, 2, 3, 4, 4], {1, 2, 3, 4}),
    ([], set()),
    ([5, 5, 5, 5], {5}),
    ([1, -1, 1, -1, 2], {1, -1, 2}),
    (["a", "b", "a", "c"], {"a", "b", "c"})
  ]

  passed = 0
  failed = 0

  for i, (input_list, expected) in enumerate(test_cases, 1):
    try:
      result = list_to_set(input_list)

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
[1, 2, 2, 3, 4, 4]

Output:
{1, 2, 3, 4}

Example II Input:
["a", "b", "a", "c"]

Output:
{"a", "b", "c"}`

const constraints = `<ul>
<li>The input is a list of elements</li>
<li>The list may contain duplicate values</li>
<li>The list may contain integers, strings, or other hashable types</li>
<li>The output must be a set containing only unique elements</li>
<li>Order of elements in the set does not matter</li>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(n)</li>
</ul>
`

export const listToSet = {
  id: "list-to-set",
  title: "24. List to Set",
  problemStatement: `<p>Given a list of <code>my_list</code>, return a set containing the unique elements from the list. The order of the elements does not matter.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("list-to-set")
}