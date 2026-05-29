import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `# definition for singly-linked list
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def merge_two_list(list1, list2):
  # enter code here please
  
  
  
  
`

const testCode = `class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

def build_linked_list(values):
  dummy = current = ListNode()

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
    ([1,2,4], [1,3,4], [1,1,2,3,4,4]),
    ([], [], []),
    ([], [0], [0]),
    ([1,2,4], [], [1,2,4]),
    ([1,1,2], [1,3,4], [1,1,1,2,3,4])
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (list1_vals, list2_vals, expected) in enumerate(test_cases, 1):
    try:
      list1 = build_linked_list(list1_vals)
      list2 = build_linked_list(list2_vals)

      result = merge_two_list(list1, list2)

      result_list = linked_list_to_list(result)

      if result_list == expected:
        logs.append(f"""Test {i}: PASS
Input: {list1_vals}, {list2_vals}
Output: {result_list}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {list1_vals}, {list2_vals}
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
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

---

Example #2:
Input: list1 = [], list2 = []
Output: []

---

Example #3:
Input: list1 = [], list2 = [0]
Output: [0]
`

const constraints = `<ul>
<li>The number of nodes in the list is in the range <code>[0, 5000]</code></li>
<li>-5000 ≤ <code>Node.val</code> ≤ 5000</li>
</ul>`

const solution = `
<p>To merge two sorted linked lists, we build the result step-by-step. We keep a pointer (<code>node</code>) to the current end of the merged list, and at each step we choose the <em>smaller head node</em> from <code>list1</code> or <code>list2</code>.</p>

<p>Because the lists are already sorted, whichever head is smaller must come next in the merged lists. We attach that node, move the pointer forward, and continue until one list is empty.</p>

<p>Finally, we attach the remaining nodes from the non-empty list.</p>

<p>Using a dummy node makes handling the head of the merged list simple and clean.</p>

<h2>Algorithm</h2>

<ol>
    <li>Create a dummy node and a <code>node</code> pointer pointing to it</li>
    <li>While both lists have nodes...</li>
    <ul>
        <li>Compare <code>list1.val</code> and <code>list2.val</code></li>
        <li>Attach the smallest node to <code>node.next</code></li>
        <li>Move forward in the chosen list</li>
        <li>Move <code>node</code> to <code>node.next</code></li>
    </ul>
    <li>When one list becomes empty...</li>
    <ul>
        <li>attach the remaining nodes of the other list to <code>node.next</code></li>
    </ul>
    <li>Return <code>dummy.next</code>, which is the head of the merged list</li>
</ol>

Left off at the code.

---



<pre class="solution-code-pre"><code># Definition for singly-linked list.
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: ListNode, list2: ListNode) -> ListNode:
        dummy = tail = ListNode()

        while list1 and list2:
            if list1.val < list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next

        tail.next = list1 or list2

        return dummy.next
</code></pre>

<p>In the line <code>dummy = node = ListNode()</code>, <code>dummy</code> and <code>node</code> are both referencing the same object when being assigned.</p>

<p>Time complexity of O(n + m) where n in the length of list1 and m is the length of list2.</p>
<p>Space complexity of O(1).</p>

<h2>Common Pitfalls</h2>

<h3>Forgetting to handle empty lists</h3>

<p>A common mistake is not checking if one or both input lists are <code>None</code> before starting the merge. If <code>list1</code> is empty, the answer is simply <code>list2</code>, and vice versa. Failing to handle these edge cases leads to null pointer exceptions or incorrect results.</p>

<h3>Not attaching the remaining nodes</h3>

<p>After the main comparison loop ends, one list may still have remaining nodes. A frequent error is forgetting to attach these leftover nodes to the merged list. Since both lists are sorted, simply linking the remaining portion to the end of the merge list completes the merge correctly.</p>
`


export const mergeTwoSortedLists = {
  id: "merge-two-sorted-lists",
  title: "45. Merge Two Sorted Lists",
  problemStatement: `<p>You are given the heads of two sorted linked lists, <code>list1</code> and <code>list2</code>. Merge the two lists into one sorted linked list and return the head of the new sorted linked list.</p>
    <p>The new list should be made up of nodes from <code>list1</code> and <code>list2</code>.</p>`,
  starterCode,
  testCode,
  constraints,
  example,
  status: getProblemStatusById("merge-two-sorted-lists"),
  solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

Linked Lists - Understanding node structure with value and next pointer
Recursion - Solving problems by breaking them into smaller subproblems
Two Pointers - Traversing multiple data structures simultaneously
Dummy Nodes - Using sentinel nodes to simplify edge case handling in linked lists
*/