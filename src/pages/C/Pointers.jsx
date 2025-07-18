import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Pointers() {

    const pointer101 = `int x = 5;
int *ptr = &x;`

    const pointerOperations = `int x = 10;
int *p = &x;

printf("%d\\n", *p); // prints: 10`

    const pointerArithmetic = `int arr[3] = {1, 2, 3};
int *p = arr;

*(p + 1) == arr[1]; // true`

    const arraysAndPointers = `arr[i] == *(arr + i);
&arr[i] == arr + i;`

    const cannotReassignArrays = `int arr[3] = {1, 2, 3};
int *p = arr;

printf("%d\\n", *(p + 2)); // 3`

    const stringsAndPointers = `char *s = "hello";

while (*s) 
{
    putchar(*s++);
}`

    const pointerToPointer = `int x = 10;
int *p = &x;
int **pp = &p;

printf("%d\\n", **pp); // 10`

    const modifyPointerViaFunction = `void update(int **ptr)
{
    *ptr = malloc(sizeof(int));
    **ptr = 100;
}

// Call it like:
int *p = NULL;
update(&p);

// You have changed what p points to`

    const functionPointers = `int add(int a, int b) { return a + b; }

int (*fptr)(int, int) = add;

printf("%d", fptr(2, 3)); // 5`

    const arrayOfFunctionPointers = `int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

int (*ops[2])(int, int) = { add, sub };

printf("%d", ops[0](5, 2)); // 7
printf("%d", ops[1](5, 2)); // 3`

    const voidPointer = `// can hold the address of any type
void *ptr;
int x = 5;
ptr = &x;

// but you need to cast before dereferencing
printf("%d\\n", *(int*)ptr);`

    const pointerToArrayVsArrayToPointer = `int arr[4] = {1, 2, 3, 4};
int (*p1)[4]; // pointer to array 
int* p2[4]; // array of pointers`

    const twoDArrays = `int arr[2][3] = {{1, 2, 3}, {4, 5, 6}};
int (*p)[3] = arr;

printf("%d\\n", p[1][2]); //6

// or with int** + malloc (dynamic)

int** arr = malloc(rows * sizeof(int*));
for (int i = 0; i < rows; ++i)
    arr[i] = malloc(cols * sizeof(int));`

    const pointerIsNull = `if (ptr == NULL) handle_error();`
    return (
        <div>
            <h2>What is a pointer?</h2>
            <p>
                A <strong>pointer</strong> is a variable that stores the address of another variable. It lets you directly access and modify memory.
            </p>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {pointer101}
                </SyntaxHighlighter>
            </div>

            <p>
                <code>ptr</code> holds the memory address of x. Use <code>*ptr</code> to access or modify the value.
            </p>

            <h4>Why use pointers?</h4>
            <ul>
                <li>dynamic memory allocation</li>
                <li>sharing data across functions</li>
                <li>efficient array and string manipulation</li>
                <li>implementing data structures (linked list, trees)</li>
                <li>calling functions dynamically (function pointers)</li>
            </ul>

            <h4>Pointer operators:</h4>
            <ul>
                <li><code>&amp;x</code>: address of <code>x</code></li>
                <li><code>p</code>: holds address of <code>x</code></li>
                <li><code>*p</code>: dereference - gives value at address</li>
            </ul>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {pointerOperations}
                </SyntaxHighlighter>
            </div>

            <h4>Pointer arithmetic</h4>
            <p>Pointers support arithmetic like addition and subtraction</p>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {pointerArithmetic}
                </SyntaxHighlighter>
            </div>

            <p>
                Because <code>p + 1</code> skips to the next memory slot of an <code>int</code>.
            </p>

            <h4>Arrays &amp; Pointers</h4>
            <p>Arrays are closely tied to pointers.</p>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {arraysAndPointers}
                </SyntaxHighlighter>
            </div>

            <p>
                You cannot reassign the array variable itself, such as <code>arr = p</code>, but you can assign a pointer to point to the array.
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {cannotReassignArrays}
                </SyntaxHighlighter>
            </div>

            <h4>Strings &amp; Pointers</h4>
            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {stringsAndPointers}
                </SyntaxHighlighter>
            </div>

            <p>
                <code>s</code> points to first char <code>h</code>. Therefore...
                <ul>
                    <li><code>s + 1</code> points to <code>e</code></li>
                    <li><code>*(s + 4)</code> points to <code>o</code></li>
                    <li><code>s[2]</code> points to <code>l</code></li>
                </ul>
            </p>

            <h4>Pointer to Pointer <code>(int**)</code></h4>
            <p>
                A pointer can point to another pointer. This is useful for:
                <ul>
                    <li>dynamic 2D arrays</li>
                    <li>modifying pointer arguments in functions</li>
                </ul>
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {pointerToPointer}
                </SyntaxHighlighter>
            </div>

            <h4>Modifying Pointer via functions</h4>
            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {modifyPointerViaFunction}
                </SyntaxHighlighter>
            </div>


            <h4>Function pointers</h4>
            <p>
                You can store functions in pointers. This is great for:
                <ul>
                    <li>callbacks</li>
                    <li>passing behavior into functions</li>
                    <li>implementing polymorphism in C</li>
                </ul>
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {functionPointers}
                </SyntaxHighlighter>
            </div>

            <h4>Array of function pointers</h4>
            <p>Powerful in interpreters, routers, menus, etc.</p>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {arrayOfFunctionPointers}
                </SyntaxHighlighter>
            </div>

            <h4>Void pointers <code>(void*)</code></h4>
            <p>
                A <code>void*</code> is a generic pointer type in C. You can assign it the address of any variable, but you must cast it to the correct type before dereferencing.
            </p>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {voidPointer}
                </SyntaxHighlighter>
            </div>

            <p>Also note that you cannot perform pointer arithmetic on a <code>void*</code> in standard C.</p>

            <h4>Pointer to Array vs Array of Pointers</h4>
            <p>
                Use <code>(*p1)[i]</code> vs <code>p2[i]</code> accordingly. Clear naming helps avoid confusion. Example, <code>(*p1)[i]</code> accesses the <em>i-th</em> element of an array pointed to by <code>p1</code>, while <code>p2[i]</code> accesses the <em>i-th</em> pointer in an array of pointers.
            </p>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {pointerToArrayVsArrayToPointer}
                </SyntaxHighlighter>
            </div>

            <h4>2D Arrays &amp; Pointers</h4>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {twoDArrays}
                </SyntaxHighlighter>
            </div>

            <h4>Common Mistakes</h4>
            <ul>
                <li>dereferencing before initializing <code>p</code> (don't do this <code>*p = 10;</code> before <code>p</code> has a value)</li>
                <li>double freeing memory</li>
                <li>accessing freed memory</li>
                <li>mixing up <code>*p</code> and <code>&amp;p</code></li>
                <li>not checking malloc return</li>
            </ul>
            <p>And always:</p>

            <div className="">
                <SyntaxHighlighter language="c" style={tomorrow} showLineNumbers
                    wrapLines={true} className=" code-snippet">
                    {pointerIsNull}
                </SyntaxHighlighter>
            </div>

        </div>

    )

}