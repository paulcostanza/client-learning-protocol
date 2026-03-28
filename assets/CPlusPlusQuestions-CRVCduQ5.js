const e=[{id:1,type:"radio",category:"c++",subcategory:"development-compiler-linker-libraries",title:"Compiler produces...",question:"What does the compiler produce after translating C++ source code?",options:["executable file","object file","source code","library file"],random:!0,answer:"object file",description:""},{id:2,type:"radio",category:"c++",subcategory:"development-compiler-linker-libraries",title:"Cannot linker",question:"What happens if the linker cannot resolve a reference between object files?",options:["the program runs with warnings","the linker generates an error and aborts","the compiler fixes the issue automatically","the source code is deleted","the program crashes"],random:!0,answer:"the linker generates an error and aborts",description:""},{id:3,type:"radio",category:"c++",subcategory:"introduction",title:"C++ > C",question:"What is the most notable innovation of C++ over C?",options:["garbage collection","object-oriented programming","dynamic typing","built-in GUI support"],random:!0,answer:"object-oriented programming",description:""},{id:4,type:"checkbox",category:"c++",subcategory:"stack-vs-heap",title:"Stack frame",question:"What is stored in a stack frame?",options:["local variables","parameters","return address","heap pointers","global variable"],random:!0,answer:["local variables","parameters","return address"],description:""},{id:5,type:"radio",category:"c++",subcategory:"stack-vs-heap",title:"Cannot linker",question:"What happens when a function finishes execution?",options:["its variables are individually deleted from memory","its stack frame is popped off the call stack","its memory is moved to the heap","its variables become global"],random:!0,answer:"its stack frame is popped off the call stack",description:""},{id:6,type:"radio",category:"c++",subcategory:"stack-vs-heap",title:"Why heap?",question:"Which of the following best describes the heap? It's memory...",options:["that only allows last-in, first-out access","that is automatically cleared after each function call","that allows dynamic allocation in any order","used only for storing machine code"],random:!0,answer:"that allows dynamic allocation in any order",description:"The heap allows memory to be allocated and freed in any order, unlike the stack's strict LIFO behavior"},{id:7,type:"checkbox",category:"c++",subcategory:"stack-vs-heap",title:"Do you stack?",question:"Which of the following statements about the stack is correct",options:["grows dynamically during runtime with no size limit","has a fixed size","very fast to allocate","very slow to allocate","must be manually `delete`d","uses a *free list* to manage memory allocation"],random:!0,answer:["has a fixed size","very fast to allocate"],description:`- "grows dynamically during runtime with no size limit" - describes the heap
- "very slow to allocate" - the stack is quick because you can only pop and push onto the stack, heap is the dynamic one
- "must be manually \`delete\`d" - stack memory is automatically managed
- "uses a *free list* to manage memory allocation" - free lists are associated with heap allocators, not the stack`},{id:8,type:"input",category:"c++",subcategory:"stack-vs-heap",title:"Remove, or do you?",question:`How would you free memory allocated with the following code? If the code is all set and does not need to be manually removed, please type in N/A.
~~~c++
int* harray = new int[5];
~~~
        `,options:[""],random:!0,answer:"^\\s*delete\\s*\\[\\]\\s*harray\\s*;\\s*$",description:"Answer: `delete[] harray;`\n- `new int[5]` allocates an array onto the heap\n- you must use `delete[]` to properly free it\n- N/A would cause a memory leak!"},{id:9,type:"checkbox",category:"c++",subcategory:"stack-vs-heap",title:"Smart pointers",question:"Which of the following statements about smart pointers is correct? They...",options:["allocate memory on the stack instead of the heap","are the same thing as using the `new` keyword","automatically manage heap memory","preven memory leaks","do not use pointers"],random:!0,answer:["automatically manage heap memory","preven memory leaks"],description:`- "grows dynamically during runtime with no size limit" - describes the heap
- "very slow to allocate" - the stack is quick because you can only pop and push onto the stack, heap is the dynamic one
- "must be manually \`delete\`d" - stack memory is automatically managed
- "uses a *free list* to manage memory allocation" - free lists are associated with heap allocators, not the stack`},{id:10,type:"radio",category:"c++",subcategory:"stack-vs-heap",title:"Why new?",question:"Which of the following best describes what `new` returns?",options:["the value stored in memory","a reference to a variable","the address of the allocated memory","the size of the allocated memory"],random:!0,answer:"the address of the allocated memory",description:`\`new\` allocates memory on the heap and returns a pointer, which is the address of that memory. Example: 
~~~c++
int* nums = new int[3]; // address 0x12fad32 is returned

nums[0]  // at 0x12fad32
nums[1]  // at 0x12fad36 (assuming 4-byte ints)
nums[2]  // at 0x12fad3A
~~~

*The exact address is just an example, and results will vary*`},{id:11,type:"radio",category:"c++",subcategory:"stack-vs-heap",title:"Stack overflow 101",question:"Which situation is most likely to cause a stack overflow?",options:["allocating memory with `new int` repeatedly","creating a very large local array inside a function","using `delete` incorrectly","using `std::stared_ptr`"],random:!0,answer:"creating a very large local array inside a function",description:`The stack can run out of space since it has a fixed size. A *stack overflow* occurs when you use more stack memory than is available. 
        
Another example would be calling a function recursively. Each call uses stack space and the calls never stop:
        
~~~c++
void func() {
    func(); // infinite recursion
}
~~~

*Stack overflows happen when you have too much shit on the stack*
`},{id:12,type:"radio",category:"c++",subcategory:"stack-vs-heap",title:"Solve it",question:`What is the final value of \`value\`?
        
~~~c++
int value = 10;
int* ptr = &value;
int& ref = value;

*ptr = 20;
ref = 30;
`,options:["10","20","30","undefined behavior"],random:!1,answer:"30",description:`Step by step: 
        
~~~c++
int value = 10;     // value = 10
int* ptr = &value;  // ptr points to value
int& ref = value;   // ref is another name for value

*ptr = 20;          // dereference pointer, changes value
ref = 30;           // value = 20
~~~

- pointer: go to that address and modify it
- reference: this *is* the variable
`},{id:13,type:"radio",category:"c++",subcategory:"stack-vs-heap",title:"Pointer I",question:`What is the final value of \`x\`?
        
~~~c++
int x = 5;
int* p1 = &x;
int* p2 = p1;

*p1 = 10;
*p2 = 20;

std::cout << x;
`,options:["5","10","20","undefined behavior"],random:!1,answer:"20",description:`Step by step: 
        
~~~c++
int x = 5;      // x = 5
int* p1 = &x;   // p1 points to x
int* p2 = p1;   // p2 is a copy of the pointer, also points to x

*p1 = 10;       // changes value at that address, x = 10
*p2 = 20;       // changes value at that address, x = 20

std::cout << x;
~~~

- \`p1\` & \`p2\` point to the same location
- modifying through either will modify the same variable
`},{id:14,type:"radio",category:"c++",subcategory:"stack-vs-heap",title:"Scope it out",question:`What is wrong with this code?
        
~~~c++
int* ptr;

{
    int x = 5;
    ptr = &x;
}

std::cout << *ptr;
~~~
`,options:["nothing is wrong","memory leak","dangling pointer","stack overflow"],random:!0,answer:"dangling pointer",description:"- `x` is a stack variable that only exists inside of that block `{}` \n- when the block ends `x` is destroyed\n- so the line `std::cout << *ptr;` still holds the old address of `x`, but `x` no longer exists!\n\nThat pointer is now dangling.\n"},{id:15,type:"radio",category:"c++",subcategory:"stack-vs-heap",title:"nullptr?",question:`What will happen here?
        
~~~c++
int* ptr = new int(5);
delete ptr;

if (ptr != nullptr) {
    std::cout << *ptr;
}
~~~
`,options:["safe because of the null check","prints 5","undefined behavior","compile-time error"],random:!0,answer:"undefined behavior",description:"- `delete ptr;` does not delete the variable, only deletes the value it pointed to, it still exists and holds the same address\n- `if (ptr != nullptr)` is valid and true because `delete ptr;` *does not* automically set `ptr` to `nullptr` (our safety check fails!)\n- `std::cout << *ptr;` dereferences a dangling pointer which will cause undefined behavior\n\nFor this to work properly, you would need to add in `ptr = nullptr` after `delete ptr;` and before the if statement.\n"},{id:16,type:"radio",category:"c++",subcategory:"stack-vs-heap",title:"Just delete it bro",question:`Any issues with this code?
        
~~~c++
int* ptr = new int[5];
delete ptr;
~~~
`,options:["nope, good to go","memory leak","undefined behavior","stack overflow"],random:!0,answer:"undefined behavior",description:"Answer: undefined behavior due to wrong delete\n\n`new int[5]` allocates an array, so you must use `delete[] ptr;`. Using just `delete` is for single objects. Using the wrong one can corrupt memory, leading to undefined behavior.\n\n- `new` allocation -> `delete` deallocation\n- `new[]` allocation -> `delete[]` deallocation\n"}];export{e as default};
