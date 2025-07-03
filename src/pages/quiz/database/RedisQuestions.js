export default [
    {
        id: 1,
        type: 'radio',
        question: 'What does the acronym *Redis* stand for?',
        options: [
            'Remote Disk Server',
            'Remote Disk Store',
            'Remote Disk Storage',
            'Remote Dictionary Server',
            'Remote Dictionary Store',
            'Remote Dictionary Storage',
            'Remote Data Server',
            'Remote Data Store',
            'Remote Data Storage',
            'Relational Disk Server',
            'Relational Disk Store',
            'Relational Disk Storage',
            'Relational Dictionary Server',
            'Relational Dictionary Store',
            'Relational Dictionary Storage',
            'Relational Data Server',
            'Relational Data Store',
            'Relational Data Storage',
            'Rapid Disk Server',
            'Rapid Disk Store',
            'Rapid Disk Storage',
            'Rapid Dictionary Server',
            'Rapid Dictionary Store',
            'Rapid Dictionary Storage',
            'Rapid Data Server',
            'Rapid Data Store',
            'Rapid Data Storage',
        ],
        answer: 'Remote Dictionary Server'
    },
    {
        id: 2,
        type: 'radio',
        question: 'What is the purpose of the AOF (Append Only File) in Redis?',
        options: [
            'To store images',
            'To log every write operation for durability',
            'To backup the operating system',
            'To manage user permissions'
        ],
        answer: 'To log every write operation for durability'
    },
    {
        id: 3,
        type: 'radio',
        question: 'What happens when a Redis instance fails?',
        options: [
            'All data is lost permanently',
            'Data is recovered from persistent storage',
            'The server automatically restarts',
            'The database switches to read-only mode'
        ],
        answer: 'Data is recovered from persistent storage'
    },
    {
        id: 4,
        type: 'radio',
        question: 'Which of the following is NOT a typical use case for Redis?',
        options: [
            'In-memory cache',
            'Session storage',
            'File system replacement',
            'Key-value store'
        ],
        answer: 'File system replacement'
    },
    {
        id: 5,
        type: 'radio',
        question: 'Which command is used to store a value in Redis?',
        options: [
            '\`SAVE\`',
            '\`PUT\`',
            '\`SET\`',
            '\`STORE\`'
        ],
        answer: '\`SET\`'
    },
    {
        id: 6,
        type: 'radio',
        question: 'In a typical full-stack application, what is Redis often used for?',
        options: [
            'Rendering HTML',
            'Improving performance with caching',
            'Managing user authentication',
            'Sending emails'
        ],
        answer: 'Improving performance with caching'
    },
    {
        id: 7,
        type: 'radio',
        question: 'What type of data is considered *ephemeral* in Redis?',
        options: [
            'Data stored on disk',
            'Data stored in RAM/SSD and lost on failure',
            'Data stored in the cloud',
            'Data stored in a relational database'
        ],
        answer: 'Data stored in RAM/SSD and lost on failure'
    },
    {
        id: 8,
        type: 'radio',
        question: 'Which of the following best describes the key-value model in Redis?',
        options: [
            'Each key maps to a single value, which can be various data structures',
            'Each key maps to multiple databases',
            'Each value must be a string',
            'Keys are optional'
        ],
        answer: 'Each key maps to a single value, which can be various data structures'
    }
]