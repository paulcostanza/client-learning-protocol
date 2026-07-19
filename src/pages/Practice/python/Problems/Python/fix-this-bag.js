import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `# fix this function!
def add_item(item: str, bag: list[str] = []) -> list:
  bag.append(item)
  return bag
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
  test_cases = [
    # Format: (item, explicit_bag, expected)
    ("basketball", None, ["basketball"]),
    ("baseball", None, ["baseball"]),
    ("football", None, ["football"]),
    ("sneakers", ["gym shorts", "t-shirt"], ["gym shorts", "t-shirt", "sneakers"]),
    ("apple", ["banana"], ["banana", "apple"])
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (item, explicit_bag, expected) in enumerate(test_cases, 1):
    try:
      # If explicit_bag is provided, pass it in copy-safely
      if explicit_bag is not None:
        # We pass a copy so our expected assertion stays clean
        result = add_item(item, list(explicit_bag))
        input_str = f'add_item("{item}", {explicit_bag})'
      else:
        result = add_item(item)
        input_str = f'add_item("{item}")'

      if result == expected:
        logs.append(f"""Test {i}: PASS
Input: {input_str}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {input_str}
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
add_item("basketball")
Output: ["basketball"]

---

Example #2:
add_item("basketball")
add_item("baseball")

Expected Output:
["basketball"]
["baseball"]

Actual Output (Broken Function):
["basketball"]
["basketball", "baseball"]

---

Example #3:
After fixing the function:

add_item("basketball")
add_item("baseball")

Output:
["basketball"]
["baseball"]
`

const constraints = `<ul>
  <li><code>item</code> is a string.</li>
  <li>The function should return a list containing the items passed during that call.</li>
  <li>Each call to <code>add_item</code> should use a fresh list unless one is explicitly provided.</li>
</ul>`

const solution = `
<h1>Mutable Default Arguments</h1>

<p>In Python, default arguments are evaluated <em>only once</em> when the function is defined, not every time the function is called. Because a list <code>[]</code> is mutable, every function call that relies on the default value ends up sharing and modifying that exact same list instance.</p>

<h2>The Fix</h2>

<p>The standard Python idiom to solve this is to set the default argument to <code>None</code>. Inside the function, check if the argument is <code>None</code>, and if so, instantiate a fresh, brand-new list.</p>

<pre class="solution-code-pre"><code>def add_item(item: str, bag: list[str] = None) -> list:
    if bag is None:
        bag = []
    bag.append(item)
    return bag
</code></pre>

<p>Time complexity is O(1) for appending to the list.</p>
<p>Space complexity is O(1) auxiliary space, or O(N) to store the elements depending on how many items you add.</p>
`

export const fixThisBag = {
    id: "fix-this-bag",
    title: "48. Fix this Bag",
    problemStatement: `<p>For some reason when we run <code>add_item</code> multiple times it keeps adding our item to a previous list. If we run the code:</p>


    <pre class="solution-code-pre"><code>print(add_item("toothpaste"))
print(add_item("keys"))
print(add_item("milk"))
print(add_item("body"))</code></pre>

    <p>We end up getting:</p>

    <pre class="solution-code-pre"><code>["toothpaste"]
["toothpaste", "keys"]
["toothpaste", "keys", "milk"]
["toothpaste", "keys", "milk", "body"]</code></pre>

  
  <p>Super weird! Not all these items work together and need to be in seperate list. Anyways, rewrite the function so we still have a default parameter and get the results we want.</p>
  `,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("fix-this-bag"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- default arguments: how they actually work and how mutable default arguments makes it obvious
*/
