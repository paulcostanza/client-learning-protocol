import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def mutate_string(string, position, character):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("abracadabra", 5, "k", "abrackdabra"),
    ("hello", 1, "a", "hallo"),
    ("python", 0, "j", "jython"),
    ("world", 4, "d", "world"),
    ("test", 2, "X", "teXt"),
  ]

  passed = 0
  failed = 0

  for i, (s, position, character, expected) in enumerate(test_cases, 1):
    try:
      result = mutate_string(s, position, character)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: ({s}, {position}, '{character}')")
        print(f"Output: {result}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: ({s}, {position}, '{character}')")
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
string = 'abracadabra'
position = 5
character = 'k'

Output:
abrackdabra
`

export const singleIndexStringMutation = {
  id: "single-index-string-mutation",
  title: "16. Single Index String Mutation",
  problemStatement: `<p>Read a given string, change the character at a given index, and then return the modified string. <code>mutate_string</code> has the following parameters:</p>

    <ul>
        <li>string <code>string</code>: the string to change</li>
        <li>int <code>position</code>: the index to insert the character at</li>
        <li>string <code>character</code>: the character to insert</li>
    </ul>
`,
  starterCode,
  testCode,
  example,
  status: getProblemStatusById("single-index-string-mutation"),
}