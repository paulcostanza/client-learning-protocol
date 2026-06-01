import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def invertTree(root):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

def tree_to_list(root):
  if not root:
    return []

  result = []
  queue = [root]

  while queue:
    node = queue.pop(0)

    if node:
      result.append(node.val)
      queue.append(node.left)
      queue.append(node.right)
    else:
      result.append(None)

  while result and result[-1] is None:
    result.pop()

  return result

def build_tree(values):
  if not values:
    return None

  nodes = [TreeNode(val) if val is not None else None for val in values]
  kids = nodes[::-1]
  root = kids.pop()

  for node in nodes:
    if node:
      if kids:
        node.left = kids.pop()
      if kids:
        node.right = kids.pop()

  return root

def run_tests():
  test_cases = [
    ([4,2,7,1,3,6,9], [4,7,2,9,6,3,1]),
    ([2,1,3], [2,3,1]),
    ([], [])
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (tree, expected) in enumerate(test_cases, 1):
    try:
      root = build_tree(tree)
      result = invertTree(root)

      if tree_to_list(result) == expected:
        logs.append(f"""Test {i}: PASS
Input: {tree}
Output: {tree_to_list(result)}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {tree}
Got: {tree_to_list(result)}
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
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

---

Example #2:
Input: root = [2,1,3]
Output: [2,3,1]

---

Example #3:
Input: root = []
Output: []
`

const constraints = `<ul>
<li>The number of nodes in the tree is in the range <code>[0, 100]</code></li>
<li><code>-100 ≤ Node.val ≤ 100</code></li>
</ul>`

const solution = `
<p>Inverting a binary tree means swapping every node's left and right subtree. With <strong>depth-first search</strong> we can use recursion to invert the tree in a <em>top-down</em> manner.</p>

<ul>
    <li>at each node, swap the left and right children</li>
    <li>then recursively invert the left subtree</li>
    <li>recursively invert the right subtree</li>
</ul>

<p>Because every subtree is itself a smaller binary tree, recursion naturally handles this structure. The inversion happens during the descent of the recursion, and each subtree becomes correctly mirrored.</p>

<h2>Algorithm</h2>

<ol>
    <li>if the current node is <code>None</code>, return <code>None</code></li>
    <li>swap the node's <code>left</code> and <code>right</code> pointers</li>
    <li>recursively call <code>dfs</code> on the new <code>left</code> child</li>
    <li>recursively call <code>dfs</code> on the new <code>right</code> child</li>
    <li>return the current node, which is now inverted</li>
</ol>

<pre class="solution-code-pre"><code>invertTree(root):
    if not root:
        return None
    
    root.left, root.right = root.right, root.left

    invertTree(root.left)
    invertTree(root.right)

    return root
</code></pre>

<p>Time complexity of O(n).</p>
<p>Space complexity of O(n) for recursion stack.</p>
`

export const invertBinaryTree = {
  id: "invert-binary-tree",
  title: "41. Invert Binary Tree",
  problemStatement: `<p>Given the root of a binary tree of <code>root</code>, invert the binary tree. Return the root.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("invert-binary-tree"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- binary trees
- depth-first search
*/