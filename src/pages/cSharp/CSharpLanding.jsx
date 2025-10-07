import { Link } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'intro' },
    { name: 'C# Basics', path: 'basics' },
    { name: 'Control Flow', path: 'control-flow' },
    { name: 'Methods & Functions', path: 'methods-and-functions' },
    { name: 'Object Oriented Programming', path: 'oop' },
    { name: 'Exception Handling', path: 'exception-handling' },
]

export default function CSharpLanding() {
    return (
        <main>
            <div className="container">
                <h1>C# Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/csharp/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}