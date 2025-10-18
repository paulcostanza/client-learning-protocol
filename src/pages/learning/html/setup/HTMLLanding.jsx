import { Link } from 'react-router-dom'

const sections = [
    { name: 'HTML Fundamentals', path: 'fundamentals' },
]

export default function HTMLLanding() {
    return (
        <main>
            <div className="container">
                <h1>HTML Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/html/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}