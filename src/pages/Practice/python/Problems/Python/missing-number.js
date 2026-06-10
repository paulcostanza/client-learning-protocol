import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def missing_number(nums):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([3, 0, 1], 2),
    ([0, 1], 2),
    ([9, 6, 4, 2, 3, 5, 7, 0, 1], 8),
    ([0], 1),
    ([1], 0)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (nums, expected) in enumerate(test_cases, 1):
    try:
      result = missing_number(nums)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: nums={nums}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: nums={nums}
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
Input: nums = [3, 0, 1]
Output: 2

Explanation:
- The numbers should contain every value from 0 to 3.
- The value 2 is missing.

---

Example #2:
Input: nums = [0, 1]
Output: 2

Explanation:
- The numbers should contain every value from 0 to 2.
- The value 2 is missing.
`

const constraints = `<ul>
<li>1 ≤ <code>nums.length</code> ≤ 10,000</li>
<li>0 ≤ <code>nums[i]</code> ≤ n</li>
<li>All values in <code>nums</code> are unique</li>
<li>Exactly one number in the range <code>[0, n]</code> is missing</li>
</ul>`

const solution = `
<h1>Set</h1>

<p>We are given <code>n</code> distinct numbers taken from the range <code>[0, n]</code>, with exactly one number missing. A natural way to approach this is to ask:</p>

<blockquote>
    <p>Can we quickly check whether a number exists in the array?</p>
</blockquote>

<p>Using a dictionary allows us to:</p>

<ul>
    <li>Store all given numbers</li>
    <li>Check the presence of any number in constant time</li>
</ul>

<p>Once all numbers are stored, we simply look for the number in the range <code>[0, n]</code> that does not appear in the set.</p>

<p>This approach trades a little extra space for very clear and simple logic.</p>

<h2>Algorithm</h2>

<ol>
    <li>Insert all elements of the array into a hash set</li>
    <li>Iterate through all numbers from <code>0</code> to <code>n</code>. If a number is not present in the set, return it as the missing number.</li>
    <li>Since exactly one number is missing, this process will always find the answer. </li>
</ol>

<pre class="solution-code-pre"><code>def missing_number(nums):
    num_set = set(nums)
    n = len(nums)
    for idx in range(n + 1):
        if idx not in num_set:
            return idx
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(n).</p>

<h1>Bitwise XOR</h1>

<p>Bitwise XOR (<code>⊕</code>) is pretty bada$$.</p>

<ul>
    <li><code>a ⊕ a = 0</code></li>
    <li><code>a ⊕ 0 = a</code></li>
    <li>XOR is <em>commutative</em> and <em>associative</em>, meaning order does not matter</li>
</ul>

<p>If we XOR all numbers from <code>0</code> to <code>n</code>, as well as all numbers present in the array, every number that appears in both places will cancel out. This will leave us with the missing number!</p>

<p>This allows us to find the answer in linear time and constant space, without sorting or extra data structures.</p>

<h2>XOR review</h2>
<p><code>XOR: 2 ^ 3</code></p>

<p>This is a binary operation, so we need to look at the numbers in binary:</p>

<ul>
    <li><code>2: 010</code></li>
    <li><code>3: 011</code></li>
</ul>


<p>To XOR these, we look at each bit place and return a 1 only if each place does not match. If they are the same, either both 1's or both 0's, we return a 0.</p>

<pre class="solution-code-pre"><code>    0010
XOR 0011
    ----
    0001
</code></pre>

<h2>Algorithm</h2>

<ol>
    <li>Let <code>n</code> be the length of the array</li>
    <li>Initialize a variable <code>xorr</code> with <code>n</code></li>
    <li>For each index <code>idx</code> from <code>0</code> to <code>n - 1</code>:</li>
    <ul>
        <li>XOR <code>xorr</code> with <code>idx</code></li>
        <li>XOR <code>xorr</code> with <code>nums[idx]</code></li>
    </ul>
    <li>After the loop, <code>xorr</code> will contain the missing number.</li>
    <li>Return <code>xorr</code></li>
</ol>

<pre class="solution-code-pre"><code>def missing_number(nums):
    n = len(nums)
    xorr = n
    for idx in range(n):
        xorr ^= idx ^ nums[idx]
    return xorr
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<h1>Math</h1>

<p>A simple mathematical observation helps us here:</p>

<ul>
    <li>The sum of numbers from <code>0</code> to <code>len(nums)</code> is known</li>
    <li>If we compare the values we expect to see with the values that <em>actually</em> appear, the difference will be the missing number!</li>
</ul>

<p>Instead of computing two separate sums, we can combine both ideas into a <em>single running calculation</em>, which keeps the logic clean.</p>

<p>Example: let's use <code>nums = [3, 0, 1]</code>.</p>

<p>If we <code>sum([0, 1, 2, 3]) - sum(nums)</code> we end up with <code>2</code>. 

<p>This approach uses <em>basic arithmetic</em>, making it easy to understand and apply.</p>

<h2>Algorithm</h2>

<ol>
    <li>Initialize a variable <code>result = len(nums)</code></li>
    <li>For each index <code>idx</code> from <code>0</code> to <code>len(nums) - 1</code>:</li>
    <ul>
        <li>Add <code>idx</code> to <code>result</code></li>
        <li>Subtract <code>nums[idx]</code> from <code>result</code></li>
    </ul>
    <li>After the loop, <code>result</code> will hold the missing number</li>
    <li>Return <code>result</code> as the answer</li>
</ol>

<pre class="solution-code-pre"><code>def missing_number(nums):
    result = len(nums)

    for i in range(len(nums)):
        result += i - nums[i]
    return result
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<h1>Common Pitfalls</h1>

<h2>Forgetting that <code>n</code> could be the missing number</h2>

<p>The range is <code>[0, n]</code> for an array of length <code>n</code>, meaning <code>n</code> itself could be missing. Solutions that only check indices <code>0</code> to <code>n - 1</code> will miss this case and fail to return <code>n</code> when all other numbers are present.</p>
`

export const missingNumber = {
    id: "missing-number",
    title: "51. Missing Number",
    problemStatement: `<p>Given a list <code>nums</code> containing <code>n</code> distinct numbers taken from the range <code>[0, n]</code>, return the one number that is missing from the range.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("missing-number"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- Hash Set - Use constant-time lookups to identify which number from the expected range is absent
- Math (Sum Formula) - The mathematical approach uses the sum formula for consecutive integers to find the missing value
- Bitwise XOR - The XOR approach uses the property that a number XOR ed with itself equals zero to cancel out all present numbers
*/

