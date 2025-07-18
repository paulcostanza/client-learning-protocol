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
    },
    {
        id: 6,
        type: 'radio',
        question: "Which device or service would not operate at the physical layer of the OSI Model?",
        options: [
            'Network Interface Card',
            'IP Address',
            'Switch',
            'Hub'
        ],
        answer: 'IP Address'
    },
    {
        id: 7,
        type: 'radio',
        question: "Which type of communication would be analogous to a half duplex transmission",
        options: [
            'a group chat where only one person can send a message at a time',
            'two people using walkie-talkies',
            'a one-way radio broadcast',
            'two people talking on the phone at the same time'
        ],
        answer: 'two people using walkie-talkies'
    },
    {
        id: 9,
        type: 'checkbox',
        question: "If you needed to be certain that your data transmission are being received, which type of connection(s) and/or protocol(s) should be used",
        options: [
            'connection-oriented',
            'TCP',
            'connectionless',
            'UDP',
            'broadcast',
            'multicast'
        ],
        answer: [
            'connection-oriented',
            'TCP'
        ]
    },
    {
        id: 10,
        type: 'radio',
        question: "Which command can be used to determine the MTU optimal size?",
        options: [
            'traceroute',
            'ping',
            'arp',
            'ifconfig',
            'hostname',
            'nslookup',
            'ipconfig'
        ],
        answer: 'ping'
    },
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
    },
    {
        id: 12,
        type: 'checkbox',
        question: "Which type of traffic management service(s) occurs at the network layer of the OSI Model",
        options: [
            'routing',
            'error detection',
            'flow control',
            'segmentation',
            'multiplexing'
        ],
        answer: [
            'routing'
        ],
        description: `**Correct**
- Routing: The network layer is responsible for determining the best path for data to travel across networks.

**Incorrect**
- Error detection: usually performed at the data link or transport layers.
- Flow control: transport layer (e.g., TCP)
- Segmentation: transport layer (breaking data into segments)
- Multiplexing:transport layer function (combining multiple signals)
`
    },
    {
        id: 13,
        type: 'radio',
        question: "The TCP header specifies which value to ensure that data is processed by the correct application",
        options: [
            'Port',
            'Sequence Number',
            'Window Size',
            'Source IP Address',
            'MAC Address',
            'Protocol Number',
            'Checksum',
            'TTL (Time To Live)'
        ],
        answer: 'Port'
    },
    {
        id: 15,
        type: 'radio',
        question: "Which layer of the OSI model is responsible for node-to-node data delivery and framing",
        options: [
            'Physical Layer',
            'Data Link Layer',
            'Network Layer',
            'Transport Layer',
            'Session Layer',
            'Presentation Layer',
            'Application Layer'
        ],
        answer: 'Data Link Layer'
    },
    {
        id: 16,
        type: 'radio',
        question: "Which device or service operates at the Data Link Layer to manage node-to-node communication",
        options: [
            'switch'
        ],
        answer: 'switch'
    },
    {
        id: 17,
        type: 'radio',
        question: "What is the purpose of the Logical Link Control (LLC) sub-layer in the Data Link Layer",
        options: [
            'It defines the physical addressing method for nodes',
            'It manages communication with the network layer protocols',
            'It is responsible for error detection and correction',
            'It converts data from bits into electrical signals'
        ],
        answer: 'It manages communication with the network layer protocols'
    },
    {
        id: 18,
        type: 'radio',
        question: "What is a key distinction of the components at the physical layer of the OSI model",
        options: [
            'They use software to process data',
            'They involve encoding and signaling to transmit data',
            'They define the routing paths for data across networks',
            'They are responsible for application protocols like HTTP'
        ],
        answer: 'They involve encoding and signaling to transmit data'
    },
    {
        id: 19,
        type: 'radio',
        question: `Which of the following is **NOT** a responsibility of the Data Link Layer`,
        options: [
            'Adding physical addresses to data',
            'Error detection and retransmission',
            'Framing data for transmission',
            'Routing data between different networks'
        ],
        answer: 'Routing data between different networks',
        description: `The Data Link Layer focuses on node-to-node communication within the same network — things like adding physical addresses, framing, handling error detection and retransmission.`
    },
    {
        id: 20,
        type: 'radio',
        question: "In the OSI model, which layer is responsible for transforming data from bits into electrical signals for transmission",
        options: [
            'Physical Layer',
            'Data Link Layer',
            'Network Layer',
            'Transport Layer',
            'Session Layer',
            'Presentation Layer',
            'Application Layer'
        ],
        answer: 'Physical Layer',
    },

]

/*
 {
        id: 1,
        type: 'radio', 'checkbox', or 'input' - need to create input though
        question: "Here is a question?",
        options: [
            'answer 1',
            'answer 2',
            'answer 3',
        ],
        answer: 'answer 2',
        description: "Description of the answer - optional"
    }
*/

/** not added from src>pages>flash-cards>data>networking.js
 * 
 * id: 5, 8, 14, & 21
 * 
*/