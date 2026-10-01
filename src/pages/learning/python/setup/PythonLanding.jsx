import { Link } from 'react-router-dom'

const sections = [
    // Python 101
    { name: 'Intro', path: 'intro' },
    { name: 'Basics', path: 'basics' },
    { name: 'Control Flow', path: 'control-flow' },
    { name: 'Functions', path: 'functions' },
    { name: 'Passing Arguments', path: 'passing-arguments' },
    { name: 'Type Hints', path: 'type-hints' },
    { name: 'Recursion', path: 'recursion' },
    { name: 'Backtracking', path: 'backtracking' },
    { name: 'Mutable Default Arguments', path: 'mutable-default-arguments' },
    { name: 'Math 101', path: 'math-101' },
    { name: 'Scope', path: 'scope' },
    { name: 'Testing & Debugging', path: 'testing-and-debugging' },
    { name: 'Errors & Exceptions', path: 'errors-and-exceptions' },
    { name: 'Commputing', path: 'computing' },
    { name: 'Strings', path: 'strings' },
    { name: 'Lists', path: 'lists' },
    { name: 'List Comprehension', path: 'list-comprehension' },
    { name: 'Tuples', path: 'tuples' },
    { name: 'Sets', path: 'sets' },
    { name: 'Dictionaries', path: 'dictionaries' },
    { name: 'Regular Expressions', path: 'regular-expressions' },
    { name: 'Built-In Functions', path: 'built-in-functions' },
    { name: 'RAM 101', path: 'ram-101' },
    // Data Structures & Algorithms
    { name: 'Algorithms: Problem-Solving Patterns', path: 'algorithms-problem-solving-patterns' },
    { name: 'Two Pointers & Sliding Window', path: 'two-pointers-and-sliding-window' },
    { name: 'Depth-First Search', path: 'depth-first-search' },
    { name: 'Breadth-First Search', path: 'breadth-first-search' },
    // CLI
    // Automation
    // Data analysis: analyze large datasets, identify patterns, create visualizations with Pandas & NumPy
    // AI/ML: model training and inference with PyTorch, TensorFlow, OpenCV
    // Testing
    // FastAPI
    // Cybersecurity: log analysis, security tooling, working with network protocols and API, analyze packet captures w/ Scapy
    // Game development: learn game mechanics, coolision detection, score systems with Pygame, Arcade
    // Scientific computing & engineering: simulate physical systems, solve complex mathematical problems, perform statistical analysis, create engineering simulations
]
export default function PythonLanding() {
    return (
        <main>
            <div className="container">
                <h1>Python Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/python/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}