import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function BuiltInFunctions() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const isinstance = `isinstance(object, classinfo)`

    const isinstanceTypeChecking = `age = 69
print(isinstance(age, int)) # returns True`

    const isinstanceCheckMultipleTypes = `num = 6.9
print(isinstance(num, (int, float))) # returns True`

    const isinstanceClassCheck = `class Animal:
    pass

class Dog(Animal):
    pass

my_dog = Dog()

print(isinstance(my_dog, Dog)) # returns True
print(isinstance(my_dog, Animal)) # returns True, because it accounts for inheritance`

    const isinstanceVsType = `# bool is techincally a subclass of int in python
print(isinstance(True, int)) # returns True since subclass logic matches
print(type(True) is int) # returns False since the exact type is bool`

    const zipExample = `a = [1, 2, 3]
b = [4, 5, 6]

print(zip(a, b))
print(list(zip(a, b)))`

    const zipExampleConsole = `<zip object at 0x7b85e8b3e5c0>
[(1, 4), (2, 5), (3, 6)]`

    const spongebobNoZip = `names = ["Spongebob", "Patrick", "Squidward"]
ages = [30, 35, 50]

for i in range(len(names)):
    name = names[i]
    age = ages[i]
    print(f"{name} is {age} years old")`

    const spongebobNoZipOutput = `Spongebob is 30 years old
Patrick is 35 years old`

    const spongebobWithZip = `names = ["Spongebob", "Patrick", "Squidward"]
ages = [30, 35, 50]
jobs= ["Cook", "Unemployed", "Cashier"]

data = zip(names, ages, jobs)

# unpack it!
for name, age, job in data:
    print(f"{name} is {age} years old {job}")`

    const spongebobWithZipOutput = `Spongebob is 30 years old Cook
Patrick is 35 years old Unemployed
Squidward is 50 years old Cashier`

    const zipToDict = `keys = ["a", "b", "c"]
values = [1, 2, 3]

d = dict(zip(keys, values))
print(d)`

    const zipToDictOutput = `{'a': 1, 'b': 2, 'c': 3}`

    const reverseDict = `d = {"a": 1, "b": 2}

reversed_dict = dict(zip(d.values(), d.keys()))
print(reversed_dict)`

    const reverseDictOutput = `{1: 'a', 2: 'b'}`

    return (
        <div className="container">
            <h1>Built-In Functions</h1>

            <h2><code>isinstance()</code></h2>

            <p><code>isinstance()</code> is a built-in function that checks if an object is an instance of a specified class or any of its subclasses. It returns <code>True</code> if it matches, and <code>False</code> if it does not.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {isinstance}
                </SyntaxHighlighter>
            </div>

            <ul>
                <li><code>object</code>: the variable or runtime data instance you want to test</li>
                <li><code>classinfo</code>: a class, primitive type, or a tuple of multiple classes/types</li>
            </ul>

            <h3>Use cases</h3>

            <p><strong>Basic type checking.</strong></p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {isinstanceTypeChecking}
                </SyntaxHighlighter>
            </div>

            <p><strong>Checking multiple types or logic.</strong> By passing a tuple as the second argument, <code>isinstance()</code> checks if the object is an instance of <em>any</em> type inside that tuple. The tuple acts like an <em>or</em> statement.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {isinstanceCheckMultipleTypes}
                </SyntaxHighlighter>
            </div>

            <p><strong>Inheritance and subclasses.</strong> <code>isinstance()</code> walks up the object's <em>method resolution order chain</em> (MRO). If the object belongs to a child class, it will automatically return <code>True</code> for the parent class as well.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {isinstanceClassCheck}
                </SyntaxHighlighter>
            </div>

            <p><strong>Works different that type.</strong> It works different than the built-in function <code>type()</code> as <code>type()</code> is more stric, requireing exact matches, ignores subclasses, and does not support tuples.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {isinstanceVsType}
                </SyntaxHighlighter>
            </div>

            <h3>Under the hood</h3>

            <p>At the interpreter layer, when you invoke <code>isinstance(obj, cls)</code>, python performs the following lookups:</p>

            <ol>
                <li>It looks to see if <code>cls</code> overrides behavior via a special <code>instancecheck</code> magic method.</li>
                <li>If absent, the CPython runtime checks the underlying type of the object (<code>obj.class</code>).</li>
                <li>It loops through the class's <code>mro</code> (method resolution order) to find a matching memory address representation of the queried class.</li>
            </ol>

            <h2><code>zip()</code></h2>

            <p><em>Zip is for paring...</em></p>

            <p><code>zip()</code> combines elements from multiple iterables, such as lists, position by position. It pairs elements by index, which makes managing multiple indices easier.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {zipExample}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {zipExampleConsole}
                </SyntaxHighlighter>
            </div>

            <p>Here we would like to print out data from two different lists. Notice how we need to keep track of both of them.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {spongebobNoZip}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {spongebobNoZipOutput}
                </SyntaxHighlighter>
            </div>

            <p>With <code>zip()</code> we can combine everything, making it much more convenient.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {spongebobWithZip}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {spongebobWithZipOutput}
                </SyntaxHighlighter>
            </div>

            <h3>Zip Dict</h3>

            <p>A very useful trick is to take a couple of lists and zip them into a dictionary. </p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {zipToDict}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {zipToDictOutput}
                </SyntaxHighlighter>
            </div>

            <p>And you can even reverse a dictionary:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {reverseDict}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {reverseDictOutput}
                </SyntaxHighlighter>
            </div>

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="built-in-functions"
            />

        </div>
    )
}