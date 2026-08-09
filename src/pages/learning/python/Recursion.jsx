import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import VisualFib from '../../../assets/python/recursion/visualize fib.avif'
import Oof2 from '../../../assets/python/recursion/O of 2 to the n power.avif'
import Dropdown from '../../../Helpers/Dropdown.jsx'

export default function Recursion() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const nFactorial = `# recursive implementation of n! calculation
def factorial(n):
    # base case: n = 0 or 1
    if n <= 1:
        return 1

    # recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1) # combine to produce an output`

    const nFactorialLayout = `factorial(5) = 5 * factorial(4)
             = 5 * (4 * factorial(3))
             = 5 * (4 * (3 * factorial(2)))
             = 5 * (4 * (3 * (2 * factorial(1))))
             = 5 * (4 * (3 * (2 * (1))))         # base case hit
             = 5 * (4 * (3 * (2)))
             = 5 * (4 * (6))
             = 5 * (24)
             = 120`

    const iterativeNFactorial = `n = 5
res = 1
while n > 1:
    res = res * n
    n -= 1`

    const failedRecursion = `def count_down(n):
    print(n)
    count_down(n - 1)`

    const fib = `# Recursive implementation to calculate the n-th Fibonacci number
def fibonacci(n):
    # Base case: n = 0 or 1
    if n <= 1:
        return n

    # Recursive case: fib(n) = fib(n - 1) + fib(n - 2)
    return fibonacci(n - 1) + fibonacci(n - 2)`

    const sumFlatList = `def sum_list(nums):
    if not nums:
        return 0
    return nums[0] + sum_list(nums[1:])`

    const recurseOnEachChild = `def visit(node):
    if is_leaf(node):
        return process_leaf(node)
    return combine(
        visit(child) for child in children(node)
    )`

    const visitWithDepth = `def visit_with_depth(node, depth=0):
    if is_leaf(node):
        return process_leaf(node, depth)
    return combine(
        visit_with_depth(child, depth + 1)
        for child in children(node)
    )`

    const listAsTree = `        [[1,1], 2, [1,1]]        <- root, depth 1
        /       |       \\
    [1,1]       2       [1,1]    <- depth 2
    /  \\               /   \\
   1    1             1     1    <- leaves, depth 3`

    const callDownReturnUp = `#1. Call Down
5 → 4 → 3 → 2 → 1 (our base case)

#2. Return Up
1 → 2 → 6 → 24 → 120 (our answer)`

    const callStackExplaination = `Recursion → Function calls itself → Each call gets its own stack frame → Calls accumulate → Base case reached → Stack unwinds`

    const recursiveRecipe = `def solve(problem):
    if base_case(problem):
        return base_answer

    smaller = make_smaller(problem)
    result = solve(smaller)

    return combine(problem, result)`

    const repeatingFib = `fib(5)
├── fib(4)
│   ├── fib(3)    
|   |   ├── fib(2)
|   |   |   ├── fib(1)
|   |   |   └── fib(0)
|   |   └── fib(1)
│   └── fib(2)
|   |   ├── fib(1)
|   |   └── fib(0)
└── fib(3)
    ├── fib(2)
    |   ├── fib(1)
    |   └── fib(0)
    └── fib(1)`


    return (
        <div className="container">
            <h1>Recursion</h1>

            <p><strong>Recursion</strong> is when a function calls itself on a smaller version of itself, usually with a different input. This is known as a <strong>recursive function</strong>. Recursive functions can be thought of as functions that break down a problem into smaller sub-problems and solves them in reverse order. It is <em>usually</em> possible to convert a recursive function into an iterative one and vice versa.</p>

            <blockquote>
                <p>For some problems an iterative solution can be much more simple to implement than a recursive one, and vice versa.</p>
            </blockquote>

            <p>The concept of recursion applies to the real world as well. Consider a box that contains another box, which contains another box, and so on... This is a recursive structure. In this case, the base case would be the smallest box, and the recursive case would be the larger boxes that contain the smaller boxes.</p>

            <p>Most recursive problem-solving functions can be understood in three parts...</p>

            <ul>
                <li><strong>The base case.</strong> The smallest input for which the answer is trivial, with no further recursion. This is what makes the recursion <em>terminate</em>. If you forget this step, you will get an infinite recursion along with a <code>RecursionError</code>.</li>
                <li><strong>The recursive case.</strong> Calling the function must make progress <em>towards</em> the base case. You <em>do not</em> trace what happens inside that call. You can assume it returns the right answer for the smaller input.</li>
                <li><strong>Combine the steps.</strong> Take the result of the recursive calls and combine them with the current input to produce the answer for the original input. </li>
            </ul>

            <h2>Single branch recursion</h2>

            {/* <p>There are two types of recursion, one-branch and multi-branch. Let's discuss one-branch recursion first.</p> */}

            <p>If we want to compute <code>n!</code> (<em>n factorial</em>) we can use recursion. The formula for <code>n!</code> is <code>n * (n - 1) * (n - 2) * .. * 1</code>.</p>

            <p>Example: <code>5! = 5 * 4 * 3 * 2 * 1 = 120</code>.</p>

            <ul>
                <li>notice that <code>5!</code> can be broken down into <code>5 * 4!</code></li>
                <li><code>4!</code> can be broken down into <code>4 * 3!</code> and so on. This is the <em>recursive case</em>.</li>
                <li>The base case is when <code>n = 0</code> or <code>n = 1</code>. The result of <code>0!</code> and <code>1!</code> is <code>1</code></li>
            </ul>

            <p>Let's plug in <code>5</code> into our <code>factorial</code> function:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {nFactorial}
                </SyntaxHighlighter>
            </div>

            <p>When the code reaches the last line with the initial input of <code>5</code>, we get <code>5 * factorial(4)</code>, which starts executing the function again from line 1, only now with input 4, so we get <code>4 * factorial(3)</code> and then <code>3 * factorial(2)</code> and lastly <code>2 * factorial(1)</code> after which the base case is reached.</p>

            <p>So what happens when the base case is reached? When the function is called with <code>1</code> as input, <code>1</code> is returned, and now it can be multiplied by <code>2</code>, which will result in <code>2</code>, which is the answer <code>2!</code>. We have only solved the first sub-problem so far. Now, we compute <code>3 * factorial(2)</code>, which results in <code>6</code>, then <code>4 * factorial(3)</code>, which is <code>24</code>, and finally <code>5 * factorial(4)</code>, which is 120.. the final answer to <code>5!</code>. Here is another way to think about it:</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {nFactorialLayout}
                </SyntaxHighlighter>
            </div>

            <p>The most <em>important</em> part is that when we trigger the base case, we move <em>back up</em> the recursion tree because now we have to <em>piece</em> together the answers to our sub-problems to get to the final solution.</p>

            <h3>Why this is difficult to do</h3>

            <p>Something that is difficult about recursion is how you need to break down problems into smaller subproblems which solves them in reverse order. We took the original problem, <code>factorial(5)</code> and broke it down into smaller sub-problems, and by combining the answer to those sub-problems, we were able to solve the original problem. It is important to note that if there is no base case in recursion, the recursive case would execute forever resulting in a stack overflow error.</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {callDownReturnUp}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>if you can't tell by now, don't forget the base case!!</p>
            </blockquote>

            <p>Another difficult concept is that you must <strong>trust the recursive call to do its job</strong>. When you write <code>factorial(n - 1)</code> you do not re-derive it; you trust it returns <code>(n-1)!</code>, the same way you trust <code>math.sqrt</code> without doing the math to double check the square root. The library function is just essentially just <em>you</em> on a smaller input.</p>


            <h3>Test your understanding</h3>

            <p>Here is an example of some failed recursion:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {failedRecursion}
                </SyntaxHighlighter>
            </div>

            <Dropdown
                questions={[
                    "What is missing, the base case or the recursive case?",
                    "What happens if you call count_down(3)? What does it print, where does it end, and are there any exceptions that are raised?",
                    "What would fix this?"
                ]}
                answers={[
                    "The base case is missing.",
                    `print(3) 
count_down(2)
---
print(2)
count_down(1)
---
print(1)
count_down(0)
---
print(0)
count_down(-1)
---
print(-1)
count_down(-2)
... and this will continue until python hits its function call limit and returns a RecursiveError.`,
                    `We just need to add a base case. If we want to stop at zero it would look something like this:

def count_down(n: int) -> None:
    if n == 0:      # base case
        print("0!") # base case
        return       # base case

    print(n)
    count_down(n - 1)
    return
    
You need the empty returns to help end your function!`
                ]}
            />

            <h3>Single branch time and space complexity</h3>

            <p>Time: <code>O(n)</code></p>

            <p>In total, <code>n</code> calls are being made to the <code>factorial</code> function, where each function call is <code>O(1)</code>, making the total time complexity <code>O(n)</code>.</p>

            <p>Space: <code>O(n)</code></p>

            <p>While we are not using any data structures, recursion operates off of an implicit stack, known as the <strong>function call stack</strong>. That is how we are able to return from one function call to the previous one. Since there are <code>n</code> recursive calls, there will be <code>n</code> function calls placed on the stack, which results in <code>O(n)</code> space. </p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {callStackExplaination}
                </SyntaxHighlighter>
            </div>

            <h2>Recursion and iteration</h2>

            <p>Most single-branch recursive algorithms can be written iteratively. The iterative implementation of this is the following:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {iterativeNFactorial}
                </SyntaxHighlighter>
            </div>

            <p>In the iterative case, we store our answer in a variable named <code>res</code> and decrement <code>n</code> until <code>n</code> becomes <code>1</code>.</p>

            <p>The iterative implementation is much simpler than the recursive one in this case, but that is not always the case. Recursion will be especially useful when we start learning about trees. This solution is also more space efficient since it does not require the function call stack, going from <code>O(n)</code> space to constant space.</p>

            <h2>Multi-branch recursion</h2>

            <p>A more common case of recursion is <strong>multi-branch recursion</strong>. Let's attempt to solve the <em>Fibonacci sequence</em> problem using this technique!</p>

            <p>The Fibonacci sequence is a set of numbers that starts with <code>0</code> and <code>1</code>, and each subsequent number is the sum of the two preceding numbers. The sequence starts like this: </p>

            <p><code>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</code></p>

            <p>Generally, the formula to calculate the <code>nth</code> fibonacci number is to sum the two previous fibonacci numbers: the <code>(n - 1)th</code> and <code>(n - 2)th</code> fibonacci numbers.</p>

            <p>For you math nerds, we say...</p>

            <ul>
                <li><code>F(0) = 0</code> and <code>f(1) = 1</code> -&gt; Base case</li>
                <li><code>F(n) = F(n - 1) + F(n - 2)</code> -&gt; Recursive case</li>
            </ul>

            <p>The fibonacci sequence is a <em>classic</em> example of a recursive function. This formula is the recursive formula for the fibonacci sequence, also known as the recurrence relation:</p>

            <p><code>fib(n) = fib(n - 1) + fib(n - 2)</code></p>

            <p>We can visualize the mathematical formula with the following tree. This images shows all the recursive calls that will be generated:</p>

            <p><img className="img-in-reading" src={VisualFib} alt="Graph representation of solving the fibonacci sequence of 5" /></p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {fib}
                </SyntaxHighlighter>
            </div>

            <p>The above pseudocode is similar to our previous example with factorial, except this is a branch factor of two. Notice how we are calling the function <em>twice</em> in the last line? This results in the tree that is shown in the visual.</p>

            <p>We have our base case, we know the function calls itself in the last return statement, and we know that at some point when the base case is reached, we will have to travel back up to calculate the ultimate answer.</p>

            <ol>
                <li>To calculate <code>fibonacci(5)</code>, we get <code>fibonacci(4) + fibonacci(3)</code></li>
                <li>Both of these will execute within their own function calls</li>
                <li>Looking at <code>fibonacci(4)</code> will call <code>fibonacci(3) + fibonacci(2)</code> and so on, until <code>n</code> hits either <code>0</code> or <code>1</code></li>
                <li>After all this it will return the result and keep going back up all the way until <code>fibonacci(4)</code>, which gives us an answer of <code>3</code></li>
                <li>Now we have the answer to <code>fibonacci(4)</code> and do the same for <code>fibonacci(3)</code> which results in <code>2</code></li>
                <li>Add the two together, and the 5th fibonacci number is <code>5</code></li>
            </ol>

            <h3>Multi-branch time and space complexity</h3>

            <p>Evaluating the time complexity for this is a little bit more tricky. Let's analyze the tree, and the number of nodes on each one of the levels. On the 1st level (which is 0 indexed), there is <code>1</code>. On the 2nd level there is 2, then 4, after which we can see a pattern. Each level has the potential to hold 2x the nodes of the previous level, giving the an <code>O(2<sup>n</sup>)</code> upper bound. </p>

            <p>Therefore, a reasonable upper bound for the total number of nodes in the tree is <code>1 + 2 + 4 + 8 + ... + 2<sup>n</sup></code>. This is a <em>geometric series</em>. We know the last term is the dominating term, and the sum of the series is roughly <code>2<sup>n+1</sup> - 1</code>.</p>

            <p>This means that the total number of nodes in the tree is <code>O(2<sup>n</sup>)</code>. Each node itself is a function call and simply calculates the sum of two values, thus the time complexity of the function is <code>O(2<sup>n</sup>)</code>.</p>

            <p>Even though the fibonacci recursion tree has <em>exponentially</em> many calls, the maximum call-stack depth is <code>n</code>, resulting in <code>O(n)</code> space complexity.</p>

            <p><img className="img-in-reading" src={Oof2} alt="Graph representation of where the nodes line up with the level (n) fibonacci sequence" /></p>

            <h2>Common shapes of recursion</h2>

            <p>When you get into the more advanced recursive capabilities of a function, you will encounter two types of shapes.</p>

            <p><strong>Head with recurse on tail (linear).</strong> The input is a list. You need to handle the first element, then recurse on the rest. Here we are summing a flat list:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {sumFlatList}
                </SyntaxHighlighter>
            </div>

            <p><strong>Recurse on each child (tree-like).</strong> The input is a structure that contains smaller versions of itself. You iterate through the children and recurse on each like so:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {recurseOnEachChild}
                </SyntaxHighlighter>
            </div>

            <h2>How low can you go</h2>

            <p>When recursing you sometimes need to know where you are in terms of how deep and at which level. The standard trick is an extra parameter that increments at each recursive call.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {visitWithDepth}
                </SyntaxHighlighter>
            </div>

            <p>This matters because a nested python list is basically a tree in disguise! Something like <code>[[1, 1], 2, [1, 1]]</code> is...</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {listAsTree}
                </SyntaxHighlighter>
            </div>

            <p>Sublists are internal nodes, while integers act as leaves. When you see an integer you process it as a leaf. When you see a sublist you recurse and combine.</p>

            <h2>Recursion limits</h2>

            <blockquote>
                <p>Wow, recursion is cool! If you need to you can just keep going, and going, and going...</p>
            </blockquote>

            <p>Well, not exactly. There is a limit to how many times you can recurse. The number of calls that are made to a function correlate with how deep the stack in memory gets. For each <code>n</code> calls, the stack gets <code>n</code> deep.</p>

            <p>Python limits the stack depth to (approximately) 1,000 frames. This means when a single recursive function is hits 1,000 times, a <code>RecursionError</code> is thrown. This also means recursive functions take up space in memory with a space complexity of <code>O(n)</code>. When compared to iteration's constant space, you should prefer to loop rather than recurse when you can.</p>

            <blockquote>
                <p>We say approximately because the recursion limit can be changed with <code>sys.setrecursionlimit()</code>. You need to watch out when playing around with this, as increasing it too far can cause problems with the underlying C stack. This is advanced and unnecessary for the purposes of this lesson, but it is good to know!</p>
            </blockquote>

            <h2>That's a lot of repeated work</h2>

            <p>Let's break down our fibonacci calls one more time...</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {repeatingFib}
                </SyntaxHighlighter>
            </div>

            <p>If you look at the image closely, you might start to notice that <code>fib(3)</code> and <code>fib(2)</code> get calculated a couple times each. It's almost like you are redoing work that you have already done. That's a shame their is no way to prevent this from happening and we are stuck with the <code>O(2<sup>n</sup>)</code> time complexity... oh well!</p>

            <blockquote>
                <p>We are not lol. To be added: memoization/dynamic programming</p>
            </blockquote>



            <hr />

            <h2>Review</h2>

            <p>The recursive <em>recipe</em>:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {recursiveRecipe}
                </SyntaxHighlighter>
            </div>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="recursion"
            />

        </div>
    )
}