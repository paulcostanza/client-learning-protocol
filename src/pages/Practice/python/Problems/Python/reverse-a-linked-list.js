import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `# definition for singly-linked list
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def reverse_linked_list(head):
  # enter code here please
  
  
  
  
`

const testCode = `class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

def build_linked_list(values):
  dummy = ListNode()
  current = dummy

  for val in values:
    current.next = ListNode(val)
    current = current.next

  return dummy.next

def linked_list_to_list(head):
  result = []

  while head:
    result.append(head.val)
    head = head.next

  return result

def run_tests():
  test_cases = [
    ([1,2,3,4,5], [5,4,3,2,1]),
    ([1,2], [2,1]),
    ([1], [1]),
    ([], [])
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (values, expected) in enumerate(test_cases, 1):
    try:
      head = build_linked_list(values)

      result = reverse_linked_list(head)

      result_list = linked_list_to_list(result)

      if result_list == expected:
        logs.append(f"""Test {i}: PASS
Input: {values}
Output: {result_list}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {values}
Got: {result_list}
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
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

---

Example #2:
Input: head = [1,2]
Output: [2,1]

---

Example #3:
Input: head = [1]
Output: [1]
`

const constraints = `<ul>
<li>The number of nodes in the list is in the range <code>[0, 5000]</code></li>
<li>-5000 ≤ <code>Node.val</code> ≤ 5000</li>
</ul>`

const solution = `
<p>Reversing a linked list is all about flipping pointers one step at a time. We walk through the list from left to right, and for each node, we redirect its <code>next</code> pointer to point to the node behind it.</p>

<p>To avoid losing track of the rest of the list, we keep three pointers:</p>

<ul>
    <li><code>current</code>: the current node we are processing</li>
    <li><code>prev</code>: the node that should come after <code>current</code> one reversed</li>
    <li><code>temp</code>: the original next node, so we do not break the chain</li>
</ul>

<p>By moving these pointers forward in each step, we gradually reverse the entire list. When <code>current</code> becomes <code>null</code>, the list is fully reversed, and <code>prev</code> points to the new head.</p>

<h2>Algorithm</h2>

<ol>
    <li>Initialize</li>
    <ul>
        <li><code>prev = null</code></li>
        <li><code>current = head</code></li>
    </ul>
    <li>While <code>current</code></li>
    <ul>
        <li>save the next node: <code>temp = current.next</code></li>
        <li>reverse the pointer: <code>current.next = prev</code></li>
        <li>move <code>prev</code> to <code>current</code></li>
        <li>move <code>current</code> to <code>temp</code></li>
    </ul>
    <li>When the loop ends, <code>prev</code> is the new head of the reversed list</li>
    <li>Return <code>prev</code></li>
</ol>

<pre class="solution-code-pre"><code># Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev, curr = None, head

        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        return prev
</code></pre>

<p>Time complexity of O(n)</p>
<p>Space complexity of O(1)</p>
`


export const reverseALinkedList = {
    id: "reverse-a-linked-list",
    title: "44. Reverse a Linked List",
    problemStatement: `<p>Given the beginning of a singly linked list of <code>head</code>, reverse the list and return the new beginning of the list.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("reverse-a-linked-list"),
    solution: solution,
    studyGuide: [
        {
            title: "Prerequisites",
            content: `<p>Before attempting this problem, you should be comforable with...</p>
          <ul>
            <li><strong>Linked list fundamentals</strong> for understanding node structure traversal with value/current and next pointer.</li>
            <li><strong>Pointer manipulation</strong> to redict node pointers without losing references to other nodes.</li>
            <li><strong>Recursion basics</strong> and how recurisve calls work with the call stack for recursive solutions.</li>
          </ul>`,
            link: "https://clientlearningprotocol.io/#/python/functions",
        }
    ]
}