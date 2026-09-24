import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Dropdown from '../../../Helpers/Dropdown.jsx'

export default function DepthFirstSearch() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const treeNode = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`

    const bottomUpShape = `def recursive_dfs(node):
    if node is None:               # our base case
        return <identity>
    left_answer  = recursive_dfs(node.left)    # we recurse first...
    right_answer = recursive_dfs(node.right)
    return <combine>(node.val, left_answer, right_answer)  # then combine`

    const returnTuple = `total_sum = left_sum + node.val + right_sum
total_count = left_count + 1 + right_count
average = total_sum / total_count`

    return (
        <div className="container">
            <h1>Depth-First Search</h1>

            <p><strong>Depth-First Search</strong> (DFS) is a classic traversal technique that explores as deep as possible along each branch before backtracking. In a python tree implementation, you can write this using <em>recursion</em> (the implicit stack) or <em>iteratively</em> (using an explicit list as a stack).</p>

            <p>For binary trees, DFS is classified into three common types based on when the root node is visited relative to its children:</p>

            <ul>
                <li><strong>Pre-order</strong>: <em>Node → Left → Right</em> | Processes the current node before its children.</li>
                <li><strong>In-order</strong>: <em>Left → Node → Right</em> | Processes the left subtree, the node, then the right subtree.</li>
                <li><strong>Post-order</strong>: <em>Left → Right → Node</em> | Processes both children before the current node. This is the traversal order used by <em>bottom-up DFS</em>.</li>
            </ul>

            <p>Here is the binary tree node we will be working with in this section:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {treeNode}
                </SyntaxHighlighter>
            </div>

            <h2>Recursive DFS Implementation</h2>

            <p>Recursive is the cleanest and most common way to implement DFS because it utilizes python's built-in call stack. Most bottom-up tree functions have the same general shape:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {bottomUpShape}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li>By bottom-up function we mean that all the work happens on the way back up. You fully solve both children before you combine, so each node receives their own finished sub-answers.</li>
                <li>Base case is <code>None</code> and not a leaf because every traversal ends at a leaf's child, which is where the recursion has to stop.</li>
                <li><code>&lt;identity&gt;</code> is the value that makes the combination happen by handling an empty subtree without affecting the result, usually for...</li>
                <ul>
                    <li>size or sum with a <code>0</code></li>
                    <li>product with a <code>1</code></li>
                    <li>max value with a <code>float("-inf")</code></li>
                </ul>
                <li>For the <code>&lt;combine&gt;</code> step in the <code>return</code> statement, the answer for the subtree revolves around some combination of...</li>
                <ul>
                    <li>The current node. Often with just <code>node.val</code> or just the fact that this node exists.</li>
                    <li>The left subtree's answers, what <code>recursive_dfs(node.left)</code> returns.</li>
                    <li>The right subtree's answers, what <code>recursive_dfs(node.right)</code> returns.</li>
                </ul>
            </ul>

            <blockquote>
                <p>Bottom-up DFS is essentially post-order DFS. Solve the children first, then use their answers to solve the current node.</p>
            </blockquote>

            <h3>Combo Mambo'</h3>

            <p>Depending on the problem you are trying to solve will determine which combination of nodes are needed for you to return. For some problems you only need one of the three.</p>

            <p>For example, if you are solving for <code>size</code>, we do not care about the <code>node</code>'s value, but we do need to know how many nodes are located in our left subtree and how many nodes are located in our right subtree. A pseudo answer would be <code>return 1 + recursive_dfs(node.left) + recursive_dfs</code> (our <code>1</code> is to include the node we are currently on, and then the base case would be <code>0</code>).</p>

            <p>In other instances, you might be required to compare all three to return a maximum or minimum value for Leetcode style problems, such as <em>Diameter</em> and <em>Max Path Sum</em>. The best answer is either...</p>

            <ul>
                <li>Entirely inside the left subtree</li>
                <li>Entirely inside the right subtree</li>
                <li>Pass through the current node like so: <code>node.left</code> → <code>node</code> → <code>node.right</code></li>
            </ul>



            <Dropdown
                preface={'For each quantity below, what is the base case and what is the return combination? Use the example function from above for reference.'}
                questions={[
                    "Number of nodes - total size",
                    "Sum of all values",
                    "Height - the number of nodes on the longest root-to-leaf path",
                ]}
                answers={[
                    "Base case returns 0. \nThe return combination is 1 + recursive_dfs(node.left), recursive_dfs(node.right)",
                    "Base case returns 0. \nThe return combination is node.val + recursive_dfs(node.left) + recursive_dfs(node.right)",
                    "Base case returns 0. \nThe return combination is 1 + max(recursive_dfs(node.left), recursive_dfs(node.right))",
                ]}
            />

            <h3>Exception to the return combination rule</h3>

            <p>It is possible from some quantities to not directly plug into <code>recursive_dfs(node.left)</code> and <code>recursive_dfs(node.right)</code>. A classic example of this is when finding the average of all node values. You cannot write <code>avg(node) = combine(avg(left), avg(right))</code>, because an average using this formula will be incorrect.</p>

            <p>Your best bet would be to return a <code>tuple</code>: <code>return (sum, count)</code>.</p>

            <p>An average is not enough information to combine subtrees. For example, say we had:</p>

            <ul>
                <li>All of the nodes in the left subtree: <code>avg = 10</code>, <code>count = 100</code></li>
                <li>All of the nodes in the right subtree: <code>avg = 20</code>, <code>count = 1</code></li>
            </ul>


            <p>Doing <code>(10 + 20) / 2 = 15</code> is not the actual average! The left subtree compared to the right subtree is 100 to 1, fu¢king up the true average. Instead, the tuple we return can be used like so:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {returnTuple}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <p>The child node says <em>What data does my parent need from me? Is it...</em></p>
            <ul>
                <li>Size? Return count.</li>
                <li>Sum? Return sum.</li>
                <li>Max? Return maximum.</li>
                <li>Average? Return (sum, count).</li>
                <li>Diameter? Return (height, diameter).</li>
                <li>Max path? Return the info needed to build a path..</li>
            </ul>
            <p>The parent then combines it along with all of its other children's answers.</p>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="depth-first-search"
            />
        </div>
    )
}

// if not Node: 
//     return None

// identity value the max integer that is found while traversing.

// return max(left_answer, right_answer)