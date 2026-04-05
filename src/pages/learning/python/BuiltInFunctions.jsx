import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function BuiltInFunctions() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

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

            <h2>zip()</h2>

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

            <h2>Zip Dict</h2>

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