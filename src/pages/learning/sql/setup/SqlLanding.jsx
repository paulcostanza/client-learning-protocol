import { Link } from 'react-router-dom'

const sections = [
    { name: 'Basics', path: 'basics' },
]

export default function SqlLanding() {
    return (
        <main>
            <div className="container">
                <h1>SQL Sections</h1>
                <ul>
                    {sections.map(section => (
                        <li key={section.path}>
                            <Link to={`/sql/${section.path}`}>{section.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}