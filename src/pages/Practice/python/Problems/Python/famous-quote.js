const starterCode = `def famous_quote():
  # enter code here
  




`

const example = `"Where we're going, we don't need roads." - Back to the Future, 1985`

const testCode = `def run_tests():
  expected = '''"Where we're going, we don't need roads." - Back to the Future, 1985'''

  try:
    result = famous_quote()
    result = result.rstrip()

    if str(result) == str(expected):
      print(f"{expected} -> Expected")
      print("********** P A S S **********")
    else:
      print(f"{result} -> Got")
      print(f"{expected} -> Expected")
      print("********** F A I L **********")
  except Exception as e:
    print(f"Test 1: ERROR {e}")
    print("********** F A I L **********")

run_tests()`

export const famousQuote = {
  id: "famous-quote",
  title: "2. Famous Quote",
  problemStatement: `<p>Return this famous movie quote.</p>`,
  example: example,
  constraints: `<li className='mt-2'>Make sure you escape</li>`,
  starterCode,
  testCode
}