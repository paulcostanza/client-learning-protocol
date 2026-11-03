export default [
    // Change this to type: 'number', one day
    {
        id: 1,
        type: 'radio',
        category: 'hardware',
        subcategory: 'binary-numbers',
        title: 'Binary: 6 digits',
        question: "What is the decimal value of the binary number \`101101\`?",
        options: [
            '40',
            '41',
            '42',
            '43',
            '44',
            '45',
            '46',
            '47',
            '48',
            '49',
            '50',
        ],
        random: false,
        answer: '45',
        description: `The breakdown:
        
| Bit | 1 | 0 | 1 | 1 | 0 | 1 |
|-|-|-|-|-|-|-|
| Position | 5 | 4 | 3 | 2 | 1 | 0 |
| Value | 32 | 16 | 8 | 4 | 2 | 1 |
| Add? | Y | n | Y | Y | n | Y |

Adding up 32 + 8 + 4 + 1 = 45`
    },
    {
        id: 2,
        type: 'radio',
        category: 'hardware',
        subcategory: 'binary-numbers',
        title: 'D to B',
        question: "What is the binary representation of 26?",
        options: [
            '\`11000\`',
            '\`11001\`',
            '\`11010\`',
            '\`11011\`',
            '\`11100\`',
            '\`11101\`',
        ],
        random: false,
        answer: '\`11010\`',
        description: ``
    },
    //   {
    //     id: 9,
    //     type: 'checkbox',
    //     category: 'python',
    //     subcategory: 'basics',
    //     title: 'Valid variable names',
    //     question: 'Which of the following is/are (a) valid variable name(s)?',
    //     options: [
    //         '123variable',
    //         'my-variable',
    //         '_variable_name',
    //         'variable123',
    //         'variable name'
    //     ],
    //     random: true,
    //     answer: ['_variable_name', 'variable123'],
    //     description: 'Variable names in programming typically consist of letters, numbers, and underscores. They must start with a letter or underscore and should not contain spaces or special characters (such as a hyphen).'
    // },
    // {
    //     id: 1,
    //     type: 'radio',
    //     category: 'python',
    //     subcategory: 'basics',
    //     title: 'Dynamic types',
    //     question: "When a program is dynamically typed it means that once a variable is assigned a type, it cannot change",
    //     options: [
    //         'true',
    //         'false',
    //     ],
    //     random: false,
    //     answer: 'false'
    // },
    //      {
    //         id: 11,
    //         type: 'input',
    //         category: 'python',
    //         subcategory: 'built-in-functions',
    //         title: 'Zip I',
    //         question: `What does this print?
    // ~~~python
    // a = [1, 2, 3]
    // b = [4, 5, 6]

    // print(list(zip(a, b)))
    // ~~~`,
    //         options: [""],
    //         random: false,
    //         answer: "\\[\\s*\\(\\s*1\\s*,\\s*4\\s*\\)\\s*,\\s*\\(\\s*2\\s*,\\s*5\\s*\\)\\s*,\\s*\\(\\s*3\\s*,\\s*6\\s*\\)\\s*\\]",
    //         description: `Answer: \`[(1,4), (2,5), (3,6)]\`

    // \`zip(a, b)\` pairs elements by index, it does *not* combine lists. So zip does this:

    // ~~~console
    // (1, 4)
    // (2, 5)
    // (3, 6)
    // ~~~

    // And then \`list(...)\` turns everything inside of it into elements in a list.`
    //     },
]