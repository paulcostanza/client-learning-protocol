import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `class LRUCache:

  def __init__(self, capacity: int):
    pass

  def get(self, key: int) -> int:
    pass

  def put(self, key: int, value: int) -> None:
    pass





`

const testCode = `def run_tests():
    test_cases = [
        (
            [
                ("put", 1, 1),
                ("put", 2, 2),
                ("get", 1),
                ("put", 3, 3),
                ("get", 2),
                ("put", 4, 4),
                ("get", 1),
                ("get", 3),
                ("get", 4),
            ],
            [None, None, 1, None, -1, None, -1, 3, 4]
        ),
        (
            [
                ("put", 2, 1),
                ("put", 2, 2),
                ("get", 2),
            ],
            [None, None, 2]
        ),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (ops, expected) in enumerate(test_cases, 1):
        cache = LRUCache(2)

        output = []

        try:
            for op in ops:
                if op[0] == "put":
                    output.append(cache.put(op[1], op[2]))
                else:
                    output.append(cache.get(op[1]))

            if output == expected:
                passed += 1
                logs.append(f"""Test {i}: PASS
Output: {output}
---""")
            else:
                failed += 1
                logs.append(f"""Test {i}: FAIL
Expected: {expected}
Got: {output}
---""")

        except Exception as e:
            failed += 1
            logs.append(f"""Test {i}: ERROR {e}
---""")

    print("********** P A S S **********" if failed == 0 else "********** F A I L **********")
    print(f"Passed: {passed}, Failed: {failed}\\n")

    for log in logs:
        print(log)

run_tests()
`

const example = `Example #1:

Input:
capacity = 2

put(1,1)
put(2,2)
get(1)
put(3,3)
get(2)
put(4,4)
get(1)
get(3)
get(4)

Output:
1
-1
-1
3
4

Explanation:
get(1) makes key 1 the most recently used.
Adding key 3 evicts key 2.
Adding key 4 evicts key 1.
`

const constraints = `<ul>
    <li>1 ≤ capacity ≤ 3000</li>
    <li>0 ≤ key ≤ 10<sup>4</sup></li>
    <li>0 ≤ value ≤ 10<sup>5</sup></li>
    <li>At most 2 * 10<sup>5</sup> calls will be made to <code>get</code> and <code>put</code>.</li>
</ul>`

const solution = `
<h1>Dictionary & Doubly Linked List</h1>

<p>We want all operations to be O(1) while still following the Least Recently Used rules. To do that we combine:</p>

<ul>
  <li>Dictionary: quickly find a node by its key in O(1)</li>
  <li>Doubly Linked List: quickly move nodes to the <em>most recently used</em> position and remove the <em>least recently used</em> node from the other end in O(1)</li>
</ul>

<p>So we need to key the most recently used node near the right side, and the least recently used node near the left side.</p>

<h2>Pseudo Code</h2>

<p>Whenever we...</p>

<ul>
  <li><code>get</code> a key, move that node to the <code>right</code> - the most recently used.</li>
  <li><code>put</code> a key...</li>
  <ul>
    <li>If it exists then we update the value and move it to the <code>right</code></li>
    <li>However, if it's new...</li>
    <ul>
      <li>and we are at capacity we then remove the leftmost node.</li>
      <li>At capacity or not, we insert the new node at the <code>right</code></li>
    </ul>
  </ul>
</ul>

<p>We use dummy <code>left</code> and <code>right</code> nodes to make insert/remove logic cleaner.</p>

<h2>Algorithm</h2>

<ol>
    <li>Data Structures</li>
    <ul>
      <li>A dictionary <code>cache</code> that maps <code>key -> node</code></li>
      <li>A doubly linked list with:</li>
      <ul>
        <li><code>left</code> dummy: before the least recently used node</li>
        <li><code>right</code> dummy: after the most recently used node</li>
      </ul>
    </ul>

    <li>Helper: <code>remove(node)</code>. Unlink <code>node</code> from the list by connecting its <code>prev</code> and <code>next</code> nodes.</li>
    <li>Helper: <code>insert(node)</code>. Insert <code>node</code> just before <code>right</code> and mark it as most recently used.</li>
    
    <li><code>get(key)</code></li>
    <ul>
      <li>If <code>key</code> not in <code>cache</code>, return <code>-1</code>.</li>
      <li>Otherwise...</li>
      <ul>
        <li>Remove its node from the list.</li>
        <li>Insert it again near <code>right</code> and mark it as most recently used.</li>
        <li>Return the node's value.</li>
      </ul>
    </ul>


    <li><code>put(key, value)</code></li>
    <ul>
      <li>If <code>key</code> already exists, then remove its old node from the list.</li>
      <li>Create or update the node and store it in <code>cache[key]</code></li>
      <li>Insert the node near <code>right</code>.</li>
      <li>If <code>len(cache) > capacity</code>:</li>
      <ul>
        <li>Take the node right after <code>left</code> (the LRU)</li>
        <li>Remove it from the list.</li>
        <li>Delete its key from the hash map</li>
      </ul>
    </ul>
</ol>

<p>The LRU policy is always maintained, and both <code>get</code> and <code>put</code> run in O(1) time.</p>

<pre class="solution-code-pre"><code>class Node:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}  # map key to node

        self.left, self.right = Node(0, 0), Node(0, 0)
        self.left.next, self.right.prev = self.right, self.left

    def remove(self, node):
        prev, nxt = node.prev, node.next
        prev.next, nxt.prev = nxt, prev

    def insert(self, node):
        prev, nxt = self.right.prev, self.right
        prev.next = nxt.prev = node
        node.next, node.prev = nxt, prev

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        self.cache[key] = Node(key, value)
        self.insert(self.cache[key])

        if len(self.cache) > self.cap:
            lru = self.left.next
            self.remove(lru)
            del self.cache[lru.key]
</code></pre>

<p>Time complexity is O(1), for each <code>put</code> and <code>get</code> operation.</p>
<p>Space complexity is O(n).</p>
`

export const lruCache = {
  id: "lru-cache",
  title: "57. LRU Cache",
  problemStatement: `<p>Implement the <strong>Least Recently Used</strong> (<em>LRU</em>) cache class <code>LRUCache</code>. The class should support the following operations:</p>
    
  <ul>
    <li><code>LRUCache(capacity: int)</code>: Initialize the LRU cache of size <code>capacity</code>.</li>
    <li><code>get(key: int) -> int</code>: Return the value corresponding to the <code>key</code> if the <code>key</code> exists, otherwise return <code>-1</code>.</li>
    <li><code>put(key: int, value: int) -> None</code>:</li>
    <ul>
      <li>Update the <code>value</code> of the <code>key</code> if the <code>key</code> exists.</li>
      <li>If it does not, add the <em>key-value</em> pair to the cache.</li>
      <li>If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.</li>
    </ul>
  </ul>
  
  <p>A <em>key</em> is considered used if a <code>get</code> or a <code>put</code> operation is called on it.</p>

  <p>As if that wasn't enough, ensure that <code>get</code> and <code>put</code> each run in O(1) average time complexity.</p>
  `,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("lru-cache"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- data structure design: combining multiple data structures to achieve desired time complexity for all operations
- doubly linked list: implementing nodes with prev/next pointers for O(1) insertion and removal from both ends
- dictionary: using dictionaries for O(1) key-to-node lookup to enable fast cache access
*/
