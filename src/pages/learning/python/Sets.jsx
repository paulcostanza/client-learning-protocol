// import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Sets() {
    // const quizImports = {
    //     python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    // }

    const mySet = `my_set = {1, 2, 3}
print(my_set)

my_set = {3, 2, 1}
print(my_set)`

    const mySetConsole = `{1, 2, 3}
{1, 2, 3}`

    const addToSet = `my_set = set()

my_set.add(1)
my_set.add(2)
my_set.add(1)

print(my_set)`

    const addToSetConsole = `{1, 2}`

    const remove = `my_set = {1, 2, 3}
my_set.remove(2)
my_set.remove(4) # Raises KeyError`

    const list = `my_list = [1, 2, 3, 4, 5, 1, 2, 5]
my_set = set(my_list)
my_list_no_duplicates = list(my_set)
print(my_list_no_duplicates)`

    const listConsole = `[1, 2, 3, 4, 5]`

    const elementInSet = `my_set = {"Cat", "Dog", "Mouse"}

contains_cat = "Cat" in my_set      # True
conatins_lion = "Lion" in my_set    # False`

    return (
        <div className="container">
            <h1>Sets</h1>

            <p>In Python, a <strong>set</strong> is very similar to a list, but with a few key differences...</p>

            <ul>
                <li>A set is unordered, meaning the elements are not stored in a specific order. If order is important, you should use a list.</li>
                <li>A set can only contain <em>unique</em> elements. If you try to add a duplicate element to a set, it will be ignored. </li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {mySet}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {mySetConsole}
                </SyntaxHighlighter>
            </div>

            <p>As you can see, a set can be created using curly braces <code>&#123; &#125;</code> with elements separated by commans. When printing a set, the elements sometimes appear in sorted order, but this is <em>not guaranteed</em>. A <code>set</code> makes absolutely no guarantees about the order of the elements stored.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {addToSet}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {addToSetConsole}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>Why can't we declare an empty set with curly braces?</p>
            </blockquote>

            <p>If we used empty curly braces, it would <strong>not</strong> declare a set. This is because Python uses curly braces to declare an empty dictionary. A <code>dictionary</code> is a data structure that stores a key-value pairs. More on this guy, later. </p>

            <h2>Set operations</h2>

            <p>We can also perform various operations on sets in Python. We can remove elements from a set using the <code>remove()</code> function. If the element is not present in the set, a <code>KeyError</code> will be raised.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {remove}
                </SyntaxHighlighter>
            </div>

            <p>Just like with lists, we can loop over elements within a set using <code>for</code> loops. The difference is that we cannot access elements by index because sets are <em>unordered</em>. The order that we loop over a set is <em>not</em> guaranteed.</p>

            <p>We can also convert a list into a set by passing the list into the <code>set()</code> function. We can then convert the set back into a list by passing it into the <code>list()</code> function. This is an easy way to remove duplicates from a list.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {list}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {listConsole}
                </SyntaxHighlighter>
            </div>

            <p>Just like with lists, we can also use the <code>in</code> keyword to check if an element is present in a set.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {elementInSet}
                </SyntaxHighlighter>
            </div>

            {/* <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="sets"
            /> */}
        </div>
    )
}