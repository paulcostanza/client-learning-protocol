import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def eat_bananas(piles: list[int], h: int) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([3,6,7,11], 8, 4),
    ([30,11,23,4,20], 5, 30),
    ([30,11,23,4,20], 6, 23),
    ([1], 1, 1),
    ([1000000000], 2, 500000000)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (piles, h, expected) in enumerate(test_cases, 1):
    try:
      result = eat_bananas(piles, h)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: piles = {piles}, h = {h}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: piles = {piles}, h = {h}
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
Input: piles = [3,6,7,11], h = 8
Output: 4

---

Example #2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

---

Example #3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23
`

const constraints = `<ul>
    <li>1 ≤ <code>piles.length</code> ≤ 10<sup>4</sup></li>
    <li><code>piles.length</code> ≤ <code>h</code> ≤ 10<sup>9</sup></li>
    <li>1 ≤ <code>piles[i]</code> ≤ 10<sup>9</sup></li>
</ul>`

const solution = `
<h1>Binary Search</h1>

<p>Instead of checking every speed one by one, we notice that the total time needed <em>decreases</em> as the eating speed increases. This means the answer lies in a <em>sorted search space</em> from <code>1</code> to <code>max(piles)</code>.</p>

<p>Because the search space is ordered, we can use <em>binary search</em> to efficiently find the smallest speed that allows finishing the piles within <code>h</code> hours.</p>

<h2>Algorithm</h2>

<ol>
    <li>Set the search range:</li>
    <ul>
      <li><code>left = 1</code>, minimum possible speed</li>
      <li><code>right = max(piles)</code>, maximum needed speed</li>
    </ul>
    <li>While <code>left <= right</code>:</li>
    <ul>
      <li>Let <code>mid</code> be the current speed to test.</li>
      <li>Compute the total hours needed using this speed.</li>
    </ul>
    <li>If the total hours is within the allowed time <code>h</code>:</li>
    <ul>
      <li>This speed works, so record it.</li>
      <li>Try to find a smaller working speed by searching the left half.</li>
      <li>Otherwise the speed is too slow, so search the right half.</li>
    </ul>
    <li>After the search ends, return the smallest valid speed found.</li>
</ol>

<pre class="solution-code-pre"><code>import math
def eat_bananas(piles: list[int], h: int) -> int:
  left, right = 1, max(piles)
  result = right

  while left <= right:
    k = (left + right) // 2

    total_time = 0
    for p in piles:
      total_time += math.ceil(float(p) / k)
    if total_time <= h:
      result = k
      right = k - 1
    else:
      left = k + 1
  
  return result
</code></pre>

<p>Time complexity is O(n * log m), where <code>n</code> is the length of the input list <code>piles</code> and <code>m</code> is the maximum number of bananas in a pile.</p>
<p>Space complexity is O(1).</p>

<h1>Common Pitfalls</h1>

<h2>Using integer division instead of <code>ceil</code>ing</h2>

<p>When calculating hours needed per pile, you must round up since Koko spends a full hour even if fewer bananas remain. Using regular integer division gives wrong results.</p>

<pre class="solution-code-pre"><code># wrong! integer division rounds down
total_time += pile // speed

# correct! ceiling division
total_time += math.ceil(pile / speed)

# or without importing:
total_time += (pile + speed - 1) // speed
</code></pre>

<h2>Setting wrong binary search bounds</h2>

<p>The minimum speed is 1 (not 0, which would cause division by zero!). The maximum speed needed is <code>max(piles)</code> since eating faster than the largest pile provides no benefit.

<pre class="solution-code-pre"><code># wrong! starting from 0
left = 0 # division by zero

# wrong! arbitrary upper bound
right = sum(piles) # unnecessarily large

# correct bounds
left, right = 1, max(piles)
</code></pre>
`

export const kokoEatingBananas = {
  id: "koko-eating-bananas",
  title: "48. Koko Eating Bananas",
  problemStatement: `<p>You are given an integer list <code>piles</code> where <code>piles[i]</code> is the number of bananas in the <code>i</code>th pile. You are also given an integer <code>h</code>, which represents the number of hours you have to eat all the bananas.</p>
  
  <p>You may decide your bananas-per-hour eating rate of <code>k</code>. Each hour, you may choose a pile of bananas and eat <code>k</code> bananas from that pile. If the pile has less than <code>k</code> bananas, you may finish eating the pile but you can not eat from another pile in the same hour.</p>
  
  <p>Return the minimum integer <code>k</code> such that you can eat all the bananas within <code>h</code> hours.</p>
  `,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("koko-eating-bananas"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- binary search: the optimal solution uses binary search on the answer space to find the minimum valid eating speed
- search space reduction: understanding how to identify monotonic properties that allow binary search on a range of possible answers
- ceiling division: calculating hours per pile requires rounding up, which is essential for correct time computation
*/
