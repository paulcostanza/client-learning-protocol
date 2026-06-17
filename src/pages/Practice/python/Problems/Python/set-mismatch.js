import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def set_mismatch(nums):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    ([1, 2, 2, 4], [2, 3]),
    ([1, 1], [1, 2]),
    ([2, 2], [2, 1]),
    ([3, 2, 3, 4, 6, 5], [3, 1]),
    ([1, 5, 3, 2, 2, 6, 7, 8], [2, 4])
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (nums, expected) in enumerate(test_cases, 1):
    try:
      result = set_mismatch(nums[:])

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: {nums}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {nums}
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
Input: nums = [1, 2, 2, 4]
Output: [2, 3]

Explanation:
- The number 2 appears twice.
- The number 3 is missing.
- Return [2, 3].

---

Example #2:
Input: nums = [1, 1]
Output: [1, 2]

Explanation:
- The number 1 appears twice.
- The number 2 is missing.

---

Example #3:
Input: nums = [3, 2, 3, 4, 6, 5]
Output: [3, 1]

Explanation:
- The number 3 appears twice.
- The number 1 is missing.
`

const constraints = `<ul>
    <li>2 ≤ <code>len(nums)</code> ≤ 10<sup>4</sup></li>
    <li>1 ≤ <code>nums[i]</code> ≤ <code>len(nums)</code></li>
    <li>Exactly one number appears twice.</li>
    <li>Exactly one number is missing.</li>
</ul>`

const solution = `
<h1>Dictionary</h1>

<p>Using extra space, we can count occurrences in a single pass and then check each number's frequency. A frequency list of size <code>n + 1</code> lets us directly index by <em>number value</em>. The number with count <code>2</code> is the duplicate, and the number with count <code>0</code> is the missing one.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create a count array of size <code>n + 1</code> initialized to <code>0</code></li>
    <li>Iterate through the input array and increment count for each number</li>
    <li>Iterate through numbers <code>1</code> to <code>n</code>:</li>
    <ul>
        <li>if <code>count[i]</code> is <code>0</code>, <code>i</code> is the missing the number</li>
        <li>if <code>count[i]</code> is <code>2</code>, <code>i</code> is the missing the number</li>
    </ul>
    <li>Return <code>[duplicate, missing]</code></li>
</ol>

<pre class="solution-code-pre"><code>def set_mismatch(nums):
    res = [0, 0]
    count = {}

    for num in nums:
        count[num] = count.get(num, 0) + 1

    for i in range(1, len(nums) + 1):
        freq = count.get(i, 0)

        if freq == 0:
            res[1] = i
        elif freq == 2:
            res[0] = i

    return res
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(n).</p>

<h1>Negative Marking</h1>

<p>We can use the input list itself as a hash table by marking visited indices. For each number, we negate the value at the corresponding index. If we try to negate an already negative value, we found the duplicate! After processing, any positive value indicates its index corresponds to the missing number.</p>

<h2>Algorithm</h2>

<ol>   
    <li>Iterate through the list:</li>
    <ul>
        <li>for each value, take its absolute value to get the index</li>
        <li>if the value at that index is already negative, this is the duplicate!</li>
        <li>otherwise, negate the value at that index</li>
    </ul>
    <li>Iterate through the array again:</li>
    <ul>
        <li>find the index with a positive value that is not the duplicate</li>
        <li>this <code>index + 1</code> is the missing number</li>
    </ul>
    <li>return <code>[duplicate, missing]</code></li>
</ol>

<pre class="solution-code-pre"><code>def set_mismatch(nums):
    duplicate = 0
    missing = 0

    for num in nums:
        num = abs(num)
        nums[num - 1] *= -1
        if nums[num - 1] > 0:
            duplicate = num

    for i, num in enumerate(nums):
        if num > 0 and i + 1 != duplicate:
            missing = i + 1
            return [duplicate, missing]

</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<h1>Math</h1>

<p>Using sum formulas, we can set up equations to solve for the duplicate and missing numbers. Let the duplicate be <code>d</code> and the missing be <code>m</code>. The difference between the actual sum and expected sum gives us <code>d - m</code>. The difference between actual sum of squares and expected sum of squares gives us <code>d^2 = m^2 = (d+m)(d-m)</code>. With these two equations, we can solve for both values.</p>

<h2>Algorithm</h2>

<ol>   
    <li>Compute <code>x = sum(nums) - sum(1 to n)</code>, which equals <code>duplicate - missing</code>.</li>
    <li>Compute <code>y = sum(nums*2) - sum(1^2 to n^2)</code>, which equals <code>duplicate^2 - missing^2</code>.</li>
    <li>Since <code>y = (duplicate + missing) * x</code>, we get <code>duplicate + missing = y /x</code>.</li>
    <li>Solve for missing: <code>missing = (y / x - x) / 2</code> and <code>duplicate = missing + x</code>.</li>
    <li>Return <code>[duplicate, missing]</code>.</li>    
</ol>

<pre class="solution-code-pre"><code>def set_mismatch(nums):
    n = len(nums)
    x = 0 # duplicate - missing
    y = 0 # duplicate^2 - missing^2

    for i in range(1, n + 1):
        x += nums[i - 1] - i
        y += nums[i - 1]**2 - i**2

    missing = (y - x**2) // (2 * x)
    duplicate = missing + x
    return [duplicate, missing]
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<h1>Bitwise XOR</h1>

<p>XOR has the property that <code>a ^ a = 0</code>. If we XOR all numbers in the list with all numbers from 1 to n, pairs cancel out, leaving us with all numbers from 1 to n, pairs cancel out, leaving us with <code>duplicate ^ missing</code>. To separate them, we find a bit where they differ (using the rightmost set bit), then partition all numbers into two groups based on that bit. XOR-ing within each group isolates the duplicate and missing values.</p>

<h2>Algorithm</h2>

<ol>   
    <li>XOR all array elements with all numbers <code>1</code> to <code>n</code>. This gives <code>duplicate ^ missing</code>.</li>
    <li>Find the rightmost set bit in the XOR result (this bit differs between duplicate and missing).</li>
    <li>Partition all numbers (from list and from <code>1</code> to <code>n</code>) into two groups based on this bit.</li>
    <li>XOR numbers within each group separately to get two candidates <code>x</code> and <code>y</code>.</li>
    <li>Check which candidate appears in the list to identify the duplicate.</li>
    <li>Return <code>[duplicate, missing]</code></li>
</ol>

<pre class="solution-code-pre"><code>def set_mismatch(nums):
    n = len(nums)
    xorr = 0
    for i in range(1, n + 1):
        xorr ^= i
        xorr ^= nums[i - 1]

    rightMostBit = xorr & ~(xorr - 1)

    x = y = 0
    for i in range(1, n + 1):
        if i & rightMostBit:
            x ^= i
        else:
            y ^= i
        
        if nums[i - 1] & rightMostBit:
            x ^= nums[i - 1]
        else:
            y ^= nums[i - 1]

    for num in nums:
        if num == x:
            return [x, y]
    return [y, x]
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<h1>Common Pitfalls</h1>

<h2>Confusing the output order</h2>

<p>Accidently swapping the order of <code>duplicate</code> and <code>missing</code> when returning produces wrong answers, even when both numbers are correctly identified.</p>
`

export const setMismatch = {
    id: "set-mismatch",
    title: "56. Set Mismatch",
    problemStatement: `<p>You have a set of integers <code>nums</code>, which contains all the numbers from <code>1</code> to <code>n</code>. Unfortunately, due to some error, one of the numbers in <code>nums</code> got duplicated to another number in the set, which results in repetition of one number and loss of another number.</p>

    <p>You are given an integer array <code>nums</code> representing the data status of this set after the error.</p>
    
    <p>Find the number that occurs <em>twice</em> and the number that is <em>missing</em> and return them in the form of a list.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("set-mismatch"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- lists: iterating through and manipulating list elements
- dictionaries & frequency counting: tracking how many times each element appears
- sorting: understanding how sorted order reveals duplicates and gaps
- math (sum formulas): using arithmetic sum formulas to detect missing or duplicate values
- bit mainpulation (XOR): understanding XOR properties for finding unique elements
*/
