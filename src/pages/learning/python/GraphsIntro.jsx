import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ELessThanOrEqaulToVSquared from '../../../assets/python/GraphsIntro/e less than or equal to v squared.png'
import MatrixWithNodesAndWereTheyAreAllowedToMoveTo from '../../../assets/python/GraphsIntro/matrix with nodes and where they are allowed to move.png'
import AdjacencyMatrix from '../../../assets/python/GraphsIntro/adjacency matrix.avif'
import AdjacencyList from '../../../assets/python/GraphsIntro/adjacency list.png'
import AdjacencyListDisplayed from '../../../assets/python/GraphsIntro/adjacency list displayed.avif'

export default function GraphsIntro() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const gridAsMatrix = `grid = [[0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 0, 1, 0, 0]]`

    const adjacencyMatrix = `adj_matrix = [  [0, 0, 0, 0],
                [0, 0, 1, 1],
                [1, 0, 0, 0],
                [0, 0, 1, 0]]`

    const edgesInAdjacencyMatrix = `# an edge exists from v1 to v2
adjMatrix[v1][v2] = 1

# an edge exists from v2 to v1
adjMatrix[v2][v1] = 1

# No edge exists from v1 to v2
adjMatrix[v1][v2] = 0

# No edge exists from v2 to v1
adjMatrix[v2][v1] = 0
`

    const graphNode = `class GraphNode:
    def __init__(self, val):
        self.val = val
        self.neighbors = []`

    return (
        <div className="container">
            <h1>Graphs: Intro</h1>

            <p>A <strong>graph</strong> is a data strucutre made up of nodes. These nodes can be connected by pointers. </p>

            <p>From a mathematical perspective, nodes are referred to as <strong>vertices</strong> and the pointers connecting these nodes are referred to as <strong>edges</strong>. There are no restrictions in graphs when it comes to where the nodes are placed or how the edges connect those nodes together. A node could have a variable number of edges.</p>

            <blockquote>
                <p>Linked list and trees are both subsets of graphs. See, you're already half way there!</p>
            </blockquote>

            <p>There are no restrictions when it comes to graphs. The number of edges, the number of nodes, you can have a cycle within a graph, you can have nodes that aren't even connect by any edges. All are stilled considered graphs!</p>

            <p>Ok, there is actually one little restriction: The number of edges, <code>E</code>, given the number of vertices <code>V</code> will always be less than or equal to <code>V<sup>2</sup></code>. So <code>E &lt; V<sup>2</sup></code>, assuming no duplicate edges are allowed.</p>

            <p>This is because each node can at most point to every other node in the graph, including itself. If we have nodes <code>A</code>, <code>B</code>, and <code>C</code>, <code>A</code> can point to itself, <code>B</code> and <code>C</code>. The same goes for <code>B</code> and <code>C</code>.</p>

            <p><img className="img-in-reading" src={ELessThanOrEqaulToVSquared} alt="Showing the worse case where edges are equal to vertices" /></p>

            <blockquote>
                <p>An edge is allowed to point to its own node that it starts from. Yay math!</p>
            </blockquote>

            <p>All that to say that the number of edges is <code>V<sup>2</sup></code> at most. If we have a graph with <code>V</code> vertices and <code>V<sup>2</sup></code> edges, we call this a <strong>complete graph</strong>.</p>

            <h2>Common forms of graphs</h2>

            <p>A graph can be represented in different ways. It is an abstract concept that is made concrete using different data structures. Most commonly, graphs are represented using the following:</p>

            <ul>
                <li>Matrix</li>
                <li>Adjacency Matrix</li>
                <li>Adjacency List</li>
            </ul>

            <h3>Matrix</h3>

            <p>A <strong>matrix</strong> is a two-dimensional list with rows and columns. A graph can be represented using a matrix. In the example, each list that is separated by commas represents a row. Here we have four rows and five columns. Everything is indexed by <code>0</code> and the idea is that we should be able to access an arbitrary element given a specified row and column. Accessing the second row can simply be done by <code>grid[1]</code> and accessing the first column in the third row may be done by <code>grid[2][0]</code>.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {gridAsMatrix}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>How is this used to represent a graph?</p>
            </blockquote>

            <p>Let's say that all of the <code>0</code>'s in our grid are vertices. To traverse a graph, we are allowed to move up, down, left, or right. If we are to connect the <code>0</code>'s together, using our edges, we would end up getting a bunch of connected zeroes, which are connected components, and that denotes a graph.</p>

            <p><img className="img-in-reading" src={MatrixWithNodesAndWereTheyAreAllowedToMoveTo} alt="matrix with nodes and where they are allowed to move to" /></p>

            <p>For this instance, the edges are undirected since we have free range in which direction (up, down, left, right) we want to move in. The edges and nodes are implict because of the rules we have defined. This is the most common way of defining graphs.</p>

            <p>The space complexity of a matrix is <code>O(n * m)</code> where <code>n</code> is the number of rows and <code>m</code> is the number of columns.</p>

            <h3>Adjacency matrix</h3>

            <p>Here we have a less common input format, but still important. This example will look a lot like the matric from before, but it is interpreted differently. The index of the list represents a vertex itself.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {adjacencyMatrix}
                </SyntaxHighlighter>
            </div>

            <p>The dimensions themselves represent the nodes, rather than the elements. Typically, adjacency matrices are <em>square matrices</em>. In this case the matrix is size <code>v</code> by <code>v</code> where <code>v</code> represents the number of vertices.</p>

            <blockquote>
                <p>Rows represent the starting node and columns represent the node it might connect to.</p>
            </blockquote>

            <p>Because the indices themselves represent a vertex...</p>

            <ul>
                <li><code>0</code> means that an edge does not exist between a given <code>v1, v2</code> pair, where <code>v1</code> is the row and <code>v2</code> is the column.</li>
                <li><code>1</code> means that there does exist an edge between a given <code>v1, v2</code> pair.</li>
            </ul>

            <p>For example, <code>adj_matrix[1][2] == 0</code> means there is no edge between vertex <code>1</code> and <code>2</code>. Also, <code>adj_matrix[2][1] == 0</code> means there is no edge between vertex <code>2</code> and <code>1</code>. Keep in mind the edges are directed. We can conclude the following:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {edgesInAdjacencyMatrix}
                </SyntaxHighlighter>
            </div>

            <p>To actualize the above adjacency matrix, we can look at the following visual:</p>

            <p><img className="img-in-reading" src={AdjacencyMatrix} alt="Adjacency matrix showing how the verticies align" /></p>

            <blockquote>
                <p>So why is an adjacency matrix rare to use or see in the wild?</p>
            </blockquote>

            <p>The issue with this is that if our graph has only a few edges it is not a good use of memory. Because it is a square matrix, the space complexity is <code>O(v<sup>2</sup>)</code>, where <code>v</code> is the number of vertices.</p>

            <h3>Adjacency lists</h3>

            <p><img className="img-in-reading" src={AdjacencyList} alt="Adjacency list with image of the corresponding graph" /></p>

            <p>These are typically the most common way of representing graphs. This can also be implemented with a 2D list, but often times is alternatively implemented with a dictionary. <em>Side note</em>, the convenience here is that we can declare it using a class called <code>GraphNode</code> and it contains a list attribute called <code>neighbors</code>, which we can use to access all of a given vertex's neighbor.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {graphNode}
                </SyntaxHighlighter>
            </div>

            <p>This ends up being more space efficient compared to an adjacency matrix because we only store the edges that actually exist. The space complexity is <code>O(v + e)</code>, where <code>v</code> is the number of vertices and <code>e</code> is the number of edges.</p>

            <p><img className="img-in-reading" src={AdjacencyListDisplayed} alt="just the image of the adjacency list as a graph" /></p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="backtracking"
            />
        </div>
    )
}