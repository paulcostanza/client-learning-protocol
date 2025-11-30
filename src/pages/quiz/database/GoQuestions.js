export default [
    {
        id: 1,
        type: 'radio',
        category: 'go',
        subcategory: 'introduction',
        title: 'Speed comparison',
        question: `Go code generally runs _____ than interpreted languages and compiles _____ than other compiled languages.`,
        options: [
            'slower, slower',
            'slower, faster',
            'faster, slower',
            'faster, faster'
        ],
        random: true,
        answer: 'faster, faster',
        description: 'Go runs faster than interpreted languages like Python because it compiles to machine code, and compiles faster than languages like C++ due to its simpler compilation model.'
    },

    {
        id: 2,
        type: 'radio',
        category: 'go',
        subcategory: 'introduction',
        title: 'Default types',
        question: `When should you elect to NOT use a 'default type'?`,
        options: [
            'when writing quick prototypes',
            'when performance and memory are the primary concern',
            'when learning Go for the first time',
            'when writing simple applications',
            'when following Go best practices'
        ],
        random: true,
        answer: 'when performance and memory are the primary concern',
        description: 'When performance and memory are the primary concern, you should choose specific types (like \`int32\` vs \`int\`) for precise control over memory usage and execution speed.'
    },

    {
        id: 3,
        type: 'radio',
        category: 'go',
        subcategory: 'introduction',
        title: 'Type size',
        question: `What does the size of a type indicate?`,
        options: [
            'nibbles',
            'bits',
            'bytes',
            'kilobytes',
            'characters'
        ],
        random: true,
        answer: 'bytes',
        description: 'Type size in Go indicates how many bytes the type occupies in memory. For example, int32 uses 4 bytes, int64 uses 8 bytes.'
    },

    {
        id: 4,
        type: 'radio',
        category: 'go',
        subcategory: 'introduction',
        title: 'Running programs',
        question: `To run a compiled program, users need...`,
        options: [
            'source code',
            'a compiler',
            'the compiled executable',
            'development environment'
        ],
        random: true,
        answer: 'the compiled executable',
        description: 'Compiled programs are self-contained executables that can run without the original source code or compiler being present on the target machine.'
    },

    {
        id: 5,
        type: 'radio',
        category: 'go',
        subcategory: 'introduction',
        title: 'Memory usage',
        question: `Generally speaking, which of these languages use the most memory?`,
        options: [
            'Rust',
            'Java',
            'Go',
            'C'
        ],
        random: true,
        answer: 'Java',
        description: 'Java typically uses the most memory due to JVM overhead and garbage collection. The order is generally: Java > Go > Rust ≈ C (lowest).'
    },

    {
        id: 6,
        type: 'radio',
        category: 'go',
        subcategory: 'introduction',
        title: 'Go runtime purpose',
        question: `What is one of the purposes of the Go runtime?`,
        options: [
            'styles Go code into a format to make it easier to read',
            'to compile Go code',
            'to cleanup unused memory',
            'to debug Go programs',
            'to manage package dependencies'
        ],
        random: true,
        answer: 'to cleanup unused memory',
        description: 'The Go runtime includes a garbage collector that automatically manages memory by cleaning up unused memory, among other runtime services like goroutine scheduling.'
    },
    {
        id: 7,
        type: 'radio',
        category: 'go',
        subcategory: 'functions-and-methods',
        title: 'Clear',
        question: `Which of the following is the shortest and clearest way to write a valid function signature?`,
        options: [
            `\`func createUser(firstName, lastName string, age int)\``,
            `\`func createUser(firstName, age, lastName string int)\``,
            `\`func createUser(firstName string, lastName string, age int)\``,
            `\`func createUser(firstName string, age int, lastName string)\``,
        ],
        random: true,
        answer: '\`func createUser(firstName, lastName string, age int)\`'
    },
    {
        id: 8,
        type: 'radio',
        category: 'go',
        subcategory: 'functions-and-methods',
        title: 'What the f',
        question: `Given the following, what is \`f\`?
        
~~~go
var f func(fuc(int, int) int, int) int
~~~
`,
        options: [
            'a function named `f` that takes an int as the argument and returns an int',
            'a function named `f` that takes a function as the argument and returns an int',
            'a function named `f` that takes a function and an int as arguments and returns an int',
            'a function named `f` that takes a function and an int as arguments and returns a function',
        ],
        random: true,
        answer: 'a function named `f` that takes a function and an int as arguments and returns an int',
    },
    {
        id: 9,
        type: 'radio',
        category: 'go',
        subcategory: 'functions-and-methods',
        title: 'Guard',
        question: `What is a guard clause?`,
        options: [
            'an early return from a function when a given condition is met',
            'an AND operation in boolean logic',
            'a bitwise OR operation',
        ],
        random: true,
        answer: 'an early return from a function when a given condition is met'
    },
    {
        id: 10,
        type: 'radio',
        category: 'go',
        subcategory: 'structs',
        title: 'Anonymous structs',
        question: `What is a good reason to use an anonymous struct?`,
        options: [
            'privacy',
            'speed',
            'single-use',
        ],
        random: true,
        answer: 'single-use',
    },
    {
        id: 11,
        type: 'radio',
        category: 'go',
        subcategory: 'structs',
        title: '',
        question: `What is one advantage of advantage of using anonymous structs?`,
        options: [
            'prevents you from re-using a struct definition you never intended to re-use',
            'makes your code run faster',
            'compiles more quickly',
        ],
        random: true,
        answer: 'prevents you from re-using a struct definition you never intended to re-use'
    },
    {
        id: 12,
        type: 'radio',
        category: 'go',
        subcategory: 'structs',
        title: 'Two braces please',
        question: `Why does the empty anonymous struct have two pairs of braces?
~~~go
struct{}{}
~~~
`,
        options: [
            'it does not, this is a syntax error',
            '\`struct{}\` is the type and \`{}\` is the value',
        ],
        random: true,
        answer: '\`struct{}\` is the type and \`{}\` is the value',
        description: '\`struct{}\` is the type (empty struct) and \`{}\` is the value (empty struct literal)'
    },
    {
        id: 13,
        type: 'radio',
        category: 'go',
        subcategory: 'structs',
        title: 'Least to most',
        question: `Which is ordered from least to most memory usage?`,
        options: [
            '\`uint\`, \`bool\`, \`int64\`, \`struct{}\`',
            '\`struct{}\`, \`uint16\`, \`bool\`, \`int64\`',
            '\`struct{}\`, \`bool\`, \`int16\`, \`int64\`',
            '\`bool\`, \`struct{}\`, \`uint16\`, \`int64\`',
        ],
        random: true,
        answer: '\`struct{}\`, \`bool\`, \`int16\`, \`int64\`',
        description: `- \`struct{}\` is the empty struct in Go and uses 0 bytes of memory.
- \`bool\` typically uses 1 byte.
- \`int16\` uses 2 bytes.
- \`int64\` uses 8 bytes.`
    },
    // {
    //     id: 6,
    //     type: 'radio',
    //     category: 'go',
    //     subcategory: '',
    //     title: '',
    //     question: ``,
    //     options: [
    //         '',
    //         '',
    //         '',
    //         '',
    //     ],
    //     random: true,
    //     answer: '',
    //     description: ''
    // },
    // {
    //     id: 6,
    //     type: 'radio',
    //     category: 'go',
    //     subcategory: '',
    //     title: '',
    //     question: ``,
    //     options: [
    //         '',
    //         '',
    //         '',
    //         '',
    //     ],
    //     random: true,
    //     answer: '',
    //     description: ''
    // },
    // {
    //     id: 6,
    //     type: 'radio',
    //     category: 'go',
    //     subcategory: '',
    //     title: '',
    //     question: ``,
    //     options: [
    //         '',
    //         '',
    //         '',
    //         '',
    //     ],
    //     random: true,
    //     answer: '',
    //     description: ''
    // },
    // {
    //     id: 6,
    //     type: 'radio',
    //     category: 'go',
    //     subcategory: '',
    //     title: '',
    //     question: ``,
    //     options: [
    //         '',
    //         '',
    //         '',
    //         '',
    //     ],
    //     random: true,
    //     answer: '',
    //     description: ''
    // },
    // {
    //     id: 6,
    //     type: 'radio',
    //     category: 'go',
    //     subcategory: '',
    //     title: '',
    //     question: ``,
    //     options: [
    //         '',
    //         '',
    //         '',
    //         '',
    //     ],
    //     random: true,
    //     answer: '',
    //     description: ''
    // },
    // {
    //     id: 6,
    //     type: 'radio',
    //     category: 'go',
    //     subcategory: '',
    //     title: '',
    //     question: ``,
    //     options: [
    //         '',
    //         '',
    //         '',
    //         '',
    //     ],
    //     random: true,
    //     answer: '',
    //     description: ''
    // },
    // {
    //     id: 6,
    //     type: 'radio',
    //     category: 'go',
    //     subcategory: '',
    //     title: '',
    //     question: ``,
    //     options: [
    //         '',
    //         '',
    //         '',
    //         '',
    //     ],
    //     random: true,
    //     answer: '',
    //     description: ''
    // },


]