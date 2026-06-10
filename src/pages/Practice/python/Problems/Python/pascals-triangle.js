import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def pascals_triangle(rows):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (1, [[1]]),
    (2, [[1], [1, 1]]),
    (5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]),
    (3, [[1], [1, 1], [1, 2, 1]]),
    (6, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]])
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (rows, expected) in enumerate(test_cases, 1):
    try:
      result = pascals_triangle(rows)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: rows={rows}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: rows={rows}
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
Input: rows = 1
Output: [[1]]

Explanation:
- Pascal's Triangle starts with a single row containing 1.

---

Example #2:
Input: rows = 5
Output:
[
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1]
]

Explanation:
- Each row begins and ends with 1.
- Interior values are the sum of the two values directly above them.

---

Example #3:
Input: rows = 3
Output:
[
  [1],
  [1, 1],
  [1, 2, 1]
]

Explanation:
- The first 3 rows of Pascal's Triangle are returned.
`

const constraints = `<ul>
    <li>1 ≤ <code>rows</code> ≤ 30</li>
</ul>`

const solution = `
<h1>Combinatorics</h1>

<p>Each element in Pascal's Triangle corresponds to a <em>binomial coefficient</em>. The value at row <code>n</code> and position <code>k</code> is <code>C(n, k)</code>. Rather than computing each coefficient from scratch using factorials, we can compute them incrementally. Starting from <code>1</code>, each subsequent value in a row can be derived by multiplying by <code>(n - k + 1) / k</code>.</p>

<h2>Algorithm</h2>

<ol>
    <li>Initialize an empty result list.</li>
    <li>For each row <code>n</code> from <code>0</code> to <code>rows - 1</code>:</li>
    <ul>
        <li>Start the row with <code>[1]</code></li>
        <li>Set <code>val = 1</code></li>
        <li>For each position <code>k</code> from <code>1</code> to <code>n</code>:</li>
        <ul>
            <li>Compute <code>val = val * (n - k + 1) / k</code></li>
            <li>Append <code>val</code> to the <code>row</code></li>
        </ul>
        <li>Add the completed <code>row</code> to the result</li>
    </ul>
    <li>Return the result list</li>
</ol>

<pre class="solution-code-pre"><code>def pascals_triangle(rows):
    result = []
    for n in range(rows):
        row = [1]
        val = 1
        for k in range(1, n + 1):
            val = val * (n - k + 1) // k
            row.append(val)
        result.append(row)
    return result
</code></pre>

<p>Time complexity is O(n^2).</p>
<p>Space complexity is O(n^2).</p>

<h1>Dynamic Programming I</h1>

<p>Each element in Pascal's Triangle (except the edges) is the sum of the two elements directly above it. We can simulate this by padding the previous row with zeros on both ends, then summing adjacent pairs to generate the next row.</p>

<h2>Algorithm</h2>

<ol>
    <li>Start with the first row <code>[[1]]</code></li>
    <li>For each subsequent row:</li>
    <ul>
        <li>take the last row and pad it with zeros: <code>[0] + row + [0]</code></li>
        <li>Create a new row by summing adjacent elements: <code>temp[j] + temp[j + 1]</code></li>
        <li>Append the new <code>row</code> to the result</li>
    </ul>
    <li>Return the result after generating the correct number of <code>rows</code></li>
</ol>

<pre class="solution-code-pre"><code>def pascals_triangle(rows):
    result = [[1]]

    for i in range(rows - 1):
        temp = [0] + result[-1] + [0]
        row = []
        for j in range(len(result[-1]) + 1):
            row.append(temp[j] + temp[j + 1])
        result.append(row)

    return result
</code></pre>

<p>Time complexity is O(n^2).</p>
<p>Space complexity is O(n^2).</p>

<h1>Dynamic Programming II</h1>

<p>We directly apply the defining property of Pascal's Triangle: each interior element equals the sum of the two elements above it. The first and last elements of every row are always <code>1</code>. We build row by row, referencing the previous row for the sums.</p>

<h2>Algorithm</h2>

<ol>
    <li>Initailize a 2D list where row <code>i</code> has <code>i + 1</code> elements, all of which are set to <code>1</code></li>
    <li>For each row from index 2 onward...</li>
    <ul>
        <li>For each interior position <code>j</code> except for the first and last we set <code>result[i][j] = result[i - 1][j - 1] + result[i - 1][j]</code></li>
    </ul>
    <li>Return the completed triangle</li>
</ol>

<pre class="solution-code-pre"><code>def pascals_triangle(rows):
    result = [[1] * (i + 1) for i in range(rows)]
    
    for i in range(2, rows):
        for j in range(1, i):
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j]

    return result
</code></pre>

<p>Time complexity is O(n^2).</p>
<p>Space complexity is O(n^2).</p>

<h1>Common Pitfalls</h1>

<h2>Off-by-one errors with row indexing</h2>

<p>Pascal's Triangle is most likely 0-indexed. So row 0 is <code>[1]</code>, row 1 is <code>[1, 1]</code>, and so on. Confusing 0-indexed and 1-indexed row numbering leads to generating one too many or one too few rows.</p>

<h2>Forgetting edge elements are always 1</h2>

<p>The first and last elements of every row are always 1. When building rows iteratively, only the interior elements (positions 1 through <code>i - 1</code> for row <code>i</code>) need to be computed as sums. Attempting to compute edge elements using the sum formula causes index-out-of-bounds errors.</p>
`

export const pascalsTriangle = {
    id: "pascals-triangle",
    title: "31. Pascal's Triangle",
    problemStatement: `<p>You are given an integer of <code>rows</code>, return the first <code>rows</code> of <em>Pascal's Triangle</em>.</p>
    <p>In Pascal's Triangle, each row begins and ends with <code>1</code>, and every interior value equals the sum of the two values directly above it from the previous row.`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("pascals-triangle"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- 2D lists: storing and accessing the triangle structure
- dynamic programming: building each row using values from the previous row
- combinatorics: understanding that each element is a binomial coefficient <code>C(n, k)</code> and can be computed incrementally
*/
