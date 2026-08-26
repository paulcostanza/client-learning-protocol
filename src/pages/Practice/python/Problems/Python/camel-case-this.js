import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def camel_case_this(s: str) -> str:
  # write your code here!
  
  
  
  
  
  
  
  
`

const testCode = `def run_tests():
    test_cases = [
        ("hello world", "helloWorld"),
        ("hello-world", "helloWorld"),
        ("hello_world", "helloWorld"),
        ("hello world test", "helloWorldTest"),
        ("hello-world_test", "helloWorldTest"),
        ("HELLO WORLD", "helloWorld"),
        ("Hello WORLD", "helloWorld"),
        ("hello---world", "helloWorld"),
        ("hello___world", "helloWorld"),
        ("hello - _ world", "helloWorld"),
        ("hello", "hello"),
        ("", ""),
        ("hello world test case", "helloWorldTestCase"),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (s, expected) in enumerate(test_cases, 1):
        try:
            result = camel_case_this(s)

            if result == expected:
                logs.append(f"""Test {i}: PASS

Input: {s!r}
Output: {result!r}
---""")
                passed += 1
            else:
                logs.append(f"""Test {i}: FAIL

Input: {s!r}
Got: {result!r}
Expected: {expected!r}
---""")
                failed += 1

        except Exception as e:
            logs.append(f"""Test {i}: ERROR

Input: {s!r}
Error: {e}
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
Input: s = "hello world"
Output: "helloWorld"

Explanation:
The first word remains lowercase, while the first letter
of each subsequent word is capitalized.

---

Example #2:
Input: s = "hello-world_test"
Output: "helloWorldTest"

Explanation:
Spaces, dashes, and underscores are treated as word breaks.
All of them are removed, and each subsequent word starts
with an uppercase letter.

---

Example #3:
Input: s = "HELLO WORLD"
Output: "helloWorld"

Explanation:
The first word is converted to lowercase, and each subsequent
word is converted to lowercase except for its first letter,
which is capitalized.
`

const constraints = `<ul>
    <li><code>s</code> contains letters, spaces, dashes, and underscores</li>
    <li>Words are separated by one or more spaces, dashes, or underscores</li>
    <li>All characters in the resulting string should be lowercase except for the first letter of each word after the first</li>
    <li>The first word should be entirely lowercase</li>
    <li>Return an empty string if <code>s</code> is empty</li>
</ul>
`

const solution = `<h1>String Processing</h1>

<p>The key to this problem is replacing the dash and underscore separators with spaces, then splitting the string into individual words.</p>

<h2>Algorithm</h2>

<ol>
    <li>Replace every dash (<code>-</code>) and underscore (<code>_</code>) with a space.</li>
    <li>Split the resulting string into a list of words.</li>
    <li>Loop through the list of words.</li>
    <li>Convert the first word to lowercase.</li>
    <li>Capitalize each subsequent word.</li>
    <li>Join the words together with no separator.</li>
</ol>

<pre class="solution-code-pre"><code>def camel_case_this(s: str) -> str:
    new_s = s.replace("-", " ").replace("_", " ")
    s_list = new_s.split()
    result = []

    for idx in range(len(s_list)):
        if idx == 0:
            result.append(s_list[idx].lower())
        else:
            result.append(s_list[idx].capitalize())

    return "".join(result)
</code></pre>

<ul>
    <li>Time complexity is <code>O(n)</code>, where <code>n</code> is the length of the input string.</li>
    <li>Space complexity is <code>O(n)</code>, because we create a list containing the words and a resulting string.</li>
</ul>
`


export const camelCaseThis = {
    id: "camel-case-this",
    title: "Camel Case This",
    problemStatement: `<p>Given a <code>str</code>, return its camel case version.</p>

    <p>Words in the string argument are separated by one or more characters from the following set: space (<code> </code>), dash (<code>-</code>), or underscore (<code>_</code>). Treat any sequence of these as a word break, as they should all be removed to squish all the valid characters together.</p>

    <p>The first word should be all lowercase. Each subsequent word should start with an uppercase letter, with the rest of it lowercase.</p>
    `,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("camel-case-this"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- .replace()
- .split()
- .lower()
- .capitalize()
*/

/*
Other ways to solve it

Regex: 
import re

def camel_case_this(s: str) -> str:
    words = re.split(r"[ _-]+", s)

    if not words:
        return ""

    result = [words[0].lower()]

    for word in words[1:]:
        result.append(word.capitalize())

    return "".join(result)
*/