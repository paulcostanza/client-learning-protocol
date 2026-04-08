import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Lists() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const posAndNegInfinity = `negative_infinity = float("-inf")
positive_infinity = float("inf")`

    const sliceExamples = `my_list[start : stop : step]

scores = [50, 70, 30, 20, 90, 10, 50]
# Display list
print(scores[1:5:2])
# Prints [70, 20]
# give me a slice of the scores list 
# from idx 1, up to but not including 
# 5, skipping every 2nd value

# Omitting Sections
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[:3] # Gives [0, 1, 2]
numbers[3:] # Gives [3, 4, 5, 6, 7, 8, 9]

# Using Only the step section
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[::2] # Gives [0, 2, 4, 6, 8]
numbers[1::2] # Gives [1, 3, 5, 7, 9]

# Negative Indices
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[-3:] # Gives [7, 8, 9]
`

    const reverseList = `def reverse_array(items):
    return items[::-1]`

    const concatenateList = `total = [1, 2, 3] + [4, 5, 6]
print(total)
# Prints: [1, 2, 3, 4, 5, 6]`

    const containsList = `fruits = ["apple", "orange", "banana"]
print("banana" in fruits)
# Prints: True`

    const deleteFromList = `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# delete the fourth item
del nums[3]
print(nums)
# Output: [1, 2, 3, 5, 6, 7, 8, 9]

# delete the second item up to (but not including) the fourth item
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
del nums[1:3]
print(nums)
# Output: [1, 4, 5, 6, 7, 8, 9]

# delete all elements
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
del nums[:]
print(nums)
# Output: []`

    const splitListOfString = `message = "hello there sam"
words = message.split()
print(words)
# Prints: ["hello", "there", "sam"]`

    const sortAsc = `numbers = [34, 1, 9, 5, 22]
numbers.sort()
print(numbers)`

    const sortAscConsole = `[1, 5, 9, 22, 34]`

    const sortDesc = `numbers = [34, 1, 9, 5, 22]
numbers.sort(reverse=True)
print(numbers)`

    const sortDescConsole = `[34, 22, 9, 5, 1]`

    const sortedAsc = `fruits = ('banana', 'apple', 'cherry')
sorted_fruits = sorted(fruits)
print(sorted_fruits)
print(fruits)`

    const sortedAscConsole = `['apple', 'banana', 'cherry']
('banana', 'apple', 'cherry')`

    const sortedDesc = `data = [5, 2, 3, 1, 4]
sorted_data = sorted(data, reverse=True)
print(sorted_data)`

    const sortedDescConsole = `[5, 4, 3, 2, 1]`

    const joinListOfStrings = `list_of_words = ["hello", "there", "sam"]
sentence = " ".join(list_of_words)
print(sentence)
# Prints: "hello there sam"`

    return (
        <>
            <h1>Lists</h1>

            <h2 id="quick-methods-reference-sheet">Quick methods reference sheet</h2>

            <ul>
                <li><code>.append(element)</code> add to the end of a list</li>
                <li><code>.pop()</code> removes last item from list. Can return it to a variable if assigned</li>
                <li><code>.pop(idx)</code> removes at specific index. Can return it to a variable if assigned</li>
                <li><code>.sort()</code> will sort a list, add <code>reverse=True</code> to parameter to sort in descending order</li>
            </ul>

            <h2 id="quick-tricks">Quick Tricks</h2>

            <p>The built-in <code>float()</code> function can create a numeric floating point of negative infinity. Because every value will be greater than negative infinity, we can use it to help us accomplish our goal of finding the max value.</p>

            <p>We also have positive infinity!</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {posAndNegInfinity}
                </SyntaxHighlighter>
            </div>

            <h2 id="slicing-lists">Slicing Lists</h2>

            <p>To grab the sections from a list of only the elements you want, you can use the slicing operator (<code>:</code>). Slice <strong>does not</strong> change the original list</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {sliceExamples}
                </SyntaxHighlighter>
            </div>

            <h4 id="reverse-a-list">Reverse a list</h4>

            <p>Using only the step section you can reverse a list quite easily:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {reverseList}
                </SyntaxHighlighter>
            </div>

            {/* List Operations */}

            <h2 id="list-operations---concatenate">List Operations</h2>

            <h4 id="concatenate">Concatenate</h4>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {concatenateList}
                </SyntaxHighlighter>
            </div>

            <h4 id="contains">Contains</h4>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {containsList}
                </SyntaxHighlighter>
            </div>

            <h4 id="deletion">Deletion</h4>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {deleteFromList}
                </SyntaxHighlighter>
            </div>

            <h2 id="split-a-string-into-a-list-of-words">Split a String Into a List of Words</h2>

            <p>The <code>.split()</code> method in Python is called on a string and returns a list by splitting the string based on a given <em>delimiter</em>. If no delimiter is provided, it will split the string on whitespace.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {splitListOfString}
                </SyntaxHighlighter>
            </div>

            <h2 id="join-a-list-of-strings-into-a-single-string">Join a List of Strings Into a Single String</h2>

            <p>The <code>.join()</code> method is called on a <strong>delimiter</strong> (what goes between all the words in the list), and takes a list of strings as input</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="code-snippet">
                    {joinListOfStrings}
                </SyntaxHighlighter>
            </div>

            <h2>Sort a list</h2>

            <p>We have two main ways to sort a list in python, useing the <code>sort</code> and <code>sorted</code> methods.</p>

            <p>The <code>sort()</code> method modifies the original list and returns <code>None</code>. This is more efficient if you do not need to preserve the original order.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {sortAsc}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {sortAscConsole}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {sortDesc}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {sortDescConsole}
                </SyntaxHighlighter>
            </div>


            <p>Now what's cool about the <code>sorted</code> function is that it works on any iterable (tuples, strings, etc) and not just list. It also returns a <em>new</em> list, leaving the original iterable unchanged. This is great when you need to keep the original data intact.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {sortedAsc}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {sortedAscConsole}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {sortedDesc}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {sortedDescConsole}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="lists"
            />

        </>
    )
}