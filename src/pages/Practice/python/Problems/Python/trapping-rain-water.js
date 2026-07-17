import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def trap_that_water(height: list[int]) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([0,1,0,2,1,0,1,3,2,1,2,1], 6),
    ([4,2,0,3,2,5], 9),
    ([1,0,1], 1),
    ([2,0,2], 2),
    ([], 0),
    ([1], 0),
    ([3,3,3], 0)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (height, expected) in enumerate(test_cases, 1):
    try:
      result = trap_that_water(height)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: {height}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {height}
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
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Explanation:
The elevation map traps 6 units of water.

---

Example #2:
Input: height = [4,2,0,3,2,5]
Output: 9

---

Example #3:
Input: height = [2,0,2]
Output: 2
`

const constraints = `<ul>
  <li>1 ≤ <code>height.length</code> ≤ 2 × 10<sup>4</sup></li>
  <li>0 ≤ <code>height[i]</code> ≤ 10<sup>5</sup></li>
</ul>`

const solution = `
<h1>Two pointers</h1>

<p>Water at any position depends on the <strong>shorter</strong> wall between the left and right sides. So if the left wall is shorter, the right wall cannot help us, as the water is limited by the left side. That means we safely move the <strong>left pointer</strong> inward and calculate how much water can be trapped there. Similarly, if the right wall is shorter, we move the <strong>right pointer</strong> left.</p>

<p>As we move the pointers, we keep track of the highest wall seen so far on each side (<code>leftMax</code> and <code>rightMax</code>). The water at each position is simply:</p>

<p><code>max wall on that side - height at that position</code></p>

<h2>Algorithm</h2>

<ol>
    <li>Set two pointers</li>
    <ul>
      <li><code>l</code> at the start</li>
      <li><code>r</code> at the end</li>
      <li>Track <code>leftMax</code> and <code>rightMax</code> as the tallest walls seen</li>
    </ul>

    <li>While <code>l < r</code></li>
    <ul>
      <li>If <code>leftMax</code> &lt; <code>rightMax</code>:</li>
      <ul>
        <li>Move <code>l</code> right</li>
        <li>Update <code>leftMax</code></li>
        <li>Add <code>leftMax - height[l]</code> to the result</li>
      </ul>
      <li>Else:</li>
      <ul>
        <li>Move <code>r</code> left.</li>
        <li>Update <code>rightMax</code>.</li>
        <li>Add <code>rightMax - height[r]</code> to the result.</li>
      </ul>
      <li>Return the total trapped water.</li>
    </ul>
    <li>Return the total trapped water.</li>
</ol>

<pre class="solution-code-pre"><code>def trap_that_water(height: list[int]) -> int:
  if not height:
    return 0

  l, r = 0, len(height) - 1
  leftMax, rightMax = height[l], height[r]
  res = 0
  while l < r:
    if leftMax < rightMax:
      l += 1
      leftMax = max(leftMax, height[l])
      res += leftMax - height[l]
    else:
      r -= 1
      rightMax = max(rightMax, height[r])
      res += rightMax - height[r]
  return res
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<h1>Common Pitfalls</h1>

<h2>Calculating water at boundary bars</h2>

<p>The leftmost and rightmost bars can never hold water above them since there is no wall on one side to contain it. Including them in water calculations gives you the wrong results.</p>

<h2>Using current bar height instead of max heights</h2>

<p>Water at each position depends on the minimum of the maximum heights to its left and right, minus the current height. Using the current bar's height in the max comparison instead of tracking running maximums is incorrect.</p>

<pre class="solution-code-pre"><code># Wrong! Comparing current height directly
water = min(height[l], height[r]) - height[i]
# Correct! Use maximum heights seen so far
water = min(leftMax, rightMax) - height[i]
</code></pre>

<h2>Negative water values</h2>

<p>When the current bar is taller than the limiting wall, the water calculation yields a negative value. This happens at peaks and should contribute zero water, not negative.</p>

<pre class="solution-code-pre"><code># Wrong! Can add negative water
res += leftMax - height[i]
# Correct! Ensure non-negative
res += max(0, min(leftMax, rightMax) - height[i])
</code></pre>

<h2>Wrong pointer movement in two pointers</h2>

<p>In the two-pointer approach, always move the pointer on the side with the smaller max height. Moving the wrong pointer breaks the invariant that the smaller side determines the water level.</p>

`

export const trappingRainWater = {
  id: "trapping-rain-water",
  title: "42. Trapping Rain Water",
  problemStatement: `<p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>
  
  
  `,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("trapping-rain-water"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- arrays: basic array traversal and element access
- prefix and suffix arrays: precomputing running maximums from both directions
- two pointers: using left and right pointers that move toward each other based on conditions
- stack: using a monotonic stack to track indices and compute bounded regions
*/
