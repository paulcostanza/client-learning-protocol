import { Link } from 'react-router-dom'

const sections = [
    { name: 'Basics', path: 'basics' },
    { name: 'Array Methods', path: 'array-methods' },
    { name: 'Weird JS', path: 'weird-js' },
]

export default function JavaScriptLanding() {
    return (
        <main>
            <div className="container">
                <h1>JavaScript Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/javascript/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}