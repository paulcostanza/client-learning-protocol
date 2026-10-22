import { Link } from 'react-router-dom'

const sections = [
    { name: 'Introduction', path: 'introduction' },
    { name: 'Fundamentals', path: 'fundamentals' },
    { name: 'Conditionals', path: 'conditionals' },
    { name: 'Functions & Methods', path: 'functions-and-methods' },
    { name: 'Structs', path: 'structs' },
    { name: 'Interfaces', path: 'interfaces' },
    { name: 'Errors', path: 'errors' },
]

export default function GoLanding() {
    return (
        <main>
            <div className="container">
                <h1>Go Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/go/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}