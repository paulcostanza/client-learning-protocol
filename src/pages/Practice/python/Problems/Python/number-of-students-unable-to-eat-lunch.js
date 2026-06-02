import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def countStudents(students, sandwiches):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([1,1,0,0], [0,1,0,1], 0),
    ([1,1,1,0,0,1], [1,0,0,0,1,1], 3),
    ([], [], 0)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (students, sandwiches, expected) in enumerate(test_cases, 1):
    try:
      result = countStudents(students, sandwiches)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: students={students}, sandwiches={sandwiches}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: students={students}, sandwiches={sandwiches}
Got: {result}
Expected: {expected}
---""")
        failed += 1

    except Exception as e:
      logs.append(f"""Test {i}: ERROR {e}
---""")
      failed += 1

  if failed == 0:
    print("********** P A S S **********")
  else:
    print("********** F A I L **********")

  print(f"Passed: {passed}, Failed: {failed}\\n")

  for log in logs:
    print(log)

run_tests()
`

const example = `Example #1:
Input: 
- students = [1,1,0,0]
- sandwiches = [0,1,0,1]
Output: 0

Explanation:
- Front student prefers sandwich 0? No, move to back.
- Next student prefers sandwich 0? No, move to back.
- Student prefers sandwich 0? Yes, takes it.
- Continue until all students are served.

---

Example #2:
Input: 
- students = [1,1,1,0,0,1]
- sandwiches = [1,0,0,0,1,1]
Output: 3

Explanation:
Eventually the top sandwich is type 0, but all remaining students prefer type 1, so 3 students cannot eat.
`

const constraints = `<ul>
<li>1 ≤ <code>students.length</code>, <code>sandwiches.length</code> ≤ 100</li>
<li><code>students.length == sandwiches.length</code></li>
<li><code>students[i]</code> is either <code>0</code> or <code>1</code></li>
<li><code>sandwiches[i]</code> is either <code>0</code> or <code>1</code></li>
</ul>`

const solution = `
<p>The key insight is that student order <em>does not</em> matter. Since students can rotate indefinitely, what matters is whether there exists any student who wants the current top sandwich. If we track how many students want each type, <code>0</code> or <code>1</code>, we can quickly check availability without simulating the queue.<p>

<h2>Algorithm</h2>

<ol>
    <li>Count the number of students preferring each sandwich type</li>
    <li>Process sandwich in order:</li>
    <ul>If at least one student wants the current sandwich, decrement that count and the total remaining</ul>
    <ul>If no student wants it, stop immediately since those behind cannot be served either</ul>
    <li>Return the remaing count</li>
</ol>

<pre class="solution-code-pre"><code>def countStudents(students, sandwiches):
    result = len(students) # the amount of students who have not eaten lunch
    count = Counter(students) # counts the occurrences of each integer and puts it into a dictionary

    for s in sandwiches:
        if count[s] > 0:
            result -= 1
            count[s] -= 1
        else: # if no student is willing to eat it, terminate
            break

    return result
</code></pre>

<p>Time complexity of O(n).</p>
<p>Space complexity of O(1).</p>
`

export const numberOfStudentsUnableToEatLunch = {
    id: "number-of-students-unable-to-eat-lunch",
    title: "42. Number of Students Unable to Eat Lunch",
    problemStatement: `<p>The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers <code>0</code> and <code>1</code> respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.</p>
  <p>The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a <strong>stack</strong>. At each step...</p>
  <ul>
    <li>If the student at the front of the queue <em>prefers</em> the sandwich on the top of the stack, they will <strong>take it</strong> and leave the queue.</li>
    <li>Otherwise, they will <strong>leave it</strong> and go to the queue's end.</li>
  </ul>
  <p>This continues until none of the queue students want to take the top sandwich and are thus unable to eat.<p>
  <p>You are given two integer lists <code>students</code> and <code>sandwiches</code> where <code>sandwiches[i]</code> is the type of the <code>i-th</code> sandwich in the stack (<code>i = 0</code> is the top of the stack) and <code>student[j]</code> is the preference of the <code>j-th</code> student in the initial queue (<code>j=0</code> is the front of the queue). Return the number of students that are unable to eat. `,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("number-of-students-unable-to-eat-lunch"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- maps
- two pointers
*/