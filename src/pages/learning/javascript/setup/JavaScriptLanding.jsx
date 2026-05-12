import { Link } from 'react-router-dom'

const sections = [
    { name: 'Intro', path: 'intro' },
    { name: 'Basics', path: 'basics' },
    { name: 'Strings', path: 'strings' },
    { name: 'String Methods', path: 'string-methods' },
    { name: 'Numbers', path: 'numbers' },
    { name: 'Advance Operators', path: 'advance-operators' },
    { name: 'Conditionals: If statements', path: 'conditionals-if-statements' },
    { name: 'Loops', path: 'loops' },
    { name: 'Arrays', path: 'arrays' },
    { name: 'Array Methods', path: 'array-methods' },
    { name: 'Objects', path: 'objects' },
    { name: 'JSON', path: 'json' },
    { name: 'Built-In Objects', path: 'built-in-objects' },
    { name: 'Weird JS', path: 'weird-js' },
    { name: 'The DOM', path: 'dom' },
    { name: 'Local Storage', path: 'local-storage' },
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