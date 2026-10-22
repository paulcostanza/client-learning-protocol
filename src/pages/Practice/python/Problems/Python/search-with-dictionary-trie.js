import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def search(trie: dict, word: str) -> bool:
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
            "car",
            True
        ),
        (
            {"c": {"a": {"t": {"$": True}, "r": {"$": True}}}},
            "ca",
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
            "dog",
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
            "apple",
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
            False
        ),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (trie, word, expected) in enumerate(test_cases, 1):
        try:
            result = search(trie, word)

            if type(result) is bool and result == expected:
                logs.append(f"""Test {i}: PASS

Trie: {trie}
Word: {word!r}
Expected: {expected}
Output: {result}
---""")
                passed += 1
            else:
                logs.append(f"""Test {i}: FAIL

Trie: {trie}
Word: {word!r}
Expected: {expected}
Got: {result}
---""")
                failed += 1

        except Exception as e:
            logs.append(f"""Test {i}: ERROR

Trie: {trie}
Word: {word!r}
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
    word = "cat"

Output: True

Explanation:
The path for "cat" exists, and the final node contains
the "$" marker indicating a complete word.

---

Example #2:
Input:
    trie = {"c": {"a": {"t": {"$": True}}}}
    word = "ca"

Output: False

Explanation:
The prefix "ca" exists, but it does not have a "$" marker.
Therefore, "ca" is not a complete stored word.

---

Example #3:
Input:
    trie = {"c": {"a": {"t": {"$": True, "s": {"$": True}}}}}
    word = "cats"

Output: True

Explanation:
Every character exists in the trie, and the final node
contains the "$" marker.

---

Example #4:
Input:
    trie = {"d": {"o": {"g": {"$": True}}}}
    word = "dot"

Output: False

Explanation:
The trie does not contain a "t" child after "do".

---

Example #5:
Input:
    trie = {}
    word = "anything"

Output: False

Explanation:
An empty trie contains no stored words.
`

const constraints = `<ul>
    <li><code>trie</code> is a nested Python dictionary representing a trie.</li>
    <li><code>word</code> is a string to search for.</li>
    <li>The sentinel key <code>"$"</code> with value <code>True</code> marks the end of a complete word.</li>
    <li>A word may share a prefix with another stored word.</li>
    <li>Return <code>True</code> only if the complete word exists in the trie.</li>
    <li>Return <code>False</code> if a character is missing or the final node has no word-ending marker.</li>
</ul>
`

const solution = `<h2>Searching a Trie</h2>

<p>Searching a trie means following the dictionary branches for each character in the target word. After processing all characters, we check whether the final dictionary contains the sentinel key <code>"$"</code>.</p>

<h3>Algorithm</h3>

<ol>
    <li>Start at the root dictionary.</li>
    <li>For each character in the target word, check whether that character exists in the current dictionary.</li>
    <li>If the character is missing, return <code>False</code>.</li>
    <li>Otherwise, move into the child dictionary for that character.</li>
    <li>After processing every character, return whether <code>"$"</code> exists in the final dictionary.</li>
</ol>

<h3>Solution Code</h3>

<pre class="solution-code-pre"><code>def search(trie: dict, word: str) -> bool:
    curr = trie

    for c in word:
        if c not in curr:
            return False

        curr = curr[c]

    return "$" in curr
</code></pre>

<h3>Example Walkthrough</h3>

<p>Suppose the trie stores "cat" and we search for "ca".</p>

<pre><code>{"c": {"a": {"t": {"$": True}}}}</code></pre>

<p>The search successfully follows "c" and "a". However, the dictionary at the end of "ca" does not contain <code>"$"</code>, so the function returns <code>False</code>.</p>

<p>When searching for "cat", the function follows all three characters and reaches a dictionary containing <code>"$": True</code>. It returns <code>True</code>.</p>

<h3>Time Complexity</h3>

<p><code>O(L)</code>, where L is the length of the search word. Each character is checked once, assuming expected O(1) dictionary lookups.</p>

<h3>Space Complexity</h3>

<p><code>O(1)</code> auxiliary space. The function uses a reference to the current dictionary and does not create additional data structures.</p>

<h3>Common Mistakes</h3>

<h4>Returning True After Finding the Prefix</h4>

<p>Finding every character is not enough. The final node must mark the end of a complete word.</p>

<h4>Forgetting the Word-End Marker</h4>

<p>Use <code>current.get("$", False) is True</code> to check whether the word-ending marker is explicitly set to <code>True</code>.</p>

<h4>Failing on a Missing Character</h4>

<p>Check whether each character exists before accessing its child dictionary. Otherwise, searching for a missing character can raise a <code>KeyError</code>.</p>

<h4>Empty Search Strings</h4>

<p>An empty string returns <code>False</code> under this problem's convention because the trie does not mark the empty string as a stored word.</p>
`

export const searchWithDictionaryTrie = {
    id: "search-with-dictionary-trie",
    title: "Search with Dictionary Trie",
    problemStatement: `<p>Implement <code>search(trie, word)</code> to determine whether a complete word exists in a trie represented by nested Python dictionaries.</p>

    <p>Each character maps to a child dictionary. The sentinel key <code>"$"</code> with value <code>True</code> marks the end of a complete word.</p>

    <p>Return <code>True</code> only when the complete word exists. A prefix alone does not count as a match.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("search-with-dictionary-trie"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

*/

/*
Other ways to solve it

*/