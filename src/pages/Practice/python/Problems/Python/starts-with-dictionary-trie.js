import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def starts_with(trie: dict, prefix: str) -> bool:
  # write your code here!
  
  
  
  
  
  
  
  
`


const testCode = `def run_tests():
    test_cases = [
        (
            {"c": {"a": {"t": {"$": True}, "r": {"$": True}}}},
            "cat",
            True
        ),
        (
            {"c": {"a": {"t": {"$": True}, "r": {"$": True}}}},
            "ca",
            True
        ),
        (
            {"c": {"a": {"t": {"$": True}, "r": {"$": True}}}},
            "c",
            True
        ),
        (
            {"c": {"a": {"t": {"$": True}, "r": {"$": True}}}},
            "car",
            True
        ),
        (
            {"c": {"a": {"t": {"$": True}, "r": {"$": True}}}},
            "cab",
            False
        ),
        (
            {"c": {"a": {"t": {"$": True, "s": {"$": True}}}}},
            "cat",
            True
        ),
        (
            {"c": {"a": {"t": {"$": True, "s": {"$": True}}}}},
            "cats",
            True
        ),
        (
            {"c": {"a": {"t": {"$": True, "s": {"$": True}}}}},
            "catss",
            False
        ),
        (
            {"d": {"o": {"g": {"$": True}}}},
            "do",
            True
        ),
        (
            {"d": {"o": {"g": {"$": True}}}},
            "dot",
            False
        ),
        (
            {"a": {"p": {"p": {"$": True, "l": {"e": {"$": True}}}}}},
            "app",
            True
        ),
        (
            {"a": {"p": {"p": {"$": True, "l": {"e": {"$": True}}}}}},
            "appl",
            True
        ),
        (
            {"a": {"p": {"p": {"$": True, "l": {"e": {"$": True}}}}}},
            "apples",
            False
        ),
        (
            {},
            "anything",
            False
        ),
        (
            {"a": {"$": True}},
            "a",
            True
        ),
        (
            {"a": {"$": True}},
            "",
            True
        ),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (trie, prefix, expected) in enumerate(test_cases, 1):
        try:
            result = starts_with(trie, prefix)

            if type(result) is bool and result == expected:
                logs.append(f"""Test {i}: PASS

Trie: {trie}
Prefix: {prefix!r}
Expected: {expected}
Output: {result}
---""")
                passed += 1
            else:
                logs.append(f"""Test {i}: FAIL

Trie: {trie}
Prefix: {prefix!r}
Expected: {expected}
Got: {result}
---""")
                failed += 1

        except Exception as e:
            logs.append(f"""Test {i}: ERROR

Trie: {trie}
Prefix: {prefix!r}
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
Input:
    trie = {"c": {"a": {"t": {"$": True}}}}
    prefix = "ca"

Output: True

Explanation:
The path for "ca" exists, even though "ca" is not
a complete stored word.

---

Example #2:
Input:
    trie = {"c": {"a": {"t": {"$": True}}}}
    prefix = "cat"

Output: True

Explanation:
The prefix matches the entire stored word "cat".

---

Example #3:
Input:
    trie = {"c": {"a": {"t": {"$": True}}}}
    prefix = "cab"

Output: False

Explanation:
The trie has no "b" child after "ca".

---

Example #4:
Input:
    trie = {}
    prefix = "cat"

Output: False

Explanation:
An empty trie contains no character paths.

---

Example #5:
Input:
    trie = {"a": {"$": True}}
    prefix = ""

Output: True

Explanation:
The empty prefix matches the beginning of every trie,
including an empty trie, because it requires no characters.
`

const constraints = `<ul>
    <li><code>trie</code> is a nested Python dictionary representing a trie.</li>
    <li><code>prefix</code> is a string to search for.</li>
    <li>Character keys lead to child dictionaries.</li>
    <li>The sentinel key <code>"$"</code> marks the end of a complete word.</li>
    <li>Return <code>True</code> if every character in the prefix can be followed through the trie.</li>
    <li>The prefix does not need to be a complete stored word.</li>
    <li>The empty prefix returns <code>True</code>.</li>
</ul>`


const solution = `<h2>Checking a Trie Prefix</h2>

<p>The <code>starts_with</code> function follows the dictionary branches for each character in the requested prefix. Unlike <code>search</code>, it does not need to check for the <code>"$"</code> word-ending marker.</p>

<h3>Algorithm</h3>

<ol>
    <li>Start at the root dictionary.</li>
    <li>For each character in the prefix, check whether it exists in the current dictionary.</li>
    <li>If the character is missing, return <code>False</code>.</li>
    <li>Otherwise, move into the child dictionary for that character.</li>
    <li>If every character is found, return <code>True</code>.</li>
</ol>

<h3>Solution Code</h3>

<pre class="solution-code-pre"><code>def starts_with(trie: dict, prefix: str) -> bool:
    curr = trie

    for char in prefix:
        if char not in curr:
            return False

        curr = curr[char]

    return True
</code></pre>

<h3>Example Walkthrough</h3>

<p>Suppose the trie stores "cat". When searching for the prefix "ca", the function follows the "c" and "a" branches. Since both characters exist, it returns <code>True</code>. It does not matter that "ca" has no word-ending marker.</p>

<p>When searching for "cab", the function follows "c" and "a", then discovers that "b" does not exist. It returns <code>False</code>.</p>

<h3>Time Complexity</h3>

<p><code>O(P)</code>, where P is the length of the prefix. Each character is checked at most once, assuming expected O(1) dictionary lookups.</p>

<h3>Space Complexity</h3>

<p><code>O(1)</code> auxiliary space because the function uses only a reference to the current dictionary.</p>

<h3>Common Mistakes</h3>

<h4>Checking the Word-End Marker</h4>

<p>Unlike <code>search</code>, this function does not check for <code>"$"</code>. A prefix is valid even if it is not a complete word.</p>

<h4>Returning False for a Valid Prefix</h4>

<p>Do not require the prefix to match a complete word. If every character exists along the trie path, return <code>True</code>.</p>

<h4>Handling the Empty Prefix</h4>

<p>The empty prefix contains no characters to check. The loop executes zero times, so the function returns <code>True</code>.</p>`


export const startsWithDictionaryTrie = {
    id: "starts-with-dictionary-trie",
    title: "Starts with Dictionary Trie",
    problemStatement: `<p>Implement <code>starts_with(trie, prefix)</code> to determine whether a prefix exists in a trie represented by nested Python dictionaries.</p>

    <p>Each character maps to a child dictionary. The sentinel key <code>"$"</code> with value <code>True</code> marks the end of a complete word.</p>

    <p>Return <code>True</code> only when the complete word exists. A prefix alone does not count as a match.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("starts-with-dictionary-trie"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

- Dictionaries
- Nested data structures
- Loops
- Boolean return valuess
*/

/*
Other ways to solve it

- Recursive prefix traversal
*/