import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def count_nodes(root: Node) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

def build_tree(values):
  if not values:
    return None

  nodes = [TreeNode(v) if v is not None else None for v in values]

  for i in range(len(values)):
    if nodes[i] is None:
      continue

    left = 2 * i + 1
    right = 2 * i + 2

    if left < len(values):
      nodes[i].left = nodes[left]

    if right < len(values):
      nodes[i].right = nodes[right]

  return nodes[0]

def run_tests():
  test_cases = [
    ([1,2,3,4,5,6], 6),
    ([1], 1),
    ([], 0),
    ([1,2,3,4,5,6,7], 7),
    ([1,2,3,4], 4)
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (values, expected) in enumerate(test_cases, 1):
    root = build_tree(values)

    try:
      result = count_nodes(root)

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: {values}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {values}
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
Input: root = [1,2,3,4,5,6]
Output: 6

Explanation:
There are 6 nodes in the tree.

---

Example #2:
Input: root = []
Output: 0

Explanation:
The tree is empty.

---

Example #3:
Input: root = [1]
Output: 1
`

const constraints = `<ul>
    <li>The number of nodes in the tree is in the range <code>[0, 5 * 10<sup>4</sup>]</code>.</li>
    <li><code>-5 * 10<sup>4</sup> ≤ Node.val ≤ 5 * 10<sup>4</sup></li>
</ul>`

const solution = `
<h1>Recursion</h1>

<p>Every node contributes <code>1</code> to the total count. We recursively count the nodes in the left subtree, the right subtree, and then add them together with the current node.</p>

<h2>Algorithm</h2>

<ol>
    <li>If <code>root</code> is <code>None</code>, return <code>0</code>.</li>
    <li>Recursively count the nodes in the left subtree.</li>
    <li>Recursively count the nodes in the right subtree.</li>
    <li>Return <code>left + right + 1</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def count_nodes(root: Node) -> int:
  return count_nodes(root.left) + count_nodes(root.right) + 1 if root else 0
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(log n) to keep the recursion stack.</p>
`

export const countTreeNodes = {
  id: "count-tree-nodes",
  title: "48. Count Tree Nodes",
  problemStatement: `<p>Given the <code>root</code> of a binary tree, return the number of nodes in the tree.</p>
  `,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("count-tree-nodes"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- binary search trees
- recurssion 
*/
