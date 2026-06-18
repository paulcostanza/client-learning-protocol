import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def has_cycle(head):
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `class ListNode:
    def __init__(self, val=0):
        self.val = val
        self.next = None


def build_linked_list(values, pos):
    if not values:
        return None

    nodes = [ListNode(v) for v in values]

    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]

    if pos != -1:
        nodes[-1].next = nodes[pos]

    return nodes[0]


def run_tests():
    test_cases = [
        ([3, 2, 0, -4], 1, True),
        ([1, 2], 0, True),
        ([1], -1, False),
        ([1, 2, 3, 4, 5], -1, False),
        ([1, 2, 3, 4, 5], 2, True)
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (values, pos, expected) in enumerate(test_cases, 1):
        try:
            head = build_linked_list(values, pos)
            result = has_cycle(head)

            if result == expected:
                logs.append(f"""Test {i}: PASS
Input: values={values}, pos={pos}
Output: {result}
---""")
                passed += 1
            else:
                logs.append(f"""Test {i}: FAIL
Input: values={values}, pos={pos}
Got: {result}
Expected: {expected}
---""")
                failed += 1

        except Exception as e:
            logs.append(f"""Test {i}: ERROR {e}
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
Input: head = [3, 2, 0, -4]
Output: true

Explanation:
The tail connects back to the node at index 1 (value 2), creating a cycle.

[3] -> [2] -> [0] -> [-4]
        ^              |
        |              |
        +--------------+

---

Example #2:
Input: head = [1, 2]
Output: true

Explanation:
The tail connects back to the first node, creating a cycle.

[1] -> [2]
 ^      |
 |      |
 +------+

---

Example #3:
Input: head = [1]
Output: false

Explanation:
The node points to None, so no cycle exists.

[1] -> None
`

const constraints = `<ul>
    <li>0 ≤ Number of nodes ≤ 10<sup>4</sup></li>
    <li>-10<sup>5</sup> ≤ Node.val ≤ 10<sup>5</sup></li>
    <li><code>index</code> is either <code>-1</code> or a valid node index.</li>
</ul>`

const solution = `
<h1>Dictionary</h1>

<p>To detect whether a linked list has a cycle, one simple idea is to remember every node we visit.</p>

<p>As we move forward through the list, if we ever reach a node we have already seen before, it means the list loops back on itself - so a cycle exists! However, if we reach the end (<code>None</code>) without repeating a node, then there is no cycle.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create an empty dictionary to store visited nodes.</li>
    <li>Start from the head and move through the list one node at a time.</li>
    <li>For each node...</li>
    <ul>
        <li>If it is already in the set, a cycle exists. Return <code>True</code>.</li>
        <li>Otherwise, add it to the set and continue.</li>
    </ul>
    <li>If you reach <code>None</code>, no cycle exists, return <code>False</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def has_cycle(head):
    seen = set()
    current = head

    while current:
        if current in seen:
            return True
        seen.add(current)
        current = current.next
    return False
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(n).</p>

<h1>Fast and Slow Pointers</h1>

<p>We use two pointers moving through the list at different speeds...</p>

<ul>
    <li><code>slow</code> moves one step at a time</li>
    <li><code>fast</code> moves two steps at a time</li>
</ul>

<p>If the list has a cycle, the <code>fast</code> pointer will eventually <em>lap</em> the <code>slow</code> pointer, meaning they will meet at some node inside the cycle.</p>

<p>if the list has no cycle, the <code>fast</code> pointer will reach the end (<code>None</code>) and the loop stops.</p>

<p>This approach is great because it is efficient and uses constant space.</p>

<h2>Algorithm</h2>

<ol>   
    <li>Initialize two pointers:</li>
    <ul>
        <li><code>slow = head</code></li>
        <li><code>fast = head</code></li>
    </ul>
    <li>Move through the list:</li>
    <ul>
        <li><code>slow</code> moves one step</li>
        <li><code>fast</code> moves two steps</li>
    </ul>
    <li>If at any point <code>slow == fast</code>, a cycle exists, return <code>True</code>.</li>
    <li>If <code>fast</code> reaches the end (<code>None</code> or <code>fast.next</code> is <code>None</code>), no cycle exists. Return <code>False</code>.</li>
</ol>

<pre class="solution-code-pre"><code>def has_cycle(head):
    slow, fast = head, head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
</code></pre>

<p>Time complexity is O(n).</p>
<p>Space complexity is O(1).</p>

<h1>Common Pitfalls</h1>

<h2>Not checking if fast pointer can advance safely</h2>

<p>Before moving the fast pointer two steps, you must verify both <code>fast</code> <em>and</em> <code>fast.next</code> are not <code>None</code>. Checking only <code>fast != None</code> before accessing <code>fast.next.next</code> causes a null pointer exception when the list has an odd number of nodes without a cycle.</p>

<h2>Comparing node values instead of node references</h2>

<p>The cycle detection requires comparing whether two pointers reference the same node object, not whether they have the same value. Using value equality (<code>slow.val == fast.val</code>) incorrectly detects cycles when two different nodes happen to have the same value!</p>
`

export const linkedListCycleDetection = {
    id: "linked-list-cycle-detection",
    title: "56. Linked List Cycle Detection",
    problemStatement: `<p>Given the beginning of a linked list <code>head</code>, return <code>true</code> if there is a cycle in the linked list. Otherwise return <code>false</code>.</p>

    <p>There is a <strong>cycle</strong> in a linked list if at least one node in the list can be visited again by following the <code>next</code> pointer.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("linked-list-cycle-detection"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- linked list: traversing nodes using next pointers
- hash sets: O(1) lookup to track visited nodes
- fast and slow pointers (Floyd's Algorithm): two-pointer technique for cycle detection with O(1) space
*/
