import reactCardImg from '../../assets/quiz/react-card.png'
import networkingCardImg from '../../assets/quiz/networking-card.png'
import pythonCardImg from '../../assets/quiz/python-card.png'
import javaScriptCardImg from '../../assets/quiz/javaScript-card.png'
import cCardImg from '../../assets/quiz/c-card.png'
import cSharpImg from '../../assets/quiz/cSharp-card.png'
import redisImg from "../../assets/quiz/redis-card.png"
import memoryImg from "../../assets/quiz/memory-card.png"
import programming101Img from "../../assets/quiz/programming101-card.png"
import cybersecurityImg from "../../assets/quiz/cybersecurity-card.png"
import linuxImg from "../../assets/quiz/linux-card.png"
import javaImg from "../../assets/quiz/java-card.png"
import htmlImg from "../../assets/quiz/html-card.png"

const quizList = [
    {
        id: "introtocomp",
        title: "Intro To Computers",
        dataFile: "../../quiz/database/IntroToComputersQuestions.js",
        cardImage: memoryImg
    },
    {
        id: "lowlevel",
        title: "Systems Programming",
        dataFile: "../../quiz/database/LowLevelQuestions.js",
        cardImage: memoryImg
    },
    {
        id: "html",
        title: "Markup 101",
        dataFile: "../../quiz/database/HTMLQuestions.js",
        cardImage: htmlImg
    },
    {
        id: "js",
        title: "ES6 & more",
        dataFile: "../../quiz/database/jsQuestions.js",
        cardImage: javaScriptCardImg
    },
    {
        id: "react",
        title: "JSX",
        dataFile: "../../quiz/database/reactQuestions.js",
        cardImage: reactCardImg
    },
    {
        id: "networking",
        title: "OSI | Protocols",
        dataFile: "../../quiz/database/Networking.js",
        cardImage: networkingCardImg
    },
    {
        id: "python",
        title: "V.2 | V.3",
        dataFile: "../../quiz/database/PythonQuestions.js",
        cardImage: pythonCardImg
    },
    {
        id: "java",
        title: "Wait...are you sure?",
        dataFile: "../../quiz/database/JavaQuestions.js",
        cardImage: javaImg
    },
    {
        id: "c",
        title: "The O.G.",
        dataFile: "../../quiz/database/CQuestions.js",
        cardImage: cCardImg
    },
    {
        id: "cPlusPlus",
        title: "Low-level",
        dataFile: "../../quiz/database/CPlusPlusQuestions.js",
        cardImage: cCardImg
    },
    {
        id: "cSharp",
        title: "Java...again",
        dataFile: "../../quiz/database/CSharpQuestions.js",
        cardImage: cSharpImg
    },
    {
        id: "go",
        title: "trendy",
        dataFile: "../../quiz/database/GoQuestions.js",
        cardImage: cSharpImg
    },
    {
        id: "redis",
        title: "Caching | Speed",
        dataFile: "../../quiz/database/RedisQuestions.js",
        cardImage: redisImg
    },
    {
        id: "memory",
        title: "I member...",
        dataFile: "../../quiz/database/MemoryQuestions.js",
        cardImage: memoryImg
    },
    {
        id: "programming101",
        title: "FUNdamentals",
        dataFile: "../../quiz/database/Programming101Questions.js",
        cardImage: programming101Img
    },
    {
        id: "cybersecurity",
        title: "CIA | defense",
        dataFile: "../../quiz/database/CyberSecurity.js",
        cardImage: cybersecurityImg
    },
    {
        id: "linux",
        title: "no windows here",
        dataFile: "../../quiz/database/Linux.js",
        cardImage: linuxImg
    }
    // Add more quizzes as needed
]

export default quizList