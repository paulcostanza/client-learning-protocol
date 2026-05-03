import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function ListComprehension() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const preListComprehension = `nums = [1, 2, 3, 4, 5]
nums_plus_plus = []

for num in nums:
    nums_plus_plus.append(num)

print(nums_plus_plus)
`

    const listComprehension = `nums = [1, 2, 3, 4, 5]

nums_plus_plus = [n + 1 for n in nums]
print(nums_plus_plus)`

    const listComprehensionConsole = `[2, 3, 4, 5, 6]`

    const preListCompWithConditional = `def favorite_letter(words, letter):
    words_with_favorite_letter = []
    
    for word in words:
        if letter in word:
            words_with_favorite_letter.append(word)
    return words_with_favorite_letter
    
words = ["sandwich", "happy", "tasty", "yummy", "yes", "please"]
print(favorite_letter(words, "y"))`

    const preListCompWithConditionalConsole = `['happy', 'tasty', 'yummy', 'yes']`

    const listCompWithConditional = `def favorite_letter(words, letter):
    return [word for word in words if letter in word]
    
words = ["sandwich", "happy", "tasty", "yummy", "yes", "please"]
print(favorite_letter(words, "a"))`

    const listCompWithConditionalConsole = `['sandwich', 'happy', 'tasty', 'please']`

    return (
        <div className="container">
            <h1>List Comprehension</h1>

            <p><strong>List comprehensions</strong> are a concise way to create new lists by applying an operation to elements from an existing iterable and optionally filtering elements based on certain conditions.</p>

            <blockquote>
                <p>Um... what?</p>
            </blockquote>

            <p>Let's say we have a list of numbers and wanted to add <code>1</code> to each element in that list. Right now, your instinc may be to use a for loop, and you would be correct.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {preListComprehension}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {listComprehensionConsole}
                </SyntaxHighlighter>
            </div>

            <p>We are now going to solve the same problem using list comprehension. The syntax may look a little funky, but here is the format:</p>

            <p><code>[expression for element in iterable]</code></p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {listComprehension}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {listComprehensionConsole}
                </SyntaxHighlighter>
            </div>

            <p>Same solution to the problem, just a different way to get it. What is nice about list comprehension is that it is a really elegant approach to solve problems in the most pythonic way possible. You do not have other programming languages that have this feature.</p>


            <blockquote>
                <p>This is one of those things that you have to memorize and it will eventually become second nature.</p>
            </blockquote>

            <h2>Even more fun</h2>

            <p>List comprehension does just stop there. We can expand it to include a condition like so:</p>

            <p><code>[expression for element in iterable if condition == True]</code></p>

            <p>This will filter out the list and create a new list that will have a different length <em>if</em> any amount of elements do not equate to <code>True</code>.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {preListCompWithConditional}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {preListCompWithConditionalConsole}
                </SyntaxHighlighter>
            </div>

            <p>The above example shows you what we would traditionally do. Now let's try it with list comprehension:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {listCompWithConditional}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {listCompWithConditionalConsole}
                </SyntaxHighlighter>
            </div>

            <p>A quick breakdown if you are struggling to understand <code>[word for word in words if letter in word]</code>:</p>

            <ul>
                <li><code>[word</code>: an element from the list <code>words</code> that we want to append to our new list</li>
                <li><code>for word in words</code>: a traditional for loop where we target each element</li>
                <li><code>if letter in word]</code>: an if statement that runs if our letter parameter matches a letter inside of the <code>word</code> element we are currently iterating on. If <em>not</em> true, then our word <em>does not</em> get added.</li>
            </ul>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="list-comprehension"
            />
        </div>
    )
}