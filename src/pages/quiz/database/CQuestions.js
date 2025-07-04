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
            'It makes the struct immuntable',
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
            'It causes a compile error',
            'It returns a pointer',
            'It causes a syntax error'
        ],
        answer: 'It causes a compile error'
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
    }
]