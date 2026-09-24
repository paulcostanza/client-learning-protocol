import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
def tree_diameter(node: TreeNode) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def tree_to_list(node):
    if not node:
        return None

    return [
        node.val,
        tree_to_list(node.left),
        tree_to_list(node.right)
    ]


def run_tests():
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
            0
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
            result = tree_diameter(root)
            tree = tree_to_list(root)

            if result == expected:
                logs.append(f"""Test {i}: PASS

Tree: {tree}
Expected: {expected}
Output: {result}
---""")
                passed += 1
            else:
                logs.append(f"""Test {i}: FAIL

Tree: {tree}
Got: {result}
Expected: {expected}
---""")
                failed += 1

        except Exception as e:
            logs.append(f"""Test {i}: ERROR

Tree: {tree_to_list(root)}
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
The longest path is 2 -> 1 -> 3, which contains 2 edges.

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
The longest path is 4 -> 2 -> 1 -> 3, which contains 3 edges.

---

Example #3:
Input: 7

Output: 0

Explanation:
A tree containing a single node has a diameter of 0 because there are no edges.

---

Example #4:
Input: None

Output: 0

Explanation:
An empty tree has a diameter of 0.
`

const constraints = `<ul>
    <li>The tree may be empty.</li>
    <li>Each node contains an integer value.</li>
    <li>The diameter is the number of edges on the longest path between any two nodes.</li>
    <li>The path does not need to pass through the root.</li>
    <li>If the tree is empty, return <code>0</code>.</li>
</ul>
`

const solution = `<h2>Depth First Search</h2>

<p>The diameter of a binary tree is the longest path between any two nodes. This path must go through some node, and at the node the path length is <code>left_subtree_height + right_subtree_height</code>.</p>


<p>We can solve this problem with a post-order Depth-First Search (DFS). At each node, we need the height of the subtree and the diameter of the subtree.</p> 

<p>Instead of calculating these separately, our helper function returns both values as a tuple: <code>(height, diameter)</code></p>

<p>For any node, the longest path that passes through that node is <code>left_height + right_height</code>. For example, if the left subtree has height <code>2</code> and the right subtree has height <code>1</code>, then the longest path through the current node contains:<code>2 + 1 = 3 edges</code>.</p>

<p>However, the overall diameter might not pass through the current node. It could already exist entirely inside the left or right subtree. Therefore, at every node we compare three possibilities:</p>

<ol> 
    <li>The diameter entirely inside the left subtree.</li> 
    <li>The diameter entirely inside the right subtree.</li> 
    <li>The longest path passing through the current node.</li>
</ol> 

<p>This gives us <code>diameter = max(ld, rd, through)</code>.</p>

<blockquote>
    <p>Wait, why am I returning two values?</p>
</blockquote>

<p>The parent node needs the child's <strong>height</strong> to calculate paths that pass through the parent. At the same time, we need to keep track of the best <strong>diameter</strong> found anywhere in the subtree. Returning both values lets us calculate everything in a single DFS.</p>

<p>For example, when the parent receives <code>lh, ld = helper(node.left)</code>, <code>lh</code> is the height the parent needs, while <code>ld</code> is the best diameter already found inside the left subtree.</p> 

<h3>Algorithm</h3> 

<ol> 
    <li>Recursively calculate the height and diameter of the left subtree.</li> 
    <li>Recursively calculate the height and diameter of the right subtree.</li> 
    <li>Calculate the current node's height using <code>1 + max(lh, rh)</code>.</li> 
    <li>Calculate the diameter through the current node using <code>lh + rh</code>.</li> 
    <li>Take the maximum of the left diameter, right diameter, and diameter through the current node.</li> 
    <li>Return both the height and diameter to the parent.</li> 
</ol> 

<pre class="solution-code-pre"><code>def tree_diameter(node: TreeNode) -> int: 
    def helper(node): 
        if node is None: 
            return (0, 0) 
        lh, ld = helper(node.left) 
        rh, rd = helper(node.right) 
        height = 1 + max(lh, rh) 
        through = lh + rh 
        diameter = max(ld, rd, through) 
        return (height, diameter) 

    _, diameter = helper(node) 
    return diameter 
</code></pre> 

<p>Time complexity of <code>O(n)</code> where <code>n</code> represents the total number of nodes in the tree, since every node is visited once.</p>

<p>Space complexity of <code>O(n)</code>, where <code>n</code> is the height of the tree. If your tree is balanced, then best case you get <code>O(log(n))</code>. If your tree is not balanaced, then worst case you get our <code>O(n)</code>.</p>

<h3>Common Mistakes</h3> 

<h4>Returning the Diameter Instead of the Height</h4> 

<p>The value returned from <code>helper</code> must include the subtree's height because the parent uses that height to calculate its own height and diameter. These are different values <code>height = 1 + max(lh, rh) diameter = max(ld, rd, lh + rh)</code>.</p> 

<p>A common mistake is to return <code>lh + rh</code> as the height. That is the diameter through the current node, not the height of the subtree.</p> 

<h4>Assuming the Diameter Passes Through the Root</h4> 

<p>The longest path does not necessarily pass through the root. That is why we cannot simply calculate <code>left_height + right_height</code> once at the root and return it.</p> 

<p>The longest path may exist entirely inside the left or right subtree. The <code>ld</code> and <code>rd</code> values allow the helper to preserve those subtree diameters as it returns to the root.</p> 
`

export const diameterOfBinaryTree = {
    id: "diameter-of-binary-tree",
    title: "Diameter of Binary Tree",
    problemStatement: `<p>The diameter of a binary tree is the length of the longest path between any two nodes within the tree. The path does nto necessarily have to pass through the root.</p>
    
    <p>The length of a path between two nodes in a binary tree is the number of edges between the nodes. The path <em>can not</em> include the same node twice.
    
    <p>Given the root of a binary tree, return the dimater of the tree.`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("diameter-of-binary-tree"),
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