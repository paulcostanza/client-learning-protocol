import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def majority_element(nums):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([3, 2, 3], 3),
    ([2, 2, 1, 1, 2], 2),
    ([7], 7),
    ([1, 1, 1, 2, 1], 1),
    ([6, 5, 6, 6, 5, 6, 6], 6)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (nums, expected) in enumerate(test_cases, 1):
    try:
      result = majority_element(nums)

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
Input:
- nums = [3, 2, 3]
Output: 3

Explanation:
- The number 3 appears 2 times.
- The array length is 3, so n / 2 = 1.5.
- Since 2 > 1.5, 3 is the majority element.

---

Example #2:
Input:
- nums = [2, 2, 1, 1, 2]
Output: 2

Explanation:
- The number 2 appears 3 times.
- The array length is 5, so n / 2 = 2.5.
- Since 3 > 2.5, 2 is the majority element.
`

const constraints = `<ul>
<li>1 ≤ <code>nums.length</code> ≤ 50,000</li>
<li>-10<sup>9</sup> ≤ <code>nums[i]</code> ≤ 10<sup>9</sup></li>
<li><code>nums</code> is a non-empty array of integers</li>
<li>Exactly one majority element always exists</li>
</ul>`

const solution = `
<h1>Hash Map</h1>

<p>We can avoid repeated counting by using a hash map to store the frequency of each element as we iterate through the array. We track the element with the maximum count seen so far. Once any element's count exceeds <code>n/2</code>, it must be the majority element!</p>

<h2>Algorithm</h2>

<ol>
    <li>Create a hash map to store element frequencies</li>
    <li>Initialize <code>result</code> and <code>occurrences</code> to track the element with the highest frequency seen so far</li>
    <li>For each element <code>num</code>:</li>
    <ul>
        <li>Increment its count in the hash map</li>
        <li>if its count exceeds <code>occurrences</code>, update <code>result = num</code> and <code>occurrences = num_dict[num]</code>
    </ul>
    <li>Return <code>result</code></li>
</ol>

<pre class="solution-code-pre"><code>def majority_element(nums):
    num_dict = {}

    result, occurrences = 0, 0

    for num in nums:
        num_dict[num] = num_dict.get(num, 0) + 1

        if num_dict[num] > occurrences:
            result = num
            occurrences = num_dict[num]
        
        if occurrences > len(nums) // 2:
            return result
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(n).</p>

<h1>Boyer-Moore algorithm</h1>

<p>The Boyer-Moore algorithm works by maintaining a <em>candidate</em> and a count. When we see the candidate, we increment the count, otherwise, we decrement it. When the count reaches <code>0</code>, we pick a new candidate. Since the majority element appears more than half the time, it will survive the elimination process and remain as the final candidate.</p>

<h2>Algorithm</h2>

<ol>
    <li>Initialize <code>result</code> as the candidate and <code>count = 0</code></li>
    <li>For each element <code>num</code>:</li>
    <ul>
        <li>If <code>count == 0</code>, set <code>result = num</code></li>
        <li>If <code>num == result</code>, increment <code>count</code>. Otherwise, decrement <code>count</code>.</li>
    </ul>
    <li>Return <code>result</code> as the majority element</li>
</ol>

<pre class="solution-code-pre"><code>def majority_element(nums):
    result = count = 0

    for num in nums:
        if count == 0:
            result = num
        count += (1 if num == result else -1)
    return result
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<blockquote>
    <p>The Boyer-Moore algorithm only works <strong>IF</strong> there is a guaranteed majority element. If there is no guaranteed majority element, this algorithm is no good to solve the problem.</p>
</blockquote>

<h1>Bit-manipulation</h1>

<p>We can construct the majority element bit by bit. For each bit position, we count how many numbers have that bit set. If more than <code>n/2</code> numbers have the bit set, then the majority element must also have that bit set. We build the result by combining all the majority bits.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create an array to count set bits at each of the 32 positions</li>
    <li>For each number, add <code>1</code> to <code>bit[i]</code> if the <code>i</code>th bit is set.</li>
    <li>For each bit position, if <code>bit[i] > n / 2</code>, set that bit in the result</li>
    <li>Handle the sign bit (bit 31) specifically for negative numbers</li>
    <li>Return the constructed result</li>
</ol>

<pre class="solution-code-pre"><code>def majority_element(nums):
    n = len(nums)
    bit = [0] * 32
    for num in nums:
        for i in range(32):
            bit[i] += ((num >> i) & 1)

    result = 0
    for i in range(32):
        if bit[i] > (n // 2):
            if i == 31:
                result -= (1 << i)
            else:
                result |= (1 << i)
    return result
</code></pre>

<p>Time complexity is O(n * 32) => O(n).</p>
<p>Space complexity is O(32) => O(1).</p>

<blockquote>
    <p>32 represents the number of bits as the given numbers are integers.</p>
</blockquote>
`

export const majorityElement = {
    id: "majority-element",
    title: "43. Majority Element",
    problemStatement: `<p>Given an array <code>nums</code> of size <code>n</code>, return the <em>majority element</em>.</p>
    <p>The <strong>majority element</strong> is the element that appears more than <code>(n / 2)</code> times in the list. You may assume that the majority element always exists in the array.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("majority-element"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- Hash Maps: counting element frequencies efficiently for O(n) time solutions
- Boyer-Moore Voting algorithm: the candidate elimination technique that finds the majority elements in O(1) space
- Bit manipulation: constructing numbers bit by bit by counting set bits across all elements (for the bit manipulation approach)
*/

