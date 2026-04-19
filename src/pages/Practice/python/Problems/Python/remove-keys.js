const starterCode = `def remove_keys(my_dict, keys):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (
      {"a": 1, "b": 2, "c": 3},
      ["a"],
      {"b": 2, "c": 3}
    ),
    (
      {"x": 10, "y": 20},
      ["z"],
      {"x": 10, "y": 20}
    ),
    (
      {},
      ["a", "b"],
      {}
    ),
    (
      {"a": 1, "b": 2, "c": 3},
      ["a", "c"],
      {"b": 2}
    ),
    (
      {"a": 1},
      ["a"],
      {}
    )
  ]

  passed = 0
  failed = 0

  for i, (my_dict, keys, expected) in enumerate(test_cases, 1):
    try:
      result = remove_keys(my_dict.copy(), keys)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: {my_dict}, Keys: {keys}")
        print(f"Output: {result}")
        print("---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: {my_dict}, Keys: {keys}")
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
my_dict = {"a": 1, "b": 2, "c": 3}
keys = ["a"]

Output:
{"b": 2, "c": 3}

Example II Input:
my_dict = {"x": 10, "y": 20}
keys = ["z"]

Output:
{"x": 10, "y": 20}
`
const constraints = `<ul>
<li>The input is a dictionary and a list of keys</li>
<li>0 <= number of keys in dictionary <= 1000</li>
<li>0 <= number of keys to remove <= 1000</li>
<li>Keys are hashable</li>
<li>If a key does not exist, ignore it</li>
<li>Return the modified dictionary</li>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(1) if modifying in place</li>
</ul>
`

export const removeKeys = {
  id: "remove-keys",
  title: "28. Remove Keys",
  problemStatement: `<p>Given a dictionary <code>my_dict</code> and a list <code>keys</code>, remove all the keys in the list from the dictionary and return the modified dictionary. If a key does not exist, then ignore it.</p> <p><em>Be careful</em>: If you try to remove a key that doesn't exist, it will raise a <code>KeyError</code>. Make sure to handle this case by checking if the key exists before trying to remove it, or using the second argument of the <code>pop()</code> function.</p>`,
  starterCode,
  testCode,
  constraints,
  example
}