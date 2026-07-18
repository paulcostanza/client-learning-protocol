import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def top_scores(people: list[tuple[str, int]]) -> list[[str, int]]:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    (
      [("Alice", 100), ("Bob", 75), ("Charlie", 90)],
      [("Alice", 100), ("Charlie", 90), ("Bob", 75)]
    ),
    (
      [("Bob", 90), ("Alice", 90), ("Charlie", 90)],
      [("Alice", 90), ("Bob", 90), ("Charlie", 90)]
    ),
    (
      [("Dan", 50)],
      [("Dan", 50)]
    ),
    (
      [],
      []
    ),
    (
      [("Mike", 100), ("Adam", 100), ("Zoe", 80), ("Ben", 80)],
      [("Adam", 100), ("Mike", 100), ("Ben", 80), ("Zoe", 80)]
    )
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (people, expected) in enumerate(test_cases, 1):
    try:
      result = top_scores(people)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: {people}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {people}
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
people = [("Alice", 100), ("Bob", 75), ("Charlie", 90)]

Output:
[("Alice", 100), ("Charlie", 90), ("Bob", 75)]

---

Example #2:
Input:
people = [("Bob", 90), ("Alice", 90), ("Charlie", 90)]

Output:
[("Alice", 90), ("Bob", 90), ("Charlie", 90)]

Explanation:
All scores are tied, so names are sorted alphabetically.

---

Example #3:
Input:
people = []

Output:
[]
`

const constraints = `<ul>
    <li><code>0 ≤ len(people) ≤ 10<sup>5</sup></li>
    <li>Each element is a tuple <code>(name, score)</code></li>
    <li><code>name</code> contains only letters.</li>
    <li><code>score</code> is an integer.</li>
</ul>`

const solution = `
<h1>Using <code>sorted</code></h1>

<pre class="solution-code-pre"><code>def rank(people):
    return sorted(people, key=lambda p: (-p[1], p[0]))
</code></pre>

<p>For each tuple <code>(name, score)</code>:</p>

<ul>
    <li><code>-p[1]</code> sorts scores in <em>descending</em> order. Adding the negative sign switches the direction.</li>
    <li><code>p[0]</code> sorts names in <em>ascending</em> order when scores are tied.</li>
</ul>

<p>When we provide a <code>key</code> with <code>sorted</code>, python transforms every element into a sorting key. The lambda transforms our original element into the following keys:</p>

<table>
    <thead>
        <td>Original</td>
        <td>Key</td>
    </thead>
    <tbody>
        <tr>
            <td>("Bob", 90)</td>
            <td>(-90, "Bob")</td>
        </tr>
        <tr>
            <td>("Alice", 100)</td>
            <td>(-100, "Alice")</td>
        </tr>
        <tr>
            <td>("Charlie", 90)</td>
            <td>(-90, "Charlie")</td>
        </tr>
    </tbody>
</table>

<blockquote>
    <p>Now, you may be tempted to use the optional parameter <code>reverse=True</code>, which will reverse the entire ordering. This prevents both conditions <em>score descending</em> and <em>name ascending</em>!</p>
</blockquote>

<p>Time complexity is <code>O(n log n)</code>. Python's sorting algorithm (<em>Timsort</em>) sorts <code>n</code> elements in this time.</p>
<p>Space complexity is <code>O(n)</code> because <code>sorted()</code> creates a new list containing all of the elements.</p>
`

export const tupleRanking = {
    id: "tuple-ranking",
    title: "48. Tuple Ranking",
    problemStatement: `<p>We have a high score list of <code>people</code> that contain tuples <code>(name, score)</code>, with <code>name</code> as a string and <code>score</code> as an int. Write <code>top_scores(people)</code> that will return them sorted by score descending, and breaking ties by name ascending.</p>
  `,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("tuple-ranking"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- tuples
- <code>sorted</code>
*/
