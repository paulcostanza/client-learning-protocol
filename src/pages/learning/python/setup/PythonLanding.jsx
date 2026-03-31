import { Link } from 'react-router-dom'

const sections = [
    { name: 'Basics', path: 'basics' },
    { name: 'Control Flow', path: 'control-flow' },
    { name: 'Functions', path: 'functions' },
    { name: 'Math 101', path: 'math-101' },
    { name: 'Scope', path: 'scope' },
    { name: 'Testing & Debugging', path: 'testing-and-debugging' },
    { name: 'Commputing', path: 'computing' },
    { name: 'Lists', path: 'lists' },
    { name: 'Dictionaries', path: 'dictionaries' },
    { name: 'Regular Expressions', path: 'regular-expressions' },
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