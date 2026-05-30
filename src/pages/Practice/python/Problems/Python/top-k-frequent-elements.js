import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def top_k_frequent(nums, k):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def normalize(result):
  return sorted(result)

def run_tests():
  test_cases = [
    ([1,1,1,2,2,3], 2, [1,2]),
    ([1], 1, [1]),
    ([1,2], 2, [1,2]),
    ([4,4,4,6,6,7], 1, [4]),
    ([5,5,5,5,1,2,3], 2, [5,1])
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (nums, k, expected) in enumerate(test_cases, 1):
    try:
      result = top_k_frequent(nums, k)

      if normalize(result) == normalize(expected):
        logs.append(f"""Test {i}: PASS
Input: nums={nums}, k={k}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: nums={nums}, k={k}
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
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

---

Example #2:
Input: nums = [1], k = 1
Output: [1]

---

Example #3:
Input: nums = [4,4,4,6,6,7], k = 1
Output: [4]
`

const constraints = `<ul>
<li>1 ≤ <code>nums.length</code> ≤ 10⁵</li>
<li>-10⁴ ≤ <code>nums[i]</code> ≤ 10⁴</li>
<li>1 ≤ <code>k</code> ≤ number of unique elements in <code>nums</code></li>
</ul>`

const solution = `<p>Each number in the array appears a certain number of times, and the maximum possible frequency is the length of the array.</p>
<p>We can use this idea by creating a list where the index represents a frequency, and at each index we store all numbers that appear exactly that many times.</p>

<ul>
    <li>all numbers that appear <code>1</code> time go into group <code>freq[1]</code></li>
    <li>all numbers that appear <code>2</code> times go into group <code>freq[2]</code></li>
    <li>and so on...</li>
</ul>

<p>After we build these groups, we look from the highest possible frequency down to the lowest and collect numbers from these groups until we have <code>k</code> of them. This way, we directly jump to the most frequent numbers without sorting all the elements by frequency.</p>

<h2>Algorithm</h2>

<ol>
    <li>Build a frequency map that counts how many times each number appears.</li>
    <li>Create a list of groups <code>freq</code>, where <code>freq[i]</code> will store all numbers that appear exactly <code>i</code> times.</li>
    <li>For each number and its frequency in the map, add the number to <code>freq[freqency]</code>.</li>
    <li>Initialize an empty result list.</li>
    <li>Loop from the largest possible frequency down to <code>1</code>: </li>
    <ul>
        <li>for each number of <code>freq[i]</code>, add it to the result list</li>
        <li>once the result contains <code>k</code> numbers, return it</li>
    </ul>
</ol>

<pre class="solution-code-pre"><code>def top_k_frequent(nums, k):
    count = {}
    freq = [[] for i in range(len(nums) + 1)]

    for num in nums:
        count[num] = 1 + count.get(num, 0)

    for num, occurrence in count.items():
        freq[occurrence].append(num)

    result = []
    for i in range(len(freq) - 1, 0, -1):
        for num in freq[i]:
          result.append(num)
          if len(result) == k:
              return result
</code></pre>

<h2>Example</h2>

<ul>
  <li><code>nums = [1, 1, 2, 3, 3]</code></li>
  <li><code>k = 2</code></li>
</ul>


<ol>
  <li>if <code>nums = [1, 1, 2, 3, 3]</code>, then we have a <code>len</code> of 5</li>
  <li>this means that <code>freq = [[], [], [], [], [], []]</code>, and we now have 6 buckets. Nothing has been counted yet, as these are just empty containers right now.</li>
  <li>We build <code>count</code> where the keys represent the element from <code>nums</code> and the values represent how many times they occur. So here we have <code>count = {1 : 2, 2 : 1, 3 : 2}</code></li>
  <ul>
    <li>1 appears 2 times</li>
    <li>2 appears 1 times</li>
    <li>3 appears 2 times</li>
  </ul>
  <li>We put numbers into buckets. <code>freq[occurrence].append(num)</code> will add a <code>num</code> from <code>nums</code> to the index, where index represent the occurence. So we have <code>freq = [[], [2], [1,3], [], [], []]</code>
  <li>Finally, we populate <code>result</code> by how many <code>k</code>'s we have and are done. We fill it with <code>freq</code>, starting from the back</li>

</ol>

<p>Time complexity of O(n).</p>
<p>Space complexity of O(n).</p>

<h2>Common Pitfalls</h2>

<h3>Using the frequency as an index incorrectly</h3>

<p>The bucket array needs a size of <code>len(nums) + 1</code> because a number can appear as many as <code>len(nums)</code> times. Forgetting the extra slot can cause index errors.</p>

<h3>Sorting unnecessarily</h3>

<p>A common mistake is counting frequencies and then sorting the entire dictionary by frequency. While that works, it takes O(n log n) time. Bucket sort allows us to achieve O(n) time.</p>

<h3>Returning more than k elements</h3>

<p>Once the result contains <code>k</code> numbers, immediately return it. Continuing to iterate can cause extra elements to be added.</p>
`

export const topKFrequentElements = {
  id: "top-k-frequent-elements",
  title: "41. Top K Frequent Elements",
  problemStatement: `<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return the <code>k</code> most frequent elements within the array.</p>
    <p>The test cases are generated such that the answer is always <em>unique</em>. You may return the output in <em>any order</em>.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("top-k-frequent-elements"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- Hash Usage
- Bucket Sort
*/