import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def add_s_n_times(s, n):
  # enter code here
    
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        (3, 2, 6),
        (7, 1, 7),
        (4, 5, 20),
        (0, 10, 0),
        (5, 0, 0),
        (2, 3, 6)
    ]

    passed = 0
    failed = 0

    for i, (s, n, expected) in enumerate(test_cases, 1):
        try:
            result = add_s_n_times(s, n)
            if str(result) == str(expected):
                print(f"Test {i}: PASS")
                print(f"{s} added {n} times = {expected}")
                print("---")
                passed += 1
            else:
                print(f"Test {i}: FAIL")
                print(f"{s} added {n} times = (got {result}, expected {expected})")
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

run_tests()
`

const example = `
Input: s = 3, n = 2
Output: 6
Explanation: Because 3 + 3 = 6

---

Input: s = 7, n = 1
Output: 7
Explanation: Because 7 = 7

---

Input: s = 4, n = 5
Output: 20
Explanation: Because 4 + 4 + 4 + 4 + 4 = 20`

export const addSNumberNTimes = {
    id: "add-s-n-times",
    title: "7. Add s n times",
    problemStatement: `<p>Add <code>s</code> <code>n</code> times.</p>`,
    example,
    starterCode,
    testCode,
    status: getProblemStatusById("add-s-n-times"),
}