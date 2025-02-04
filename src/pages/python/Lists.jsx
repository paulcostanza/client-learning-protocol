import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Lists() {
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

    const joinListOfStrings = `list_of_words = ["hello", "there", "sam"]
sentence = " ".join(list_of_words)
print(sentence)
# Prints: "hello there sam"`

    const tuples101 = `my_tuple = ("this is a tuple", 45, True)
print(my_tuple[0])
# this is a tuple
print(my_tuple[1])
# 45
print(my_tuple[2])
# True`

    const fideo = `dog = ("Fido", 4)`

    const singletuple = `dog = ("Fido",)`

    const listOfTuples = `def get_heroes():
    heroes = [
        ("Glorfindel", 2093, True),
        ("Gandalf", 1054, False),
        ("Gimli", 389, False),
        ("Aragorn", 87, False),
    ]

    return heroes`

    const tupleUnpacking = `dog = ("Fido", 4)
dog_name, dog_age = dog
print(dog_name)
# Fido
print(dog_age)
# 4`

    return (
        <>
            <h1>Lists</h1>

            <h2 id="quick-methods-reference-sheet">Quick methods reference sheet</h2>

            <ul>
                <li><code>.append(element)</code> add to the end of a list</li>
                <li><code>.pop()</code> removes last item from list. Can return it to a variable if assigned</li>
                <li><code>.pop(idx)</code> removes at specific index. Can return it to a variable if assigned</li>
                <li><code>.lower()</code> takes a string and lower cases it</li>
            </ul>

            <h2 id="quick-tricks">Quick Tricks</h2>

            <p>The built-in <code>float()</code> function can create a numeric floating point of negative infinity. Because every value will be greater than negative infinity, we can use it to help us accomplish our goal of finding the max value.</p>

            <p>We also have positive infinity!</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {posAndNegInfinity}
                </SyntaxHighlighter>
            </div>

            <h2 id="slicing-lists">Slicing Lists</h2>

            <p>To grab the sections from a list of only the elements you want, you can use the slicing operator (<code>:</code>). Slice <strong>does not</strong> change the original list</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {sliceExamples}
                </SyntaxHighlighter>
            </div>

            <h4 id="reverse-a-list">Reverse a list</h4>

            <p>Using only the step section you can reverse a list quite easily:</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {reverseList}
                </SyntaxHighlighter>
            </div>

            {/* List Operations */}

            <h2 id="list-operations---concatenate">List Operations</h2>

            <h4 id="concatenate">Concatenate</h4>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {concatenateList}
                </SyntaxHighlighter>
            </div>

            <h4 id="contains">Contains</h4>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {containsList}
                </SyntaxHighlighter>
            </div>

            <h4 id="deletion">Deletion</h4>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {deleteFromList}
                </SyntaxHighlighter>
            </div>

            <h2 id="split-a-string-into-a-list-of-words">Split a String Into a List of Words</h2>

            <p>The <code>.split()</code> method in Python is called on a string and returns a list by splitting the string based on a given <em>delimiter</em>. If no delimiter is provided, it will split the string on whitespace.</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {splitListOfString}
                </SyntaxHighlighter>
            </div>

            <h2 id="join-a-list-of-strings-into-a-single-string">Join a List of Strings Into a Single String</h2>

            <p>The <code>.join()</code> method is called on a <strong>delimiter</strong> (what goes between all the words in the list), and takes a list of strings as input</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {joinListOfStrings}
                </SyntaxHighlighter>
            </div>

            <h2 id="tuples">Tuples</h2>

            <p><strong>Tuples</strong> are collections of data that are ordered and unchangeable. You can think of a tuple as a <em>List</em> with a fixed size. They are created with round brackets.</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {joinListOfStrings}
                </SyntaxHighlighter>
            </div>

            <p>While it's typically considered bad practice to store items of different types in a <em>List</em>, it is not a problem with Tuples. Because they have a fixed size, it's easy to keep track of which indicies store with types of data.</p>

            <p>Tuples are often used to store very small groups (like 2 or 3 items) of data. For example, you might use a tuple to store a dog's name and age.</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {fideo}
                </SyntaxHighlighter>
            </div>

            <p><em>Note</em> There is a special case for creating single-item tuples. You must include a comma so Python knows it's a tuple and not regular parentheses.</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {singletuple}
                </SyntaxHighlighter>
            </div>

            <p>Here is an example of combining list and tuples:</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {listOfTuples}
                </SyntaxHighlighter>
            </div>

            <h2 id="tuple-unpacking">Tuple Unpacking</h2>

            <p>You can easily assign the values of a tuple to variables using <em>unpacking</em>.</p>

            <div className="center">
                <SyntaxHighlighter language="python" style={tomorrow} showLineNumbers className="center">
                    {tupleUnpacking}
                </SyntaxHighlighter>
            </div>

        </>
    )
}