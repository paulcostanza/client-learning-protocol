import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import BfsWithQueue from '../../../assets/python/breadthFirstSearch/bfs with queue.png'

export default function BreadthFirstSearch() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const bfs = `from collections import deque

def bfs(root):
    if not root:
        return []

    q = deque([root])
    result = []

    while q:
        width = len(q)            # snapshot current level's width
        level = []
        for _ in range(width):    # pop exactly this many
            node = q.popleft()
            level.append(node.val)

            if node.left:  
                q.append(node.left)
            if node.right: 
                q.append(node.right)

        result.append(level)
    return result
`

    const coordinateDictPattern = `from collections import deque, defaultdict

def by_column(root):
    if not root:
        return []

    cols = defaultdict(list)
    q = deque([(root, 0)])             # tuple with (node, column index)

    while q:
        node, c = q.popleft()

        if node:
            cols[c].append(node.val)
            q.append((node.left,  c - 1))
            q.append((node.right, c + 1))
    return [cols[c] for c in sorted(cols)]  
`

    return (
        <div className="container">
            <h1>Breadth-First Search</h1>

            <p>Where depth-first search prioritized going deep first, <strong>breadth-first search</strong> focuses on what it sees first by visiting all the nodes on one level before moving down to the next level. BFS is also known as level-order traversal when referring to trees, since we visit the nodes level by level.</p>

            <blockquote>
                <p>BFS works with any tree and not just a binary-search tree.</p>
            </blockquote>

            <p>Generally, breadth-first search is implemented iteratively. Since we want to visit all the nodes on one level before moving to the next, we will need a data structure that allows us to do this. Quite the opposite of DFS, where recursion is king.</p>

            <p>A <strong>queue</strong> data structure (and more specifically python's <code>deque</code> (pronounced <em>deck</em>)) allows us to remove elements both from the head and the tail in <code>O(1)</code> time. For BFS we will append elements to the tail and remove elements from the head as we go through each level of the tree from left to right.</p>

            <p>The queue acts like an intermediary processor. We append to the queue to remind us of what nodes need their children checked, we pop them when we want to use them. In the example below we pop them when we print them:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {bfs}
                </SyntaxHighlighter>
            </div>

            <ol>
                <li>Initially, we append the root node to our queue called <code>q</code>.</li>
                <li>We then enter a while loop that runs as long as our queue is not empty with <code>width</code>.</li>
                <li>We enter a while loop that runs as long as <code>q</code> is not empty.</li>
                <li>At the start of each iteration we capture the number of nodes currently in the queue using <code>width = len(q)</code> to tell us how many nodes belong to the current level.</li>
                <li>We loop through the queue and remove nodes in the current level with <code>deque</code>'s built in <code>.popleft()</code>'.</li>
                <li>If the node has children, we append them to the queue at the back of the line.</li>
                <li>Our queue becomes empty once we have visited all of the nodes in the current level and the outer while loop will terminate once we cycle through all the nodes in the tree.</li>
                <li>Return <code>result</code>.</li>
            </ol>

            <p>The queue at the top of each outer pass holds exactly the nodes of the current level and nothing else. Using <code>len(q)</code> captures the current count so that the inner loop then pops the correct nodes while at the same time the children it is enqueuing pile up <em>behind</em> them and remain untouched until the next outer pass.</p>

            <p>Here is what the state of the queue at every level of the tree would look like:</p>

            <p><img className="img-in-reading" src={BfsWithQueue} alt="Example of a simple binary tree and what the queue looks like at each level while traversing it." /></p>

            <blockquote>
                <p>Almost every "do something per level" tree problem such as level order, averages per level, right-side view, and zigzag uses this template. The whole trick is to snapshot how many nodes are in the current level <strong>before</strong> you start popping, so each pass of the outer loop handles exactly one level.</p>
            </blockquote>

            <h3>Coordinate tracking with a dictionary</h3>

            <p>When you need to group nodes by something other than visiting order, such as by column, depth, or horizontal distance, you need to carry its current coordinate alongside the node in the queue and accumulate it into a dictionary keyed by it.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {coordinateDictPattern}
                </SyntaxHighlighter>
            </div>

            <p>The coordinate travels with the node in a tuple, instead of living in a shared variable. This allows for each node to carry its own column. Because BFS visits the shallow nodes first, values land in each column list in top-to-bottom order for free. The final <code>sorted(cols)</code> is what reads the columns left to right, since columns are discovered out of order. For example, you can meet column + 1 before column - 1.</p>

            <blockquote>
                <p>But why not just use a shared variable? Do we really need a tuple for each node?</p>
            </blockquote>

            <p>Yes! BFS order helps keep track from the root, meaning the columns can be ordered with <code>sorted(cols)</code>. One single shared node would not work because nodes can be in different columns at the same time.</p>

            <h3>Time and Space Complexity</h3>

            <p>The <em>time complexity</em> of BFS is <code>O(n)</code> where <code>n</code> is the number of nodes in the tree. This is because we visit every node exactly once.</p>

            <p>The space complexity of BFS is <code>O(n)</code> where <code>n</code> is the number of nodes in the tree. This is because we will store an entire level of the tree in the queue at a time. In the worst case the last level may be roughly half the size of the tree so the space complexity remains the same at <code>O(n)</code>.</p>

            <p> Best case auxiliary space is interesting: if you are presented with a tree that is completely <em>one-sided</em>, meaning every node has only one child, your space complexity is <code>O(1)</code>! For each level we add one node to the queue, pop that node, add the next level consiting of one node, and so on. This only takes up the space of a single node at most at any given time.</p>

            <blockquote>
                <p>Auxiliary space?</p>
            </blockquote>

            <p>This means the space for the queue. <code>result</code> will grow and take up <code>O(n)</code> space, but the queue will be constant time when your tree is one-sided.</p>

            <h3>Side note: BFS on trees vs BFS on graphs</h3>

            <p>BFS on a general graph (which we have not dived into yet) can encounter the same node multiple times or revisit a node through a cycle. Where using BFS on trees does not generally need a <code>visited</code> set, it becomes vital in graphs to avoid repeated processing or infinite loops.</p>

            <p>A <code>visited</code> set is essential for general graph traversal when nodes may be revisited. Usually, you mark a node as visited when you enqueue it and not when you dequeue it. This prevents duplicate entries from being added to the queue.</p>

            <p>This will become a lot more clear when we move from tree problems to graph problems, such as where BFS is used for shortest paths in unweighted graphs.</p>

            <h3>Side note: BFS does not always require level-by-level processing</h3>

            <p>Our example, specifically the first one, explicitly needs to check each level of a tree using the <code>width</code> snapshot and an inner loop. However, a standard BFS that only needs to visit nodes for finding a target or calculating the shortest path can use a single loop <em>without</em> tracking levels. Another super important distinction when we jump into graphs.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="breadth-first-search"
            />
        </div>
    )
}
