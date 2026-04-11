import { Link } from 'react-router-dom'

const sections = [
    { name: 'Intro', path: 'intro' },
    { name: 'Basics', path: 'basics' },
    { name: 'Strings', path: 'strings' },
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