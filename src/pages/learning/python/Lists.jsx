import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Lists() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const list101 = `my_list = [1, 2, 3]

print(len(my_list)) 
print(my_list[0]) 
print(my_list[1]) 
print(my_list[2])`

    const list101Console = `3
1
2
3`

    const mutable = `my_list = [1, 2, 3, 4, 5]
my_list[0] = 10

print(my_list[0])
print(my_list)`

    const mutableConsole = `10
[10, 2, 3, 4, 5]`

    const storeAnything = `my_list = ["I", "am", "a", "list"]

print(my_list[0])
print(my_list[1])
print(my_list[2])
print(my_list[3])`

    const storeAnythingConsole = `I
am
a
list`

    const negativeIndex = `my_list = [1, 2, 3, 4, 5]

print(my_list[-1])
print(my_list[-2])
print(my_list[-3])`

    const negativeIndexConsole = `5
4
3`

    const listWithoutConditionalStatements = `my_list = [1, 2, 3]

if len(my_list) > 0:
    print("The list is not empty")
else:
    print("The list is empty")

if my_list:
    print("The list is not empty")
else:
    print("The list is empty")`

    const inOperator = `my_list = [1, 2, 3]

if 2 in my_list:
    print("2 is in the list")
else:
    print("2 is not in the list")`

    const notInOperator = `my_list = [1, 2, 3]

if 4 not in my_list:
    print("4 is not in the list")
else:
    print("4 is in the list")`

    const loopThroughList = `my_list = [1, 2, 3, 4, 5]

length = len(my_list)

for i in range(length):
    print(my_list[i])`

    const loopThroughListWithJustIn = `my_list = [1, 2, 3, 4, 5]

for element in my_list:
    print(element)`

    const builtInFunctions = `my_list = [1, 2, 3, 4, 5]

print(sum(my_list))
print(min(my_list))
print(max(my_list))`

    const builtInFunctionsConsole = `15
1
5`

    const append = `my_list = [1, 2, 3]
print(my_list)

my_list.append(4)
print(my_list)`

    const appendConsole = `[1, 2, 3]
[1, 2, 3, 4]`

    const pop = `my_list = [1, 2, 3]
my_list.pop()

print(my_list)`

    const popConsole = `[1, 2]`

    const popSpecificElement = `my_list = [1, 2, 3]
my_list.pop(0)
print(my_list)

my_list.pop(0)
print(my_list)`

    const popSpecificElementConsole = `[2, 3]
[3]`

    const popBack = `shoes = ['nike', 'converse', 'crocs']
ugly_shoe = shoes.pop()
print(ugly_shoe)`

    const popBackConsole = `crocs`

    const findTheIndex = `my_list = [1, 2, 3, 4, 5, 3]
print(my_list.index(3))`

    const findTheIndexConsole = `2`

    const slice = `my_list = [1, 2, 3, 4, 5]
print(my_list[1:3])`

    const sliceConsole = `[2, 3]`

    const omitSections = `numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[:3])
print(numbers[3:]) `

    const omitSectionsConsole = `[0, 1, 2]
[3, 4, 5, 6, 7, 8, 9]`

    const negativeIndices = `numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[-3:])`

    const negativeIndicesConsole = `[7, 8, 9]`

    const step = `# my_list[start : stop : step]

scores = [50, 70, 30, 20, 90, 10, 50]
print(scores[1:5])      # without step
print(scores[1:5:2])    # with step
print(scores[::2])      # omit a value
print(scores[1::2])     # omit a different value`

    const stepConsole = `[70, 30, 20, 90]
[70, 20]
[50, 30, 90, 50]
[70, 20, 10]`

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

            <h2 id="quick-methods-reference-sheet">Quick methods reference</h2>

            <ul>
                <li><code>.append(element)</code> add to the end of a list</li>
                <li><code>.pop()</code> removes last item from list. Can return it to a variable if assigned</li>
                <li><code>.pop(idx)</code> removes at specific index. Can return it to a variable if assigned</li>
                <li><code>.sort()</code> will sort a list, add <code>reverse=True</code> to parameter to sort in descending order</li>
            </ul>

            <h2>Quick functions reference</h2>

            <h2>What's a list?</h2>

            <p>In Python, a <strong>list</strong> is a collection of items that are stored in a specific order. </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {list101}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {list101Console}
                </SyntaxHighlighter>
            </div>

            <p>As you can see, we can access individual elements in the list by <strong>indexing</strong> it just like with a string. We can also get the number of elements within the list by calling the <code>len()</code> function. </p>

            <p>However, there is a key difference between lists and strings. List are <strong><em>mutable</em></strong>, meaning we can change the values of the elements in the list. </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {mutable}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {mutableConsole}
                </SyntaxHighlighter>
            </div>

            <p>Lists can also store more than just numbers, they can store everything from strings to other lists.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {storeAnything}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {storeAnythingConsole}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>So then using a negative index throws an error, right?</p>
            </blockquote>

            <p>Wrong!</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {negativeIndex}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {negativeIndexConsole}
                </SyntaxHighlighter>
            </div>

            <p>Using <code>-1</code> to access an element in a list will give us the last element, <code>-2</code> will give us second-to-last element, and so on. This is not required, we could also access elements like this:</p>

            <h2>List Operations</h2>

            <h3>With Conditionals</h3>

            <p>Lists can be used within conditional statements. For example, we can check if a list is empty or not:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {listWithoutConditionalStatements}
                </SyntaxHighlighter>
            </div>

            <p>The above two conditional statements are equivalent. The second one is more concise and is generally preferred.</p>

            <h3 id="contains">Contains</h3>



            <p>We can also use the <code>in</code> operator to check if an element is present in a list:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {inOperator}
                </SyntaxHighlighter>
            </div>

            <p>If we want to check if an element is not in the list, we can use the <code>not in</code> operator:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {notInOperator}
                </SyntaxHighlighter>
            </div>

            <p>And in some use cases, we do not even need an <code>if</code> statement:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {containsList}
                </SyntaxHighlighter>
            </div>


            <h3 id="concatenate">Concatenate</h3>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {concatenateList}
                </SyntaxHighlighter>
            </div>



            <h2>List Looping</h2>

            <p>We can also loop through lists similar to how we loop through strings by using the length of the list:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {loopThroughList}
                </SyntaxHighlighter>
            </div>

            <p>We can also throw away the <code>len()</code> part and use just the <code>in</code> operator:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {loopThroughListWithJustIn}
                </SyntaxHighlighter>
            </div>

            <p>Both of these methods will print each element of the list on a separate line. If we do not need the index of the element, the second method is generally preferred since it is more concise.</p>



            <h2>List Append</h2>

            <p>We can do more than just change individual elements within a list. We can also add new elements to the end of a list using the <code>append()</code> function.</p>


            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {append}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {appendConsole}
                </SyntaxHighlighter>
            </div>

            <p>After calling append, the original list has been <strong>the original list has been modified to include the new element at the end. The length has increased from 3 to 4.
            </strong> to include the new element at the end. The <code>len</code> has increased from 3 to 4.</p>

            <blockquote>
                <p>As you will quickly notice, methods will either modify the list that calls it, or return a new value. It is an important factor to take note of!</p>
            </blockquote>

            <h2>List Pop</h2>

            <p>We can also remove elements from a list using the <code>pop()</code> method.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {pop}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {popConsole}
                </SyntaxHighlighter>
            </div>

            <p>By default, <code>pop()</code> removes the last element from the list. However, we can also specify an index to remove a specific element, as shown below.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {popSpecificElement}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {popSpecificElementConsole}
                </SyntaxHighlighter>
            </div>

            <p>Notice that we called <code>pop(0)</code> twice to remove the first two elements from the list. After removing the first element, the second element becomes the first element. So we call <code>pop(0)</code> again to remove the new first element.</p>

            <p>And finally, <code>pop()</code> actually returns the element that you removed. Example:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {popBack}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {popBackConsole}
                </SyntaxHighlighter>
            </div>

            <h2>Find the index of an element</h2>

            <p>We learned that we can determine if a list contains a specific element with the <code>in</code> operator. We can also find the index of an element in a list using the <code>index()</code> method.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {findTheIndex}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {findTheIndexConsole}
                </SyntaxHighlighter>
            </div>

            <p><code>.index()</code> will print the index of the first occurence of the element <code>3</code> in the list. There are two <code>3</code>s in the list, but the first one is at index 2, so <code>2</code> is printed. If the element is not present in the list, a <code>ValueError</code> will be raised.</p>

            <h2 id="slicing-lists">Slicing Lists</h2>

            <p>Just like with strings, we can also slice lists. The syntax is similar to slicing strings! To grab the sections from a list of only the elements you want, you can use the slicing operator (<code>:</code>) which specifies the start and end index. Slice <strong>does not</strong> change the original list</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {slice}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {sliceConsole}
                </SyntaxHighlighter>
            </div>

            <p>Here we get a portion of the list by specifying the start and end index.</p>

            <blockquote>
                <p>Oh ok, this is pretty simple.</p>
            </blockquote>

            <p>Hold you horses there <code>cow(boy|girl)</code>! This is the most basic version. It can get pretty complex very quickly, so let's take it one step at a time.</p>

            <p>We can omit (leave out) portions of the slice:</p>

            <ul>
                <li>Omitting the <em>start</em> index, it will default to the beginning of the list.</li>
                <li>Omitting the <em>end</em> index, it will default to the end of the list.</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {omitSections}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {omitSectionsConsole}
                </SyntaxHighlighter>
            </div>

            <p>We can use negative indicies:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {negativeIndices}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {negativeIndicesConsole}
                </SyntaxHighlighter>
            </div>

            <p>And just like with the <code>range()</code> function, we can optionally add a step:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {step}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {stepConsole}
                </SyntaxHighlighter>
            </div>

            <p><code>scores[1:5:2]</code> will give a slice of the <code>scores</code> list from index 1, up to but not including 5, skipping every 2nd value.</p>

            <blockquote>
                <p>It is important to note, that <strong>none</strong> of these operations modify the original list. They only return a new list with the specified slice.</p>
            </blockquote>

            <h3 id="reverse-a-list">Reverse a list</h3>

            <p>Using only the step section you can reverse a list quite easily:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {reverseList}
                </SyntaxHighlighter>
            </div>

            <h2 id="deletion">Deletion</h2>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {deleteFromList}
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

            <h2>List Functions</h2>

            <h3>Math</h3>

            <p>Python provides some built-in functions to get the sum, minimum, and maximum of a list.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {builtInFunctions}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {builtInFunctionsConsole}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li>the <code>sum()</code> function returns the sum of all the elements in the list</li>
                <li>the <code>min()</code> function returns the smallest element in the list</li>
                <li>the <code>max()</code> function returns the largest element in the list</li>
            </ul>

            <h2>List Methods</h2>

            <h3 id="split-a-string-into-a-list-of-words">Split a String Into a List of Words</h3>

            <p>The <code>.split()</code> method in Python is called on a string and returns a list by splitting the string based on a given <em>delimiter</em>. If no delimiter is provided, it will split the string on whitespace.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {splitListOfString}
                </SyntaxHighlighter>
            </div>

            <h3 id="join-a-list-of-strings-into-a-single-string">Join a List of Strings Into a Single String</h3>

            <p>The <code>.join()</code> method is called on a <strong>delimiter</strong> (what goes between all the words in the list), and takes a list of strings as input</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {joinListOfStrings}
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