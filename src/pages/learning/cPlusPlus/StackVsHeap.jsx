import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReviewQuiz from '../../../components/ReviewQuiz.jsx'
import CallStack from '../../../assets/cPlusPlus/stackVsHeap/call stack.png'
import CallStackWithVariables from '../../../assets/cPlusPlus/stackVsHeap/call stack with variables.png'
import Memory from '../../../assets/cPlusPlus/stackVsHeap/memory.png'
import StackAndHeap from '../../../assets/cPlusPlus/stackVsHeap/stack vs heap.png'
import StackInAssembly from '../../../assets/cPlusPlus/stackVsHeap/stack in assembly.png'
import HeapInAssembly from '../../../assets/cPlusPlus/stackVsHeap/heap in assembly.png'

export default function StackVsHeap() {
    const quizImports = {
        cPlusPlus: () => import('../../../pages/quiz/database/CPlusPlusQuestions.js')
    }

    const intStackAllocation = `int value{ 5 };`

    const intHeapAllocation = `int* hvalue = new int;
*hvalue = 5;`

    const arrayAllocation = `int array[5]; // stack allocation

int* harray = new int[5]; // heap allocation

delete[] harray; // got to prevent memory leaks!`

    const structAllocation = `struct Vector3
{
    float x, y, z;
};

int main()
{
    Vector3 vector; // stack
    Vector3* hvector = new Vector3(); // heap

    delete hvector;

    return 0;
}`

    return (
        <div className="container">
            <h1>Stack Vs Heap</h1>

            <p>Having a good understanding about what your code is doing in memory can be really helpful to work out why things in your code have different behaviors and scopes.</p>

            <p>When our program starts, it is stored into memory. The memory of your application is stored into multiple parts:</p>
            <ul>
                <li>stack</li>
                <li>heap</li>
                <li>static/global segment</li>
                <li>text segment (machine code)</li>
            </ul>

            <p> The two ones we care about most, from a C++ point of view, are the <strong>stack</strong> and the <strong>heap</strong>.</p>

            <img src={Memory} alt="memory" className='img-in-reading' />

            <p>*The <strong>machine code</strong> is where your application is converted into instructions that your computer can understand.</p>

            <h2>Basics</h2>

            <p>When your application is launched, the operating system will load the entire program into memory as well as allocate a whole bunch of physical RAM. This will allow our application to run.</p>

            <p>The stack and the heap are two areas that are located in RAM. The stack will typically have a predefined size (depending on the OS it is between 1MB - 8MB), while the heap will have a predefined default that can grow and change as the application runs.</p>

            <p>Memory in our program is used so that we can actually store data. We need a place to store the data that we need to run our program, whether it is local variables, bringing data in from a file, and so on.</p>

            <p>The stack runs basically like the data structure stack, in that you can add/remove from the top, but you cannot access anything in the middle to the bottom of the stack.</p>

            <p>How we store data to the stack or the heap is called <strong>memory allocation</strong>.</p>

            <div className="">
                <SyntaxHighlighter language="c++" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {intStackAllocation}
                </SyntaxHighlighter>
            </div>

            <blockquote>Hey look at that, you just allocated memory to the stack! (It's automatic.) And you also gave it the value of 5.</blockquote>

            <p>In applications we have what is called the <strong>call stack</strong>. The call stack keeps track of the method that control should be returned to after the current method is finished executing. So whenever you call a method in your code, it gets added to the call stack, and is removed after execution of that method has finished.</p>

            <img src={CallStack} alt="call stack" className='img-in-reading' />

            <p>The call stack will also keep track of a few items inside of the <strong>stack frame</strong>. One is those items it keeps track of is the local variables in your method. So the call stack would look more like this:</p>

            <img src={CallStackWithVariables} alt="call stack with variables" className='img-in-reading' />

            <p>The stack frame also contains the parameters and return address (where to go back after the function finishes).</p>

            <h2>Heap</h2>

            <p>Now the heap, unlike the stack, allows you to store items in memory in <em>any order</em>.</p>

            <img src={StackAndHeap} alt="comparing the stack and the heap" className='img-in-reading' />

            <p>However, with this added ability it becomes a bit more complicated when it comes to adding/removing items, and therefore adding items to the heap has a higher overhead.</p>

            <div className="">
                <SyntaxHighlighter language="c++" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {intHeapAllocation}
                </SyntaxHighlighter>
            </div>

            <p>How allocating memory to the heap works:</p>

            <ul>
                <li><code>int*</code>: int pointer</li>
                <li><code>hvalue</code>: name of variable, h stands for heap just to help keep things clear</li>
                <li><code>new int</code>: new does the acutal allocation to the heap, int is the data type</li>
                <li><code>*hvalue</code>: dereference the value to assign it a value</li>
                <li><code>5</code>: our value for our heap variable</li>
            </ul>

            <blockquote>
                <ul>
                    <li><code>new</code> - here is where your memory lives (address)</li>
                    <li><code>*hvalue</code> - here is what is inside of it (value)</li>
                </ul>
            </blockquote>

            <p>Generally, the heap is used whenever you have data that is going to outlive what is on the call stack. Examples: a variable that is going to be accessed across different methods (maybe global variables), or some data that needs to be accessible after a method has run.</p>

            <blockquote>
                <p>So then how is heap memory removed?</p>
            </blockquote>

            <p>Depends on the programming language. Some have built in <em>garbage collectors</em> that look at the heap. It finds things that are not being used anymore and cleans them up. For example, a reference type that is declared in a method is no longer being used, and the pointer is no longer pointing to it, the garbage collector will come and clean it up.</p>

            <p>In other languages, like right here for C++, you must manually code to remove it.</p>

            <h3>Deeper dive into heap</h3>

            <p><strong><em>What do new and delete do?</em></strong></p>

            <p><code>new</code> is also similar to memory allocate, or <code>malloc</code>.</p>

            <p><code>malloc</code> calls the underlying operating system like platform specific function that will allocate memory for you on the heap.</p>

            <p>The way that it does this is when you start your application you get a certain amount of physical RAM allocated to you. Your program will maintain something called a <em>free list</em> which will keep track of which blocks of memory are free and where they are located so that when you ask for dynamic memory using <code>malloc</code> it will be able to go through the free list and find a block of memory that is at least as big as what you are asking for. It will give you a pointer that points to it. It will then also records things such as the size of the allocation, the fact the block is now allocated, and any other bookkeeping. Finally, it returns that pointer back.</p>

            <p>The implementation of malloc is dependent on its implementation for the OS you are working with.</p>

            <h3>Quick Sidenote</h3>

            <p>Smart pointers (<code>std::unique_ptr</code> or <code>std::shared_ptr</code>) are the same idea as <code>new</code>. <code>new</code> allocates raw memory onto the heap, while a smart pointer will manage heap memory safely.</p>

            <ul>
                <li><code>std::unique_ptr</code>: exclusive ownership</li>
                <li><code>std::shared_ptr</code>: shared ownership</li>
            </ul>

            <p>Something like <code>auto ptr = std::make_unique(5);</code> will allocate onto the heap, but automatically deletes memory, preventing leaks.</p>

            <p>Basicly, smart pointers use heap allocation internally but automatically manage memory, unlike raw <code>new</code>.</p>

            <h2>Stack vs Heap allocations with different data structures</h2>

            <p>Arrays work just the same as simple data types:</p>

            <div className="">
                <SyntaxHighlighter language="c++" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {arrayAllocation}
                </SyntaxHighlighter>
            </div>

            <blockquote>
                <p>Make sure not to create a <strong>dangling pointer</strong> - using a pointer after the memory has been freed!</p>
            </blockquote>

            <p>When we allocate variables in the stack, all that is happening is that the stack pointer (the pointer at the top of the stack) will simply move the amount of bytes needed. Example, you allocate an integer (an int is 4 bytes), the stack pointer moves 4 bytes, and that's it! If allocating an array with 5 elements of ints, that is a total of 20 bytes, the stack moves 20 bytes. Simple!</p>

            <p>Since all we are doing is stacking in the stack, it is fast. It takes about one CPU instruction to move the stack pointer and return the address of that stack pointer.</p>

            <p>And here we have an object: </p>

            <div className="">
                <SyntaxHighlighter language="c++" style={tomorrow}
                    wrapLines={true} className=" code-snippet">
                    {structAllocation}
                </SyntaxHighlighter>
            </div>

            <p>To fully appriciate the difficulty of the difference of allocating on the stack and heap, here is what allocating to the stack looks like on my local setup with the assembler:</p>

            <img src={StackInAssembly} alt="what stack allocation looks like from the assemblers point of view" className='img-in-reading' />

            <p>And here we have allocating to the heap:</p>

            <img src={HeapInAssembly} alt="what heap allocation looks like from the assemblers point of view" className='img-in-reading' />

            <p>Quite a difference to just set these objects up!</p>

            <hr />

            <h2>Review</h2>

            <ReviewQuiz
                quizImports={quizImports}
                subcategory="stack-vs-heap"
            />
        </div>
    )
}