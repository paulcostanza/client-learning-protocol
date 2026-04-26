const starterCode = `def move_zeros(nums):
  # modify nums in-place please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([0, 1, 0, 3, 12, 0, 5], [1, 3, 12, 5, 0, 0, 0]),
    ([7, 0, 4, 2, 0, 1, 0, 3], [7, 4, 2, 1, 3, 0, 0, 0]),
    ([0, 0, 0], [0, 0, 0]),
    ([1, 2, 3], [1, 2, 3]),
    ([], []),
    ([0], [0]),
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (nums, expected) in enumerate(test_cases, 1):
    try:
      arr = nums[:]
      move_zeros(arr)

      if arr == expected:
        logs.append(f"""Test {i}: PASS
Input: {nums}
Output: {arr}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {nums}
Got: {arr}
Expected: {expected}
---""")
        failed += 1

    except Exception as e:
      logs.append(f"""Test {i}: ERROR {e}
---""")
      failed += 1

  # Print summary FIRST
  if failed == 0:
    print("********** PASS **********")
  else:
    print("********** FAIL **********")

  print(f"Passed: {passed}, Failed: {failed}\\n")
  print("---")

  # Then print details
  for log in logs:
    print(log)

run_tests()`

const example = `Example #1 Input:
Input: nums = [0, 1, 0, 3, 12, 0, 5]
Output: [1, 3, 12, 5, 0, 0, 0]

Explanation: The list is modified so that all the zeros are moved to the end while maintaining the order of the non-zero elements. The output will be [1, 3, 12, 5, 0, 0, 0], where the zeros are placed at the end of the list.

Example #2 Input:
Input: nums = [7, 0, 4, 2, 0, 1, 0, 3]
Output: [7, 4, 2, 1, 3, 0, 0, 0]
`

const constraints = `<ul>
<li>0 ≤ nums.length ≤ 10^4</li>
<li>-10^9 ≤ nums[i] ≤ 10^9</li>
<li>All inputs are integers</li>
</ul>`

export const moveZeros = {
    id: "move-zeros",
    title: "30. Move Zeros",
    problemStatement: `<p>Given a list of integers, move all the zeros to the end of the list while maintaining the relative order of the non-zero elements.</p>`,
    starterCode,
    testCode,
    constraints,
    example
}