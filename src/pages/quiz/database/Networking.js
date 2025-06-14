export default [
    {
        id: 1,
        type: 'radio',
        question: "Which device or service would not operate at the physical layer of the OSI Model",
        options: [
            'Network Interface Card (NIC)',
            'Router',
            'IP Address',
            'Cable',
        ],
        answer: 'IP Address'
    },
    {
        id: 2,
        type: 'radio',
        question: "Which TCP flag is used to gracefully terminate a session between two systems",
        options: [
            'PIN',
            'FIZ',
            'FIN',
            'SYN',
            'END',
            'ACK',
            'RST'
        ],
        answer: 'FIN'
    },
    {
        id: 3,
        type: 'radio',
        question: "Which statement correctly characterizes the functions of the OSI Model",
        options: [
            'A method of describing the functions of a networking system to allow communication',
            'A physical device used to connect computers to a network',
            'A protocol used for encrypting network traffic',
            'A type of network cable used in data centers'
        ],
        answer: 'A method of describing the functions of a networking system to allow communication'
    },
    {
        id: 4,
        type: 'checkbox',
        question: "Which common services occur at the presentation layer of the OSI Model?",
        options: [
            'encryption',
            'compression',
            'routing',
            'IP addressing',
            'packet switching',
            'MAC addressing'
        ],
        answer: [
            'encryption',
            'compression'
        ]
    }
]

// properties to add
// type: radio, checkbox, input
// description - optional

/*
 {
        id: 6,
        type: 'radio', 'checkbox', or 'input' - need to create input though
        question: "Here is a question?",
        options: [
            'answer 1',
            'answer 2',
            'answer 3',
        ],
        answer: 'answer 2',
        description: "Description of the answer"
    }


*/

/** not added from src>pages>flash-cards>data>networking.js
 * 
 * id: 5
 * 
*/