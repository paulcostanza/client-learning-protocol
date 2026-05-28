import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def max_profit(prices):
  # enter code here please
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([7,1,5,3,6,4], 5),
    ([7,6,4,3,1], 0),
    ([2,4,1], 2),
    ([1,2], 1),
    ([2,1,2,1,0,1,2], 2)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (prices, expected) in enumerate(test_cases, 1):
    try:
      result = max_profit(prices)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: {prices}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {prices}
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
Input: prices = [7,1,5,3,6,4]

Output: 5

Explanation:
Buy at price 1 and sell at price 6.

---

Example #2:
Input: prices = [7,6,4,3,1]

Output: 0

Explanation:
No profit can be made.

---

Example #3:
Input: prices = [2,4,1]

Output: 2
`

const constraints = `<ul>
<li>1 ≤ <code>prices.length</code> ≤ 10⁵</li>
<li>0 ≤ <code>prices[i]</code> ≤ 10⁴</li>
</ul>`

const solution = `
<p>The goal is to find the <strong>maximum profit</strong> possible from buying and selling once.</p>

<p>You want to:</p>

<ul>
  <li>Buy at the lowest price possible</li>
  <li>Sell later at the highest profit possible</li>
</ul>

<p>We can solve this in one pass through the array using two pointers.</p>

<pre class="solution-code-pre"><code>def max_profit(prices):
    left, right = 0, 1
    max_profit = 0

    while r < len(prices):
        if prices[left] < prices[right]:
            profit = prices[right] - prices[left]
            max_profit = max(max_profit, profit)
        else:
            left = right
        right += 1eft
        return max_profit
</code></pre>

<p><strong>How it works:</strong></p>

<ul>
  <li>Track the lowest stock price seen so far</li>
  <li>For each day, calculate potential profit</li>
  <li>Update the maximum profit if it's larger</li>
</ul>

<p><strong>Time Complexity:</strong> O(n) since we travel throught the list once at most.</p>
<p><strong>Space Complexity:</strong> O(1) since we only need to use a few variables.</p>
`


export const bestTimeToBuyStocks = {
    id: "best-time-to-buy-stocks",
    title: "43. Best Time to Buy Stocks",
    problemStatement: `<p>You are insider trading and given an integer array <code>prices</code> where <code>prices[n]</code> is the price of Slim Jim stock on the <code>nth</code> day.</p>
    <p>You may choose a single day to buy one share and choose a different day in the future to sell it.</p>
    <p>Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("best-time-to-buy-stocks"),
    solution: solution
}