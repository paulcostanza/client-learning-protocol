export default [
    {
        id: 1,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'Layer Outlier',
        question: "Which device or service would not operate at the physical layer of the OSI Model",
        options: [
            'Network Interface Card (NIC)',
            'Router',
            'IP Address',
            'Cable',
        ],
        random: true,
        answer: 'IP Address'
    },
    {
        id: 2,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'Goodbye',
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
        random: true,
        answer: 'FIN'
    },
    {
        id: 3,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'What\'s the Point?',
        question: "Which statement correctly characterizes the functions of the OSI Model",
        options: [
            'A method of describing the functions of a networking system to allow communication',
            'A physical device used to connect computers to a network',
            'A protocol used for encrypting network traffic',
            'A type of network cable used in data centers'
        ],
        random: true,
        answer: 'A method of describing the functions of a networking system to allow communication'
    },
    {
        id: 4,
        type: 'checkbox',
        title: 'Presentation Powers',
        question: "Which common service(s) occur at the presentation layer of the OSI Model?",
        options: [
            'encryption',
            'compression',
            'routing',
            'IP addressing',
            'packet switching',
            'MAC addressing'
        ],
        random: true,
        answer: [
            'encryption',
            'compression'
        ]
    },
    {
        id: 6,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "Which device or service would not operate at the physical layer of the OSI Model?",
        options: [
            'Network Interface Card',
            'IP Address',
            'Switch',
            'Hub'
        ],
        random: true,
        answer: 'IP Address'
    },
    {
        id: 7,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'Communicate with who?',
        question: "Which type of communication would be analogous to a half duplex transmission",
        options: [
            'a group chat where only one person can send a message at a time',
            'two people using walkie-talkies',
            'a one-way radio broadcast',
            'two people talking on the phone at the same time'
        ],
        random: true,
        answer: 'two people using walkie-talkies'
    },
    {
        id: 9,
        type: 'checkbox',
        title: 'Guaranteed Delivery',
        question: "If you needed to be certain that your data transmission are being received, which type of connection(s) and/or protocol(s) should be used",
        options: [
            'connection-oriented',
            'TCP',
            'connectionless',
            'UDP',
            'broadcast',
            'multicast'
        ],
        random: true,
        answer: [
            'connection-oriented',
            'TCP'
        ]
    },
    {
        id: 10,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'I spy MTU size',
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
        random: true,
        answer: 'ping'
    },
    {
        id: 11,
        type: 'checkbox',
        title: 'App Layer All-Stars',
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
        random: true,
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
        title: 'Traffic cop',
        question: "Which type of traffic management service(s) occurs at the network layer of the OSI Model",
        options: [
            'routing',
            'error detection',
            'flow control',
            'segmentation',
            'multiplexing'
        ],
        random: true,
        answer: [
            'routing'
        ],
        description: `**Correct**
- **Routing:** The network layer is responsible for determining the best path for data to travel across networks.

**Incorrect**
- **Error detection:** usually performed at the data link or transport layers.
- **Flow control:** transport layer (e.g., TCP)
- **Segmentation:** transport layer (breaking data into segments)
- **Multiplexing:** transport layer function (combining multiple signals)
`
    },
    {
        id: 13,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'Who gets this?',
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
        random: true,
        answer: 'Port'
    },
    {
        id: 15,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'Node-on-node action',
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
        random: true,
        answer: 'Data Link Layer'
    },
    {
        id: 16,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'Choose your weapon',
        question: "Which device or service operates at the Data Link Layer to manage node-to-node communication",
        options: [
            'switch',
            'router',
            'hub',
            'firewall',
            'repeater',
            'bridge',
            'modem'
        ],
        random: true,
        answer: 'switch'
    },
    {
        id: 17,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'LLC purpose',
        question: "What is the purpose of the Logical Link Control (LLC) sub-layer in the Data Link Layer",
        options: [
            'It defines the physical addressing method for nodes',
            'It manages communication with the network layer protocols',
            'It is responsible for error detection and correction',
            'It converts data from bits into electrical signals'
        ],
        random: true,
        answer: 'It manages communication with the network layer protocols'
    },
    {
        id: 18,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'Physical layer magic',
        question: "What is a key distinction of the components at the physical layer of the OSI model",
        options: [
            'They use software to process data',
            'They involve encoding and signaling to transmit data',
            'They define the routing paths for data across networks',
            'They are responsible for application protocols like HTTP'
        ],
        random: true,
        answer: 'They involve encoding and signaling to transmit data'
    },
    {
        id: 19,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'Not mine',
        question: `Which of the following is **NOT** a responsibility of the Data Link Layer`,
        options: [
            'Adding physical addresses to data',
            'Error detection and retransmission',
            'Framing data for transmission',
            'Routing data between different networks'
        ],
        random: true,
        answer: 'Routing data between different networks',
        description: `The Data Link Layer focuses on node-to-node communication within the same network — things like adding physical addresses, framing, handling error detection and retransmission.`
    },
    {
        id: 20,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: 'Bits to circuit',
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
        random: true,
        answer: 'Physical Layer',
    },
    {
        id: 21,
        type: 'checkbox',
        title: 'Physical equipment',
        question: "What type of equipment resides at the Physical Layer of the OSI model?",
        options: [
            'router',
            'hub',
            'switch',
            'network cabling',
            'repeater'
        ],
        random: true,
        answer: [
            'hub',
            'network cabling',
            'repeater'
        ],
        description: `- **hub:** device that connects multiple computers in a network
- **network cabling:** the wires that physically connect devices
- **repeater:** device that regenerates or amplifies signals to extend the distance they can travel over the network`
    },
    {
        id: 22,
        type: 'checkbox',
        title: '',
        question: "Which of these protocols reside at the Transport Layer?",
        options: [
            'UDP',
            'IP',
            'HTTPS',
            'ICMP',
            'TCP',
            'ARP'
        ],
        random: true,
        answer: [
            'UDP',
            'TCP'
        ]
    },
    {
        id: 23,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "Which refer to a unique, 48-bit identifier also known as physical network address?",
        options: [
            'SSID',
            'IP',
            'GUID',
            'MAC'
        ],
        random: true,
        answer: 'MAC',
        description: `A **MAC** (*Media Access Control*) address is a unique, 48-bit identifier assigned to network interfaces for communications at the data link layer of a network segment. 
        
It is often called the *physical address* because it is hardcoded into the network hardware (like a network card or adapter) and is used to identify devices on a local network.`
    },
    {
        id: 24,
        type: 'checkbox',
        title: 'On that DLL',
        question: "Which of the following reside(s) at the Data Link Layer?",
        options: [
            'bridge',
            'media converter',
            'switch',
            'hub',
            'network adapter'
        ],
        random: true,
        answer: [
            'bridge',
            'switch',
            'network adapter'
        ],
        description: `- **bridge:** connects and filters traffic between two network segments using MAC addresses
- **switch:** forwards frames between devices on the same network using MAC addresses
- **network adapter:** the NIC. It provides the hardware interface for a device to connect to a network while handing framing and MAC addressing

`
    },
    {
        id: 25,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "The protocol data unit at the Physical Layer is known as:",
        options: [
            'segment',
            'frame',
            'bit',
            'packet',
            'datagram'
        ],
        random: true,
        answer: 'bit'
    },
    {
        id: 26,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "Which layer assumes the responsibility for opening, closing, and maintaining connections between applications?",
        options: [
            'Physical Layer',
            'Data Link Layer',
            'Network Layer',
            'Transport Layer',
            'Session Layer',
            'Presentation Layer',
            'Application Layer'
        ],
        random: true,
        answer: 'Session Layer',
    },
    {
        id: 27,
        type: 'checkbox',
        title: 'Pro network',
        question: "Which of the protocols listed reside at the Network Layer of the OSI model?",
        options: [
            'ICMP',
            'SIP',
            'IP',
            'ARP',
            'SNMP'
        ],
        random: true,
        answer: [
            'ICMP',
            'IP'
        ],
        description: `- **ICMP:** *Internet Control Message Protocol* is used for sending error messages and operational information
- **IP:** *Internet Protocol* is responsible for addressing and routing packets between devices accross networks`
    },
    {
        id: 28,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "The Transport Layer's UDP protocol data unit is known as a:",
        options: [
            'bit',
            'frame',
            'packet',
            'segment',
            'datagram'
        ],
        random: true,
        answer: 'datagram'
    },
    {
        id: 29,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "Data format translation, data compression, and data encryption/decryption take place at which layer?",
        options: [
            'Physical Layer',
            'Data Link Layer',
            'Network Layer',
            'Transport Layer',
            'Session Layer',
            'Presentation Layer',
            'Application Layer'

        ],
        random: true,
        answer: 'Presentation Layer',
    },
    {
        id: 30,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "A NIC resides at which layer?",
        options: [
            'Physical Layer',
            'Data Link Layer',
            'Network Layer',
            'Transport Layer',
            'Session Layer',
            'Presentation Layer',
            'Application Layer'
        ],
        random: true,
        answer: 'Data Link Layer',
        description: `A **NIC** *(Network Interface Card)* is a hardware device that connects a computer to a network. It is responsible for handling MAC addresses, framing, and node-to-node communication within the same local network.`
    },
    {
        id: 31,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "Which of the following devices resides at the network layer?",
        options: [
            'switch',
            'repeater',
            'bridge',
            'router'
        ],
        random: true,
        answer: 'router'
    },
    {
        id: 32,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "The Data Link's protocol data unit is known as what?",
        options: [
            'bit',
            'frame',
            'packet',
            'segment',
            'datagram'
        ],
        random: false,
        answer: 'frame'
    },
    {
        id: 33,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "Which layer enables direct interaction between the end-user and the network?",
        options: [
            'Physical Layer',
            'Data Link Layer',
            'Network Layer',
            'Transport Layer',
            'Session Layer',
            'Presentation Layer',
            'Application Layer'

        ],
        random: true,
        answer: 'Application Layer'
    },
    {
        id: 34,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '',
        question: "The Network Layer protocol data unit is called what?",
        options: [
            'bit',
            'frame',
            'packet',
            'segment',
            'datagram'
        ],
        random: true,
        answer: 'packet'
    },
    {
        id: 35,
        type: 'checkbox',
        category: 'networking',
        subcategory: '',
        title: 'DL protocol',
        question: "Which of the following refer(s) to a/some common Data Link protocol(s)?",
        options: [
            'HTTP',
            'IP',
            'ARP',
            'ICMP',
            'HTTPS',
            'PING',
            'ZING'
        ],
        random: true,
        answer: ['ARP'],
        description: `**Answer:** ARP: Address Resolution Protocol. This is used to map an IP address to a physical machine address (MAC address) on a local network.
        
***Incorrect Answers***

- HTTP: Hypertext Transfer Protocol - Application Layer
- HTTPS: Hypertext Transfer Protocol Secure - Application Layer
- IP: Internet Protocol - Network Layer
- ICMP: Internet Control Message Protocol - Network Layer
- PING: uses ICMP, but is not a protocol 
- ZING: completely made up...I really hope you did not chose this one
`
    },

]

/*
 {
        id: 1,
        type: 'radio',
        category: 'networking',
        subcategory: '',
        title: '', 'checkbox', or 'input' - need to create input though
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

/*
Here are some of the most common protocols associated with each OSI layer:

Application (Layer 7):
HTTP
FTP
SMTP
POP3
IMAP
SNMP
DNS
SSH

Presentation (Layer 6):
SSL/TLS
MPEG
JPEG

Session (Layer 5):
NetBIOS
RPC
PPTP

Transport (Layer 4):
TCP
UDP

Network (Layer 3):
IP
ICMP
ARP
RIP
OSPF

Data Link (Layer 2):
Ethernet
PPP
HDLC
Frame Relay
ATM

Physical (Layer 1):
Ethernet (physical signaling)
USB
Bluetooth
RS-232
*/