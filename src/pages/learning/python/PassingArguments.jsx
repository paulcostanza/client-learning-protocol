import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function PassingArguments() {
    const quizImports = {
        python: () => import('../../../pages/quiz/database/PythonQuestions.js')
    }

    return (
        <div className="container">
            <h1>Passing Arguments</h1>

            {/* 
            
            What IS THIS?
                - These are temporary notes because I am in the middle of something but still want to add them as the base to build off of. They are not organized and random. 
            
            TO DO
                - Pass by value vs. Pass by reference
                - Mutable vs. immutable objects
                - Modifying vs. reassigning
                - [] vs [:]
                - Shallow copies

            NOTES
                - Python does not strictly use traditional pass-by-value or pass-by-reference. Python uses object references / object sharing.
def add_item(items):
    items.append(4)

    nums = [1, 2, 3]
    add_item(nums)

    print(nums)
    # [1, 2, 3, 4]
                - the function recieves a reference to the same list object, so mutating the list affects the original.

Feature             | Pass by Value                                             | Pass by Reference
What is passed?     | A duplicate copy of the data.                             | The actual memory address of the variable.
Original Variable   | Safe. It cannot be modified by the function.              | Vulnerable. Changes inside the function change the original.
Memory              | Uses more memory (creates a separate copy).               | Highly efficient (shares the same memory space).
Performance         | Can be slow for huge data structures (due to copying).    | Fast because no data is copied.

            */}

            <p>Understanding the difference between <code>[]</code> and <code>[:]</code> is known as <strong>referencing</strong>: pass-by-reference vs. pass-by-value.</p>

            <h3>Mutable object</h3>

            <p>A list is a mutable object. This means list can be changed in-place. When you pass a list around or assign it to a variable, such as <code>result</code>, python <em>does not</em> make a new list. It just passes a <strong>reference</strong> (a memory address, or <em>pointer</em>) to that exact same list.</p>

            <h3>Shallow copy</h3>

            <p>When you do <code>path[:]</code> (or <code>path.copy()</code>), you are explicitly telling python <em>do not just give me a link to that memory address, but rather allocate brand new memory and make a fresh duplicate of elements right now.</em> It takes a snapshot of the current list it copies and will not be affected by changes outside of itself.</p>

            <blockquote>
                <p>If you modify a list using methods like <code>.append()</code>, <code>.pop()</code>, or <code>.sort()</code>, every variable pointing to that list will have the same change.</p>
            </blockquote>

            <hr />

            <h2>Review</h2>

            {/* <div className="">
                            <SyntaxHighlighter language="python" style={tomorrow} className="code-snippet">
                                {recursiveRecipe}
                            </SyntaxHighlighter>
                        </div> */}

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="backtracking"
            />
        </div>
    )
}
