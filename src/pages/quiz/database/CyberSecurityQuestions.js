export default [
    {
        id: 1,
        type: 'checkbox',
        category: 'cybersecurity',
        subcategory: '',
        title: 'CIA',
        question: "What is the CIA triad in cybersecurity?",
        options: [
            'confidentiality',
            'control',
            'integrity',
            'information',
            'availability',
            'access',
            'authentication',
            'authorization'
        ],
        random: true,
        answer: [
            'confidentiality',
            'integrity',
            'availability'
        ]
    },
    {
        id: 2,
        type: 'radio',
        category: 'cybersecurity',
        subcategory: '',
        title: 'Fluffy Kitty',
        question: "How would you run the file \`fluffy-kitty\` in Linux?",
        options: [
            '\`run fluffy-kitty\`',
            '\`./fluffy-kitty\`',
            '\`open fluffy-kitty\`',
            '\`execute fluffy-kitty\`',

        ],
        random: true,
        answer: '\`./fluffy-kitty\`',
        description: 'Please don\'t execute the fluffy kitty!'
    }
]