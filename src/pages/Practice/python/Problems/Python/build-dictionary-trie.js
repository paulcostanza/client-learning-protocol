import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def build_trie(words: list[str]) -> dict:
  # write your code here!
  
  
  
  
  
  
  
  
`


const testCode = `def run_tests():
    test_cases = [
        (
            ["cat", "car"],
            {"c": {"a": {"t": {"$": True}, "r": {"$": True}}}}
        ),
        (
            ["cat", "cats"],
            {"c": {"a": {"t": {"$": True, "s": {"$": True}}}}}
        ),
        (
            ["dog"],
            {"d": {"o": {"g": {"$": True}}}}
        ),
        (
            ["apple", "app"],
            {"a": {"p": {"p": {"$": True, "l": {"e": {"$": True}}}}}}
        ),
        (
            [],
            {}
        ),
        (
            ["cat", "cat"],
            {"c": {"a": {"t": {"$": True}}}}
        ),
        (
            ["a", "b"],
            {"a": {"$": True}, "b": {"$": True}}
        ),
    ]

    passed = 0
    failed = 0
    logs = []

    for i, (words, expected) in enumerate(test_cases, 1):
        try:
            result = build_trie(words)

            if result == expected:
                logs.append(f"""Test {i}: PASS

Input: {words}
Expected: {expected}
Output: {result}
---""")
                passed += 1
            else:
                logs.append(f"""Test {i}: FAIL

Input: {words}
Expected: {expected}
Got: {result}
---""")
                failed += 1

        except Exception as e:
            logs.append(f"""Test {i}: ERROR

Input: {words}
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
Input: ["cat", "car"]

Output:
{
    "c": {
        "a": {
            "t": {"$": True},
            "r": {"$": True}
        }
    }
}

Explanation:
The words share the prefix "ca", so they share
the same dictionary branches. The "$" key marks
the end of each complete word.

---

Example #2:
Input: ["cat", "cats"]

Output:
{
    "c": {
        "a": {
            "t": {
                "$": True,
                "s": {"$": True}
            }
        }
    }
}

Explanation:
"cat" ends at the "t" node, while "cats" continues
through "s". The "$" key distinguishes the two words.

---

Example #3:
Input: ["dog"]

Output:
{"d": {"o": {"g": {"$": True}}}}

Explanation:
Each character creates a nested dictionary.
The "$" key marks the end of "dog".

---

Example #4:
Input: []

Output: {}

Explanation:
An empty word list produces an empty trie.
`

const constraints = `<ul>
    <li><code>words</code> is a list of strings.</li>
    <li>The list may be empty.</li>
    <li>Words may share prefixes.</li>
    <li>Words may contain duplicate entries.</li>
    <li>Use the sentinel key <code>"$"</code> with value <code>True</code> to mark the end of each word.</li>
    <li>Return the trie as a nested Python dictionary.</li>
</ul>
`

const solution = `<h2>Building a Trie with Nested Dictionaries</h2>

<p>A trie stores words by sharing dictionary branches for common prefixes. Each dictionary key represents a character, and its value is another dictionary containing the next characters.</p>

<p>We use the special key <code>"$"</code> to indicate that a complete word ends at that point.</p>

<h3>Algorithm</h3>

<ol>
    <li>Create an empty dictionary to serve as the root.</li>
    <li>For each word, start at the root dictionary.</li>
    <li>For each character, use <code>setdefault(c, {})</code> to retrieve its existing child dictionary or create one if it does not exist.</li>
    <li>Move into that child dictionary.</li>
    <li>After processing the entire word, add <code>"$": True</code> to mark its end.</li>
    <li>Return the root dictionary.</li>
</ol>

<h3>Solution</h3>

<pre class="solution-code-pre"><code>def build_trie(words: list[str]) -> dict:
    trie_dict = {}

    for word in words:
        current = trie_dict

        for c in word:
            current = current.setdefault(c, {})

        current["$"] = True
    return trie_dict
</code></pre>

<h3>Example Walkthrough</h3>

<p>Given <code>["cat", "car"]</code>, the first word creates the path <code>c → a → t</code> and marks the end of "cat". The second word reuses the existing <code>c → a</code> branches and adds a new <code>r</code> branch.</p>

<p>The resulting trie is:</p>

<pre><code>{
    "c": {
        "a": {
            "t": {"$": True},
            "r": {"$": True}
        }
    }
}</code></pre>

<h3>Time Complexity</h3>

<p><code>O(N)</code>, where <code>N</code> is the total number of characters across all input words. Each character is processed once, and dictionary lookups and insertions take expected O(1) time.</p>

<h3>Space Complexity</h3>

<p><code>O(N)</code> in the worst case, because the trie stores at most one character node per input character, plus word-ending markers. Shared prefixes can reduce the actual space required.</p>

<h3>Common Mistakes</h3>

<h4>Forgetting to Return the Trie</h4>

<p>Without <code>return trie_dict</code>, the function returns <code>None</code> by default.</p>

<h4>Not Marking Word Endings</h4>

<p>The <code>"$"</code> key distinguishes a complete word from a prefix. For example, when storing both "cat" and "cats", the node for "t" must contain <code>"$": True</code> even though it also has a child for "s".</p>

<h4>Recreating Existing Branches</h4>

<p>Using <code>setdefault(c, {})</code> preserves an existing child dictionary instead of replacing it. This allows words with shared prefixes to reuse the same branches.</p>`

export const buildDictionaryTrie = {
    id: "build-dictionary-trie",
    title: "Build Dictionary Trie",
    problemStatement: `<p>If you can't build a trie, how do you expect to query one? Implement <code>build_trie(words)</code> that returns a nested python dictionary representing a trie storing the given list of words.</p>
    
    <p>Use the sentinel key <code>"$"</code> to mark that a word ends at a node.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("build-dictionary-trie"),
    solution: solution
}

/*
Prerequisites
Before attempting this problem, you should be comfortable with:

*/

/*
Other ways to solve it

*/