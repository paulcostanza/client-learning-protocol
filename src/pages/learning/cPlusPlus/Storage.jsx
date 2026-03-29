import ReviewQuiz from '../../../components/ReviewQuiz.jsx'

export default function Storage() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }

    return (
        <div className="container">
            <h1>Storage</h1>

            <h2>Storage Duration</h2>

            <p>In C++, <strong>storage duration</strong> is a property of an object that defines the minimum potential lifetime of the storage it occupies. This will determine when the memory is allocated and deallocated during program execution. It also helps prevent issues like memory leaks or using invalid memory. We have four main types of storage duration:</p>

            <ul>
                <li><strong>Automatic storage duration</strong> is allocated when its enclosing code block is entered and deallocated when the block is exited. This is the default for most local variables and function parameters, typically managed using the stack.</li>
                <li><strong>Static storage duration</strong> is allocated when the program begins (before <code>main()</code> is executed) and deallocated only when the program ends. There is only one instance of the object throughout the entire program's execution. This applies to all global variables (declared at <em>namespace</em> scope) and variables declared with the <code>static</code> or <code>extern</code> keywords.</li>
                <li><strong>Thread storage duration</strong> is allocated when the thread in which it is created begins and deallocated when the thread ends. Each thread has its own distinct instance of the object. This duration is specified using the <code>thread_local</code> keyword (C++11 represent).</li>
                <li><strong>Dynamic storage duration</strong> is explicitly allocated and deallocated by the programmer using dynamic memory management functions, primarily the <code>new</code> and <code>delete</code> operators. The lifetime of this storage is not tied to a specific scope, thread, or the program's entire run time, but rather to the explicit calls to the allocation/deallocation functions. To avoid memory leaks, it is recommended to use smart pointers (<code>std::unique_ptr</code> and <code>std::shared_ptr</code>) to manage dynamically allocated objects through the RAII principle (wtf?!).</li>
            </ul>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="storage"
            />
        </div>
    )
}