export default [
    {
        id: 1,
        type: 'radio',
        question: 'What is the primary purpose of the CLR in the .NET framwork?',
        options: [
            'to compile C# code directly to machine code',
            'to manage memory allocation only',
            'to convert IL code into machine code at runtime',
            'to provide a graphical user interface'
        ],
        answer: 'to convert IL code into machine code at runtime',
        description: 'The CLR\'s (Common Language Runtime) purpose is...'
    },
    {
        id: 2,
        type: 'radio',
        question: 'Which of the following is a valid identifier in C#?',
        options: [
            '\`1route\`',
            '\`int\`',
            '\`@int\`',
            '\`first name\`'
        ],
        answer: '\`@int\`',
    },
    {
        id: 3,
        type: 'radio',
        question: 'Which type is the default for real numbers in C#?',
        options: [
            'float',
            'double',
            'decimal',
            'int'
        ],
        answer: 'double'
    },
    {
        id: 4,
        type: 'radio',
        question: 'What is the range of a byte in C#?',
        options: [
            '0 to 127',
            '0 to 255',
            '-128 to 127',
            '-255 to 255'
        ],
        answer: '0 to 255'
    },
    {
        id: 5,
        type: 'radio',
        question: 'What happens if you overflow a byte variable in C# without using the `checked` keyword?',
        options: [
            'the program crashes',
            'the value wraps around',
            'an exception is thrown',
            'the value becomes null'
        ],
        answer: 'the value wraps around'
    },
    {
        id: 6,
        type: 'radio',
        question: 'Which operator is used for bitwise AND in C#?',
        options: [
            '\`&&\`',
            '\`&\`',
            '\`|\`',
            '\`*\`',
            '\`^\`'
        ],
        answer: '\`&\`'
    },
    {
        id: 7,
        type: 'radio',
        question: 'Which of the following is NOT a primitive type in C#?',
        options: [
            'int',
            'float',
            'string',
            'bool'
        ],
        answer: 'string'
    },
    {
        id: 8,
        type: 'radio',
        question: 'What does the `~` operator do in C#?',
        options: [
            'Bitwise AND',
            'Bitwise OR',
            'Bitwise NOT (flips all bits)',
            'Bitwise XOR'
        ],
        answer: 'Bitwise NOT (flips all bits)'
    },
    {
        id: 9,
        type: 'radio',
        question: 'What is the result of the expression `a << 2`?',
        options: [
            'shifts all bits in `a` right by 2 positions',
            'shifts all bits in `a` left by 2 positions',
            'adds 2 to `a`',
            'divides `a` by 2'
        ],
        answer: 'shifts all bits in `a` left by 2 positions'
    }
]