import { getProblemStatusById } from '../../../../../Helpers/localStorageHelper'

const starterCode = `def group_anagrams(str):
  # enter code here please
  
  
  
  
`

const testCode = `def normalize(result):
  return sorted([sorted(group) for group in result])

def run_tests():
  test_cases = [
    (
      ["act","pots","tops","cat","stop","hat"],
      [["hat"],["act","cat"],["pots","tops","stop"]]
    ),
    (
      ["eat","tea","tan","ate","nat","bat"],
      [["eat","tea","ate"],["tan","nat"],["bat"]]
    ),
    (
      [""],
      [[""]]
    ),
    (
      ["a"],
      [["a"]]
    ),
    (
      ["abc","bca","cab","xyz"],
      [["abc","bca","cab"],["xyz"]]
    )
  ]

  passed = 0
  failed = 0
  logs = []

  for i, (strs, expected) in enumerate(test_cases, 1):
    try:
      result = group_anagrams(strs)

      if normalize(result) == normalize(expected):
        logs.append(f"""Test {i}: PASS
Input: {strs}
Output: {result}
---""")
        passed += 1
      else:
        logs.append(f"""Test {i}: FAIL
Input: {strs}
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
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"], ["act","cat"], ["pots","tops","stop"]]

---

Example #2:
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

---

Example #3:
Input: strs = ["a"]

Output: [["a"]]
`

const constraints = `<ul>
<li>1 ≤ <code>strs.length</code> ≤ 10⁴</li>
<li>0 ≤ <code>strs[i].length</code> ≤ 100</li>
<li><code>strs[i]</code> consists of lowercase English letters</li>
</ul>`

const solution = `
<p><strong>Anagrams</strong></code> are when you take two words and can swap the letters around to make the same word.</p>

<p>Example: "tea" and "eat"</p>

<ul>
    <li>"tea" -> move the "t" to the end, it becomes "eat"</li>
    <li>The two words are equal to each other</li>
</ul>

<p>For this one I like using a dictionary. The key is a string from the list that is sorted, the value is a list of strings that match the key. Example:</p>

<pre class="solution-code-pre">
<code>anagram_dict = {
	"aet": ["tea", "eat"]
}
</code></pre>

<p>You then iterate through the dictionary, add the list values to a master list, and return it.</p>

<pre class="solution-code-pre"><code>def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    anagram_dict = {} # {sorted(str) : [str, str_2, str_3]}

	for word in strs:
		if "".join(sorted(word)) in anagram_dict:
			anagram_dict["".join(sorted(word))].append(word)
		else:
			anagram_dict["".join(sorted(word))] = [word]

	result = []

	for anagram in anagram_dict:
		result.append(anagram_dict[anagram])

	return result
</code></pre>

<p>You can use <code>defaultdict()</code> to create a dictionary where you add <code>list</code> in the parameter to represent the value.</p>

<pre class="solution-code-pre"><code>def groupAnagrams(strs):
	result = defaultdict(list)
	
	for s in strs:
		result["".join(sorted(s))].append(s)
	
	return list(result.values())
</code></pre>

<p><strong><em>Note</em></strong> If you get a <code>NameError: name 'defaultdict' is not defined</code> error, you need to manually import the <em>collections</em> module to use <code>defaultdict</code>. At the top of the script you need to add:</p>

<pre class="solution-code-pre"><code>from collections import defaultdict
</code></pre>
`


export const groupAnagrams = {
    id: "group-anagrams",
    title: "40. Group Anagrams",
    problemStatement: `<p>Given an array of strings <code>strs</code>, group all anagrams together into sublists. You may return the output in any order. An <strong>anagram</strong> is a string that contains the exact same characters as another string, but the order of the characters can be different.</p>`,
    starterCode,
    testCode,
    constraints,
    example,
    status: getProblemStatusById("group-anagrams"),
    solution: solution
}