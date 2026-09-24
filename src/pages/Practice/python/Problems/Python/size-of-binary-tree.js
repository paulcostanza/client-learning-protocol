import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
def tree_size(node: TreeNode) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        (
            TreeNode(1, TreeNode(2), TreeNode(3)),
            3
        ),
        (
            TreeNode(1, TreeNode(2, TreeNode(4), None), TreeNode(3)),
            4
        ),
        (
            TreeNode(7),
            1
        ),
        (
            TreeNode(1, TreeNode(2, TreeNode(10), None), TreeNode(3)),
            4
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
            result = tree_size(root)

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

Output: 3

Explanation:
The tree contains 3 nodes: 1, 2, and 3.

---

Example #2:
Input:
      1
     / \\
    2   3
   /
  4

Output: 4

Explanation:
The tree contains 4 nodes: 1, 2, 3, and 4.

---

Example #3:
Input: 7

Output: 1

Explanation:
A tree containing a single node has a size of 1.

---

Example #4:
Input: None

Output: 0

Explanation:
An empty tree contains no nodes, so its size is 0.
`

const constraints = `<ul>
    <li>The tree may be empty.</li>
    <li>Each node contains an integer value.</li>
    <li>The solution must return the total number of nodes in the tree.</li>
    <li>If the tree is empty, return <code>0</code>.</li>
</ul>
`

const solution = `<h2>Recursion</h2>

<p>We can solve this using recurion with the bottom-up approach. We recursively calculate the size of the left and right subtrees, then add them together with the <code>1</code> for the current node..</p>

<p>Our base case returns <code>0</code> when we encounter <code>None</code>. An empty subtree has zero nodes.</p>

<p>For each node, we count the current node as <code>1</code>, then add the sizes of its left and right subtrees.</p>

<h3>Algorithm</h3>

<ol>
    <li>Base case: if our <code>node</code> is <code>None</code> we return <code>0</code></li>
    <li>Recursively calculate the size of the left subtree.</li>
    <li>Recursively calculate the size of the right subtree.</li>
    <li>Return <code>1</code> for the current node plus the sizes of both subtrees.</li>
</ol>

<pre class="solution-code-pre"><code>def max_value(node: TreeNode) -> int:
    if not node:
        return 0

    return 1 + tree_size(node.left) + tree_size(node.right)
</code></pre>

<p>Time complexity of <code>O(n)</code> where <code>n</code> represents the total number of nodes in the tree.</p>
<p>Space complexity of <code>O(n)</code>, where <code>n</code> is the height of the tree, because the recursive call stack grows according to the tree's height.</p>`

export const sizeOfBinaryTree = {
    id: "size-of-binary-tree",
    title: "Size of Binary Tree",
    problemStatement: `<p>Return the total number of nodes in the binary tree based off of <code>root</code>.</p>
    
    <p>If the tree is empty it has a size of <code>0</code>.`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("size-of-binary-tree"),
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