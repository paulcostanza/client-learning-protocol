import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def discount_calculator(price, discount):
  # write your function here
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (100, 75, 25),
    (50, 10, 45),
    (200, 50, 100),
    (80, 20, 64),
    (150, 0, 150),
    (99, 100, 0)
  ]

  passed = 0
  failed = 0

  for i, (price, discount, expected) in enumerate(test_cases, 1):
    try:
      result = discount_calculator(price, discount)
      # Accept both int and float answers
      if float(result) == float(expected):
        print(f"Test {i}: PASS")
        print(f"Discounted price for {price} at {discount}% = {expected}")
        print(f"---")
        passed += 1
      else:
        print(f"Test {i}: FAIL")
        print(f"Discounted price for {price} at {discount}% = (got {result}, expected {expected})")
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

const example = `Examples:
Input: price = 100, discount = 75
Output: 25
Explanation: Because 100 - (100 * 0.75) = 25

Input: price = 50, discount = 10
Output: 45
Explanation: Because 50 - (50 * 0.10) = 45
`

export const discountCalculator = {
  id: "discount-calculator",
  title: "10. Discount calculator",
  problemStatement: `<p>Write a function that takes the original <code>price</code> and <code>discount</code> percentage as arguments and returns the discounted price.</p>`,
  starterCode,
  testCode,
  example,
  status: getProblemStatusById("discount-calculator"),
}