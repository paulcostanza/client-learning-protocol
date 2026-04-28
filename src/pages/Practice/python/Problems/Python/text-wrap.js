import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def text_wrap(str, max_width):
  # your code goes here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ("ABCDEFGHIJKLIMNOQRSTUVWXYZ", 4, "ABCD\\nEFGH\\nIJKL\\nIMNO\\nQRST\\nUVWX\\nYZ"),
    ("HELLOWORLD", 5, "HELLO\\nWORLD"),
    ("PYTHON", 2, "PY\\nTH\\nON"),
    ("ABCDE", 1, "A\\nB\\nC\\nD\\nE"),
    ("ABCDEFG", 3, "ABC\\nDEF\\nG"),
  ]

  passed = 0
  failed = 0

  for i, (s, max_width, expected) in enumerate(test_cases, 1):
    try:
      result = text_wrap(s, max_width)

      if result == expected:
        print(f"Test {i}: PASS")
        print(f"Input: ({s}, {max_width})")
        print(f"Output:\\n{result}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Input: ({s}, {max_width})")
        print(f"Got:\\n{result}")
        print(f"Expected:\\n{expected}")
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
str = 'ABCDEFGHIJKLIMNOQRSTUVWXYZ'
max_width = 4

Output:
ABCD
EFGH
IJKL
IMNO
QRST
UVWX
YZ
`

const constraints = `<ul>
<li>0 < len(str) < 1000</li>
<li>0 < max_width < len(str)</li>
</ul>`

export const textWrap = {
  id: "text-wrap",
  title: "17. Text Wrap",
  problemStatement: `<p>You are given a string <code>str</code> and width <code>max_width</code>. Your task is to wrap the string into a paragraph of width <code>max_width</code>.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("text-wrap"),
}