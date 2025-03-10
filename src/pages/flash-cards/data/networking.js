const questionAndAnswers = [
    {
        "id": 1,
        "question": `Which device or service would not operate at the physical layer of the OSI Model: 
        a. Network Interface Card (NIC) 
        b. Router 
        c. IP Address 
        d. Cable`,
        "answer": "c. IP Address"
    },
    {
        "id": 2,
        "question": "Which TCP flag is used to gracefully terminate a session between two systems?",
        "answer": "FIN"
    },
    {
        "id": 3,
        "question": "Which statement correctly characterizes the functions of the OSI Model? It is a...",
        "answer": "method of describing the functions of a networking system to allow communication"
    },
    {
        "id": 4,
        "question": "Which common services occur at the presentation layer of the OSI Model?",
        "answer": "Encryption and Compression"
    },
    {
        "id": 5,
        "question": "The physical address applied by the data link layer of the OSI Model has which features?",
        "answer": "It is expressed using a 12-character hexadecimal value and it is unique to every network interface"
    },
    {
        "id": 6,
        "question": `Which device or service would not operate at the physical layer of the OSI Model?
        a. Network Interface Card (NIC) 
        b. IP Address 
        C. Switch 
        D. Hub`,
        "answer": "b. IP Address"
    },
    {
        "id": 7,
        "question": "Which type of communication would be analogous to a half duplex transmission?",
        "answer": "two people using walkie-talkies"
    },
    {
        "id": 8,
        "question": "A fixed payload typically has which benefits or characteristics?",
        "answer": "they can be more efficient than variable payloads and they are always the same size"
    },
    {
        "id": 9,
        "question": "If you needed to be certain that your data transmissions are being received, which type of connection and protocol should be used?",
        "answer": "Connection-oriented and TCP"
    },
    {
        "id": 10,
        "question": "Which command can be used to determine the MTU optimal size?",
        "answer": "Ping"
    },
    {
        "id": 11,
        "question": "Which protocols operate at the application layer of the OSI Model?",
        "answer": "SMTP and HTTP"
    },
    {
        "id": 12,
        "question": "Which type of traffic management service occurs at the network layer of the OSI Model?",
        "answer": "Routing"
    },
    {
        "id": 13,
        "question": "The TCP header specifies which value to ensure that data is processed by the correct application?",
        "answer": "Port"
    },
    {
        "id": 14,
        "question": "Why is the layered approach of the OSI model beneficial for network communication?",
        "answer": "1. allows for effective communication by organizing network functions \n2. ensures vendors focus on the entire network protocol stack \n3. divides data communication into seven layers, each with a specific job, making it easier to isolate and troubleshoot issues"
    },
    {
        "id": 15,
        "question": "Which layer of the OSI model is responsible for node-to-node data delivery and framing?",
        "answer": "data link layer"
    },
    {
        "id": 16,
        "question": "Which device or service operates at the data link layer to manage node-to-node communication?",
        "answer": "switch"
    },
    {
        "id": 17,
        "question": "What is the purpose of the Logical Link Control (LLC) sub-layer in the Data Link Layer? \na. It defines the physical addressing method for nodes. \nb. It manages communication with the network layer protocols. \nc. It is responsible for error detection and correction. \nd. It converts data from bits into electrical signals.",
        "answer": "b. It manages communication with the network layer protocols."
    },
    {
        "id": 18,
        "question": "What is a key distinction of the components at the physical layer of the OSI model? \na. They use software to process data. \nb. They involve encoding and signaling to transmit data. \nc. They define the routing paths for data across networks. \nd. They are responsible for application protocols like HTTP.",
        "answer": "b They involve encoding and signaling to transmit data."
    },
    {
        "id": 19,
        "question": "Which of the following is NOT a responsibility of the Data Link Layer? \na. Adding physical addresses to data \nb. Error detection and retransmission \nc. Framing data for transmission \nd. Routing data between different networks",
        "answer": "d. Routing data between different networks \n\nThe Data Link Layer focuses on node-to-node communication within the same network — things like adding physical addresses, framing, and handling error detection and retransmission."
    },
    {
        "id": 20,
        "question": "In the OSI model, which layer is responsible for transforming data from bits into electrical signals for transmission?",
        "answer": "physical layer"
    },
    {
        "id": 21,
        "question": "What is the primary purpose of the Media Access Control (MAC) sub-layer in the Data Link Layer?",
        "answer": "Handles physical addressing, specifically using the MAC address of devices, and helps establish direct node-to-node communication on the same network."
    }
]

export default questionAndAnswers