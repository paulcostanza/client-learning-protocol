export default [
    {
        id: 1,
        type: 'radio',
        question: "What is the main job of the CPU?",
        options: [
            'store data permanently',
            'fetch, decode, and execute instructions',
            'display information to the user',
            'manage external devices',
        ],
        answer: 'fetch, decode, and execute instructions'
    },
    {
        id: 2,
        type: 'radio',
        question: 'What is RAM?',
        options: [
            'a type of permanent storage',
            'the computer\'s main memory, used for temporary storage',
            'the central processing unit',
            'a type of input device'
        ],
        answer: 'the computer\'s main memory, used for temporary storage'
    },
    {
        id: 3,
        type: 'radio',
        question: 'Which of the following is NOT an input device?',
        options: [
            'keyboard',
            'mouse',
            'printer',
            'scanner'
        ],
        answer: 'printer',
        description: 'Printer is an output device while the keyboard, mouse, and scanner are input devices.'
    },
    {
        id: 4,
        type: 'radio',
        question: 'What is the purpose of an operating system?',
        options: [
            'to solve specific user problems',
            'to manage hardware devices and control processes',
            'to store data permanently',
            'to perform mathematical operations'
        ],
        answer: 'to manage hardware devices and control processes'
    },
    {
        id: 5,
        type: 'radio',
        question: 'What is the main difference between procedural and object-oriented programming?',
        options: [
            'procedural programming combines data and code into objects, while object-oriented programming separates data and code',
            'procedural programming separates data and code, while OOP combines them into objects',
            'they are two different terms that mean the same thing'
        ],
        answer: 'procedural programming separates data and code, while OOP combines them into objects',
    },
    {
        id: 6,
        type: 'radio',
        question: 'Which of the following best describes the concept of *encapsulation* in object-oriented programming?',
        options: [
            'hiding the code from the user interface',
            'combining data and the methods that operate on that data into a single unit',
            'using only one programming language in a project',
            'storing data in RAM for faster access'
        ],
        answer: 'combining data and the methods that operate on that data into a single unit'
    },
    {
        id: 7,
        type: 'radio',
        question: 'Why is RAM considered *volatile* memory?',
        options: [
            'it can store data for long periods, even without power',
            'its contents are erased when the computer is turned off',
            'it is slower than secondary storage',
            'it is only used for storing programs, not data'
        ],
        answer: 'its contents are erased when the computer is turned off'
    },
    {
        id: 8,
        type: 'radio',
        question: 'In the fetch/decode/execute cycle, what is the role of the *decode* step?',
        options: [
            'to retrieve the next instruction from main memory',
            'to translate the instruction into an electronic signal the CPU can use',
            'to perform the operation specified by the instruction',
            'to store the result in secondary storage'
        ],
        answer: 'to translate the instruction into an electronic signal the CPU can use'
    },
    {
        id: 9,
        type: 'radio',
        question: 'What problem does object-oriented programming primarily address compared to procedural programming?',
        options: [
            'the difficulty of writing code in binary',
            'the separation of data and the code that operates on it',
            'the lack of multitasking in early computers',
            'the inability to use input devices efficiently'
        ],
        answer: 'the separation of data and the code that operates on it',
    },
    {
        id: 10,
        type: 'radio',
        question: 'What is the main advantage of using a solid-state drive over a traditional disk drive?',
        options: [
            'SSDs are cheaper',
            'SSDs have moving parts that increase speed',
            'SSDs work much faster and have no moving parts',
            'SSDs are used only for external storage'
        ],
        answer: 'SSDs work much faster and have no moving parts'
    }
]