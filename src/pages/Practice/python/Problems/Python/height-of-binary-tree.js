import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
def tree_height(node: TreeNode) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        (
            TreeNode(1, TreeNode(2), TreeNode(3)),
            2
        ),
        (
            TreeNode(1, TreeNode(2, TreeNode(4), None), TreeNode(3)),
            3
        ),
        (
            TreeNode(7),
            1
        ),
        (
            TreeNode(1, TreeNode(2, TreeNode(10), None), TreeNode(3)),
            3
        ),
        (
            None,
            0
        ),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (root, expected) in enumerate(test_cases, 1):
        try:
            result = tree_height(root)

            if result == expected:
                logs.append(f"""Test {i}: PASS

Expected: {expected}
Output: {result}
---""")
                passed += 1
            else:
                logs.append(f"""Test {i}: FAIL

Got: {result}
Expected: {expected}
---""")
                failed += 1

        except Exception as e:
            logs.append(f"""Test {i}: ERROR

Error: {e}
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
    1
   / \\
  2   3

Output: 2

Explanation:
The longest path from the root to a leaf contains 2 nodes: 1 -> 2 or 1 -> 3.

---

Example #2:
Input:
      1
     / \\
    2   3
   /
  4

Output: 3

Explanation:
The longest path from the root to a leaf is 1 -> 2 -> 4, which contains 3 nodes.

---

Example #3:
Input: 7

Output: 1

Explanation:
A tree containing a single node has a height of 1.

---

Example #4:
Input: None

Output: 0

Explanation:
An empty tree has a height of 0.
`

const constraints = `<ul>
    <li>The tree may be empty.</li>
    <li>Each node contains an integer value.</li>
    <li>Height is defined as the number of nodes on the longest path from the root to a leaf.</li>
    <li>If the tree is empty, return <code>0</code>.</li>
</ul>
`

const solution = `<h2>Recursion</h2>

<p>We can solve this using recurion with the bottom-up approach. We recursively calculate the height of the left and right subtrees, then use the larger height to determine the height of the current node.</p>

<p>Our base case returns <code>0</code> when we encounter <code>None</code>. An empty subtree has a height of zero.</p>

<p>For each node, we add <code>1</code> for the current node to the greater of the left and right subtree heights.</p>

<h3>Algorithm</h3>

<ol>
    <li>Base case: if our <code>node</code> is <code>None</code> we return <code>0</code></li>
    <li>Recursively calculate the height of the left subtree.</li>
    <li>Recursively calculate the height of the right subtree.</li>
    <li>Return <code>1</code> for the greater of the two subtree heights.</li>
</ol>

<pre class="solution-code-pre"><code>def max_height(node: TreeNode) -> int:
    if not node:
        return 0

    return 1 + max(tree_height(node.left),tree_height(node.right))
</code></pre>

<p>Time complexity of <code>O(n)</code> where <code>n</code> represents the total number of nodes in the tree, since every node is visited once.</p>
<p>Space complexity of <code>O(n)</code>, where <code>n</code> is the height of the tree, because the recursive call stack grows according to the longest path from the root to a leaf.</p>`

export const heightOfBinaryTree = {
    id: "height-of-binary-tree",
    title: "Height of Binary Tree",
    problemStatement: `<p>Return the height of a binary tree. Height is defined as the number of nodes on the longest path from <code>root</code> to a leaf.</p>
    
    <p>If the tree is empty it has a height of <code>0</code>. If the tree has a single node it has a height of <code>1</code>.`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("height-of-binary-tree"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- recursion: basic recursive functions and how they work
*/

/*
Other ways to solve it

- Iterative DFS
- Breadth-first search (BFS)
*/