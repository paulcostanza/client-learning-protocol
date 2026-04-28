import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def append_to_list(my_list, elements):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (([1, 2, 3], [4, 5]), [1, 2, 3, 4, 5]),
    (([], [1, 2, 3]), [1, 2, 3]),
    (([1, 2], []), [1, 2]),
    (([], []), []),
    (([10], [20, 30, 40]), [10, 20, 30, 40])
  ]

  passed = 0
  failed = 0

  for i, ((my_list, elements), expected) in enumerate(test_cases, 1):
    try:
      result = append_to_list(my_list, elements)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: my_list={my_list}, elements={elements}")
        print(f"Output: {result}")
        print("---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: my_list={my_list}, elements={elements}")
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
my_list = [1, 2, 3]
elements = [4, 5]

Output:
[1, 2, 3, 4, 5]

Example II Input:
my_list = []
elements = [1, 2, 3]

Output:
[1, 2, 3]

Example III Input:
my_list = [1, 2]
elements = []

Output:
[1, 2]
`

const constraints = `<ul>
<li>0 <= my_list.length <= 10^5</li>
<li>0 <= elements.length <= 10^5</li>
<li>-10^4 <= values <= 10^4</li>
<li>You may modify the original list</li>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(1)</li>
</ul>
`

export const addLists = {
  id: "add-lists",
  title: "21. Add Lists",
  problemStatement: `<p>Given a list of <code>my_list</code> and a list of <code>elements</code>, append each number from <code>elements</code> to the end of <code>my_list</code>. Return the modified list.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("add-lists"),
}