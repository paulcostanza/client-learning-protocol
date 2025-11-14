export default [
    {
        id: 1,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What is the primary purpose of the CLR in the .NET framework?',
        options: [
            'to compile C# code directly to machine code',
            'to manage memory allocation only',
            'to convert IL code into machine code at runtime',
            'to provide a graphical user interface'
        ],
        random: true,
        answer: 'to convert IL code into machine code at runtime',
        description: 'The Common Language Runtime (CLR) is the virtual machine component of .NET. It manages the execution of .NET programs by converting Intermediate Language (IL) code into machine code at runtime, handling memory management, security, and exception handling.'
    },
    {
        id: 2,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'Which of the following is a valid identifier in C#?',
        options: [
            '\`1route\`',
            '\`int\`',
            '\`@int\`',
            '\`first name\`'
        ],
        random: true,
        answer: '\`@int\`',
    },
    {
        id: 3,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'Which type is the default for real numbers in C#?',
        options: [
            'float',
            'double',
            'decimal',
            'int'
        ],
        random: true,
        answer: 'double'
    },
    {
        id: 4,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What is the range of a byte in C#?',
        options: [
            '0 to 127',
            '0 to 255',
            '-128 to 127',
            '-255 to 255'
        ],
        random: true,
        answer: '0 to 255'
    },
    {
        id: 5,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What happens if you overflow a byte variable in C# without using the `checked` keyword?',
        options: [
            'the program crashes',
            'the value wraps around',
            'an exception is thrown',
            'the value becomes null'
        ],
        random: true,
        answer: 'the value wraps around'
    },
    {
        id: 6,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'Which operator is used for bitwise AND in C#?',
        options: [
            '\`&&\`',
            '\`&\`',
            '\`|\`',
            '\`*\`',
            '\`^\`'
        ],
        random: true,
        answer: '\`&\`'
    },
    {
        id: 7,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'Which of the following is NOT a primitive type in C#?',
        options: [
            'int',
            'float',
            'string',
            'bool'
        ],
        random: true,
        answer: 'string'
    },
    {
        id: 8,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What does the `~` operator do in C#?',
        options: [
            'Bitwise AND',
            'Bitwise OR',
            'Bitwise NOT (flips all bits)',
            'Bitwise XOR'
        ],
        random: true,
        answer: 'Bitwise NOT (flips all bits)'
    },
    {
        id: 9,
        type: 'radio',
        category: 'c#',
        subcategory: '',
        title: '',
        question: 'What is the result of the expression `a << 2`?',
        options: [
            'shifts all bits in `a` right by 2 positions',
            'shifts all bits in `a` left by 2 positions',
            'adds 2 to `a`',
            'divides `a` by 2'
        ],
        random: true,
        answer: 'shifts all bits in `a` left by 2 positions'
    }
]