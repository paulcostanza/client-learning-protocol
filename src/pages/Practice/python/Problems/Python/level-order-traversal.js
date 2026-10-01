import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
def bfs_levels(root: TreeNode) -> list[list[int]]:
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
            [[1], [2, 3]]
        ),
        (
            TreeNode(1, TreeNode(2, TreeNode(4), None), TreeNode(3)),
            [[1], [2, 3], [4]]
        ),
        (
            TreeNode(7),
            [[7]]
        ),
        (
            TreeNode(1, TreeNode(2, TreeNode(10), None), TreeNode(3)),
            [[1], [2, 3], [10]]
        ),
        (
            None,
            []
        ),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (root, expected) in enumerate(test_cases, 1):
        try:
            result = bfs_levels(root)
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

    print(f"Passed: {passed}, Failed: {failed}\\\n")

    for log in logs:
        print(log)


run_tests()
`

const example = `Example #1:
Input:
    3
   / \\
  9  20
     / \\
    15  7

Output: [[3], [9, 20], [15, 7]]

Explanation:
- The first level contains 3.
- The second level contains 9 and 20.
- The third level contains 15 and 7.

---

Example #2:
Input:
      1
     /
    2
   /
  3

Output: [[1], [2], [3]]

Explanation: Each level contains one node because the tree is left-skewed.

---

Example #3:
Input: 7

Output: [[7]]

Explanation: A tree containing a single node has one level containing that node.

---

Example #4:
Input: None

Output: []

Explanation: An empty tree has no levels.
`

const constraints = `<ul>
    <li>The tree may be empty.</li>
    <li>Each node contains an integer value.</li>
    <li>Return the node values grouped by level.</li>
    <li>Values within each level should be ordered from left to right.</li>
    <li>If the tree is empty, return <code>[]</code>.</li>
</ul>
`

const solution = `<h2>Breadth-First Search</h2>

<p>Level order traversal visits a binary tree one level at a time, from top to bottom. Within each level, nodes are processed from left to right.</p>

<p>This is a natural use case for <strong>Breadth-First Search (BFS)</strong>. BFS uses a <strong>queue</strong> so that nodes are processed in the same order that they were added.</p>

<p>The important part of this problem is knowing where one level ends and the next level begins. At the beginning of each loop, the queue contains exactly the nodes that belong to the current level.</p>

<p>We save the current queue length in <code>level_size</code>. We then process exactly that many nodes. Any children added to the queue during this process belong to the <strong>next</strong> level.</p>

<h3>Algorithm</h3>

<ol>
    <li>If the tree is empty, return <code>[]</code>.</li>
    <li>Create a queue containing the root node.</li>
    <li>While the queue is not empty, record its current size as <code>level_size</code>.</li>
    <li>Create an empty list for the current level.</li>
    <li>Process exactly <code>level_size</code> nodes.</li>
    <li>Add each node's value to the current level.</li>
    <li>Add the node's left and right children to the queue.</li>
    <li>Append the completed level to the result.</li>
    <li>Repeat until the queue is empty.</li>
</ol>

<h3>Why <code>level_size</code> matters</h3>

<p>Suppose the tree is:</p>

<pre class="solution-code-pre"><code>    1
   / \\
  2   3
 / \\
4   5
</code></pre>

<p>When we begin processing the first level, the queue contains:</p>

<pre class="solution-code-pre"><code>[1]</code></pre>

<p>We save <code>level_size = 1</code>, so we process only node <code>1</code>. Its children, <code>2</code> and <code>3</code>, are added to the queue.</p>

<p>The queue is now:</p>

<pre class="solution-code-pre"><code>[2, 3]</code></pre>

<p>Those nodes are not processed during the current level because they were added after we captured the original <code>level_size</code>.</p>

<p>On the next iteration, <code>level_size = 2</code>, so we process exactly <code>2</code> and <code>3</code>. Their children become part of the following level.</p>

<h3>Solution</h3>

<pre class="solution-code-pre"><code>from collections import deque

def bfs_levels(node: TreeNode) -> list[list[int]]:
    if node is None:
        return []

    queue = deque([node])
    result = []

    while queue:
        level_size = len(queue)
        level = []

        for _ in range(level_size):
            current = queue.popleft()
            level.append(current.val)

            if current.left:
                queue.append(current.left)

            if current.right:
                queue.append(current.right)

        result.append(level)

    return result
</code></pre>

<p>The time complexity is <code>O(n)</code> because every node is visited exactly once.</p>

<p>The space complexity is <code>O(n)</code> because the queue can contain up to <code>O(n)</code> nodes. For a balanced tree, the maximum queue size is proportional to the number of nodes on the widest level.</p>

<h3>Common Mistakes</h3>

<h4>Processing Until the Queue Is Empty</h4>

<p>A common mistake is to use a loop that processes nodes until the queue is empty without saving the original queue size for the current level.</p>

<p>The problem is that children are added to the queue while the current level is being processed. If those newly added children are also processed during the same level, the level boundaries are lost.</p>

<p>Using <code>level_size = len(queue)</code> before processing the level prevents this. The <code>for</code> loop processes exactly the nodes that were already in the queue when the level started.</p>

<h4>Forgetting to Add Children</h4>

<p>After processing a node, its children must be added to the queue. The left child is added first, followed by the right child, which preserves the required left-to-right ordering.</p>

<h4>Returning a Flat List</h4>

<p>The result should contain a separate list for each level.</p>

<pre class="solution-code-pre"><code>    1
   / \\
  2   3
</code></pre>

<p>should return <code>[[1], [2, 3]]</code>, not <code>[1, 2, 3]</code>.</p>
`


export const levelOrderTraversal = {
    id: "level-order-traversal",
    title: "Level Order Traversal",
    problemStatement: `<p>Write the function for <code>bfs_levels(root)</code> that returns a list of list: node values grouped by level, top to bottom, left to right within each level.</p>
    
    <p>A <code>TreeNode</code> class is provided, <code>root</code> is either a <code>TreeNode</code> or <code>None</code> for an empty tree.</p>
    
    <p>Edge cases can include:</p>
    
    <ul>
        <li>an empty tree, please return <code>[]</code></li>
        <li>a single node</li>
        <li>a fuly left or right-skewed tree where each level has exactly one node</li>
    </ul>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("level-order-traversal"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- queues: sepcifically deque
- binary trees
*/

/*
Other ways to solve it

- Iterative DFS
*/