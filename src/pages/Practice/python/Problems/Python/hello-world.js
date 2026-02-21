const starterCode = `def helloWorld(): 
  # Write your code here
  
  
  
  
    
`

const testCode = `def run_tests():
  expected = "Hello world!"

  try:
    userAnswer = helloWorld()

    if userAnswer == expected:
      print(userAnswer)
      print(".")
      print(".")
      print(".")
      print("********** P A S S **********")
    else: 
      print(userAnswer + " <- what you wrote")
      print(expected + " <- what we wanted")
      print(".")
      print(".")
      print(".")
      print("********** F A I L **********")
  except Exception as e:
    print(f"Test: ERROR {e}")
    print("********** F A I L **********")

run_tests()`

export const helloWorld = {
  id: "hello-world",
  title: "1. Hello World",
  problemStatement: `<p>Return the phrase <code>Hello world!</code></p>`,
  constraints: `<li className='mt-2'>No <code>print</code> statement</li>
    <li className='mt-2'>No unnecessary spaces or extra characters</li>
    <li className='mt-2'>Watch for capital letter(s)</li>`,
  starterCode,
  testCode,
  order: 1
}