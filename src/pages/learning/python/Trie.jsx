import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Trie() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const trieExample = `             root
              |
              a($)
             / \\
            d   s
            |   |
          d($)  s($)
            |
            i
            |
            t
            |
            i
            |
            o
            |
          n($)          
`

    const catAndCar = `{
    "c": {
        "a": {
            "t": {"$": True},
            "r": {"$": True}
        }
    }
}`

    const noCashMoney = `# without marker
{ "a": 
    {"n": True}
} # the word "a" is not shown!

# with our marker
{"a" :
    {"$": True},
    {"n": 
        {"$": True}
    }
} # the word "a" is shown!!`

    const differentMarkers = `with_bool = {"n": {"u": {"t": {True: True}}}}
with_none = {"n": {"u": {"t": {None: True}}}}
with_zero = {"n": {"u": {"t": {0: True}}}}`

    const setDefault = `current = current.setdefault(char, {})`

    const buildATrie = `def build_a_trie(words: list[str]) -> dict:
    trie = {}
    for word in words:
        current = trie
        for char in word:
            current = current.setdefault(char, {})
        current["$"] = True
    return trie`

    return (
        <div className="container">
            <h1>Trie</h1>

            <p>A <strong>trie</strong> (pronounced <em>try</em>) is known as a <em>prefix tree</em>, a specialized tree-based data structure used to efficiently store and retrieve keys in a dataset of strings. So instead of storing an entire word in a single node, a trie breaks words down character by character. Nodes along a path share common prefixes, making the structure very efficient for string-matching operations. </p>

            <blockquote>
                <p>Trie comes from "re<strong>trie</strong>val".</p>
            </blockquote>

            <p>This set of strings setup paths, where each path from the root spells out a prefix of one or more stored strings that share a prefix with the corresponding nodes.</p>

            <p>A trie node contains two parts:</p>

            <ul>
                <li>a <strong>children</strong> map of <code>dict[char, TrieNode]</code> based off the root. For lowercase letters you can use a fixed <code>[None] * 26</code> list</li>
                <li>a <strong>word-ending</strong> marker such as a boolean. However, we will be doing the nested-dictionary version of a trie, so we use a sentinel key <code>"$"</code> meaning <em>we have a stored word that ends at this node</em>.</li>
            </ul>

            <p>Let's build a trie from the set <code>&#123; "a", "add", "addition", "ass" &#125;</code></p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {trieExample}
                </SyntaxHighlighter>
            </div>

            <p>Here we have 4 stored words and ten non-root nodes. The shared prefix <code>"a"</code> is a single path with a length of 1 that is reused by all 4 words.</p>

            <h2>When a trie is better than a hash set</h2>


            <p>A hash set gives us <code>O(l)</code> exact-match lookup for a length of <code>l</code> for the string. So the conculsion is that a trie ties with a hash set when searching for a whole and complete word. However, a trie is bettwer when testing for a prefix and pattern-matching queries, where a hash set cannot answer in <code>O(l)</code>. Example: we have <code>words = &#123; "nancy", "harry", "nicky", "nicolle" &#125;</code></p>


            <p><strong>Search query 1: is <code>harry</code> an exact stored word?</strong></p>

            <ul>
                <li>Hash set: hash & lookup cost <code>O(l)</code></li>
                <li>Trie: iterate through <code>"h"</code> -&gt; <code>"a"</code> -&gt; <code>"r"</code> -&gt; <code>"r"</code> -&gt; <code>"y"</code> -&gt; <code>"$"</code> (our word-ending marker). Results in <code>O(l)</code> as well!</li>
            </ul>

            <p><strong>Search query 2: does any stored word start with <code>ni</code>?</strong></p>

            <ul>
                <li>Hash set: nothing lets you answer without checking <em>every</em> stored word, where <code>w</code> in <code>words</code> needs to <code>w.startswith("ni")</code>. This takes <code>O(n * l)</code>.</li>
                <li>Trie: iterate through <code>"n"</code> -&gt; <code>"i"</code> -&gt; then stop. Our trie destroys the hash set by a factor of <code>n</code>, resulting in <code>O(l)</code> time.</li>
            </ul>

            <p>Checking a prefix with a trie is the same time complexity as checking a whole word just with a different stoping condition.</p>

            <h2>Let's build!</h2>

            <p>Think of a trie node as a dictionary of choices. Every key in the dictionary is a character label on a branch. Every value in the dictionary points to the next dictionary node down the line.</p>

            <p>Starting at the top level you begin with an empty dictionary representing the root: <code>trie = &#123; &#125;</code>. When we process a single word such as <code>"cat"</code>...</p>

            <ol>
                <li>Start at the root dictionary with <code>current = trie</code>.</li>
                <li>For each <code>char</code> in the word <code>"cat"</code>:</li>
                <ul>
                    <li>We need to look up <code>char</code> in <code>current</code></li>
                    <li>If <code>char</code> already exist it is moved down to its dictionary value.</li>
                    <li>If <code>char</code> does not exist we must create a new empty dictionary for it first, then traverse down into it.</li>
                </ul>
            </ol>

            <p>Instead of writing <code>if char not in current:</code>, we can use python's built-in <code>dict.setdefault(key, default)</code> like so:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {setDefault}
                </SyntaxHighlighter>
            </div>

            <p>How <code>setdefault(char, &#123; &#125;)</code> works...</p>

            <ul>
                <li>If the key <code>char</code> exists in <code>current</code> we return <code>current[char]</code> and it will leave existing data untouched.</li>
                <li>If the key <code>char</code> is missing it will set <code>current[char] = { }</code> and then returns that newly created empty dictionary.</li>
                <li>In either case, constantly reassigning <code>current</code> advances our pointer down one level deeper into the tree.</li>
            </ul>

            <p>Once all characters in the word have been consumed by the loop we add our end-marker <code>current["$"] = True</code>. Because <code>current</code> is referencing the dictionary node reached by the final character, when we add <code>"$": True</code> it will mark the end of the word.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {buildATrie}
                </SyntaxHighlighter>
            </div>

            <p>Example: <code>words = ["cat"]</code>:</p>

            <ol>
                <li>Our initial state: <code>trie = &#123; &#125;</code></li>
                <li>Inserting <code>"cat"</code>:</li>
                <ul>
                    <li><code>"c"</code>: <code>trie</code> is empty...</li>
                    <ul>
                        <li><code>setdefault("c", { })</code> adds <code>"c": { }</code> to <code>current</code>.</li>
                        <li><code>current</code> then moves to <code>trie["c"]</code>.</li>
                    </ul>
                    <li><code>"a"</code>: <code>trie["c"]</code> is empty...</li>
                    <ul>
                        <li><code>setdefault("a", { })</code> adds <code>"a": { }</code> to <code>current</code>.</li>
                        <li><code>current</code> moves to <code>trie["c"]["a"]</code>.</li>
                    </ul>
                    <li><code>"t"</code>: <code>trie["c"]["a"]</code> is empty...</li>
                    <ul>
                        <li><code>setdefault("t", { })</code> adds <code>"t": { }</code> to <code>current</code>.</li>
                        <li><code>current</code> moves to <code>trie["c"]["a"]["t"]</code>.</li>
                    </ul>
                    <li>End of the word will set <code>trie["c"]["a"]["t"]["$"] = True</code>.</li>
                </ul>
            </ol>

            <h3>Dictionaries over <code>TrieNode</code>s</h3>

            <blockquote>
                <p>So why are we using nested dictionaries instead of a <code>TrieNode</code> class?</p>
            </blockquote>

            <p>The structure carries the lesson without needing OOP (yeah you know me). It is also to print or pdb-inspect a nested dict directly and see the whole tree.</p>

            <p>For each word we walk down the dictionary character by character. At each step we use <code>setdefault(char, { })</code> to create or follow the child for character <code>char</code>. After consuming all characters we set our dictionary of <code>trie</code> to <code>trie["$"] = True</code> to mark the end of the word. Taking a look at <code>"cat"</code> and <code>"car"</code> we get...</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {catAndCar}
                </SyntaxHighlighter>
            </div>

            <p>The outer dictionary keys represent the first character of any word stored as our trie, at depth 1 from the root. The deeper dictionary keys represent a subsequent character following the path of characters established by its parent keys. Each level deep corresponds to an index position within its word. </p>

            <blockquote>
                <p>Do we need the end-marker <code>"$"</code>? Why not <code>none</code> or <code>0</code>?</p>
            </blockquote>

            <p>Yes! Let's consider two words: <code>"a"</code> and <code>"an"</code>. When we insert <code>"a"</code>, our node for <code>a</code> needs to indicate the we have a complete word, the word <code>a</code>. If you then insert <code>n</code>, we have a node of <code>a</code> pointing to <code>n</code>.</p>

            <p>This will not show that <code>a</code> is a complete word on its own! By using a marker like <code>"$"</code>, the node can hold both child characters and the word-end marker within the key-value pair.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {noCashMoney}
                </SyntaxHighlighter>
            </div>

            <p>As you can imagine, dictionaries inside of dictionaries can get tricky. Using our example of <code>"nut"</code>, what would different end-markers look like?</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {differentMarkers}
                </SyntaxHighlighter>
            </div>

            <p>Every standard character key in the dict is a string. Keeping the sentinel key as a string means that all keys in the dictionary share the same type which prevents potential type-comparison issues or awkward type checks during iteration, without needing to throw in our old friend <code>isinstance()</code>.</p>

            <p>In addition, special values like <code>True</code>, <code>None</code> or <code>0</code> can easily be misread as data values rather than edge keys. So in short, <code>$</code> is just easily reconizable and does not cause type-comparison issues.</p>


            <hr />

            <h2>Review</h2>

            {/* <div className="">
                            <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                                {recursiveRecipe}
                            </SyntaxHighlighter>
                        </div> */}

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="trie"
            />
        </div>
    )
}