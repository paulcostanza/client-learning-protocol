import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Dropdown from '../../../Helpers/Dropdown.jsx'
import MutableDefaultArgumentInMemory from '../../../assets/python/mutableDefaultArguments/mutable default argument in memory.jpg'

export default function MutableDefaultArguments() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const addItem = `def add_item(item, bag=[]):
    bag.append(item)
    return bag`

    const callAddItem = `add_item("basketball") 
add_item("baseball") 
add_item("football")`

    return (
        <div className="container">
            <h1>Mutable Default Arguments</h1>

            <p>Python evaluates default arguments <em>only once</em> when the function is defined. That means when we have something like a list, dictionary, set, or any data structure that is mutable, each function call will affect the same default argument.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {addItem}
                </SyntaxHighlighter>
            </div>

            <p>If we run three seperate calls with this function, say...</p>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {callAddItem}
                </SyntaxHighlighter>
            </div>


            <p>Can you figure out what each one returns?</p>

            <Dropdown
                questions={[
                    "After add_item('basketball)",
                    "After add_item('baseball')",
                    "After add_item('football')"
                ]}
                answers={[
                    `["basketball"]`,
                    `["basketball", "baseball"]`,
                    `["basketball", "baseball", "football"]`,
                ]}
            />

            <p>This behavior applies to all default arguments, but it only becomes surprising when the default object is mutable. Immutable objects such as integers, strings, tuples, and <code>None</code> cannot be modified in place, so they do not have this problem.</p>

            <h2>Why?</h2>

            <p>When python encounters a <code>def</code> statement with a default parameter, it executes that definition once. It creates a function object in memory and evaluates the default argument right then and then.</p>

            <p>That newly created list <code>[]</code> gets stored directly inside the function's own internal attributes.</p>

            <h2>What the memeory looks like</h2>

            <p>The default list is <em>not recreated</em> each time the function is called. Instead it lives as part of the function object itself (on th heap).</p>

            <ul>
                <li><strong>At definition:</strong> python creates the function object. Inside its hidden metadata (in our example's case <code>add_item.__default__</code>), it stores a reference pointing to a specific list container in memory (ex: memory address <code>0x1024</code>).</li>
                <li><strong>During a call:</strong> when you run <code>add_item("basketball")</code> without passing a <code>bag</code>, python does not make a new list. It simply tells the local variable <code>bag</code> to point to that exact same address: <code>0x1024</code>.</li>
                <li><strong>The mutation:</strong> when you call <code>bag.append(whatever)</code> you are modifying the object living at <code>0x1024</code> in place.</li>
            </ul>

            <p>Because the address never changes, every subsequent call that drops back to the default argument is just looking at that exact same, modified piece of memory.</p>

            <p><img className="img-in-reading" src={MutableDefaultArgumentInMemory} alt="How the mutable default argument looks in memory" /></p>

            <blockquote>
                <p>So when is it safe to use a mutable default argument?</p>
            </blockquote>

            <p>They are usually a bug. However, they are perfect for when you intentionally want to use it as a persistent, shared state container across multiple function calls for things such as caching, memoization, or accumulating data.</p>

            <p><strong><em>The main takeway from this section:</em></strong> default argument expressions are evaluated once when the function is defined, not each time it is called!</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="mutable-default-arguments"
            />
        </div>
    )
}