import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
def max_value(node: TreeNode) -> int:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        (
            TreeNode(1, TreeNode(2), TreeNode(3)),
            3
        ),
        (
            TreeNode(-10, TreeNode(-20), TreeNode(-5)),
            -5
        ),
        (
            TreeNode(7),
            7
        ),
        (
            TreeNode(1, TreeNode(2, TreeNode(10), None), TreeNode(3)),
            10
        ),
        (
            None,
            float("-inf")
        ),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (root, expected) in enumerate(test_cases, 1):
        try:
            result = max_value(root)

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
The tree contains the values 1, 2, and 3. The maximum value is 3.

---

Example #2:
Input:
    -10
    /  \\
  -20   -5

Output: -5

Explanation:
All values are negative, but -5 is still the largest value in the tree.

---

Example #3:
Input:
      1
     / \\
    2   3
   /
  10

Output: 10

Explanation:
The maximum value does not have to be directly connected to the root. We must recursively search the entire tree.
`

const constraints = `<ul>
    <li>The tree may be empty.</li>
    <li>Each node contains an integer value.</li>
    <li>The solution must return the maximum value from any node in the tree.</li>
    <li>If the tree is empty, return <code>float("-inf")</code>.</li>
</ul>
`

const solution = `<h2>Recursion</h2>

<p>We solve this guy with recursion using the bottom-up technique: All of the calculations happen on the way back up after traversing to the leaf nodes.</p>

<p>Our base case returns <code>float("-inf")</code> for when we encounter <code>None</code>. This will guarantee that any real number greater than this will be picked by an actual node value over an empty branch.</p>

<p>For the function we return the maximum value we encouter by combining the current node's value, recursivly calling it's left child, and recursivly calling it's right child.</p>

<h3>Algorithm</h3>

<ol>
    <li>Base case: if our <code>node</code> is <code>None</code> we return <code>float("-inf")</code></li>
    <li>We return the maximum value by combining...</li>
    <ul>
        <li>our current <code>node</code>'s value</li>
        <li>our current <code>node</code>'s left child</li>
        <li>our current <code>node</code>'s right child</li>
    </ul>
</ol>

<pre class="solution-code-pre"><code>def max_value(node: TreeNode) -> int:
    if not node:
        return float("-inf")

    return max(node.val, max_value(node.left), max_value(node.right))
</code></pre>

<p>Time complexity of <code>O(n)</code> where <code>n</code> represents the total number of nodes in the tree.</p>
<p>Space complexity of <code>O(n)</code> since the call stack will grow to the size of all nodes.</p>`

export const maxValueInTree = {
    id: "max-value-in-tree",
    title: "Max Value in Tree",
    problemStatement: `<p>Traverse a binary tree and return the maximum value from any of its nodes.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("max-value-in-tree"),
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