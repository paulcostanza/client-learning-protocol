export default [
    {
        id: 1,
        type: 'radio',
        question: "Which properly declares a constant in \`C\`?",
        options: [
            '\`int meaning_of_life const = 42;\`',
            '\`int meaning_of_life = 42\`',
            '\`constant int meaning_of_life = 42;\`',
            '\`const int meaning_of_life = 42;\`',
        ],
        answer: '\`const int meaning_of_life = 42;\`'
    },
    {
        id: 2,
        type: 'radio',
        question: 'Which is not valid?',
        options: [
            '\`void x = None;\`',
            '\`void ssh_terminal_shop(char *address)\`',
            '\`void print_hello(void)\`',
            '\`int get_number(void)\`'
        ],
        answer: '\`void x = None;\`',
    },
    {
        id: 3,
        type: 'radio',
        question: 'The size of a data type is the same on every system (32-bit, 64-bit, etc.)',
        options: [
            'True',
            'False'
        ],
        answer: 'False'
    },
    {
        id: 4,
        type: 'radio',
        question: 'What is the purpose of \`#pragma once\` in a header file?',
        options: [
            'It prevents a header file from being included more than once, avoiding redefinition errors',
            'It improves the performance of the program',
            'It automatically generates function prototypes',
            'It allows a header file to be included multiple times in the same program'
        ],
        answer: 'It prevents a header file from being included more than once, avoiding redefinition errors'
    },
    {
        id: 5,
        type: 'radio',
        question: 'Which header file must be included to use \`printf\` in \`C\`?',
        options: [
            '\`stdlib.h\`',
            '\`string.h\`',
            '\`stdio.h\`',
            '\`print.h\`'
        ],
        answer: '\`stdio.h\`',
        description: '\`stdio.h\` stands for Standard Input/Output'
    },
    {
        id: 6,
        type: 'radio',
        question: 'What does the \`%d\` format specifier print in \`printf\`?',
        options: [
            'A character',
            'A floating point number',
            'An integer',
            'A string',
        ],
        answer: 'An integer',
        description: 'For \`%d\`, think *decimal integer*'
    },
    {
        id: 7,
        type: 'checkbox',
        question: 'What does the \`void\` keyword indicate in a function signature?',
        options: [
            'The function returns a value',
            'The function takes no arguments',
            'The function is private',
            'The function is static',
            'returns nothing'
        ],
        answer: ['The function takes no arguments', 'returns nothing'],
        description: `Three ways this could happen...
~~~C
int return69(void) {} // returns int, takes no arguments
~~~

~~~C
void return69(int num) {} // returns nothing, takes an int argument
~~~

~~~C
void return69(void) {} // returns nothing, takes no arguments
~~~
        `
    },
    {
        id: 8,
        type: 'radio',
        question: 'What is the main reason for using header guards or \`#pragma\` once in header files?',
        options: [
            'To speed up the program',
            'To prevent multiple inclusions of the same header file',
            'To make the code more readable',
            'To enable debugging'
        ],
        answer: 'To prevent multiple inclusions of the same header file'
    },
    {
        id: 9,
        type: 'radio',
        question: 'What type does the \`sizeof\` operator return?',
        options: [
            '\`int\`',
            '\`float\`',
            '\`size_t\`',
            '\`double\`'
        ],
        answer: '\`size_t\`'
    },
    {
        id: 10,
        type: 'radio',
        question: '\`sizeof(struct)\` will always result in the same value as the sum of \`sizeof(field)\` for each field in the struct.',
        options: [
            'True',
            'False'
        ],
        answer: 'False',
        description: `Compilers often add **padding** between fields to ensure proper data alignment. This is done to make memory access efficient for the CPU.

~~~C
typedef struct Human{
    char first_initial; // 1 byte
    int age;            // 4 bytes
    double height;      // 8 bytes
} human_t;
~~~

Even though you expect the \`sizeof(human_t)\` to be 13, alignment requirements might make the compiler insert padding which means the actual size is larger than 13 bytes.

\`sizeof(struct)\` includes both the data and any padding inserted by the compiler, while \`sizeof(field)\` only gives the size of the data.`
    },
    {
        id: 11,
        type: 'radio',
        question: 'What is the main purpose of using structs in C?',
        options: [
            'To perform mathematical operations',
            'To group multiple fields or data points into one object',
            'To create loops',
            ' To manage memory allocation automatically'
        ],
        answer: 'To group multiple fields or data points into one object'
    },
    {
        id: 12,
        type: 'radio',
        question: 'Which of the following is NOT a valid way to initialize a struct in C?',
        options: [
            'Zero initializer',
            'Positional initializer',
            'Designated initializer',
            'Dynamic initializer'
        ],
        answer: 'Dynamic initializer'
    },
    {
        id: 13,
        type: 'radio',
        question: 'How do you access a field of a struct variable (not a pointer)?',
        options: [
            '\`->\`',
            '\`:\`',
            '\`.\`',
            '\`[]\`'
        ],
        answer: '\`.\`'
    },
    {
        id: 14,
        type: 'checkbox',
        question: `What does the following code do?
~~~C
struct City c = {0};
~~~ 
    `,
        options: [
            'Sets all fields to random values',
            'Sets all fields to random values (except for pointers)',
            'Sets all fields to zero',
            'Sets all fields to zero (except for pointers)',
            'Sets all fields to \`NULL\`',
            'Sets all fields to \`NULL\` (except for pointers)',
            'Leaves fields uninitialized',
            'Leaves fields uninitialized (except for pointers)',
            'Sets pointers to a random value',
            'Sets pointers to zero',
            'Sets pointers to \`NULL\`'
        ],
        answer: [
            'Sets all fields to zero (except for pointers)',
            'Sets pointers to \`NULL\`'
        ]
    },
    {
        id: 15,
        type: 'radio',
        question: 'What is the effect of using \`typedef\` with a struct?',
        options: [
            'It makes the struct immutable',
            'It allows you to use a shorter alias for the struct type',
            'It automatically initializes the struct',
            'It prevents the struct from being used in functions'
        ],
        answer: 'It allows you to use a shorter alias for the struct type'
    },
    {
        id: 16,
        type: 'radio',
        question: 'Why might the size of a struct be larger than the sum of its fields\' sizes?',
        options: [
            'Compiler optimization',
            'Padding for alignment',
            'Unused memory',
            'All structs are always 32 bytes',
            'All structs are always 64 bytes'
        ],
        answer: 'Padding for alignment'
    },
    {
        id: 17,
        type: 'checkbox',
        question: 'Which operator(s) should you use to access a field from a pointer to a struct?',
        options: [
            '\`.\`',
            '\`:\`',
            '\`->\`',
            '\`=>\`',
            '\`*\`',
            '\`&\`',
            '\`&&\`',
            '\`&&&\`',
            '\`|\`',
            '\`||\`',
            '\`|||\`',
            '\`:)\`'
        ],
        answer: [
            '\`->\`'
        ]
    },
    {
        id: 18,
        type: 'radio',
        question: 'What is a recommended way to minimize padding in a struct?',
        options: [
            'Put all char fields first',
            'Order fields from largest to smallest by size',
            'Use only int fields',
            'Use pointers for all fields',
            'Order fields from smallest to largest by size'
        ],
        answer: 'Order fields from largest to smallest by size'
    },
    {
        id: 19,
        type: 'radio',
        question: `What happens if you try to return multiple values from a function in C like this: 
~~~C
return x * scale, y * scale, z * scale;
~~~`,
        options: [
            'It returns all three values',
            'It returns only the first value',
            'It returns only the last value',
            'It causes a compile error',
            'It returns a pointer',
            'It causes a syntax error'
        ],
        answer: 'It returns only the last value'
    },
    {
        id: 20,
        type: 'checkbox',
        question: `What is the \`.h\` file used for in C?`,
        options: [
            'To store function implementations',
            'To declare types',
            'To execute the main function',
            'To store only global variables',
            'To declare function prototypes'
        ],
        answer: [
            'To declare types',
            'To declare function prototypes'
        ]
    },
    {
        id: 21,
        type: 'radio',
        question: 'What does a pointer variable store in C?',
        options: [
            'the value of another variable',
            'the address of another variable',
            'the size of another variable',
            'the type of another variable'
        ],
        answer: 'the address of another variable'
    },
    {
        id: 22,
        type: 'radio',
        question: 'Which operator is used to get the address of a variable?',
        options: [
            '\`*\`',
            '\`&\`',
            '\`%\`',
            '\`#\`'
        ],
        answer: '\`&\`'
    },
    {
        id: 23,
        type: 'radio',
        question: 'What does the expression \`*p\` do if \`p\` is a pointer?',
        options: [
            'assigns a value to \`p\`',
            'returns the address stored in \`p\`',
            'dereferences \`p\` to get the value at the address',
            'multiplies \`p\` by the address'
        ],
        answer: 'dereferences \`p\` to get the value at the address'
    },
    {
        id: 24,
        type: 'radio',
        question: 'Which of the following is *not* a common use of pointers in C?',
        options: [
            'dynamic memory allocation',
            'sharing data across functions',
            'efficient array and string manipulation',
            'automatic variable type detection'
        ],
        answer: 'automatic variable type detection'
    },
    {
        id: 25,
        type: 'radio',
        question: 'What is the result of \`*(p + 1)\` if \`p\` points to the first element of an integer array?',
        options: [
            'the value of the first element',
            'the value of the second element',
            'the value of the third element',
            'the address of the first element',
            'the address of the second element',
            'the address of the third element',
        ],
        answer: 'the value of the second element'
    },
    {
        id: 26,
        type: 'radio',
        question: `After executing the following code, what does the variable \`ptr\` hold and what does the statement \`*ptr = 10;\` do?
~~~C
int x = 5;
int *ptr = &x;
*ptr = 10;
~~~
        `,
        options: [
            '\`ptr\` holds the value 5, \`*ptr = 10;\`, sets \`ptr\` to 10',
            '\`ptr\` holds the address of \`x\`, \`*ptr = 10;\`, sets \`x\` to 10',
            '\`ptr\` holds the value 10, \`*ptr = 10;\`, sets \`x\` to 10',
            '\`ptr\` holds the address of \`x\`, \`*ptr = 10;\`, sets \`ptr\` to 10'
        ],
        answer: '\`ptr\` holds the address of \`x\`, \`*ptr = 10;\`, sets \`x\` to 10'
    },
    {
        id: 27,
        type: 'radio',
        question: 'Which of the following statements about pointer arithmetic is correct?',
        options: [
            '\`*(p + 1)\` accesses the next integer value in an array pointed to by \`p\`',
            '\`*(p + 1)\` always points to the first element of the array',
            '\`*(p + 1)\` is invalid syntax in C',
            '\`*(p + 1)\` changes the value of \`p\`',
        ],
        answer: '\`*(p + 1)\` accesses the next integer value in an array pointed to by \`p\`',
    },
    {
        id: 28,
        type: 'radio',
        question: 'Which statement about arrays and pointers in C is correct?',
        options: [
            'you can reassign an array name to point to a different location',
            '\`arr[i]\` is equivalent to \`*(arr + i)\`',
            '\`&arr[i]\` is always equal to \`arr[i]\`',
            'arrays and pointers are completely unrelated in C'
        ],
        answer: '\`arr[i]\` is equivalent to \`*(arr + i)\`',
    },
    {
        id: 29,
        type: 'radio',
        question: 'What does \`*(s + 3)\` return if \`s\` points to \`"hello"\`?',
        options: [
            '\`h\`',
            '\`e\`',
            'the first \`l\`',
            'the second \`l\`',
            '\`o\`',
        ],
        answer: 'the second \`l\`'
    },
    {
        id: 30,
        type: 'radio',
        question: 'Why does the loop \`while (82) { putchar(*s++); }\` stop printing characters when iterating over a string in C?',
        options: [
            'because it reaches the end of the array',
            'because it encounters a space character',
            'because it encounters the null terminator',
            'because it runs out of memory'
        ],
        answer: 'because it encounters the null terminator',
        description: 'This little guy, \`\\0\`, is the *null terminator*, which is automatically added at the end of every string in C.'
    },
    {
        id: 31,
        type: 'radio',
        question: `What does the function \`update\` do in the following code?
~~~C
void update(int *ptr)
{
    *ptr = malloc(sizeof(int));
    **ptr = 100;
}

// update gets called...
int *p = NULL;
update(&p);
~~~
        `,
        options: [
            'it sets \`p\` to point to a newly allocated integer and assigns 100 to that integer',
            'it assigns 100 to \`p\`',
            'it frees the memory pointed to by \`p\`',
            'it sets \`p\` to \`NULL\`'
        ],
        answer: 'it sets \`p\` to point to a newly allocated integer and assigns 100 to that integer',
        description: `- \`int **ptr\` means the function takes a pointer to a pointer to an integer
- inside the function, \`*ptr = malloc(sizeof(int));\` allocates memory for one integer and makes \`*ptr\` (which is \`p\` in the caller) point to this new memory
- then, \`**ptr = 100;\` sets the value at the newly allocated memory to \`100\`

So after calling \`update(&p);\`, \`p\` points to a new integer in memory, and that integer's value is \`100\`

This lets a function allocate memory and update the caller's pointer to point to it, which is important for dynamic memory management in C. `
    },
    {
        id: 32,
        type: 'radio',
        question: 'How would you access the third integer in an array using a pointer to an array?',
        options: [
            '\`*p1[2]\`',
            '\`(*p1)[2]\`',
            '\`p1[2]\`',
            '\`*(*p1 + 2)\`',
        ],
        answer: '\`(*p1)[2]\`',
        description: `- \`p1\` is a pointer to an array of 4 integers (\`int (*p1)[4];)
- to access the third element, you first dereference \`p1\` to get the array (\`*p1\`), then use \`[2]\` to get the third element`

    },
    {
        id: 33,
        type: 'radio',
        question: 'How would you access the value pointed to by the second pointer in an array of pointers?',
        options: [
            '\`p2[1]\`',
            '\`*p2[1]\`',
            '\`(*p2)[1]\`',
            '\`p2(*1)\`',
        ],
        answer: '\`*p2[1]\`',
        description: `- \`p2\` is an array of 4 pointers to integers (\`int* p2[4];\`)
- \`p2[1]\` gives you the second pointer in the array
- to get the value that pointer points to, you dereference it: \`*p2[1]\``
    },
    {
        id: 34,
        type: 'radio',
        question: 'What can happen if you dereference a pointer before it is initialized?',
        options: [
            'the program will always print zero',
            'the program may crash or behave unpredictably',
            'the pointer will be automatically initialized',
            'the compiler will fix the error'
        ],
        answer: 'the program may crash or behave unpredictably',
        description: 'Dereferencing an uninitialized pointer can lead to accessing invalid memory. This can cause crashes or unpredictable behavior'
    },
    {
        id: 35,
        type: 'radio',
        question: 'What is a possible consequence of double freeing memory?',
        options: [
            'the memory will be reused safely',
            'the program may crash or corrupt memory',
            'the pointer will be set to NULL',
            'the memory will be locked'
        ],
        answer: 'the program may crash or corrupt memory',
        description: 'Freeing memory twice can corrupt the memory management system, leading to crashes or security issues'
    },
    {
        id: 36,
        type: 'radio',
        question: 'Why is it important to check the result of \`malloc\`?',
        options: [
            'To ensure the pointer is not \`NULL\` before using it',
            'to automatically free memory',
            'to avoid using global variables',
            'to prevent pointer arithmetic'
        ],
        answer: 'To ensure the pointer is not \`NULL\` before using it',
        description: `If \`malloc\` fails, it returns \`NULL\`. Using \`NULL\` pointer can crash your program`
    },
    {
        id: 37,
        type: 'radio',
        question: `What is the difference between \`*p\` and \`&p\`?`,
        options: [
            '\`*p\` gives the address of \`p\`, and \`&p\` gives the value pointed to by \`p\`',
            '\`*p\` gives the pointed to by \`p\`, and \`&p\` gives the address of \`p\`',
            'both give the same result',
            `\`*p\` is invalid in C`,
            `\`&p\` is invalid in C`
        ],
        answer: '\`*p\` gives the pointed to by \`p\`, and \`&p\` gives the address of \`p\`',
        description: `\`*p\` accesses the value at the address stored in \`p\`, while \`&p\` gives the address of the pointer variable itself.`
    }
]