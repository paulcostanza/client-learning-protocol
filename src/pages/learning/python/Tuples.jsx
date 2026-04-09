import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Tuples() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    const tuples101 = `my_tuple = ("this is a tuple", 45, True)
print(my_tuple[0])
print(my_tuple[1])
print(my_tuple[2])
print(my_tuple)`

    const tuples101Console = `this is a tuple
45
True
("this is a tuple", 45, True)`

    const slice = `my_tuple = (4, 5, 6)
print(my_tuple[1:])`

    const sliceConsole = `(5, 6)`

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
print(dog_age)`

    const tupleUnpackingConsole = `Fido
4`

    return (
        <div className="container">
            <h1>Tuples</h1>

            <h2 id="tuples">What's a tuple?</h2>

            <p><strong>Tuples</strong> are collections of data that are ordered and <strong>immutable</strong> (unchangeable - once a tuple is created it cannot be changed). You can think of a tuple as a <em>list</em> with a fixed size. They are created with round brackets.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {tuples101}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {tuples101Console}
                </SyntaxHighlighter>
            </div>

            <p>And we can slice just like a list:</p>

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

            <p>Just like list, slicing a tuple does not modify it. Instead, it creates a new tuple with the specified slice.</p>

            <p>We also:</p>

            <ul>
                <li>Cannot modify a tuple</li>
                <li>Call methods that modify it like <code>pop</code> or <code>append</code></li>
            </ul>

            <h2>Go ahead, mix those data types</h2>

            <p>While it's typically considered bad practice to store items of different types in a <em>List</em>, it is not a problem with Tuples. Because they have a fixed size, it's easy to keep track of which indices store which types of data.</p>

            <p>Tuples are often used to store very small groups (like 2 or 3 items) of data. For example, you might use a tuple to store a dog's name and age.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {fideo}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>There is a special case for creating single-item tuples. You must include a comma so Python knows it's a tuple and not regular parentheses.</p>
            </blockquote>


            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {singletuple}
                </SyntaxHighlighter>
            </div>

            <p>Here is an example of combining list and tuples:</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {listOfTuples}
                </SyntaxHighlighter>
            </div>

            <h2 id="tuple-unpacking">Tuple Unpacking</h2>

            <p>You can easily assign the values of a tuple to variables using <em>unpacking</em>.</p>

            <div className="">
                <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                    {tupleUnpacking}
                </SyntaxHighlighter>
            </div>

            <div className="">
                <SyntaxHighlighter language="console" style={tomorrow} className="code-snippet">
                    {tupleUnpackingConsole}
                </SyntaxHighlighter>
            </div>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="tuples"
            />
        </div>
    )
}