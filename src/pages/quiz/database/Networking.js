export default [
    // {
    //     id: 1,
    //     type: 'radio',
    //     question: "Which device or service would not operate at the physical layer of the OSI Model",
    //     options: [
    //         'Network Interface Card (NIC)',
    //         'Router',
    //         'IP Address',
    //         'Cable',
    //     ],
    //     answer: 'IP Address'
    // },
    // {
    //     id: 2,
    //     type: 'radio',
    //     question: "Which TCP flag is used to gracefully terminate a session between two systems",
    //     options: [
    //         'PIN',
    //         'FIZ',
    //         'FIN',
    //         'SYN',
    //         'END',
    //         'ACK',
    //         'RST'
    //     ],
    //     answer: 'FIN'
    // },
    // {
    //     id: 3,
    //     type: 'radio',
    //     question: "Which statement correctly characterizes the functions of the OSI Model",
    //     options: [
    //         'A method of describing the functions of a networking system to allow communication',
    //         'A physical device used to connect computers to a network',
    //         'A protocol used for encrypting network traffic',
    //         'A type of network cable used in data centers'
    //     ],
    //     answer: 'A method of describing the functions of a networking system to allow communication'
    // },
    // {
    //     id: 4,
    //     type: 'checkbox',
    //     question: "Which common services occur at the presentation layer of the OSI Model?",
    //     options: [
    //         'encryption',
    //         'compression',
    //         'routing',
    //         'IP addressing',
    //         'packet switching',
    //         'MAC addressing'
    //     ],
    //     answer: [
    //         'encryption',
    //         'compression'
    //     ]
    // },
    // {
    //     id: 6,
    //     type: 'radio',
    //     question: "Which device or service would not operate at the physical layer of the OSI Model?",
    //     options: [
    //         'Network Interface Card',
    //         'IP Address',
    //         'Switch',
    //         'Hub'
    //     ],
    //     answer: 'IP Address'
    // },
    // {
    //     id: 7,
    //     type: 'radio',
    //     question: "Which type of communication would be analogous to a half duplex transmission",
    //     options: [
    //         'a group chat where only one person can send a message at a time',
    //         'two people using walkie-talkies',
    //         'a one-way radio broadcast',
    //         'two people talking on the phone at the same time'
    //     ],
    //     answer: 'two people using walkie-talkies'
    // },
    // {
    //     id: 9,
    //     type: 'checkbox',
    //     question: "If you needed to be certain that your data transmission are being received, which type of connection(s) and/or protocol(s) should be used",
    //     options: [
    //         'connection-oriented',
    //         'TCP',
    //         'connectionless',
    //         'UDP',
    //         'broadcast',
    //         'multicast'
    //     ],
    //     answer: [
    //         'connection-oriented',
    //         'TCP'
    //     ]
    // },
    // {
    //     id: 10,
    //     type: 'radio',
    //     question: "Which command can be used to determine the MTU optimal size?",
    //     options: [
    //         'traceroute',
    //         'ping',
    //         'arp',
    //         'ifconfig',
    //         'hostname',
    //         'nslookup',
    //         'ipconfig'
    //     ],
    //     answer: 'ping'
    // },
    {
        id: 11,
        type: 'checkbox',
        question: "Which protocol(s) operate at the application layer of the OSI Model",
        options: [
            'SMTP',
            'HTTP',
            'FTP',
            'TCP',
            'UDP',
            'SSH',
            'ICMP',
            'PIMP'
        ],
        answer: [
            'SMTP',
            'HTTP',
            'FTP',
            'SSH'
        ],
        description: `**Correct**
- SMTP (simple mail transfer protocol)
- HTTP (hyper-text transfer protocol)
- FTP (file transfer protocol)
- SSH (secure-shell protocol)

**Incorrect**
- TCP (transmission control protocol): Transport layer
- UDP (user datagram protocol): Transport layer
- ICMP (internet control message protocol): Network layer
- PIMP (not a real protocol): if you fell for this you might not make it
`
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
 * id: 5, 8
 * 
*/