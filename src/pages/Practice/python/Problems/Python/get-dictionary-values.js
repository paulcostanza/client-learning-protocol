import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def get_dictionary_values(people):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (
      {"Alice": 25, "Bob": 30, "Charlie": 35},
      [25, 30, 35]
    ),
    (
      {"x": 1},
      [1]
    ),
    (
      {},
      []
    ),
    (
      {"a": 1, "b": 2, "c": 3},
      [1, 2, 3]
    ),
    (
      {"John": 40, "Jane": 45},
      [40, 45]
    )
  ]

  passed = 0
  failed = 0

  for i, (people, expected) in enumerate(test_cases, 1):
    try:
      result = get_dictionary_values(people)

      # sort both since dict order may vary
      if sorted(result) == sorted(expected):
        print(f"Test {i}: PASS")
        print(f"Input: {people}")
        print(f"Output: {result}")
        print("---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: {people}")
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
{"Alice": 25, "Bob": 30, "Charlie": 35}

Output:
[25, 30, 35]

Example II Input:
{"x": 1}

Output:
[1]
`

const constraints = `<ul>
<li>The input is a dictionary mapping strings (names) to integers (ages)</li>
<li>0 <= number of keys <= 1000</li>
<li>Keys are unique strings</li>
<li>Values are integers</li>
<li>Return a list of values</li>
<li>Order does not matter</li>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(n)</li>
</ul>
`

export const getDictionaryValues = {
  id: "get-dictionary-values",
  title: "28. Get Dictionary Values",
  problemStatement: `<p>Given a dictionary <code>people</code> of names and ages, return a list of the ages.`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("get-dictionary-values"),
}