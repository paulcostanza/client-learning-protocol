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
    }
]