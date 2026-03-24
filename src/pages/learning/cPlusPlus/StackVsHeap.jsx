import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import CallStack from '../../../assets/cPlusPlus/stackVsHeap/call stack.png'
import CallStackWithVariables from '../../../assets/cPlusPlus/stackVsHeap/call stack with variables.png'
import Memory from '../../../assets/cPlusPlus/stackVsHeap/memory.png'
import StackAndHeap from '../../../assets/cPlusPlus/stackVsHeap/stack vs heap.png'

export default function StackVsHeap() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }
    return (
        <div className="container">
            <h1>Stack Vs Heap foo...</h1>

            <p>Having a good understanding about what your code is doing in memory can be really helpful to work out why things have different scopes.</p>

            <p>The memory of your application is stored into multiple parts:</p>
            <ul>
                <li>text segment (machine code)</li>
                <li>stack</li>
                <li>heap</li>
                <li>static/global segment</li>
            </ul>

            <p>We will only be talking about the stack and heap for this section.</p>

            <img src={Memory} alt="memory" className='img-in-reading' />

            <p>*The <strong>machine code</strong> is where your application is converted into instructions that your computer can understand.</p>

            <h2>Basics</h2>

            <p>The stack runs basically like the data structure stack, in that you can add/remove from the top, but you cannot access anything in the middle to the bottom of the stack.</p>

            <p>In applications we have what is called the <strong>call stack</strong>. The call stack keeps track of the method that control should be returned to after the current method is finished executing. So whenever you call a method in your code, it gets added to the call stack, and is removed after execution of that method is finished.</p>

            <img src={CallStack} alt="call stack" className='img-in-reading' />

            <p>The call stack will also keep track of a few things inside of the <strong>stack frame</strong>.</p>

            <p>One is that it keeps track of the local variables in your method. So the call stack would look more like this:</p>

            <img src={CallStackWithVariables} alt="call stack with variables" className='img-in-reading' />

            <p>The stack frame also contains the parameters and return address (where to go back after the function finishes).</p>

            <h2>Heap</h2>

            <p>Now the heap, unlike the stack, allows you to store items in memory in <em>any order</em>.</p>

            <img src={StackAndHeap} alt="comparing the stack and the heap" className='img-in-reading' />

            <p>
                However, with this added ability it becomes a bit more complicated when it comes to adding/removing items, and therefore adding items to the heap has a higher overhead.
            </p>

            <p>
                Generally, the heap is used whenever you have data that is going to outlive what is on the call stack. Examples: a variable that is going to be accessed across different methods (maybe global variables), or some data that needs to be accessible after a method has run.
            </p>

            <blockquote>
                <p>So then how is memory removed and popped off like the stack?</p>
            </blockquote>

            <p>Depends on the programming language. Some have built in <em>garbage collectors</em> that look at the heap. It finds things that are not being used anymore and cleans them up. This is how when a reference type that is declared in a method is no longer used, the pointer goes, and since nothing is pointed to it, the garbage collector comes and will clean it up.</p>

            <p>In other languages, like right here for C++, you must manually code to remove it.</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="stack-vs-heap"
            />
        </div>
    )
}