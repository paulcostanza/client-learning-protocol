// subcategory: variablesize
export default [
    {
        id: 1,
        type: 'radio',
        category: 'LowLevel',
        subcategory: 'variablesize',
        title: '',
        question: `What is a key difference between scripting languages and systems programming languages?`,
        options: [
            'scripting languages require explicit type declarations',
            'system programming languages require explicit type declarations',
            'both require expliti type declarations',
            'neither require explicit type declarations'
        ],
        random: true,
        answer: 'system programming languages require explicit type declarations'
    },
    {
        id: 2,
        type: 'radio',
        category: 'LowLevel',
        subcategory: 'variablesize',
        title: '',
        question: `How many different values can be represented with 3 bits?`,
        options: [
            '4',
            '6',
            '8',
            '16',
            '24',
            '32'
        ],
        random: true,
        answer: '8'
    },
    {
        id: 3,
        type: 'radio',
        category: 'LowLevel',
        subcategory: 'variablesize',
        title: '',
        question: `What is the minimum number of bits a computer uses to represent data in memory?`,
        options: [
            '1',
            '4',
            '6',
            '8',
            '16',
            '24',
            '32',
            '64'
        ],
        random: true,
        answer: '8',
        description: 'Computers operate with bytes in memory, and each byte is made up of 8 bits.'
    },
    {
        id: 4,
        type: 'checkbox',
        category: 'LowLevel',
        subcategory: 'variablesize',
        title: '',
        question: `What are some reasons dynamic type systems can be inefficient?`,
        options: [
            'extra memory usage',
            'runtime type checking',
            'faster arithmetic operations',
            'additional CPU time required',
        ],
        random: true,
        answer: [
            'extra memory usage',
            'runtime type checking', 'additional CPU time required'
        ]
    },
    // {
    //     id: 5,
    //     type: 'radio',
    //     category: 'LowLevel',
    //     subcategory: 'variablesize',
    //     title: '',
    //     question: `What is true of dynamic type systems in scripting languages?`,
    //     options: [
    //         'they use less memory',
    //         'they require extra memory for type information',
    //         'they always catch errors at compile time',
    //         'they make arithmetic operations slower',
    //     ],
    //     random: true,
    //     answer: 'they require extra memory for type information'
    // },

]

// template
//   {
//         id: 1,
//         type: 'radio',
//         category: 'LowLevel',
//         subcategory: '',
//         title: '',
//         question: ``,
//         options: [
//             '',
//             '',
//             '',
//             ''
//         ],
//         random: false,
//         answer: '',
//         description: ``
//     },