import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def guess_number(n: int) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `picked = 0

def guess(num):
  if num == picked:
    return 0
  elif num > picked:
    return -1
  else:
    return 1

def run_tests():
  global picked

  test_cases = [
    (10, 6),
    (1, 1),
    (100, 73),
    (500, 250),
    (1000, 999)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (n, target) in enumerate(test_cases, 1):
    picked = target

    try:
      result = guess_number(n)

      if result == target:
        logs.append(f"""Test {i}: PASS
Input: n = {n}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: n = {n}
Got: {result}
Expected: {target}
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
Input: n = 10, picked = 6
Output: 6

Explanation:
- Guess 5 → higher
- Guess 8 → lower
- Guess 6 → correct

---

Example #2:
Input: n = 1, picked = 1
Output: 1

Explanation:
- The only possible number is 1.

---

Example #3:
Input: n = 100, picked = 73
Output: 73
`

const constraints = `<ul>
    <li>1 ≤ <code>n</code> ≤ 2<sup>31</sup> - 1</li>
</ul>`

const solution = `
<h1>Binary Search</h1>

<p>You could do a linear search, but that's not cool...</p>

<p>Since the numbers from <code>1</code> to <code>n</code> are sorted, we can use binary search to find the target efficiently. The <code>guess</code> API tells us whether to search higher or lower, which is exactly the feedback binary search needs to halve the search space with each guess.</p>

<h2>Algorithm</h2>

<ol>
    <li>Initialize two pointers: <code>left = 1</code> and <code>right = n</code></li>
    <li>Calculate the middle value <code>m = (l + r) / 2</code></li>
    <li>Call <code>guess(m)</code>:</li>
    <ul>
      <li>If it returns <code>0</code>, we found the number. Return <code>mid</code>.</li>
      <li>If it returns <code>1</code> (number is higher), set <code>left = mid + 1</code></li>
      <li>If it returns <code>-1</code> (number is lower), set <code>right = mid - 1</code></li>
    </ul>
    <li>Since this problem guarentees an answer, repeat until the number is found.</li>
</ol>

<pre class="solution-code-pre"><code>def guess_number(self, n: int) -> int:
  left, right = 1, n
  while True:
      mid = (left + right) // 2
      res = guess(mid)

      if res > 0:
          left = mid + 1
      elif res < 0:
          right = mid - 1
      else:
          return mid
</code></pre>

<p>Time complexity is O(log n).</p>
<p>Space complexity is O(1).</p>
`

export const guessNumberHigherOrLower = {
  id: "guess-number-higher-or-lower",
  title: "48. Guess Number Higher or Lower",
  problemStatement: `<p>Let's play the guessing game! I pick a number from <code>1</code> to <code>n</code>. You have to guess which number is picked.</p>
  
  <p>Every time you guess wrong, I tell you whether the number I picked is higher or lower than your guess. You can call a pre-defined API int <code>guess(num)</code>, which returns three possible results:</p>
  
  <ul>
    <li><code>0</code>: your guess is equal to the number I picked.</li>
    <li><code>-1</code>: your guess is higher than the number I picked.</li>
    <li><code>1</code>: your guess is lower than the number I picked.</li>
  </ul>
  
  <p>Return the number that I picked!</p>
  `,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("guess-number-higher-or-lower"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- binary search: efficiently searching a sorted range by repeatedly halving the search space based on comparison feedback
*/
