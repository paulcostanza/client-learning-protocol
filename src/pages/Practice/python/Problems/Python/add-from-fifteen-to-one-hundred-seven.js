const starterCode = `def fifteenToOneHundredSeven():
  # enter code here

`

const testCode = `def run_tests():
  expected = sum(range(15, 108))

  try:
    result = fifteenToOneHundredSeven()

    if str(result) == str(expected):
      print(f"Sum from 15 to 107 (inclusive) = {expected}") 
      print("********** P A S S **********")
    else:
      print(f"Sum from 15 to 107 (inclusive) = (got {result}, expected {expected})")    
      print("********** F A I L **********")
  except Exception as e:
    print(f"Test 1: ERROR {e}")
    print("********** F A I L **********")

run_tests()`

export const addFromFifteenToOneHundredSeven = {
    id: "add-from-fifteen-to-one-hundred-seven",
    title: "3. Add from 15 to 107",
    problemStatement: `<p>Add up and return the summation from 15 up to (and including) 107</p>`,
    constraints: `<li className='mt-2'>include 107 in the summation</li>`,
    starterCode,
    testCode
}