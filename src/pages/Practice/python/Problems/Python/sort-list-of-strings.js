import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def sort_list_of_strings(arr):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (["banana", "Apple", "cherry"], ["Apple", "banana", "cherry"]),
    (["dog", "Cat", "apple"], ["apple", "Cat", "dog"]),
    (["Zebra", "elephant", "Ant"], ["Ant", "elephant", "Zebra"]),
    ([], []),
    (["a"], ["a"]),
    (["Bob", "bob", "alice"], ["alice", "Bob", "bob"]),
    (["x", "X", "a", "A"], ["a", "A", "x", "X"]),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (arr, expected) in enumerate(test_cases, 1):
    try:
      result = sort_list_of_strings(arr[:])

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: {arr}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {arr}
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

const example = `Example #1 Input:
Input: arr = ["banana", "Apple", "cherry"]
Output: ["Apple", "banana", "cherry"]

Explanation:
Sorting ignores case, so "Apple" comes before "banana".

Example #2 Input:
Input: arr = ["Zebra", "elephant", "Ant"]
Output: ["Ant", "elephant", "Zebra"]

Explanation:
Comparison is case-insensitive, but original casing is preserved.

Example #3 Input:
Input: arr = ["Bob", "bob", "alice"]
Output: ["alice", "Bob", "bob"]
`

const constraints = `<ul>
<li>0 ≤ arr.length ≤ 10^4</li>
<li>0 ≤ arr[i].length ≤ 100</li>
<li>arr[i] consists of printable ASCII characters</li>
</ul>`

export const sortListOfStrings = {
  id: "sort-list-of-strings",
  title: "25. Sort List of Strings",
  problemStatement: `<p>Sort list of strings by ignoring case in alphabetically ascending order.</p>
    
<p>Normally, if you sort a string, the capital lettered words would end up first... we do not want that!</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("sort-list-of-strings"),
}