const starterCode = `def count(nums, x):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (([1, 2, 3, 2, 2], 2), 3),
    (([5, 5, 5, 5], 5), 4),
    (([1, 2, 3, 4], 6), 0),
    (([], 1), 0),
    (([7], 7), 1),
    (([1, -1, 1, -1, 1], -1), 2)
  ]

  passed = 0
  failed = 0

  for i, ((nums, x), expected) in enumerate(test_cases, 1):
    try:
      result = count(nums, x)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: nums={nums}, x={x}")
        print(f"Output: {result}")
        print("---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: nums={nums}, x={x}")
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
nums = [1, 2, 3, 2, 2], x = 2

Output:
3

Example II Input:
nums = [5, 5, 5, 5], x = 5

Output:
4

Example III Input:
nums = [1, 2, 3, 4], x = 6

Output:
0
`

const constraints = `<ul>
<li>0 <= nums.length <= 10^5</li>
<li>-10^4 <= nums[i] <= 10^4</li>
<li>-10^4 <= x <= 10^4</li>
<li>Time Complexity: O(n)</li>
<li>Space Complexity: O(1)</li>
</ul>
`

export const howMany = {
    id: "how-many",
    title: "19. How Many",
    problemStatement: `<p>Given a list of <code>nums</code> and an integer <code>x</code>, return the number of times the integer <code>x</code> appears in <code>nums</code>.</p>`,
    starterCode,
    testCode,
    constraints,
    example
}