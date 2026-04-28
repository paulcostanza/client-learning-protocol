import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def pop_n_from_list(my_list, n):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (([1, 2, 3, 4, 5], 2), [1, 2, 3]),
    (([1, 2, 3], 0), [1, 2, 3]),
    (([1, 2, 3], 3), []),
    (([1, 2, 3], 5), []),
    (([], 3), [])
  ]

  passed = 0
  failed = 0

  for i, ((my_list, n), expected) in enumerate(test_cases, 1):
    try:
      result = pop_n_from_list(my_list, n)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: my_list={my_list}, n={n}")
        print(f"Output: {result}")
        print("---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: my_list={my_list}, n={n}")
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
my_list = [1, 2, 3, 4, 5], n = 2

Output:
[1, 2, 3]

Example II Input:
my_list = [1, 2, 3], n = 0

Output:
[1, 2, 3]

Example III Input:
my_list = [1, 2, 3], n = 5

Output:
[]
`

const constraints = `<ul>
<li>0 <= my_list.length <= 10^5</li>
<li>0 <= n <= 10^5</li>
<li>-10^4 <= my_list[i] <= 10^4</li>
<li>If n >= length of the list, return an empty list</li>
<li>You may modify the original list</li>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(1)</li>
</ul>
`

export const popLastNElements = {
  id: "pop-last-n-elements",
  title: "22. Pop Last n Elements",
  problemStatement: `<p>Remove the last <code>n</code> elements from <code>my_list</code>. Return the modified list.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("pop-last-n-elements"),
}