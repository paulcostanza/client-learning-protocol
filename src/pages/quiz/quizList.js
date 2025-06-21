import reactCardImg from '../../assets/quiz/react-card.png'
import networkingCardImg from '../../assets/quiz/networking-card.png'
import pythonCardImg from '../../assets/quiz/python-card.png'
import javaScriptCardImg from '../../assets/quiz/javaScript-card.png'

const quizList = [
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
    }
    // Add more quizzes as needed
]

export default quizList