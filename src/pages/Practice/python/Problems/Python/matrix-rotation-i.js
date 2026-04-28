import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def matrix_rotation_90_degrees(matrix):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (
      [[1, 2],
       [3, 4]],
      [[3, 1],
       [4, 2]]
    ),
    (
      [[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]],
      [[7, 4, 1],
       [8, 5, 2],
       [9, 6, 3]]
    ),
    (
      [[5]],
      [[5]]
    ),
    (
      [[1, 2],
       [3, 4]],
      [[3, 1],
       [4, 2]]
    ),
    (
      [[1, 2, 3, 4],
       [5, 6, 7, 8],
       [9,10,11,12],
       [13,14,15,16]],
      [[13,9,5,1],
       [14,10,6,2],
       [15,11,7,3],
       [16,12,8,4]]
    )
  ]

  passed = 0
  failed = 0

  for i, (matrix, expected) in enumerate(test_cases, 1):
    try:
      result = matrix_rotation_90_degrees(matrix)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: {matrix}")
        print(f"Output: {result}")
        print("---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: {matrix}")
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
[[1, 2],
 [3, 4]]

Output:
[[3, 1],
 [4, 2]]

Example II Input:
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]

Output:
[[7, 4, 1],
 [8, 5, 2],
 [9, 6, 3]]
`

const constraints = `<ul>
<li>The matrix is n x n (square matrix)</li>
<li>1 <= n <= 100</li>
<li>-1000 <= matrix[i][j] <= 1000</li>
<li>You must rotate the matrix in-place (no extra matrix allowed)</li>
<li>Time Complexity: O(n^2)</li>
<li>Space Complexity: O(1)</li>
</ul>

`

export const matrixRotationI = {
  id: "matrix-rotation-i",
  title: "35. Matrix Rotation I",
  problemStatement: `<p>Given an <code>n x n</code> matrix, rotate it clockwise. Return a new matrix.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("matrix-rotation-i"),
}