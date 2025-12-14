export default [
    {
        id: 1,
        type: 'radio',
        category: 'memory',
        subcategory: '',
        title: '',
        question: 'Which segment of memory stores local variables and functions in a C program?',
        options: [
            'Heap',
            'Stack',
            'Code',
            'Global'
        ],
        random: true,
        answer: 'Stack',
        description: 'Local variables and function parameters are stored in the stack segment, which is managed automatically as functions are called and return.'
    },
    {
        id: 2,
        type: 'radio',
        category: 'memory',
        subcategory: '',
        title: '',
        question: 'What is the direction of growth for the stack segment in the memory layout of a C program?',
        options: [
            'upward',
            'downward',
            'random',
            'circular'
        ],
        random: true,
        answer: 'downward',
        description: 'The stack segment grows downward, meaning each new stack frame is allocated at a lower memory address than the previous one.'
    },
    {
        id: 3,
        type: 'radio',
        category: 'memory',
        subcategory: '',
        title: '',
        question: 'What is the purpose of the heap segment in memory?',
        options: [
            'to store compiled machine instructions',
            'to store local variables',
            'to provide dynamic memory allocation',
            'to provide static memory allocation',
            'to store function parameters'
        ],
        random: true,
        answer: 'to provide dynamic memory allocation',
        description: 'The heap segment is used for dynamic memory allocation at runtime, typically managed with functions like \`malloc()\` and \`free()\`.'
    },
    {
        id: 4,
        type: 'radio',
        category: 'memory',
        subcategory: '',
        title: '',
        question: 'Where are global variables and string literals typically stored in memory?',
        options: [
            'stack segment',
            'heap segment',
            'code segment',
            'global/constant segment'
        ],
        random: true,
        answer: 'global/constant segment',
        description: 'Global variables, static variables, and string literals are stored in the global/constant segment, allowing them to persist for the lifetime of the program.'
    },
    {
        id: 5,
        type: 'radio',
        category: 'memory',
        subcategory: '',
        title: '',
        question: 'What is the lifetime of a variable stored on the stack?',
        options: [
            'until the program ends',
            'until the function returns',
            'until the memory is freed with \`free()\`',
            'forever'
        ],
        random: true,
        answer: 'until the function returns',
        description: 'Stack variables exist only within the scope of their function. \nThey are automatically deallocated when the function returns.'
    },
    {
        id: 6,
        type: 'radio',
        category: 'memory',
        subcategory: '',
        title: '',
        question: 'Which segment contains the compiled instructions of the program?',
        options: [
            'stack',
            'heap',
            'code',
            'global'
        ],
        random: true,
        answer: 'code',
        description: 'The code segment contains the compiled machine instructions for the program and is typically marked as *read-only* to prevent modification during execution.'
    }
]